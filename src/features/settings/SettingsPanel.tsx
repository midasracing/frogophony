
import type { DemoSession } from '../../features/lesson/useDemoSession';

export function SettingsPanel({ session }: { session: DemoSession }) {
  const { sound, setSound, level, setLevel } = session;
  return (
    <section className="panel settings"><h2>Preferencje nauki</h2><label>Dźwięk ćwiczeń <input type="checkbox" checked={sound} onChange={e=>setSound(e.target.checked)}/></label><label>Twoja ścieżka<select value={level} onChange={e=>setLevel(e.target.value)}><option>Powtórka I stopnia</option><option>Most do II stopnia</option><option>II stopień</option></select></label><p>Postępy są zapisywane na tym urządzeniu.</p></section>
  );
}
