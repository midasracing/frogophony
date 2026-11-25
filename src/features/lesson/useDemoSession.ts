import { useState } from 'react';
import type { KumkaCue } from '../../components/mascot/Kumka';
import { subjects } from '../learning/subjects';
import { quizzes } from '../../content/demo/quizzes';
import { useProgress } from '../progress/useProgress';
import { playDemoNotes } from '../../music/audio/playDemoNotes';

export function useDemoSession() {
  const [heroCue,setHeroCue]=useState<KumkaCue>();const [lessonCue,setLessonCue]=useState<KumkaCue>();const [subject,setSubject]=useState(0),[view,setView]=useState('learn'),[lesson,setLesson]=useState(false),[step,setStep]=useState(0),[answer,setAnswer]=useState<number|null>(null),[checked,setChecked]=useState(false),[done,setDone]=useState(false),[sound,setSound]=useState(true),[level,setLevel]=useState('Most do II stopnia');
  const { completed, setCompleted, xp, setXp } = useProgress();
const s=subjects[subject], questions=quizzes[subject], q=questions[step];
function start(){setHeroCue(prev=>({type:'wave',id:(prev?.id??0)+1}));setLessonCue(undefined);setStep(0);setAnswer(null);setChecked(false);setDone(false);setLesson(true)}
  function play() { playDemoNotes(q.notes, sound); }
function next(){if(!checked){setChecked(true);setLessonCue(prev=>({type:answer===q.correct?'success':'look',id:(prev?.id??0)+1}));return}if(answer!==q.correct){setChecked(false);setAnswer(null);return}if(step<questions.length-1){setStep(step+1);setAnswer(null);setChecked(false)}else{const id=String(subject);if(!completed.includes(id)){setCompleted([...completed,id]);setXp(xp+30)}setDone(true)}}
  return { heroCue, setHeroCue, lessonCue, subject, setSubject, view, setView, lesson, setLesson, step, answer, setAnswer, checked, done, completed, xp, sound, setSound, level, setLevel, s, questions, q, start, play, next };
}
export type DemoSession = ReturnType<typeof useDemoSession>;
