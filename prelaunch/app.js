import {API_ORIGIN} from './config.js';
const form=document.querySelector('#signup'),status=document.querySelector('#status'),button=form.querySelector('button');
const visitId=crypto.randomUUID();const p=new URLSearchParams(location.search);const attribution={art:p.get('art'),format:p.get('utm_content'),source:p.get('utm_source'),campaign:p.get('utm_campaign'),medium:p.get('utm_medium')};
async function send(path,body){if(!API_ORIGIN)throw Error('unconfigured');const r=await fetch(API_ORIGIN+path,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body),referrerPolicy:'no-referrer'});if(!r.ok)throw Error('request failed');return r.json()}
// A retry uses the same visit ID; every new document load receives a fresh one.
let visit=send('/visit',{id:visitId,...attribution});visit.catch(()=>{});
form.addEventListener('submit',async e=>{e.preventDefault();button.disabled=true;status.textContent='Saving your signup…';try{try{await visit}catch{visit=send('/visit',{id:visitId,...attribution});await visit}const d=new FormData(form);await send('/signup',{visitId,name:d.get('name'),email:d.get('email'),price:d.get('price')||''});form.hidden=true;status.textContent='Thank you. You’re on the preview list.'}catch{status.textContent='We couldn’t save your signup. Please check your connection and try again.'}finally{button.disabled=false}});
