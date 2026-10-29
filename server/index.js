import express from 'express';import fs from 'fs';
const app=express();app.use(express.json({limit:'20kb'}));const re=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
app.post('/api/inquiries',async(q,r)=>{const d=q.body||{};
 if(!d.name||!re.test(d.email||'')||!/^\+\d/.test(d.phone||'')||d.consent!==true)return r.status(400).json({error:'Invalid input'});
 const rec={...d,at:new Date().toISOString()};
 try{if(process.env.INQUIRY_WEBHOOK_URL){const x=await fetch(process.env.INQUIRY_WEBHOOK_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(rec)});if(!x.ok)throw new Error('webhook')}
 else if(process.env.NODE_ENV!=='production'){fs.appendFileSync('inquiries.dev.jsonl',JSON.stringify(rec)+'\n')} // dev fallback only
 else return r.status(503).json({error:'Not configured'});r.json({ok:true})}catch{r.status(502).json({error:'Delivery failed'})}});
if(process.env.NODE_ENV==='production'){app.use(express.static('dist'));app.get('*',(q,r)=>r.sendFile(process.cwd()+'/dist/index.html'))}
app.listen(process.env.PORT||8787);
