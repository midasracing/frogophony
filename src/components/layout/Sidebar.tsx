import { BookOpen, Headphones, ChartNoAxesCombined, Settings } from 'lucide-react';
import type { DemoSession } from '../../features/lesson/useDemoSession';

const items = [{id:'learn',name:'Moja nauka',short:'Nauka',icon:BookOpen},{id:'practice',name:'Trening',short:'Trening',icon:Headphones},{id:'progress',name:'Moje postępy',short:'Postępy',icon:ChartNoAxesCombined},{id:'settings',name:'Ustawienia',short:'Ustawienia',icon:Settings}];

export function Sidebar({ session }: { session: DemoSession }) {
  const { view, setView } = session;
  return (
    <aside className="sidebar app-navigation">
      <a className="brand" href={import.meta.env.BASE_URL}>frogophony<span>♪</span></a>
      <nav aria-label="Główna nawigacja">{items.map(n=><button key={n.id} className={view===n.id?'nav active':'nav'} aria-current={view===n.id?'page':undefined} onClick={()=>{setView(n.id);window.scrollTo({top:0,behavior:'instant'})}}><span className="nav-icon"><n.icon size={25} strokeWidth={2.5}/></span><span className="nav-full">{n.name}</span><span className="nav-short">{n.short}</span></button>)}</nav>
      <div className="navigation-caption">ZŁAP SWÓJ RYTM</div>
    </aside>
  );
}
