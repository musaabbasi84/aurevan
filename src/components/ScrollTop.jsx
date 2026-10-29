import {useEffect,useState} from 'react';
export default function ScrollTop(){const [s,setS]=useState(false);useEffect(()=>{const f=()=>setS(scrollY>900);addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[]);
 return <button aria-label="Back to top" tabIndex={s?0:-1} onClick={()=>scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})} className={'fixed bottom-5 right-5 z-30 h-11 w-11 bg-walnut text-ivory transition-all duration-500 '+(s?'opacity-100':'opacity-0 pointer-events-none translate-y-3')}>↑</button>}
