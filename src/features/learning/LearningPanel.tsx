import { ArrowRight, RefreshCw, ChevronDown, Check, Star, Headphones, Music2, Trophy, Lock, BookOpen } from 'lucide-react';
import Kumka from '../../components/mascot/Kumka';
import { subjects } from './subjects';
import type { DemoSession } from '../lesson/useDemoSession';

const firstTitles = ['Usłysz odległość', 'Zbuduj pierwszy akord', 'Odkryj barwy muzyki'];
const futureIcons = [Headphones, Music2, Trophy];

export function LearningPanel({ session }: { session: DemoSession }) {
  const { subject, setSubject, s, view, level, setLevel, completed, start, heroCue, setHeroCue } = session;
  const finished = completed.includes(String(subject));
  const wave = () => setHeroCue(prev => ({type:'wave', id:(prev?.id ?? 0) + 1}));
  return (
    <div className="course-view">
      <div className="course-top">
        <div className="course-heading">
          <h1>{view === 'practice' ? 'Trening' : 'Moja nauka'}</h1>
          <label className="level course-level"><BookOpen size={16}/><select aria-label="Poziom nauki (ustawienie demonstracyjne)" value={level} onChange={e=>setLevel(e.target.value)}>
            <option>Powtórka I stopnia</option><option>Most do II stopnia</option><option>II stopień</option>
          </select><ChevronDown size={16}/></label>
        </div>
        <div className="subject-tabs course-tabs" role="group" aria-label="Przedmiot">
          {subjects.map((v,i)=><button type="button" key={v.name} aria-pressed={subject===i} className={subject===i?'selected':''} onClick={()=>setSubject(i)}><v.icon size={22}/><span>{v.name}</span></button>)}
        </div>
      </div>
      <div key={subject+'-'+view} className={'course-body course-tone-'+subject}>
        {view === 'practice' ? <section className="practice-card">
          <div className="practice-illustration"><Kumka cue={heroCue}/></div>
          <div><span className="eyebrow">KRÓTKA SESJA</span><h2>Powtórka bez pośpiechu</h2><p>Sprawdź się w wybranym przedmiocie. Po błędzie otrzymasz wyjaśnienie i możesz spróbować ponownie.</p>
          <button className="primary" onClick={start}><RefreshCw size={20}/>Rozpocznij trening</button></div>
        </section> : <>
          <section className="course-banner">
            <div><span className="course-kicker">ROZDZIAŁ 1 · {s.name}</span><h2>{s.units[0]}</h2><p>Poznaj. Posłuchaj. Zrozum.</p></div>
            <div className="course-emblem"><s.icon size={34} strokeWidth={2.4}/></div>
          </section>
          <section className="learning-trail" aria-label="Ścieżka lekcji">
            <div className="trail-first">
              <div className="trail-active">
                <div className="trail-bubble">{finished?'POWTÓRZ':'ZACZNIJ'}</div>
                <button type="button" className={'trail-node trail-current'+(finished?' trail-complete':'')} aria-label={finished?'Powtórz pierwszą lekcję':'Rozpocznij pierwszą lekcję'} onClick={start}>{finished?<Check size={34} strokeWidth={3.5}/>:<Star size={32} fill="currentColor"/>}</button>
                <strong>{firstTitles[subject]}</strong><span className="trail-detail">Lekcja 1 · {finished?'ukończona':'krótka praktyka'}</span>
              </div>
              <div className="trail-friend"><div className="friend-bubble">{finished?'Brawo!':'Zaczynamy?'}</div><button type="button" className="trail-kumka" aria-label="Pomachaj Kumce" onClick={wave}><Kumka cue={heroCue}/></button></div>
            </div>
            {s.units.slice(1).map((name,i)=>{
              const Icon = futureIcons[i];
              return <div className={'trail-row trail-row-'+i} key={name}>
                <div className="trail-pending"><div className="trail-node trail-locked" aria-hidden="true"><Icon size={29}/><span className="trail-lock"><Lock size={13}/></span></div><strong>{name}</strong><span className="trail-detail">W przygotowaniu</span></div>
              </div>;
            })}
            <div className="trail-end"><span/>Kolejne lekcje w przygotowaniu<span/></div>
          </section>
          <section className="course-continue"><div><strong>{finished?'Czas na powtórkę':'Twój pierwszy krok'}</strong><small>3–5 minut · 30 XP za pierwsze ukończenie</small></div><button className="primary" onClick={start}>{finished?'Powtórz':'Rozpocznij'}<ArrowRight size={18}/></button></section>
        </>}
      </div>
    </div>
  );
}
