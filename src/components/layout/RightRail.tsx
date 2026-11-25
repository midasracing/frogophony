import { Star, Headphones } from 'lucide-react';
import Kumka from '../mascot/Kumka';
import type { DemoSession } from '../../features/lesson/useDemoSession';

export function RightRail({ session }: { session: DemoSession }) {
  const { completed } = session;
  return (
    <aside className="right"><section className="panel daily"><div className="card-title"><h3>Twój cel na dziś</h3><span>✦</span></div><p>Chwila nauki robi różnicę.</p><div className="goal"><div className="goal-icon"><Star size={25}/></div><div><strong>Ukończ jedną lekcję</strong><p>Pierwszy krok w Twojej podróży</p></div></div><div className="bar"><i style={{width:completed.length?'100%':'0%'}}/></div><small>{completed.length?'Pierwszy krok zrobiony!':'0 / 1 lekcja na start'}</small></section><section className="panel note-card"><div className="eyebrow">SŁOWO OD KUMKI</div><h3>Nie musisz wiedzieć<br/>wszystkiego.<br/><em>Wystarczy zacząć.</em></h3><div className="mini-mascot"><Kumka className="kumka-mini" alt="Kumka, maskotka Frogophony" /><span>Dasz radę! ♡</span></div></section><section className="tip"><div className="tip-icon"><Headphones size={23}/></div><h3>Znajdź swoją chwilę</h3><p>Załóż słuchawki i odłóż resztę na kilka minut. Teraz jest czas na muzykę.</p></section><div className="preview-note">WERSJA DEMONSTRACYJNA<p>3 przykładowe lekcje. Pełny program i brzmienie fortepianu są w przygotowaniu.</p></div></aside>
  );
}
