import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { RightRail } from './components/layout/RightRail';
import { LearningPanel } from './features/learning/LearningPanel';
import { ProgressPanel } from './features/progress/ProgressPanel';
import { SettingsPanel } from './features/settings/SettingsPanel';
import { LessonDialog } from './features/lesson/LessonDialog';
import { useDemoSession } from './features/lesson/useDemoSession';

export default function App() {
  const session = useDemoSession();
  const { view, lesson } = session;
  return (
    <div className="app">
      <Sidebar session={session} />
      <div className="workspace">
        <Header session={session} />
        <div className="content">
          <main>
            <div className="intro"><div><div className="eyebrow">DOBRZE CIĘ WIDZIEĆ!</div><h1>{view==='learn'?'Muzyka zaczyna się od Ciebie.':view==='practice'?'Daj uszom chwilę dla siebie.':view==='progress'?'Każdy krok się liczy.':'Po Twojemu.'}</h1><p>Trochę ciekawości. Kilka minut. Jeszcze jeden krok naprzód.</p></div></div>
            {view === 'settings' ? <SettingsPanel session={session} /> : view === 'progress' ? <ProgressPanel session={session} /> : <LearningPanel session={session} />}
            <footer>Frogophony · Pierwsza wersja interfejsu <span>Stworzone z ciekawości do muzyki.</span></footer>
          </main>
          <RightRail session={session} />
        </div>
      </div>
      {lesson && <LessonDialog session={session} />}
    </div>
  );
}
