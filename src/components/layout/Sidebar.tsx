import { BookOpen, Headphones, ChartNoAxesCombined, Settings } from 'lucide-react';
import type { DemoSession } from '../../features/lesson/useDemoSession';

export function Sidebar({ session }: { session: DemoSession }) {
  const { view, setView } = session;
  return (
    <aside className="sidebar"><a className="brand" href={import.meta.env.BASE_URL}>frogophony<span>♪</span></a><div className="brand-sub">ZŁAP SWÓJ RYTM</div><nav>{[{id:'learn',name:'Moja nauka',icon:BookOpen},{id:'practice',name:'Trening',icon:Headphones},{id:'progress',name:'Moje postępy',icon:ChartNoAxesCombined},{id:'settings',name:'Ustawienia',icon:Settings}].map(n=><button key={n.id} className={view===n.id?'nav active':'nav'} onClick={()=>setView(n.id)}><n.icon size={23}/>{n.name}</button>)}</nav><div className="side-bottom"><div className="small-frog">✦</div><strong>Twój mały krok<br/>do wielkiej muzyki.</strong><p>Ucz się w swoim tempie.</p></div><div className="profile"><div className="avatar">TY</div><div><strong>Muzyczny odkrywca</strong><small>Twoja przestrzeń do nauki</small></div></div></aside>
  );
}
