import { Star, CheckCircle } from 'lucide-react';
import type { DemoSession } from '../../features/lesson/useDemoSession';

export function Header({ session }: { session: DemoSession }) {
  const { xp, completed } = session;
  return (
    <header className="app-header">
      <a className="mobile-brand brand" href={import.meta.env.BASE_URL}>frogophony<span>♪</span></a>
      <span className="desktop-caption">Twoja muzyczna podróż</span>
      <div className="stats" aria-label="Twój postęp">
        <span className="stat-xp"><Star size={23} fill="#eac275" color="#b47c24"/>{xp}<small>XP</small></span>
        <span className="stat-lessons"><CheckCircle size={23} color="#628358"/>{completed.length}<small>/ 3</small></span>
      </div>
    </header>
  );
}
