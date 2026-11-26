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
      <div className="app-shell" inert={lesson}>
        <Sidebar session={session} />
        <div className="workspace">
          <Header session={session} />
          <div className="content">
            <main id="main-content">
              {(view === 'settings' || view === 'progress') && <div className="page-heading"><h1>{view==='settings'?'Ustawienia':'Moje postępy'}</h1></div>}
              {view === 'settings' ? <SettingsPanel session={session} /> : view === 'progress' ? <ProgressPanel session={session} /> : <LearningPanel session={session} />}
              <footer className="app-footer">Frogophony · Wersja demonstracyjna</footer>
            </main>
            <RightRail session={session} />
          </div>
        </div>
      </div>
      {lesson && <LessonDialog session={session} />}
    </div>
  );
}
