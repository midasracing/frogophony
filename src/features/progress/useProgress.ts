import { useEffect, useState } from 'react';

// Keep the existing key to preserve progress for current users.
export function useProgress() {
  const [completed,setCompleted]=useState<string[]>([]),[xp,setXp]=useState(0),[ready,setReady]=useState(false);
useEffect(()=>{try{const data=JSON.parse(localStorage.getItem('frogphony-v1')||'{}');setCompleted(data.completed||[]);setXp(data.xp||0)}catch{}setReady(true)},[]);useEffect(()=>{if(ready)localStorage.setItem('frogphony-v1',JSON.stringify({completed,xp}))},[completed,xp,ready]);
  return { completed, setCompleted, xp, setXp };
}
