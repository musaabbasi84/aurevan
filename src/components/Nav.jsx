import {useEffect,useState} from 'react';import {Link,NavLink,useLocation} from 'react-router-dom';
export const Wordmark=({light})=><Link to="/" aria-label="AUREVAN home" className={'font-serif text-2xl tracking-[.38em] '+(light?'text-ivory':'text-walnut')}>AUREVAN</Link>;
const links=[['/residences','Residences'],['/locations','Locations'],['/architecture','Architecture'],['/perspective','Our Perspective']];
export default function Nav(){const [s,setS]=useState(false),[o,setO]=useState(false),{pathname}=useLocation();const hero=pathname==='/'&&!s;
 useEffect(()=>{const f=()=>setS(scrollY>40);f();addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[]);
 useEffect(()=>{setO(false)},[pathname]);useEffect(()=>{document.body.style.overflow=o?'hidden':'';const k=e=>e.key==='Escape'&&setO(false);addEventListener('keydown',k);return()=>removeEventListener('keydown',k)},[o]);
 const lt=hero&&!o;
 return <header className={'fixed inset-x-0 top-0 z-40 transition-colors duration-500 '+(lt?'bg-transparent':'bg-ivory border-b border-lime')}>
 <nav aria-label="Primary" className="mx-auto max-w-[1400px] px-6 md:px-10 h-20 flex items-center justify-between"><Wordmark light={lt}/>
  <ul className={'hidden md:flex gap-10 text-sm '+(lt?'text-ivory':'text-char')}>{links.map(([to,l])=><li key={to}><NavLink to={to} className="hover:underline underline-offset-8 decoration-gold">{l}</NavLink></li>)}</ul>
  <div className="flex items-center gap-4"><Link to="/viewing" className={'hidden md:block text-sm border-b pb-1 '+(lt?'text-ivory border-ivory/60':'text-bronze border-gold')}>Arrange a viewing</Link>
  <button className={'md:hidden min-h-11 px-2 text-sm '+(lt?'text-ivory':'text-walnut')} aria-expanded={o} aria-controls="m" onClick={()=>setO(!o)}>{o?'Close':'Menu'}</button></div></nav>
 <div id="m" aria-hidden={!o} inert={!o?"":undefined} className={"md:hidden fixed inset-0 top-20 bg-walnut text-ivory px-8 pt-12 overflow-auto transition-[opacity,transform,visibility] duration-500 "+(o?"opacity-100 translate-y-0":"opacity-0 -translate-y-3 invisible")}><ul className="space-y-6 font-serif text-4xl">{[...links,['/viewing','Arrange a viewing']].map(([to,l])=><li key={to}><Link to={to}>{l}</Link></li>)}</ul></div></header>}
