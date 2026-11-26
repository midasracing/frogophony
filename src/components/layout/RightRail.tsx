import { Star, Headphones, CheckCircle } from 'lucide-react';
import Kumka from '../mascot/Kumka';
import type { DemoSession } from '../../features/lesson/useDemoSession';

export function RightRail({ session }: { session: DemoSession }) {
  const { completed, xp } = session;
  return (
    <aside className="right course-rail">
      <section className="panel rail-progress"><div className="card-title"><h3>Twój postęp</h3><Star size={23} color="#b47c24" fill="#f4d38f"/></div>
        <div className="rail-stat"><span>Ukończone lekcje</span><strong>{completed.length} / 3</strong></div>
        <div className="bar"><i style={{width:Math.min(100,completed.length/3*100)+'%'}}/></div>
        <div className="rail-stat"><span>Zdobyte doświadczenie</span><strong>{xp} XP</strong></div>
      </section>
      <section className="panel rail-companion"><div><h3>Słowo od Kumki</h3><p>Nie musisz wiedzieć wszystkiego. Wystarczy zacząć!</p></div><Kumka className="rail-kumka"/></section>
      <section className="panel rail-tip"><Headphones size={26}/><div><h3>Znajdź swoją chwilę</h3><p>Załóż słuchawki i odłóż resztę na kilka minut.</p></div></section>
      <div className="rail-demo"><CheckCircle size={15}/> Wersja demonstracyjna · 3 lekcje</div>
    </aside>
  );
}
