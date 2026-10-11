/* rootjavs — core: layout, icons, progress store, helpers, PDF, certificates */
(function(){
const RJ = window.RJ = {};

/* ---------------- icons ---------------- */
const P = {
 laptop:'<rect x="4" y="4" width="16" height="11" rx="1.5"/><path d="M2 19h20l-2-4H4z"/>',
 folder:'<path d="M3 6.5A1.5 1.5 0 0 1 4.5 5H9l2 2.5h8.5A1.5 1.5 0 0 1 21 9v9.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5z"/>',
 keyboard:'<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h.01M18 14h.01M9 14h6"/>',
 command:'<path d="M9 6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3z"/>',
 doc:'<path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8z"/><path d="M14 3v5h5M8.5 13h7M8.5 16.5h7M8.5 9.5h3"/>',
 sheet:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/>',
 slides:'<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M12 16v4M8 20h8M7 8h6M7 11h10"/>',
 code:'<path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/>',
 terminal:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3M13 15h4"/>',
 network:'<rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-2.5h14V17M12 12v2.5"/>',
 shield:'<path d="M12 3 4.5 6v6c0 4.5 3.2 7.8 7.5 9 4.3-1.2 7.5-4.5 7.5-9V6z"/><path d="m9 12 2 2 4-4"/>',
 cloud:'<path d="M7 18a4.5 4.5 0 1 1 .9-8.9A6 6 0 0 1 19.5 11 3.5 3.5 0 0 1 18 18z"/>',
 spark:'<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/>',
 globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18"/>',
 windows:'<path d="M3 5.5 10.5 4.5v7H3zM12.5 4.2 21 3v8.5h-8.5zM3 13h7.5v6.5L3 18.5zM12.5 13H21v8l-8.5-1.2z"/>',
 cpu:'<rect x="6" y="6" width="12" height="12" rx="1.5"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
 check:'<path d="m5 12.5 4.5 4.5L19 7.5"/>',
 checkc:'<circle cx="12" cy="12" r="9"/><path d="m8 12.5 2.8 2.8L16.5 9.5"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
 book:'<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5A2.5 2.5 0 0 1 4 20.5z"/>',
 flask:'<path d="M9 3h6M10 3v6l-5.5 9.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3"/><path d="M7.5 15h9"/>',
 award:'<circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 7 5-2.5 5 2.5-1.5-7"/>',
 download:'<path d="M12 3v12M7 10l5 5 5-5M4 20h16"/>',
 search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
 moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
 menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
 arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
 play:'<path d="M7 4.5v15l12-7.5z"/>',
 lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
 mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
 map:'<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',
 list:'<path d="M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01"/>',
 quiz:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6M12 17h.01"/>',
 bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
 info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5h.01"/>',
 alert:'<path d="M12 3 2 20h20z"/><path d="M12 10v4.5M12 17.5h.01"/>',
 target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
 fire:'<path d="M12 22c4 0 7-2.8 7-7 0-4.5-4-7-5-11-2 2-3 4-3 6-1-1-2-2-2-4-2 2.5-4 5.5-4 9 0 4.2 3 7 7 7z"/>',
 trophy:'<path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H4.5v1.5A3 3 0 0 0 8 10.5M16 6h3.5v1.5A3 3 0 0 1 16 10.5M12 13v4M8 21h8M9 17h6v4H9z"/>',
 logout:'<path d="M15 4h3.5A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5H15M10 16l-4-4 4-4M6 12h10"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 trash:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
 up:'<path d="M12 19V5M6 11l6-6 6 6"/>',
 copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16H8"/>',
 cut:'<circle cx="6" cy="7" r="3"/><circle cx="6" cy="17" r="3"/><path d="M8.5 8.5 20 18M8.5 15.5 20 6"/>',
 paste:'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 10h6M9 14h6"/>',
 edit:'<path d="M4 20h4L19 9l-4-4L4 16z"/>',
 restore:'<path d="M4 12a8 8 0 1 0 2.3-5.7L4 8.5M4 4v4.5h4.5"/>',
 star:'<path d="m12 3 2.7 5.7 6.3.8-4.6 4.3 1.2 6.2L12 17l-5.6 3 1.2-6.2L3 9.5l6.3-.8z"/>'
};
RJ.icon = (n,cls="") => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n]||P.info}</svg>`;
RJ.logo = `<svg viewBox="0 0 32 32" aria-hidden="true"><defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5B8CFF"/><stop offset="1" stop-color="#38C6E8"/></linearGradient></defs><rect width="32" height="32" rx="9" fill="url(#lg)"/><path d="m9 11 5 5-5 5" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.5 21H23" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/></svg>`;

