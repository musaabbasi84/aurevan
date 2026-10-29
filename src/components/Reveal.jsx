import {useEffect,useRef,useState} from 'react';
export default function Reveal({as:T='div',className='',children,...r}){const ref=useRef(),[on,setOn]=useState(false);
 useEffect(()=>{const e=ref.current;if(!('IntersectionObserver' in window)){setOn(true);return}const o=new IntersectionObserver(([x])=>{if(x.isIntersecting){setOn(true);o.disconnect()}},{threshold:.12});o.observe(e);return()=>o.disconnect()},[]);
 return <T ref={ref} className={'reveal '+(on?'in ':'')+className} {...r}>{children}</T>}
