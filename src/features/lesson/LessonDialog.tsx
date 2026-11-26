import { useEffect, useRef } from 'react';
import { X, ArrowRight, Volume2, Check, RotateCcw, Star } from 'lucide-react';
import Kumka from '../../components/mascot/Kumka';
import type { DemoSession } from './useDemoSession';

export function LessonDialog({ session }: { session: DemoSession }) {
  const { done, setLesson, lessonCue, s, step, questions, q, play, sound, checked, answer, setAnswer, next } = session;
  const shell = useRef<HTMLElement>(null);
  const close = useRef<HTMLButtonElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const correct = checked && answer === q.correct;
  const incorrect = checked && answer !== q.correct;
  const progress = done ? 100 : Math.round((step + (correct ? 1 : 0)) / questions.length * 100);
  const action = !checked ? 'Sprawdź' : incorrect ? 'Spróbuj ponownie' : step === questions.length - 1 ? 'Zakończ lekcję' : 'Dalej';

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    close.current?.focus();
    function keyboard(event: KeyboardEvent) {
      if (event.key === 'Escape') { event.preventDefault(); setLesson(false); return; }
      if (event.key !== 'Tab' || !shell.current) return;
      const items = [...shell.current.querySelectorAll<HTMLElement>('button:not(:disabled), [href], [tabindex="0"]')];
      if (!items.length) return;
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && (document.activeElement === first || !shell.current.contains(document.activeElement))) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !shell.current.contains(document.activeElement))) {
        event.preventDefault(); first.focus();
      }
    }
    document.addEventListener('keydown', keyboard);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', keyboard);
      previousFocus?.focus();
    };
  }, [setLesson]);

  useEffect(() => {
    if (step > 0 || done) title.current?.focus();
  }, [step, done]);

  return (
    <div className="session-overlay">
      <section ref={shell} role="dialog" aria-modal="true" aria-labelledby="session-title" className="session-screen">
        <header className="session-header">
          <button ref={close} type="button" className="session-close" aria-label="Zamknij lekcję" onClick={() => setLesson(false)}><X size={25} /></button>
          <div className="session-track" role="progressbar" aria-label="Postęp lekcji" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
            <span style={{ width: progress + '%' }} />
          </div>
          <span className="session-count">{done ? questions.length : step + 1}/{questions.length}</span>
        </header>
        <div className="session-scroll">
          {done ? <div className="session-finish">
            <Kumka className="session-celebrate" cue={lessonCue} alt="Kumka świętuje ukończenie lekcji" />
            <h2 id="session-title" ref={title} tabIndex={-1}>Świetnie Ci poszło!</h2>
            <p>Lekcja ukończona. Jeszcze jeden krok w stronę muzyki.</p>
            <div className="session-reward"><Star size={24} fill="currentColor" /> 30 XP za pierwsze ukończenie</div>
          </div> : <div className="session-question" key={step}>
            <div className="session-context">
              <Kumka className="session-mascot" cue={lessonCue} alt="Kumka reaguje na Twoją odpowiedź" />
              <div><span className="session-subject">{s.name}</span><h2 id="session-title" ref={title} tabIndex={-1}>{q.q}</h2></div>
            </div>
            {q.notes.length > 0 && <div className="session-audio">
              <button className="listen" onClick={play} disabled={!sound}><Volume2 size={30} />{sound ? 'Odtwórz dźwięki' : 'Włącz dźwięk w ustawieniach'}</button>
              <p className="audio-caption">Podgląd audio · syntetyczna barwa, A4 = 440 Hz</p>
            </div>}
            <div className="answers session-answers" role="group" aria-label="Odpowiedzi">
              {q.a.map((a, i) => <button type="button" key={a} aria-pressed={answer === i} disabled={checked}
                className={(answer === i ? 'chosen ' : '') + (checked && i === q.correct ? 'correct' : '') + (incorrect && answer === i ? ' incorrect' : '')}
                onClick={() => setAnswer(i)}><span>{i + 1}</span>{a}{checked && i === q.correct && <Check className="answer-mark" size={19} />}</button>)}
            </div>
          </div>}
        </div>
        <footer className={'session-footer ' + (correct ? 'is-correct' : incorrect ? 'is-incorrect' : '')}>
          <div className="session-footer-inner">
            {!done && checked && <div role="status" className="session-feedback" key={String(step) + String(answer)}>
              <div className="feedback-symbol">{correct ? <Check size={27} /> : <RotateCcw size={25} />}</div>
              <div><strong>{correct ? 'Dokładnie tak!' : 'Spróbuj jeszcze raz.'}</strong><p>{q.why}</p></div>
            </div>}
            <button className="primary session-action" disabled={!done && answer === null} onClick={done ? () => setLesson(false) : next}>
              {done ? 'Wróć do ścieżki' : action}<ArrowRight size={20} />
            </button>
          </div>
        </footer>
      </section>
    </div>
  );
}