/* ---------------- helpers ---------------- */
RJ.timers=[]; RJ.stopTimers=()=>{ RJ.timers.forEach(clearInterval); RJ.timers=[]; };
RJ.$ = (s,el=document)=>el.querySelector(s);
RJ.$$ = (s,el=document)=>[...el.querySelectorAll(s)];
RJ.esc = s => String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
RJ.keycaps = combo => combo.split(/\+(?=.)/).map(k=>`<span class="kc">${k}</span>`).join('<span class="plus">+</span>');
RJ.fmt = s => {
  let h = RJ.esc(s);
  h = h.replace(/\[\[(.+?)\]\](?!\])/g,(m,k)=>RJ.keycaps(k));
  h = h.replace(/\*\*(.+?)\*\*/g,'<mark class="hl">$1</mark>');
  return h;
};
RJ.plain = s => String(s).replace(/\[\[(.+?)\]\](?!\])/g,"$1").replace(/\*\*(.+?)\*\*/g,"$1");
RJ.qp = k => new URLSearchParams(location.search).get(k);
RJ.shuffle = a => { a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; };
RJ.toast = (msg) => { let t=RJ.$(".toast"); if(!t){ t=document.createElement("div"); t.className="toast"; t.setAttribute("role","status"); document.body.appendChild(t);} t.textContent=msg; t.classList.add("show"); clearTimeout(t._h); t._h=setTimeout(()=>t.classList.remove("show"),2600); };
RJ.course = id => (window.RJ_COURSES||[]).find(c=>c.id===id);
RJ.fmtDate = d => new Date(d).toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"});
RJ.saveBlob = (blob,name) => { const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=name; document.body.appendChild(a); a.click(); setTimeout(()=>{URL.revokeObjectURL(a.href); a.remove();},1500); };

/* ---------------- store ---------------- */
const KEY="rootjavs_v2";
const blank = ()=>({user:null,lessons:{},practical:{},final:{},certs:{},typing:{best:null,history:[]},days:[],last:null});
let S; try{ S=Object.assign(blank(),JSON.parse(localStorage.getItem(KEY)||"{}")); }catch(e){ S=blank(); }
RJ.S = S;
RJ.save = ()=>{ try{ localStorage.setItem(KEY,JSON.stringify(S)); }catch(e){} };
RJ.touch = ()=>{ const d=new Date().toISOString().slice(0,10); if(!S.days.includes(d)){ S.days.push(d); S.days=S.days.slice(-120); RJ.save(); } };
RJ.streak = ()=>{ let n=0; const set=new Set(S.days); const d=new Date(); for(;;){ const k=d.toISOString().slice(0,10); if(set.has(k)){ n++; d.setDate(d.getDate()-1);} else break; } return n; };
RJ.PASS_LESSON=3; RJ.PASS_FINAL=6; RJ.FINAL_Q=10;
RJ.lessonScore = (cid,i)=> (S.lessons[cid]||{})[i];
RJ.lessonPassed = (cid,i)=> (RJ.lessonScore(cid,i)??-1) >= RJ.PASS_LESSON;
RJ.setLesson = (cid,i,sc)=>{ S.lessons[cid]=S.lessons[cid]||{}; S.lessons[cid][i]=Math.max(S.lessons[cid][i]??0,sc); S.last={cid,i,at:Date.now()}; RJ.touch(); RJ.save(); };
RJ.progress = c => {
  const n=c.lessons.length, passed=c.lessons.filter((_,i)=>RJ.lessonPassed(c.id,i)).length;
  const fin=(S.final[c.id]??-1)>=RJ.PASS_FINAL, prac=!!S.practical[c.id];
  const steps=n+2, done=passed+(fin?1:0)+(prac?1:0);
  return {n,passed,fin,prac,allLessons:passed===n,complete:passed===n&&fin&&prac,pct:Math.round(done/steps*100)};
};
RJ.started = c => Object.keys(S.lessons[c.id]||{}).length>0 || S.practical[c.id] || S.final[c.id]!=null;

