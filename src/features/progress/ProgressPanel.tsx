import { Trophy } from 'lucide-react';
import { subjects } from '../learning/subjects';
import type { DemoSession } from '../../features/lesson/useDemoSession';

export function ProgressPanel({ session }: { session: DemoSession }) {
  const { xp, completed } = session;
  return (
    <section className="panel"><Trophy className="pink" size={40}/><h2>Twój muzyczny dziennik</h2><div className="metric-grid"><div><b>{xp}</b>zdobytych XP</div><div><b>{completed.length}</b>ukończonych lekcji</div><div><b>{Math.round(completed.length/3*100)}%</b>wersji demonstracyjnej</div></div><h3>Opanowane pierwsze kroki</h3>{subjects.map((v,i)=><p key={v.name} className="progress-row"><v.icon size={22}/>{v.name}<span>{completed.includes(String(i))?'Ukończono ✓':'Jeszcze przed Tobą'}</span></p>)}</section>
  );
}
