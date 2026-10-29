import {useEffect,useState} from 'react';const K='aurevan:favs';
const read=()=>{try{return JSON.parse(localStorage.getItem(K))||[]}catch{return[]}};
export function useFavs(){const [f,s]=useState(read);useEffect(()=>{const h=()=>s(read());addEventListener('favs',h);return()=>removeEventListener('favs',h)},[]);
 const t=slug=>{const n=read().includes(slug)?read().filter(x=>x!==slug):[...read(),slug];try{localStorage.setItem(K,JSON.stringify(n))}catch{}dispatchEvent(new Event('favs'))};return[f,t]}