/* ---------------- certificate IDs (self-verifying) ---------------- */
function fnv(str){ let h=0x811c9dc5; for(const ch of str){ h^=ch.codePointAt(0); h=Math.imul(h,0x01000193)>>>0; } return h; }
const normName = n => String(n).trim().toLowerCase().replace(/\s+/g," ");
RJ.certCheck = (code,ymd,name) => (fnv(`${code}|${ymd}|${normName(name)}|rootjavs-academy`)%0xFFFFF).toString(16).toUpperCase().padStart(5,"0");
RJ.makeCertId = (c,name,date=new Date())=>{ const ymd=date.toISOString().slice(2,10).replace(/-/g,""); return `RJ-${c.code}-${ymd}-${RJ.certCheck(c.code,ymd,name)}`; };
RJ.verifyCert = (id,name)=>{
  const m=String(id).trim().toUpperCase().match(/^RJ-([A-Z]{2})-(\d{6})-([0-9A-F]{5})$/);
  if(!m) return {ok:false,reason:"format"};
  const c=(window.RJ_COURSES||[]).find(x=>x.code===m[1]); if(!c) return {ok:false,reason:"course"};
  if(RJ.certCheck(m[1],m[2],name)!==m[3]) return {ok:false,reason:"name"};
  const y=2000+ +m[2].slice(0,2), mo=+m[2].slice(2,4)-1, d=+m[2].slice(4,6);
  return {ok:true,course:c,date:new Date(Date.UTC(y,mo,d))};
};
RJ.issueCert = (c)=>{
  if(S.certs[c.id]) return S.certs[c.id];
  const name=(S.user&&S.user.name)||"";
  const cert={name,date:Date.now(),id:name?RJ.makeCertId(c,name):null};
  S.certs[c.id]=cert; RJ.save(); return cert;
};

