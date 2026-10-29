import {useEffect} from 'react';
export default function Seo({title,desc}){useEffect(()=>{const t=title?title+' | AUREVAN':'AUREVAN | A Different Address to Life';document.title=t;
 const set=(sel,attr,v)=>{let e=document.head.querySelector(sel);if(!e){e=document.createElement('meta');document.head.appendChild(e)}Object.entries(attr).forEach(([k,x])=>e.setAttribute(k,x));e.setAttribute('content',v)};
 const d=desc||'Considered residences and distinctive architecture across Islamabad.';
 set('meta[name=description]',{name:'description'},d);set('meta[property="og:title"]',{property:'og:title'},t);set('meta[property="og:description"]',{property:'og:description'},d);
 let c=document.head.querySelector('link[rel=canonical]');if(!c){c=document.createElement('link');c.rel='canonical';document.head.appendChild(c)}c.href=location.origin+location.pathname},[title,desc]);return null}
