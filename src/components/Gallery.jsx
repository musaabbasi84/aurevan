import {useEffect,useRef,useState} from 'react';import Art from './Art.jsx';
const N=5;
function Viewer({p,i,go,close}){const ref=useRef();
 useEffect(()=>{const prev=document.activeElement;ref.current.focus();document.body.style.overflow='hidden';return()=>{document.body.style.overflow='';prev&&prev.focus()}},[]);
 const key=e=>{if(e.key==='Escape')close();if(e.key==='ArrowRight')go(1);if(e.key==='ArrowLeft')go(-1)};
 return <div ref={ref} tabIndex={-1} role="dialog" aria-modal="true" aria-label={p.title+' image viewer'} onKeyDown={key} className="fixed inset-0 z-50 bg-walnut/95 flex items-center justify-center viewer">
  <button onClick={close} className="absolute top-4 right-4 min-h-11 px-4 text-ivory">Close</button>
  <button onClick={()=>go(-1)} aria-label="Previous image" className="absolute left-2 md:left-6 min-h-11 px-4 text-ivory text-3xl">‹</button>
  <div key={i} className="w-[min(92vw,1400px)] swap"><Art slot={p.slug+'-'+(i+1)} tone={p.tone} variant={i} alt={`${p.title}, image ${i+1} of ${N}`} ratio="16/9"/></div>
  <button onClick={()=>go(1)} aria-label="Next image" className="absolute right-2 md:right-6 min-h-11 px-4 text-ivory text-3xl">›</button>
  <p className="absolute bottom-5 text-ivory/80 text-sm" aria-live="polite">{i+1} / {N}</p></div>}
export default function Gallery({p}){const [i,setI]=useState(0),[o,setO]=useState(false),go=d=>setI(x=>(x+d+N)%N);
 return <section aria-roledescription="carousel" aria-label={p.title+' gallery'} tabIndex={0} onKeyDown={e=>{if(e.key==='ArrowRight')go(1);if(e.key==='ArrowLeft')go(-1);if(e.key==='Enter')setO(true)}}>
 <div className="relative overflow-hidden"><div key={i} className="swap"><Art slot={p.slug+'-'+(i+1)} eager={i===0} tone={p.tone} variant={i} alt={`${p.title}, image ${i+1} of ${N}`} ratio="16/9"/></div>
 <button onClick={()=>setO(true)} className="absolute top-3 left-3 bg-ivory px-4 min-h-11 text-sm">View full screen</button>
 <div className="absolute bottom-3 right-3 flex gap-2"><button className="bg-ivory px-4 min-h-11" onClick={()=>go(-1)} aria-label="Previous image">‹</button><button className="bg-ivory px-4 min-h-11" onClick={()=>go(1)} aria-label="Next image">›</button></div></div>
 <p className="text-xs text-bronze mt-2" aria-live="polite">Image {i+1} of {N}. Arrow keys browse; Enter opens full screen. Illustrative imagery, not a verified photograph of this property.</p>
 {o&&<Viewer p={p} i={i} go={go} close={()=>setO(false)}/>}</section>}