/* ---------------- layout ---------------- */
const NAV=[["courses.html","Courses"],["labs.html","Labs"],["mock-tests.html","Mock Tests"],["roadmaps.html","Roadmaps"],["cheatsheets.html","Cheat Sheets"],["typing-test.html","Typing Test"]];
function theme(){ try{ return localStorage.getItem("rj_theme")||"dark"; }catch(e){ return "dark"; } }
function applyTheme(t){ document.documentElement.setAttribute("data-theme",t); try{ localStorage.setItem("rj_theme",t);}catch(e){} const b=RJ.$("#themeBtn"); if(b) b.innerHTML=RJ.icon(t==="dark"?"sun":"moon"); }
applyTheme(theme());
RJ.layout = ()=>{
  const here=location.pathname.split("/").pop()||"index.html";
  const user=S.user;
  const hdr=document.createElement("header"); hdr.className="hdr";
  hdr.innerHTML=`<div class="container">
    <a class="logo" href="index.html" aria-label="rootjavs home">${RJ.logo}<span>rootjavs</span></a>
    <nav class="nav" aria-label="Main">${NAV.map(([h,l])=>`<a href="${h}" class="${here===h?'on':''}">${l}</a>`).join("")}</nav>
    <div class="hdr-r">
      <button class="icon-btn" id="themeBtn" aria-label="Switch theme"></button>
      ${user?`<a class="btn sm hide-m" href="dashboard.html">${RJ.icon("user")} ${RJ.esc(user.name.split(" ")[0])}</a>`:`<a class="btn sm ghost hide-m" href="login.html">Log in</a><a class="btn sm pri hide-m" href="login.html?mode=signup">Start free</a>`}
      <button class="icon-btn menu-btn" id="menuBtn" aria-label="Open menu" aria-expanded="false">${RJ.icon("menu")}</button>
    </div></div>
    <nav class="mnav" id="mnav" aria-label="Mobile">${NAV.map(([h,l])=>`<a href="${h}">${l}</a>`).join("")}<a href="dashboard.html">Dashboard</a>${user?'':'<a href="login.html">Log in / Sign up</a>'}</nav>`;
  document.body.prepend(hdr);
  RJ.$("#themeBtn").onclick=()=>applyTheme(theme()==="dark"?"light":"dark"); applyTheme(theme());
  RJ.$("#menuBtn").onclick=()=>{ const m=RJ.$("#mnav"); m.classList.toggle("open"); RJ.$("#menuBtn").setAttribute("aria-expanded",m.classList.contains("open")); };
  const f=document.createElement("footer"); f.className="ftr";
  f.innerHTML=`<div class="container"><div class="cols">
    <div><a class="logo" href="index.html">${RJ.logo}<span>rootjavs</span></a><p class="muted small" style="margin-top:14px;max-width:32ch">Practical computer, Office and cyber security training. Learn it, practise it in the browser, prove it with exams.</p>
      <p class="small muted" style="margin:0">Vadodara, Gujarat, India<br>Instagram: @rootjavs</p></div>
    <div><h4>Learn</h4><a href="courses.html">All courses</a><a href="roadmaps.html">Career roadmaps</a><a href="labs.html">Hands-on labs</a><a href="mock-tests.html">Mock tests</a></div>
    <div><h4>Resources</h4><a href="cheatsheets.html">Cheat sheets</a><a href="typing-test.html">Typing test</a><a href="interview.html">Interview questions</a><a href="glossary.html">Glossary</a></div>
    <div><h4>Account</h4><a href="dashboard.html">Dashboard</a><a href="certificate.html">My certificates</a><a href="verify.html">Verify a certificate</a><a href="login.html">Log in</a></div>
    <div><h4>Company</h4><a href="about.html">About</a><a href="contact.html">Contact</a><a href="faq.html">FAQ</a><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a></div>
  </div><div class="bottom"><span>© ${new Date().getFullYear()} rootjavs. All rights reserved.</span><span>Learn · Practise · Test · Certify</span></div></div>`;
  document.body.appendChild(f);
};

