import { Flame, Gem } from 'lucide-react';
import type { DemoSession } from '../../features/lesson/useDemoSession';

export function Header({ session }: { session: DemoSession }) {
  const { view, xp } = session;
  return (
    <header><div className="breadcrumb">Twoja muzyczna podróż <span>/</span> <strong>{view==='learn'?'Moja nauka':view==='practice'?'Trening':view==='progress'?'Postępy':'Ustawienia'}</strong></div><div className="stats"><span><Flame color="#e69a60" size={23}/>0 <small>dni</small></span><span><Gem color="#c290bd" size={22}/>{xp} <small>XP</small></span><div className="avatar">TY</div></div></header>
  );
}
