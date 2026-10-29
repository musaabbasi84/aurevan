import {useState} from 'react';import {properties} from '../data/properties.js';
const re=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export default function InquiryForm({slug=''}){const [e,setE]=useState({}),[st,setSt]=useState('idle');
 async function submit(ev){ev.preventDefault();const d=Object.fromEntries(new FormData(ev.target));d.consent=!!d.consent;const x={};
  if(d.name.trim().length<2)x.name='Enter your full name.';if(!re.test(d.email))x.email='Enter a valid email address, like name@example.com.';
  if(!/^\+\d{1,3}[\s\d-]{7,14}$/.test(d.phone.trim()))x.phone='Include the country code, for example +92 300 1234567.';
  if(d.date&&new Date(d.date)<new Date(new Date().toDateString()))x.date='Choose today or a later date.';if(!d.consent)x.consent='Please agree to be contacted so we can reply.';
  setE(x);if(Object.keys(x).length)return;setSt('sending');
  try{const r=await fetch('/api/inquiries',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(d)});if(!r.ok)throw 0;setSt('ok')}catch{setSt('fail')}}
 if(st==='ok')return <div role="status" className="border border-lime p-8"><h3 className="font-serif text-3xl text-walnut">Request received</h3><p className="mt-3">Thank you. We will contact you to confirm a time.</p></div>;
 const F=({n,l,t='text',...r})=><div><label htmlFor={n} className="text-sm">{l}</label><input id={n} name={n} type={t} className="field" aria-invalid={!!e[n]} aria-describedby={e[n]?n+'-e':undefined} {...r}/>{e[n]&&<p id={n+'-e'} role="alert" className="text-sm text-red-800 mt-1">{e[n]}</p>}</div>;
 return <form onSubmit={submit} noValidate className="space-y-6"><F n="name" l="Full name" autoComplete="name"/><F n="email" l="Email address" t="email" autoComplete="email"/><F n="phone" l="Phone, with country code" t="tel" placeholder="+92 300 1234567" autoComplete="tel"/>
 <div><label htmlFor="property" className="text-sm">Property of interest</label><select id="property" name="property" defaultValue={slug} className="field"><option value="">General enquiry</option>{properties.map(p=><option key={p.slug} value={p.slug}>{p.title}, {p.area}</option>)}</select></div>
 <F n="date" l="Preferred viewing date" t="date"/><div><label htmlFor="message" className="text-sm">Message (optional)</label><textarea id="message" name="message" rows="3" className="field"/></div>
 <div><label className="flex gap-3 text-sm"><input type="checkbox" name="consent" className="mt-1"/>I agree to be contacted about this enquiry.</label>{e.consent&&<p role="alert" className="text-sm text-red-800">{e.consent}</p>}</div>
 {st==='fail'&&<p role="alert" className="text-red-800">Your request could not be sent. Nothing was delivered. Please try again, or contact us directly.</p>}
 <button disabled={st==='sending'} className="bg-walnut text-ivory px-8 min-h-12 disabled:opacity-60">{st==='sending'?'Sending…':'Request a viewing'}</button></form>}