/* ---------------- notes renderer ---------------- */
RJ.renderNotes = blocks => blocks.map(b=>{
  if(b.p) return `<p>${RJ.fmt(b.p)}</p>`;
  if(b.h) return `<h2>${RJ.fmt(b.h)}</h2>`;
  if(b.ul) return `<ul>${b.ul.map(x=>`<li>${RJ.fmt(x)}</li>`).join("")}</ul>`;
  if(b.ol) return `<ol>${b.ol.map(x=>`<li>${RJ.fmt(x)}</li>`).join("")}</ol>`;
  if(b.tip) return `<div class="callout">${RJ.icon("bolt")}<div><b>Pro tip</b>${RJ.fmt(b.tip)}</div></div>`;
  if(b.tbl) return `<div class="tbl"><table><thead><tr>${b.tbl[0].map(c=>`<th>${RJ.fmt(c)}</th>`).join("")}</tr></thead><tbody>${b.tbl.slice(1).map(r=>`<tr>${r.map(c=>`<td>${RJ.fmt(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  if(b.task) return `<div class="task-box"><h3>${RJ.icon("target")} Real task: do this on your computer</h3><ol>${b.task.map(x=>`<li>${RJ.fmt(x)}</li>`).join("")}</ol></div>`;
  return "";
}).join("");

/* ---------------- PDF ---------------- */
const pdfSafe = s => RJ.plain(s).replace(/₹/g,"Rs. ").replace(/[–—]/g,"-").replace(/→/g,"->").replace(/[‘’]/g,"'").replace(/[“”]/g,'"').replace(/×/g,"x").replace(/[^\x09\x0A\x0D\x20-\x7E\u2022]/g,"");
function pdfKit(title,kicker){
  const {jsPDF}=window.jspdf; const d=new jsPDF({unit:"mm",format:"a4"});
  const k={d,L:16,W:178,y:0};
  const head=()=>{ d.setFillColor(11,17,32); d.rect(0,0,210,16,"F"); d.setFillColor(91,140,255); d.rect(0,16,210,1.2,"F");
    d.setTextColor(255,255,255); d.setFont("helvetica","bold"); d.setFontSize(11); d.text("rootjavs",k.L,10.3);
    d.setFont("helvetica","normal"); d.setFontSize(8.5); d.setTextColor(170,185,215); d.text(pdfSafe(kicker).toUpperCase(),194,10.3,{align:"right"}); k.y=28; };
  k.need=h=>{ if(k.y+h>280){ d.addPage(); head(); } };
  k.text=(t,{size=10.5,style="normal",color=[30,38,58],indent=0,gap=1.6,lh=0.47}={})=>{ d.setFont("helvetica",style); d.setFontSize(size); d.setTextColor(...color);
    const lines=d.splitTextToSize(pdfSafe(t),k.W-indent); for(const ln of lines){ k.need(size*lh+1); d.text(ln,k.L+indent,k.y); k.y+=size*lh; } k.y+=gap; };
  k.h2=t=>{ k.y+=3; k.need(14); d.setFillColor(91,140,255); d.rect(k.L,k.y-4.2,1.4,5.6,"F"); k.text(t,{size:13.5,style:"bold",color:[14,22,48],indent:4,gap:2.5}); };
  k.table=(rows)=>{ const cols=rows[0].length; const cw=k.W/cols; d.setFontSize(9.5);
    rows.forEach((r,ri)=>{ const cells=r.map(c=>d.splitTextToSize(pdfSafe(c),cw-4)); const h=Math.max(...cells.map(c=>c.length))*4.4+3.4; k.need(h+2);
      if(ri===0){ d.setFillColor(232,238,252); d.rect(k.L,k.y-4,k.W,h,"F"); } else if(ri%2===0){ d.setFillColor(247,249,253); d.rect(k.L,k.y-4,k.W,h,"F"); }
      d.setDrawColor(215,222,238); d.line(k.L,k.y-4+h,k.L+k.W,k.y-4+h);
      cells.forEach((c,ci)=>{ d.setFont("helvetica",ri===0?"bold":"normal"); d.setTextColor(ri===0?50:30,ri===0?70:38,ri===0?130:58); c.forEach((ln,li)=>d.text(ln,k.L+ci*cw+2,k.y+li*4.4)); });
      k.y+=h; }); k.y+=4; };
  k.box=(label,t,fill,stroke)=>{ d.setFontSize(10); const lines=d.splitTextToSize(pdfSafe(t),k.W-10); const h=lines.length*4.7+11; k.need(h+2);
    d.setFillColor(...fill); d.setDrawColor(...stroke); d.roundedRect(k.L,k.y-3,k.W,h,2,2,"FD");
    d.setFont("helvetica","bold"); d.setFontSize(8.5); d.setTextColor(...stroke); d.text(label.toUpperCase(),k.L+5,k.y+2.5);
    d.setFont("helvetica","normal"); d.setFontSize(10); d.setTextColor(30,38,58); lines.forEach((ln,i)=>d.text(ln,k.L+5,k.y+8+i*4.7)); k.y+=h+3; };
  head();
  k.finish=(fname)=>{ const n=d.getNumberOfPages(); for(let p=1;p<=n;p++){ d.setPage(p); d.setFont("helvetica","normal"); d.setFontSize(8); d.setTextColor(130,140,160); d.text(pdfSafe(title),k.L,290); d.text(`Page ${p} of ${n}   |   rootjavs`,194,290,{align:"right"}); } d.save(fname); };
  return k;
}
RJ.notesPDF = (c,li)=>{
  if(!window.jspdf){ RJ.toast("PDF engine not loaded."); return; }
  const L=c.lessons[li]; const k=pdfKit(`${c.title} - Lesson ${li+1}`,`${c.title}  |  Lesson ${li+1}`);
  k.text(`LESSON ${li+1} OF ${c.lessons.length}  -  ${L.min} MIN READ`,{size:8.5,style:"bold",color:[56,140,200],gap:2});
  k.text(L.title,{size:22,style:"bold",color:[14,22,48],gap:3,lh:0.45});
  k.text(c.title+"  |  "+c.level,{size:10,color:[100,110,135],gap:5});
  for(const b of L.notes){
    if(b.h) k.h2(b.h);
    if(b.p) k.text(b.p);
    if(b.ul) b.ul.forEach(x=>k.text("•  "+x,{indent:3,gap:1}));
    if(b.ol) b.ol.forEach((x,i)=>k.text(`${i+1}.  ${x}`,{indent:3,gap:1}));
    if(b.tbl) k.table(b.tbl);
    if(b.tip) k.box("Pro tip",b.tip,[255,248,228],[176,120,0]);
    if(b.task) k.box("Real task - do this on your computer",b.task.map((x,i)=>`${i+1}. ${RJ.plain(x)}`).join("\n"),[236,242,255],[47,100,240]);
  }
  k.y+=4; k.box("Quick revision quiz",L.quiz.map((q,i)=>`${i+1}. ${q[0]}`).join("\n"),[245,247,251],[90,100,125]);
  k.finish(`rootjavs-${c.id}-lesson-${li+1}.pdf`);
};
RJ.coursePDF = (c)=>{
  if(!window.jspdf){ RJ.toast("PDF engine not loaded."); return; }
  const k=pdfKit(c.title+" - Complete Notes",`${c.title}  |  Complete notes`);
  k.text("COMPLETE COURSE NOTES",{size:8.5,style:"bold",color:[56,140,200],gap:2});
  k.text(c.title,{size:24,style:"bold",color:[14,22,48],gap:3,lh:0.45}); k.text(c.short,{size:11,color:[90,100,125],gap:4});
  k.h2("What you will learn"); c.learn.forEach(x=>k.text("•  "+x,{indent:3,gap:1}));
  c.lessons.forEach((L,li)=>{ k.d.addPage(); k.y=28; k.d.setFillColor(11,17,32); k.d.rect(0,0,210,16,"F"); k.d.setFillColor(91,140,255); k.d.rect(0,16,210,1.2,"F"); k.d.setTextColor(255,255,255); k.d.setFont("helvetica","bold"); k.d.setFontSize(11); k.d.text("rootjavs",16,10.3);
    k.text(`LESSON ${li+1}`,{size:8.5,style:"bold",color:[56,140,200],gap:2}); k.text(L.title,{size:19,style:"bold",color:[14,22,48],gap:4,lh:0.45});
    for(const b of L.notes){ if(b.h) k.h2(b.h); if(b.p) k.text(b.p); if(b.ul) b.ul.forEach(x=>k.text("•  "+x,{indent:3,gap:1})); if(b.ol) b.ol.forEach((x,i)=>k.text(`${i+1}.  ${x}`,{indent:3,gap:1})); if(b.tbl) k.table(b.tbl); if(b.tip) k.box("Pro tip",b.tip,[255,248,228],[176,120,0]); if(b.task) k.box("Real task",b.task.map((x,i)=>`${i+1}. ${RJ.plain(x)}`).join("\n"),[236,242,255],[47,100,240]); }
  });
  k.finish(`rootjavs-${c.id}-complete-notes.pdf`);
};
RJ.cheatPDF = (cs)=>{
  if(!window.jspdf){ RJ.toast("PDF engine not loaded."); return; }
  const k=pdfKit(cs.title+" - Cheat Sheet","Cheat sheet  |  "+cs.cat);
  k.text("CHEAT SHEET",{size:8.5,style:"bold",color:[56,140,200],gap:2});
  k.text(cs.title,{size:22,style:"bold",color:[14,22,48],gap:3,lh:0.45}); k.text(cs.desc,{size:10.5,color:[90,100,125],gap:4});
  cs.sections.forEach(([name,rows])=>{ k.h2(name); k.table([["Key / Item","Meaning"],...rows]); });
  k.finish(`rootjavs-cheatsheet-${cs.id}.pdf`);
};

/* ---------------- certificate canvas ---------------- */
RJ.drawCert = async (cv,c,cert)=>{
  try{ await document.fonts.ready; }catch(e){}
  const x=cv.getContext("2d"), W=cv.width=2000, H=cv.height=1414;
  x.fillStyle="#FBFAF6"; x.fillRect(0,0,W,H);
  const g=x.createLinearGradient(0,0,W,0); g.addColorStop(0,"#0B1120"); g.addColorStop(1,"#13244A");
  x.fillStyle=g; x.fillRect(0,0,W,150); x.fillStyle="#5B8CFF"; x.fillRect(0,150,W,8);
  x.strokeStyle="#1D3D8F"; x.lineWidth=4; x.strokeRect(60,200,W-120,H-260);
  x.strokeStyle="#C9A227"; x.lineWidth=2; x.strokeRect(80,220,W-160,H-300);
  // logo
  x.save(); x.translate(110,45); const lg=x.createLinearGradient(0,0,60,60); lg.addColorStop(0,"#5B8CFF"); lg.addColorStop(1,"#38C6E8"); x.fillStyle=lg; x.beginPath(); if(x.roundRect) x.roundRect(0,0,60,60,16); else x.rect(0,0,60,60); x.fill();
  x.strokeStyle="#fff"; x.lineWidth=5; x.lineCap="round"; x.lineJoin="round"; x.beginPath(); x.moveTo(17,20); x.lineTo(27,30); x.lineTo(17,40); x.stroke(); x.beginPath(); x.moveTo(31,40); x.lineTo(44,40); x.stroke(); x.restore();
  x.fillStyle="#fff"; x.font="800 44px Sora, sans-serif"; x.textBaseline="middle"; x.fillText("rootjavs",190,77);
  x.textAlign="right"; x.font="600 22px 'JetBrains Mono', monospace"; x.fillStyle="#9FB6E8"; x.fillText("LEARN · PRACTISE · TEST · CERTIFY",W-110,77);
  x.textAlign="center"; x.textBaseline="alphabetic";
  x.fillStyle="#6A7390"; x.font="700 30px 'JetBrains Mono', monospace"; x.fillText("C E R T I F I C A T E   O F   C O M P L E T I O N",W/2,360);
  x.fillStyle="#141B2E"; x.font="400 34px Figtree, sans-serif"; x.fillText("This is to certify that",W/2,470);
  x.fillStyle="#1D3D8F"; x.font="italic 700 110px Georgia, 'Times New Roman', serif"; x.fillText(cert.name||"Your Name",W/2,610);
  x.strokeStyle="#C9A227"; x.lineWidth=3; x.beginPath(); x.moveTo(W/2-520,650); x.lineTo(W/2+520,650); x.stroke();
  x.fillStyle="#141B2E"; x.font="400 34px Figtree, sans-serif"; x.fillText("has successfully completed the course",W/2,730);
  x.font="800 66px Sora, sans-serif"; x.fillText(c.title,W/2,830);
  x.fillStyle="#4A5470"; x.font="400 30px Figtree, sans-serif";
  x.fillText(`${c.lessons.length} lessons · hands-on lab · final theory exam · practical exam · ${c.hours} hours`,W/2,900);
  // footer blocks
  x.textAlign="left"; x.fillStyle="#141B2E"; x.font="700 30px Figtree, sans-serif"; x.fillText(RJ.fmtDate(cert.date),200,1150);
  x.strokeStyle="#141B2E"; x.lineWidth=2; x.beginPath(); x.moveTo(200,1170); x.lineTo(620,1170); x.stroke();
  x.fillStyle="#6A7390"; x.font="400 24px Figtree, sans-serif"; x.fillText("Date of completion",200,1206);
  x.textAlign="right"; x.fillStyle="#141B2E"; x.font="italic 600 44px Georgia, serif"; x.fillText("rootjavs Academy",W-200,1145);
  x.beginPath(); x.moveTo(W-620,1170); x.lineTo(W-200,1170); x.stroke();
  x.fillStyle="#6A7390"; x.font="400 24px Figtree, sans-serif"; x.fillText("Issued by",W-200,1206);
  // seal
  x.save(); x.translate(W/2,1150); const sg=x.createRadialGradient(0,0,10,0,0,110); sg.addColorStop(0,"#F2D27A"); sg.addColorStop(1,"#B8901E"); x.fillStyle=sg; x.beginPath(); x.arc(0,0,100,0,Math.PI*2); x.fill();
  x.strokeStyle="#FBFAF6"; x.lineWidth=3; x.beginPath(); x.arc(0,0,84,0,Math.PI*2); x.stroke();
  x.fillStyle="#3A2A00"; x.textAlign="center"; x.font="800 26px Sora, sans-serif"; x.fillText("VERIFIED",0,-6); x.font="700 18px 'JetBrains Mono', monospace"; x.fillText(c.code+" · rootjavs",0,24); x.restore();
  x.textAlign="center"; x.fillStyle="#4A5470"; x.font="600 24px 'JetBrains Mono', monospace";
  x.fillText(`Certificate ID: ${cert.id||"—"}   ·   Verify at rootjavs.in/verify`,W/2,H-90);
};
RJ.certPDF = (cv,c)=>{ const {jsPDF}=window.jspdf; const d=new jsPDF({orientation:"landscape",unit:"mm",format:"a4"}); d.addImage(cv.toDataURL("image/jpeg",0.93),"JPEG",0,0,297,210); d.save(`rootjavs-certificate-${c.id}.pdf`); };

/* ---------------- course card ---------------- */
RJ.courseCard = c => {
  const p=RJ.progress(c), st=RJ.started(c);
  return `<a class="card hover ccard" href="course.html?c=${c.id}">
   <div class="top"><span class="icon ${c.cat==="Office"?"cyan":""}">${RJ.icon(c.icon)}</span>${p.complete?`<span class="chip ok">${RJ.icon("check")} Completed</span>`:st?`<span class="chip blue">In progress</span>`:`<span class="chip">${RJ.esc(c.level)}</span>`}</div>
   <div><span class="eyebrow" style="font-size:11px">${RJ.esc(c.cat)}</span><h3 style="margin-top:6px">${RJ.esc(c.title)}</h3></div>
   <p>${RJ.esc(c.short)}</p>
   ${st?`<div><div class="pbar"><i style="width:${p.pct}%"></i></div><small class="muted">${p.pct}% complete</small></div>`:""}
   <div class="meta"><span>${RJ.icon("book")} ${c.lessons.length} lessons</span><span>${RJ.icon("clock")} ${c.hours} h</span><span>${RJ.icon("flask")} Lab</span><span>${RJ.icon("award")} Certificate</span></div></a>`;
};
RJ.soonCard = s => `<div class="card ccard soon"><div class="top"><span class="icon">${RJ.icon(s.icon)}</span><span class="chip gold">Coming soon</span></div><div><span class="eyebrow" style="font-size:11px">${RJ.esc(s.cat)}</span><h3 style="margin-top:6px">${RJ.esc(s.title)}</h3></div><p>${RJ.esc(s.short)}</p></div>`;

document.addEventListener("DOMContentLoaded",()=>{ RJ.layout(); RJ.touch(); });
})();
