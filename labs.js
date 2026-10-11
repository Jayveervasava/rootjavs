/* rootjavs — lab engines. Each engine: RJ.LABS[type](benchEl, {mode, tasksEl, onAllDone, statusEl}) */
(function(){
const RJ=window.RJ, $=RJ.$, esc=RJ.esc;
RJ.LABS={};

/* shared task list renderer */
function taskList(el,tasks,done){ if(!el) return; el.innerHTML=tasks.map((t,i)=>`<li class="${done[i]?'done':''}"><span class="ck">${done[i]?'✓':''}</span><span>${RJ.fmt(t[0])}</span></li>`).join(""); }
function tracker(opts,tasks){
  const done=tasks.map(()=>false); let fired=false;
  return { done, check(ctx){ tasks.forEach((t,i)=>{ if(!done[i]){ try{ if(t[1](ctx)) done[i]=true; }catch(e){} } }); taskList(opts.tasksEl,tasks,done);
      if(!fired && done.every(Boolean)){ fired=true; opts.onAllDone&&opts.onAllDone(); } },
    recheck(ctx){ tasks.forEach((t,i)=>{ try{ done[i]=!!t[1](ctx); }catch(e){ done[i]=false; } }); taskList(opts.tasksEl,tasks,done);
      if(!fired && done.every(Boolean)){ fired=true; opts.onAllDone&&opts.onAllDone(); } } };
}

/* ======================= LAPTOP ANATOMY ======================= */
const PARTS={screen:["Display","Shows everything. Clean only with a dry microfibre cloth."],webcam:["Webcam","Camera for video calls. Cover it when not in use."],keyboard:["Keyboard","Typing and shortcuts."],touchpad:["Touchpad","Mouse replacement. 1 tap = click, 2-finger tap = right-click."],power:["Power button","Press 1-2 s to start. Hold 10 s only if frozen."],speaker:["Speaker grille","Sound output."],charging:["Charging port","Connect the original charger here."],hdmi:["HDMI port","Connect to a TV, monitor or projector."],usb:["USB-A port","Pen drives, mouse, keyboard, phone cables."],usbc:["USB-C port","Data, display and charging on modern laptops."],jack:["3.5 mm audio jack","Headphones and earphones with mic."]};
function laptopSVG(){
  const hot=(id,inner)=>`<g class="hot" data-part="${id}" tabindex="0" role="button" aria-label="${PARTS[id][0]}">${inner}</g>`;
  let keys=""; for(let r=0;r<4;r++) for(let c=0;c<13;c++) keys+=`<rect x="${58+c*19.2}" y="${206+r*13}" width="16" height="10" rx="2" fill="var(--cap)" stroke="var(--line-2)" stroke-width=".7"/>`;
  return `<svg class="lapsvg" viewBox="0 0 360 300" role="group" aria-label="Laptop front view">
   <rect x="28" y="8" width="304" height="178" rx="10" fill="var(--raise)" stroke="var(--line-2)" stroke-width="2"/>
   ${hot("screen",`<rect class="fillme" x="40" y="26" width="280" height="150" rx="3" fill="var(--bg-2)" stroke="var(--line-2)"/><text x="180" y="105" text-anchor="middle" font-size="11" fill="var(--dim)" font-family="var(--mono)">display</text>`)}
   ${hot("webcam",`<circle cx="180" cy="17" r="12" fill="transparent"/><circle class="fillme" cx="180" cy="17" r="5" fill="var(--card)" stroke="var(--text)" stroke-width="1.4"/>`)}
   <path d="M28 190 L332 190 L356 292 L4 292 Z" fill="var(--raise)" stroke="var(--line-2)" stroke-width="2" stroke-linejoin="round"/>
   ${hot("keyboard",`<rect class="fillme" x="52" y="200" width="256" height="60" rx="4" fill="var(--card)" stroke="var(--line-2)"/>${keys}`)}
   ${hot("power",`<rect class="fillme" x="312" y="200" width="22" height="14" rx="3" fill="var(--card)" stroke="var(--text)" stroke-width="1.3"/><circle cx="323" cy="207" r="3" fill="none" stroke="var(--text)" stroke-width="1"/>`)}
   ${hot("touchpad",`<rect class="fillme" x="135" y="265" width="90" height="22" rx="4" fill="var(--card)" stroke="var(--text)" stroke-width="1.3"/>`)}
   ${hot("speaker",`<rect class="fillme" x="26" y="200" width="20" height="60" rx="4" fill="var(--card)" stroke="var(--line-2)"/>${[0,1,2,3,4,5,6].map(k=>`<circle cx="36" cy="${208+k*7.5}" r="1.5" fill="var(--dim)"/>`).join("")}`)}
  </svg>
  <svg class="lapsvg" viewBox="0 0 360 70" role="group" aria-label="Laptop side ports" style="margin-top:10px">
   <text x="4" y="11" font-size="9" fill="var(--dim)" font-family="var(--mono)">LEFT SIDE</text><rect x="4" y="18" width="170" height="40" rx="6" fill="var(--raise)" stroke="var(--line-2)" stroke-width="1.5"/>
   ${hot("charging",`<circle class="fillme" cx="26" cy="38" r="8" fill="var(--card)" stroke="var(--text)" stroke-width="1.3"/><circle cx="26" cy="38" r="2.4" fill="var(--text)"/>`)}
   ${hot("hdmi",`<path class="fillme" d="M50 31 L88 31 L84 45 L54 45 Z" fill="var(--card)" stroke="var(--text)" stroke-width="1.3"/>`)}
   ${hot("usb",`<rect class="fillme" x="102" y="31" width="32" height="14" rx="2" fill="var(--card)" stroke="var(--text)" stroke-width="1.3"/><rect x="106" y="35" width="24" height="4" fill="var(--text)"/>`)}
   <text x="186" y="11" font-size="9" fill="var(--dim)" font-family="var(--mono)">RIGHT SIDE</text><rect x="186" y="18" width="170" height="40" rx="6" fill="var(--raise)" stroke="var(--line-2)" stroke-width="1.5"/>
   ${hot("usbc",`<rect class="fillme" x="204" y="33" width="26" height="10" rx="5" fill="var(--card)" stroke="var(--text)" stroke-width="1.3"/>`)}
   ${hot("jack",`<circle class="fillme" cx="262" cy="38" r="7" fill="var(--card)" stroke="var(--text)" stroke-width="1.3"/><circle cx="262" cy="38" r="2.4" fill="var(--text)"/>`)}
  </svg>`;
}
const SHUT=["Save your work (Ctrl+S)","Close all open apps","Click Start (Windows logo)","Click the Power icon","Choose Shut down","Close the lid after the screen goes black"];
function orderWidget(el,onDone){
  let picked=[]; const order=RJ.shuffle(SHUT.map((_,i)=>i));
  const draw=()=>{ el.innerHTML=`<div class="order-pick">${order.map(i=>`<button data-i="${i}" ${picked.includes(i)?'disabled':''}>${esc(SHUT[i])}</button>`).join("")}</div>
    <ol class="order-list">${picked.map(i=>`<li>${esc(SHUT[i])}</li>`).join("")}</ol><div class="row"><button class="btn sm" data-reset>Reset order</button></div><div data-res></div>`;
    el.querySelectorAll("[data-i]").forEach(b=>b.onclick=()=>{ picked.push(+b.dataset.i); draw(); if(picked.length===SHUT.length){ const ok=picked.every((v,k)=>v===k); onDone(ok, el.querySelector("[data-res]")); } });
    el.querySelector("[data-reset]").onclick=()=>{ picked=[]; draw(); }; };
  draw();
}
RJ.LABS.laptop=(el,o)=>{
  if(o.mode==="practice"){
    const seen=new Set(); let ordered=false;
    const tasks=[[`Explore all **11 parts** of the laptop (tap each one)`,()=>seen.size>=11],["Put the **shutdown steps** in the correct order",()=>ordered]];
    const tr=tracker(o,tasks);
    el.innerHTML=`<div class="bench-bar"><b style="padding:0 6px">Laptop Anatomy</b><span class="muted small">Tap any part to learn it</span></div>
      <div style="padding:18px;display:grid;gap:18px;grid-template-columns:minmax(0,1.3fr) minmax(0,1fr)" class="lap-grid"><div>${laptopSVG()}</div>
      <div><div class="card" id="pinfo" style="background:var(--card-2)"><span class="eyebrow">Part</span><h3 style="margin:8px 0 6px">Tap a part</h3><p class="muted" style="margin:0">Every part and port is interactive.</p></div><p class="small muted" id="seenc" style="margin-top:10px">Explored 0 / 11</p></div></div>
      <div style="padding:0 18px 18px"><h3 style="font-size:18px;margin-bottom:10px">Shutdown procedure</h3><div id="ord"></div></div>`;
    if(innerWidth<760) el.querySelector(".lap-grid").style.gridTemplateColumns="1fr";
    el.querySelectorAll(".hot").forEach(g=>{ const f=()=>{ el.querySelectorAll(".hot").forEach(x=>x.classList.remove("sel")); g.classList.add("sel"); const p=PARTS[g.dataset.part]; $("#pinfo",el).innerHTML=`<span class="eyebrow">Part</span><h3 style="margin:8px 0 6px">${esc(p[0])}</h3><p style="margin:0">${esc(p[1])}</p>`; seen.add(g.dataset.part); $("#seenc",el).textContent=`Explored ${seen.size} / 11`; tr.check(); };
      g.onclick=f; g.onkeydown=e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); f(); } }; });
    orderWidget($("#ord",el),(ok,r)=>{ r.innerHTML=ok?`<div class="status ok">${RJ.icon("check")} Correct order.</div>`:`<div class="status bad">Not quite. Reset and try again.</div>`; if(ok){ ordered=true; tr.check(); } });
    tr.check();
  } else {
    const asks=RJ.shuffle(Object.keys(PARTS)).slice(0,6); let k=0,right=0,ordered=false,p1=false;
    const tasks=[["Identify parts: at least **5 of 6** correct",()=>p1],["Put the shutdown steps in the correct order",()=>ordered]];
    const tr=tracker(o,tasks);
    el.innerHTML=`<div class="bench-bar"><b style="padding:0 6px" id="askq"></b><span class="chip" id="sc" style="margin-left:auto">0 / 0</span></div>
      <div style="padding:18px">${laptopSVG()}</div><div style="padding:0 18px 18px" id="p2" hidden><h3 style="font-size:18px;margin-bottom:10px">Part 2: Shutdown procedure</h3><div id="ord"></div></div><div style="padding:0 18px 18px" id="fail"></div>`;
    const ask=()=>{ $("#askq",el).innerHTML=k<6?`Question ${k+1} of 6: tap the <span class="grad">${esc(PARTS[asks[k]][0])}</span>`:"Part 1 complete"; };
    ask();
    el.querySelectorAll(".hot").forEach(g=>{ const f=()=>{ if(k>=6) return; const ok=g.dataset.part===asks[k]; if(ok) right++; g.classList.add(ok?"right":"wrong"); setTimeout(()=>g.classList.remove("right","wrong"),650); k++; $("#sc",el).textContent=`${right} / ${k}`; ask();
        if(k===6){ if(right>=5){ p1=true; tr.check(); $("#p2",el).hidden=false; orderWidget($("#ord",el),(ok2,r)=>{ if(ok2){ ordered=true; tr.check(); } else r.innerHTML='<div class="status bad">Wrong order. Reset and try again.</div>'; }); }
          else $("#fail",el).innerHTML=`<div class="status bad">${right}/6 correct. You need 5. Review the lab and retake the exam.</div>`; } };
      g.onclick=f; g.onkeydown=e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); f(); } }; });
    tr.check();
  }
};

/* ======================= FILE EXPLORER ======================= */
const FICON={folder:`<svg viewBox="0 0 42 36"><path d="M2 7a3 3 0 0 1 3-3h10l3.5 4H37a3 3 0 0 1 3 3v19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Z" fill="#F4C35A" stroke="#B88A20" stroke-width="1.2"/><path d="M2 12h38" stroke="#E2AE3C" stroke-width="1.2"/></svg>`,
 file:e=>{ const col={pdf:"#E5484D",docx:"#2F64F0",doc:"#2F64F0",xlsx:"#1E9E5A",pptx:"#E8692C",jpg:"#9B5DE5",png:"#9B5DE5",mp3:"#E05FA4",exe:"#6B7894",txt:"#6B7894",zip:"#C9A227"}[e]||"#6B7894";
  return `<svg viewBox="0 0 42 36"><path d="M11 1h15l8 8v26H11Z" fill="#fff" stroke="#9AA6C0" stroke-width="1.2"/><path d="M26 1v8h8" fill="none" stroke="#9AA6C0" stroke-width="1.2"/><rect x="7" y="18" width="22" height="11" rx="2" fill="${col}"/><text x="18" y="26.2" text-anchor="middle" font-size="6.6" font-family="Arial" font-weight="700" fill="#fff">${esc(e.toUpperCase().slice(0,4))}</text></svg>`; }};
function makeFS(spec){ const fs={nodes:{},seq:0,events:[]}; const add=(name,type,parent)=>{ const id="n"+(++fs.seq); fs.nodes[id]={id,name,type,parent}; return id; }; fs.add=add; fs.roots={};
  ["Desktop","Documents","Downloads","Pictures"].forEach(r=>{ fs.roots[r]=add(r,"folder",null); (spec[r]||[]).forEach(f=>add(f,"file",fs.roots[r])); }); fs.bin=add("Recycle Bin","folder",null); return fs; }
const kids=(fs,p)=>Object.values(fs.nodes).filter(n=>n.parent===p).sort((a,b)=>a.type===b.type?a.name.localeCompare(b.name):a.type==="folder"?-1:1);
const nm=s=>s.trim().toLowerCase();
const findIn=(fs,p,name,type)=>kids(fs,p).find(n=>nm(n.name)===nm(name)&&(!type||n.type===type));
function explorer(el,fs,o,tasks){
  const tr=tracker(o,tasks);
  let cur=fs.roots.Downloads, sel=null, clip=null, ren=null, last={id:null,t:0}, msg="Select an item, then use the toolbar or keyboard shortcuts. Double-click a folder to open it.";
  const ext=n=>(n.name.match(/\.([a-z0-9]+)$/i)||[,"file"])[1].toLowerCase();
  const uniq=(p,name)=>{ let x=name,c=2; while(findIn(fs,p,x)) x=name.replace(/(\.[^.]+)?$/,` (${c++})$1`); return x; };
  const path=id=>{ const a=[]; let n=fs.nodes[id]; while(n){ a.unshift(n.name); n=fs.nodes[n.parent]; } return "This PC  ›  "+a.join("  ›  "); };
  const anc=(a,b)=>{ let n=fs.nodes[b]; while(n){ if(n.id===a) return true; n=fs.nodes[n.parent]; } return false; };
  const clone=(id,p)=>{ const n=fs.nodes[id]; const nid=fs.add(n.name,n.type,p); kids(fs,id).forEach(k=>clone(k.id,nid)); return nid; };
  const A={
    open(){ if(sel&&fs.nodes[sel].type==="folder"&&cur!==fs.bin){ cur=sel; msg=`Opened "${fs.nodes[sel].name}".`; sel=null; } },
    up(){ const p=fs.nodes[cur].parent; if(p){ cur=p; sel=null; } },
    newf(){ if(cur===fs.bin) return; const id=fs.add(uniq(cur,"New folder"),"folder",cur); sel=id; ren=id; msg="Type a name and press Enter."; },
    rename(){ if(sel&&cur!==fs.bin) ren=sel; },
    cut(){ if(!sel) return; clip={id:sel,mode:"cut"}; msg=`Cut "${fs.nodes[sel].name}". Open the destination folder and Paste.`; },
    copy(){ if(!sel) return; clip={id:sel,mode:"copy"}; msg=`Copied "${fs.nodes[sel].name}". Open the destination folder and Paste.`; },
    paste(){ if(!clip||!fs.nodes[clip.id]||cur===fs.bin){ msg="Nothing to paste here."; return; } const n=fs.nodes[clip.id];
      if(clip.mode==="cut"){ if(anc(n.id,cur)){ msg="A folder cannot be moved inside itself."; return; } if(n.parent===cur){ msg="It is already in this folder."; return; } n.name=uniq(cur,n.name); n.parent=cur; fs.events.push({t:"move",name:n.name}); msg=`Moved "${n.name}" here.`; clip=null; }
      else { let x=n.name; if(findIn(fs,cur,x)) x=uniq(cur,n.name.replace(/(\.[^.]+)?$/," - Copy$1")); const id=clone(n.id,cur); fs.nodes[id].name=x; fs.events.push({t:"copy",name:x}); msg=`Copied "${x}" here.`; } },
    del(){ if(!sel||cur===fs.bin) return; const n=fs.nodes[sel]; n.orig=n.parent; n.parent=fs.bin; fs.events.push({t:"del",name:n.name}); msg=`"${n.name}" moved to the Recycle Bin.`; sel=null; },
    restore(){ if(!sel||cur!==fs.bin) return; const n=fs.nodes[sel]; n.parent=n.orig&&fs.nodes[n.orig]?n.orig:fs.roots.Desktop; n.name=uniq(n.parent,n.name); fs.events.push({t:"restore",name:n.name}); msg=`"${n.name}" restored to its original folder.`; sel=null; }
  };
  const draw=()=>{
    const inBin=cur===fs.bin, items=kids(fs,cur), s=sel&&fs.nodes[sel];
    const B=(a,ic,label,en)=>`<button class="tb" data-a="${a}" ${en?'':'disabled'} title="${label}">${RJ.icon(ic)}<span>${label}</span></button>`;
    el.innerHTML=`<div class="bench-bar">${B("up","up","Up",!!fs.nodes[cur].parent)}${B("open","folder","Open",s&&s.type==="folder"&&!inBin)}<span class="sep"></span>${B("newf","plus","New folder",!inBin)}${B("rename","edit","Rename",s&&!inBin)}${B("cut","cut","Cut",s&&!inBin)}${B("copy","copy","Copy",s&&!inBin)}${B("paste","paste","Paste",clip&&!inBin)}<span class="sep"></span>${inBin?B("restore","restore","Restore",!!s):B("del","trash","Delete",!!s)}</div>
     <div class="exp-path">${esc(path(cur))}</div>
     <div class="exp-body"><div class="exp-side">${["Desktop","Documents","Downloads","Pictures"].map(r=>`<button data-go="${fs.roots[r]}" class="${cur===fs.roots[r]?'on':''}">${RJ.icon("folder")}${r}</button>`).join("")}<button data-go="${fs.bin}" class="${inBin?'on':''}">${RJ.icon("trash")}Recycle Bin</button></div>
     <div class="exp-items" tabindex="0" aria-label="Folder contents">${items.length?items.map(n=>`<button class="ei ${sel===n.id?'sel':''}" data-id="${n.id}">${n.type==="folder"?FICON.folder:FICON.file(ext(n))}${ren===n.id?`<input id="ren_${n.id}" value="${esc(n.name)}" aria-label="New name">`:esc(n.name)}</button>`).join(""):'<div class="exp-empty">This folder is empty</div>'}</div></div>
     <div class="exp-msg" aria-live="polite">${esc(msg)}</div>`;
    el.querySelectorAll("[data-a]").forEach(b=>b.onclick=()=>{ A[b.dataset.a](); draw(); });
    el.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>{ cur=b.dataset.go; sel=null; ren=null; draw(); });
    el.querySelectorAll(".ei").forEach(b=>b.onclick=e=>{ if(e.target.tagName==="INPUT") return; const id=b.dataset.id,now=Date.now();
      if(last.id===id&&now-last.t<450&&fs.nodes[id].type==="folder"&&!inBin){ cur=id; sel=null; msg=`Opened "${fs.nodes[id].name}".`; } else sel=id; last={id,t:now}; draw(); el.querySelector(".exp-items").focus(); });
    if(ren){ const inp=el.querySelector("#ren_"+ren); if(inp){ inp.focus(); const dot=inp.value.lastIndexOf("."); inp.setSelectionRange(0,dot>0&&fs.nodes[ren].type==="file"?dot:inp.value.length);
      const commit=()=>{ const v=inp.value.trim(), n=fs.nodes[ren]; if(!n){ ren=null; return; }
        if(!v) msg="A name cannot be empty."; else if(/[\\/:*?"<>|]/.test(v)) msg='Names cannot contain \\ / : * ? " < > |'; else if(findIn(fs,n.parent,v)&&findIn(fs,n.parent,v).id!==n.id) msg="An item with that name already exists.";
        else { if(v!==n.name) fs.events.push({t:"rename",from:n.name,to:v}); n.name=v; msg=`Renamed to "${v}".`; } ren=null; draw(); };
      inp.onkeydown=e=>{ e.stopPropagation(); if(e.key==="Enter"){ e.preventDefault(); commit(); } if(e.key==="Escape"){ ren=null; draw(); } }; inp.onblur=()=>{ if(ren) commit(); }; } }
    tr.check(fs);
  };
  el.onkeydown=e=>{ if(e.target.tagName==="INPUT") return; const c=e.ctrlKey||e.metaKey, k=e.key.toLowerCase(); let a=null;
    if(e.key==="F2") a="rename"; else if(e.key==="Delete") a=cur===fs.bin?null:"del"; else if(c&&e.shiftKey&&k==="n") a="newf"; else if(c&&k==="x") a="cut"; else if(c&&k==="c") a="copy"; else if(c&&k==="v") a="paste"; else if(e.key==="Enter") a="open"; else if(e.key==="Backspace") a="up";
    if(a){ e.preventDefault(); A[a](); draw(); el.querySelector(".exp-items")?.focus(); } };
  draw();
}
RJ.LABS.explorer=(el,o)=>{
  if(o.mode==="practice"){
    const fs=makeFS({Downloads:["resume.pdf","photo1.jpg","junk.txt","song.mp3","setup.exe"],Pictures:["holi-2026.jpg"],Documents:["notes.docx"]});
    const col=f=>Object.values(f.nodes).find(n=>n.type==="folder"&&n.parent===f.roots.Documents&&nm(n.name)==="college");
    explorer(el,fs,o,[
      ["In **Documents**, create a folder named **College**",f=>!!col(f)],
      ["Inside College, create a folder named **Semester-3**",f=>{ const c=col(f); return !!(c&&findIn(f,c.id,"semester-3","folder")); }],
      ["**Move** resume.pdf from Downloads into College",f=>{ const c=col(f); return !!(c&&findIn(f,c.id,"resume.pdf"))&&!findIn(f,f.roots.Downloads,"resume.pdf"); }],
      ["**Rename** photo1.jpg to **profile-photo.jpg**",f=>f.events.some(e=>e.t==="rename"&&nm(e.from)==="photo1.jpg"&&nm(e.to)==="profile-photo.jpg")],
      ["**Copy** notes.docx into College (keep the original)",f=>{ const c=col(f); return !!(c&&findIn(f,c.id,"notes.docx"))&&!!findIn(f,f.roots.Documents,"notes.docx"); }],
      ["**Delete** junk.txt",f=>f.events.some(e=>e.t==="del"&&nm(e.name)==="junk.txt")]
    ]);
  } else {
    const fs=makeFS({Desktop:["todo.txt"],Documents:["marks.xlsx","letter.docx"],Downloads:["setup.exe","syllabus.pdf","old-notes.txt","certificate.png"]});
    let pid=null; const proj=f=>{ if(pid&&f.nodes[pid]) return f.nodes[pid]; const p=Object.values(f.nodes).find(n=>n.type==="folder"&&n.parent===f.roots.Desktop&&nm(n.name)==="projects"); if(p) pid=p.id; return p; };
    explorer(el,fs,o,[
      ["On the **Desktop**, create a folder named **Projects**",f=>!!proj(f)],
      ["**Move** marks.xlsx from Documents into Projects",f=>{ const p=proj(f); return !!(p&&findIn(f,p.id,"marks.xlsx"))&&!findIn(f,f.roots.Documents,"marks.xlsx"); }],
      ["**Copy** syllabus.pdf into Projects (original stays in Downloads)",f=>{ const p=proj(f); return !!(p&&findIn(f,p.id,"syllabus.pdf")&&findIn(f,f.roots.Downloads,"syllabus.pdf")); }],
      ["Rename **Projects** to **Final Year**",f=>{ const p=proj(f); return !!(p&&nm(p.name)==="final year"); }],
      ["**Delete** old-notes.txt, then **restore** it from the Recycle Bin",f=>f.events.some(e=>e.t==="restore"&&nm(e.name)==="old-notes.txt")],
      ["**Delete** setup.exe (unknown installer)",f=>Object.values(f.nodes).some(n=>nm(n.name)==="setup.exe"&&n.parent===f.bin)]
    ]);
  }
};

/* ======================= TYPING ======================= */
const FINGER={q:"lp",a:"lp",z:"lp",1:"lp",w:"lr",s:"lr",x:"lr",2:"lr",e:"lm",d:"lm",c:"lm",3:"lm",r:"li",f:"li",v:"li",t:"li",g:"li",b:"li",4:"li",5:"li",y:"ri",h:"ri",n:"ri",u:"ri",j:"ri",m:"ri",6:"ri",7:"ri",i:"rm",k:"rm",",":"rm",8:"rm",o:"rr",l:"rr",".":"rr",9:"rr",p:"rp",";":"rp","/":"rp",0:"rp"," ":"th"};
const FNAME={lp:"Left little",lr:"Left ring",lm:"Left middle",li:"Left index",ri:"Right index",rm:"Right middle",rr:"Right ring",rp:"Right little",th:"Thumb"};
RJ.TYPE_LESSONS=[["Home row","asdf jkl; asdf jkl; fdsa ;lkj aa ss dd ff jj kk ll ;; asdf jkl;"],["Home row words","add all fall lad ask glad dad sad salad hall flask"],["Top row","qwer uiop were pour tire quit your write power type"],["Bottom row","zxcv nm,. zinc move cave next calm box van mix"],["Common words","the and you that with have this from they will what about"],["Capitals and symbols","My email is riya.shah@gmail.com and my roll number is 42."],["Paragraph","Practice every day for fifteen minutes. Keep your eyes on the screen and your fingers on the home row. Accuracy first, speed second."]];
RJ.TYPE_TEXTS=["Learning to type without looking at the keyboard is one of the most useful skills you can build. It saves time in every assignment, email and line of code you will ever write. Keep your fingers on the home row, sit straight and look at the screen. Mistakes are normal at the start. Slow down, stay accurate and your speed will grow every single day. ",
 "Cyber security starts with simple habits. Lock your laptop when you walk away, use a different password for every account and turn on two factor authentication. Never open attachments from people you do not know and always check the real address of a link before you click it. Small habits stop most attacks. ",
 "A good spreadsheet tells a clear story. Put headings in the first row, keep one type of data in each column and use formulas instead of typing totals by hand. When the data changes, the results update automatically. Charts help people see patterns that are hard to notice in a table of numbers. "];
function kbHTML(){ const rows=["qwertyuiop","asdfghjkl;","zxcvbnm,./"]; return `<div class="kbwrap"><div class="kb">${rows.map(r=>`<div class="r">${[...r].map(ch=>`<span class="k" data-k="${esc(ch)}" style="background:var(--f-${FINGER[ch]})">${esc(ch.toUpperCase())}</span>`).join("")}</div>`).join("")}<div class="r sp"><span class="k space" data-k=" " style="background:var(--f-th)">SPACE</span></div></div><div class="legend">${Object.entries(FNAME).map(([k,v])=>`<span><i style="background:var(--f-${k})"></i>${v}</span>`).join("")}</div></div>`; }
RJ.typer=(box,target,opts={})=>{
  let start=null,errors=0,keys=0,fin=false,left=opts.seconds||null,prev=0;
  box.innerHTML=`<div class="target" aria-hidden="true"></div><textarea class="typein" rows="2" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" aria-label="Type here" placeholder="Click here and start typing…"></textarea>
   <div class="stats"><div class="stat"><small>Speed</small><b data-w>0</b> <span class="muted small">WPM</span></div><div class="stat"><small>Accuracy</small><b data-a>100</b><span class="muted small">%</span></div>${left?`<div class="stat"><small>Time left</small><b data-t>${left}</b><span class="muted small">s</span></div>`:''}<div class="stat"><small>Next finger</small><b class="sm" data-f>—</b></div></div>${opts.keyboard===false?'':kbHTML()}`;
  const tg=box.querySelector(".target"), tin=box.querySelector("textarea");
  const st=()=>{ const v=tin.value; let corr=0; for(let i=0;i<v.length;i++) if(v[i]===target[i]) corr++; const mins=start?Math.max((Date.now()-start)/60000,1/60):0; return {wpm:mins?Math.round(corr/5/mins):0,acc:keys?Math.max(0,Math.round((keys-errors)/keys*100)):100,chars:v.length,errors}; };
  const paint=()=>{ const v=tin.value, from=Math.max(0,v.length-140), to=Math.min(target.length,v.length+160); let h="";
    for(let i=from;i<to;i++){ const c=target[i], ch=esc(c); if(i<v.length) h+=`<span class="${v[i]===c?'ok':'bad'}">${v[i]!==c&&c===" "?"·":ch}</span>`; else if(i===v.length) h+=`<span class="cur">${ch}</span>`; else h+=`<span class="rest">${ch}</span>`; }
    tg.innerHTML=h; const nx=target[v.length];
    box.querySelectorAll(".kb .k").forEach(k=>k.classList.toggle("nxt",nx!==undefined&&k.dataset.k===nx.toLowerCase()));
    const fk=nx&&FINGER[nx.toLowerCase()]; box.querySelector("[data-f]").textContent=nx===undefined?"—":(fk?FNAME[fk]:"—")+(nx&&nx!==nx.toLowerCase()?" + Shift":"");
    const s=st(); box.querySelector("[data-w]").textContent=s.wpm; box.querySelector("[data-a]").textContent=s.acc; };
  const finish=()=>{ if(fin) return; fin=true; tin.disabled=true; opts.onFinish&&opts.onFinish(st()); };
  tin.addEventListener("input",()=>{ if(fin) return; let v=tin.value.replace(/\n/g,""); if(v.length>target.length) v=v.slice(0,target.length); if(v!==tin.value) tin.value=v;
    for(let i=prev;i<v.length;i++){ keys++; if(v[i]!==target[i]) errors++; } prev=v.length;
    if(!start&&v.length){ start=Date.now(); if(left){ const iv=setInterval(()=>{ left--; const t=box.querySelector("[data-t]"); if(t){ t.textContent=Math.max(0,left); t.style.color=left<=10?"var(--bad)":""; } if(left<=0){ clearInterval(iv); finish(); } },1000); RJ.timers.push(iv); } }
    paint(); if(v.length===target.length) finish(); });
  tin.addEventListener("paste",e=>e.preventDefault());
  paint(); return {focus:()=>tin.focus(), stats:st};
};
RJ.LABS.typing=(el,o)=>{
  if(o.mode==="practice"){
    const S=RJ.S; S.typeLessons=S.typeLessons||[]; let cur=Math.min(S.typeLessons.length,RJ.TYPE_LESSONS.length-1);
    const tasks=RJ.TYPE_LESSONS.map((l,i)=>[`Lesson ${i+1}: ${l[0]} with **90%+ accuracy**`,()=>S.typeLessons.includes(i)]);
    const tr=tracker(o,tasks);
    const draw=()=>{ RJ.stopTimers();
      el.innerHTML=`<div class="bench-bar"><div class="lessons-pick" style="margin:0">${RJ.TYPE_LESSONS.map((l,i)=>`<button class="${i===cur?'on':''} ${S.typeLessons.includes(i)?'done':''}" data-l="${i}">${i+1}. ${esc(l[0])}${S.typeLessons.includes(i)?' ✓':''}</button>`).join("")}</div></div><div style="padding:18px" id="ty"></div><div style="padding:0 18px 18px" id="tres"></div>`;
      el.querySelectorAll("[data-l]").forEach(b=>b.onclick=()=>{ cur=+b.dataset.l; draw(); });
      const t=RJ.typer($("#ty",el),RJ.TYPE_LESSONS[cur][1],{onFinish:s=>{
        const ok=s.acc>=90; if(ok&&!S.typeLessons.includes(cur)) S.typeLessons.push(cur); if(!S.typing.best||s.wpm>S.typing.best.wpm) S.typing.best={wpm:s.wpm,acc:s.acc}; RJ.save(); tr.check();
        $("#tres",el).innerHTML=`<div class="status ${ok?'ok':'bad'}">${s.wpm} WPM · ${s.acc}% accuracy. ${ok?'Lesson complete.':'You need 90% accuracy. Slow down and try again.'}</div><div class="row" style="margin-top:10px"><button class="btn sm" data-again>Retry</button>${cur<RJ.TYPE_LESSONS.length-1?'<button class="btn sm pri" data-next>Next lesson</button>':''}</div>`;
        $("[data-again]",el).onclick=draw; const n=$("[data-next]",el); if(n) n.onclick=()=>{ cur++; draw(); };
      }});
      t.focus(); tr.check(); };
    draw();
  } else {
    let passed=false; const tasks=[["Type for 60 seconds at **25 WPM or more**",()=>passed],["Keep accuracy at **90% or higher**",()=>passed]];
    const tr=tracker(o,tasks); tr.check();
    el.innerHTML=`<div class="bench-bar"><b style="padding:0 6px">1-minute timed test</b><span class="muted small">The timer starts with your first key</span></div><div style="padding:18px" id="ty"></div><div style="padding:0 18px 18px" id="tres"></div>`;
    const txt=RJ.TYPE_TEXTS[Math.floor(Math.random()*RJ.TYPE_TEXTS.length)];
    RJ.typer($("#ty",el),txt+txt,{seconds:60,onFinish:s=>{ const S=RJ.S; if(!S.typing.best||s.wpm>S.typing.best.wpm) S.typing.best={wpm:s.wpm,acc:s.acc}; S.typing.history.push({wpm:s.wpm,acc:s.acc,at:Date.now()}); RJ.save();
      if(s.wpm>=25&&s.acc>=90){ passed=true; tr.check(); } else $("#tres",el).innerHTML=`<div class="status bad">${s.wpm} WPM · ${s.acc}%. You need 25 WPM and 90%. Practise the lessons, then retake.</div>`; }}).focus();
  }
};

/* ======================= SHORTCUTS ======================= */
const SC=[["Ctrl+C","Copy","c"],["Ctrl+V","Paste","v"],["Ctrl+X","Cut","x"],["Ctrl+Z","Undo","z"],["Ctrl+Y","Redo","y"],["Ctrl+A","Select all","a"],["Ctrl+S","Save","s"],["Ctrl+F","Find","f"],["Ctrl+B","Bold","b"],["Ctrl+I","Italic","i"],["Ctrl+U","Underline","u"],["Ctrl+P","Print","p"],["Ctrl+K","Insert link","k"],["Ctrl+E","Center align","e"],["Ctrl+H","Find and replace","h"]];
function stage(el,onKey){
  el.innerHTML=`<div class="sc-stage" tabindex="0"><span class="eyebrow">Click here, then press the shortcut</span><div class="ask"></div><div class="ans"></div><div class="hint"></div></div>`;
  const s=el.querySelector(".sc-stage");
  s.addEventListener("keydown",e=>{ if(["Control","Meta","Shift","Alt"].includes(e.key)) return; const k=e.key.toLowerCase(); if((e.ctrlKey||e.metaKey)&&!e.altKey){ e.preventDefault(); onKey(k,true); } else if(k.length===1){ e.preventDefault(); onKey(k,false); } });
  setTimeout(()=>s.focus(),60); return s;
}
RJ.LABS.shortcuts=(el,o)=>{
  el.innerHTML=`<div class="bench-bar"><b style="padding:0 6px">${o.mode==="practice"?"Shortcut trainer":"Shortcut exam"}</b><span class="chip" id="scc" style="margin-left:auto"></span></div><div style="padding:18px" id="st"></div>${o.mode==="practice"?`<div style="padding:0 18px 18px"><h3 style="font-size:17px;margin-bottom:8px">Real text practice</h3><p class="muted small">Use ${RJ.keycaps("Ctrl+A")}, ${RJ.keycaps("Ctrl+C")}, ${RJ.keycaps("Ctrl+V")} and ${RJ.keycaps("Ctrl+Z")} on the text below.</p><textarea class="typein" rows="3">rootjavs: learn it, practise it, prove it.</textarea><textarea class="typein" rows="3" placeholder="Paste here with Ctrl+V"></textarea></div>`:''}`;
  if(o.mode==="practice"){
    const seen=new Set(); let q=RJ.shuffle(SC)[0], streak=0, best=0;
    const tasks=[["Get **10 shortcuts** right",()=>seen.size>=10],["Reach a **streak of 5** without a mistake",()=>best>=5]];
    const tr=tracker(o,tasks);
    const show=()=>{ $(".ask",el).textContent=q[1]; $(".ans",el).innerHTML=""; $(".hint",el).textContent=""; $("#scc",el).textContent=`Learned ${seen.size} · Streak ${streak}`; };
    stage($("#st",el),(k,ctrl)=>{ if(ctrl&&k===q[2]){ seen.add(q[0]); streak++; best=Math.max(best,streak); $(".ans",el).innerHTML=RJ.keycaps(q[0]); $(".hint",el).textContent="Correct!"; tr.check(); const p=q; setTimeout(()=>{ do{ q=RJ.shuffle(SC)[0]; }while(q===p); show(); },650); }
      else { streak=0; $(".ans",el).innerHTML=RJ.keycaps(q[0]); $(".hint",el).textContent=ctrl?"Not this one. The answer is shown above; press it now.":"Hold Ctrl, then press the letter."; } $("#scc",el).textContent=`Learned ${seen.size} · Streak ${streak}`; });
    show(); tr.check();
  } else {
    const qs=RJ.shuffle(SC).slice(0,10); let k=0,right=0,lock=false,done=false;
    const tasks=[["Answer all **10 prompts**",()=>k>=10],["Get at least **8 correct**",()=>done&&right>=8]];
    const tr=tracker(o,tasks);
    const show=()=>{ if(k<10){ $(".ask",el).textContent=qs[k][1]; $(".ans",el).innerHTML=""; $(".hint",el).textContent=""; } $("#scc",el).textContent=`Question ${Math.min(k+1,10)} / 10 · Correct ${right}`; };
    stage($("#st",el),(key,ctrl)=>{ if(lock||k>=10) return; if(!ctrl){ $(".hint",el).textContent="Hold Ctrl, then press the letter."; return; } lock=true; const ok=key===qs[k][2]; if(ok) right++;
      $(".ans",el).innerHTML=RJ.keycaps(qs[k][0]); $(".hint",el).textContent=ok?"Correct":"Wrong. The right answer is shown.";
      setTimeout(()=>{ k++; lock=false; show(); if(k===10){ done=true; $(".ask",el).textContent=right>=8?"Exam complete":"Exam complete: below 8"; $(".hint",el).textContent=right>=8?"":"Practise in the trainer, then retake the exam."; } tr.check(); },700); });
    show(); tr.check();
  }
};

/* ======================= WORD ======================= */
RJ.LABS.word=(el,o)=>{
  const practice=o.mode==="practice";
  const start=practice?`<p>Riya Shah</p><p>riya.shah@email.com | +91 98765 43210 | Vadodara, Gujarat</p><p>Career Objective</p><p>Motivated computer science student looking for an internship where I can use my skills in web development and cyber security.</p><p>Skills</p><p>HTML and CSS</p><p>MS Excel and Word</p><p>Basic Python</p><p>Education</p><p>B.Tech Computer Science, Parul University, 2023 to 2027</p>`
    :`<p>11 October 2026</p><p>To,</p><p>The Head of Department,</p><p>Department of Computer Science,</p><p>Parul University, Vadodara</p><p>Leave Application</p><p>Subject: Request for leave for three days</p><p>Respected Sir/Madam,</p><p>I am a student of the third semester. I request leave from college for three days because I have to attend my cousin's wedding in Surat. I will complete all pending assignments after I return and collect the notes from my classmates.</p><p>Reasons for leave</p><p>Family wedding in Surat</p><p>Travel on the first day</p><p>Return journey on the third day</p><p>Kindly grant me leave for the above dates.</p><p>Yours sincerely,</p><p>Riya Shah</p>`;
  const tasks=practice?[
    ["Turn the name into a **Heading 1**",d=>[...d.querySelectorAll("h1")].some(h=>h.textContent.trim().length>=3)],
    ["**Center-align** the Heading 1",d=>[...d.querySelectorAll("h1")].some(h=>getComputedStyle(h).textAlign==="center")],
    ["Make Career Objective, Skills and Education **Heading 2**",d=>d.querySelectorAll("h2").length>=3],
    ["Turn the three skills into a **bulleted list**",d=>[...d.querySelectorAll("ul")].some(u=>[...u.querySelectorAll("li")].filter(l=>l.textContent.trim()).length>=3)],
    ["Make the university name **bold**",d=>[...d.querySelectorAll("b,strong")].some(b=>/parul|university/i.test(b.textContent))],
    ["Insert a **table** with at least 2 rows (e.g. Projects)",d=>[...d.querySelectorAll("table")].some(t=>t.rows.length>=2)]
  ]:[
    ["Make **Leave Application** a centered Heading 1",d=>[...d.querySelectorAll("h1")].some(h=>/leave/i.test(h.textContent)&&getComputedStyle(h).textAlign==="center")],
    ["**Right-align** the date",d=>[...d.querySelectorAll("p,div,h1,h2")].some(p=>/2026/.test(p.textContent)&&getComputedStyle(p).textAlign==="right")],
    ["Make the **Subject** line bold",d=>[...d.querySelectorAll("b,strong")].some(b=>/subject/i.test(b.textContent))],
    ["Make **Reasons for leave** a Heading 2",d=>[...d.querySelectorAll("h2")].some(h=>/reason/i.test(h.textContent))],
    ["Turn the three reasons into a **numbered list**",d=>[...d.querySelectorAll("ol")].some(u=>u.querySelectorAll("li").length>=3)],
    ["Add a **table** with at least 3 rows for leave dates",d=>[...d.querySelectorAll("table")].some(t=>t.rows.length>=3)],
    ["Document has at least **90 words**",d=>d.innerText.trim().split(/\s+/).length>=90]
  ];
  const tr=tracker(o,tasks);
  const T=(cmd,label,inner,title)=>`<button class="tb" data-cmd="${cmd}" title="${title||label}" aria-label="${title||label}">${inner||label}</button>`;
  el.innerHTML=`<div class="bench-bar">
    <select id="blk" aria-label="Paragraph style"><option value="p">Normal</option><option value="h1">Heading 1</option><option value="h2">Heading 2</option></select>
    <span class="sep"></span>${T("bold","B","<b>B</b>","Bold (Ctrl+B)")}${T("italic","I","<i>I</i>","Italic (Ctrl+I)")}${T("underline","U","<u>U</u>","Underline (Ctrl+U)")}
    <span class="sep"></span>${T("insertUnorderedList","• List","","Bullets")}${T("insertOrderedList","1. List","","Numbering")}
    <span class="sep"></span>${T("justifyLeft","Left")}${T("justifyCenter","Center")}${T("justifyRight","Right")}${T("justifyFull","Justify")}
    <span class="sep"></span><button class="tb" id="tblBtn" title="Insert table">${RJ.icon("sheet")} Table</button>${T("undo","Undo")}${T("redo","Redo")}
    <span style="margin-left:auto" class="muted small" id="wc"></span></div>
    <div class="paper-zone"><div class="paper" contenteditable="true" spellcheck="true" id="paper" aria-label="Document">${start}</div></div>
    <div class="bench-bar" style="border-top:1px solid var(--line);border-bottom:0"><button class="btn sm pri" id="dlDoc">${RJ.icon("download")} Download Word file</button><span class="muted small">Opens in MS Word, Google Docs and LibreOffice</span></div>`;
  const paper=$("#paper",el);
  try{ document.execCommand("styleWithCSS",false,false); document.execCommand("defaultParagraphSeparator",false,"p"); }catch(e){}
  const upd=()=>{ $("#wc",el).textContent=`${paper.innerText.trim().split(/\s+/).filter(Boolean).length} words`; tr.recheck(paper);
    let n=getSelection().anchorNode; while(n&&n!==paper&&!(n.nodeType===1&&/^(P|H1|H2|LI|DIV)$/.test(n.tagName))) n=n.parentNode; if(n&&n!==paper){ const t=n.tagName.toLowerCase(); $("#blk",el).value=t==="h1"||t==="h2"?t:"p"; } };
  el.querySelectorAll("[data-cmd]").forEach(b=>b.onmousedown=e=>{ e.preventDefault(); paper.focus(); document.execCommand(b.dataset.cmd,false,null); upd(); });
  $("#blk",el).onchange=e=>{ paper.focus(); document.execCommand("formatBlock",false,"<"+e.target.value+">"); upd(); };
  $("#tblBtn",el).onmousedown=e=>{ e.preventDefault(); paper.focus(); const rows=practice?3:4; const head=practice?["Project","Technology"]:["Date","Day"]; const body=practice?[["Portfolio website","HTML, CSS"],["Marks analyser","MS Excel"]]:[["13 Oct 2026","Tuesday"],["14 Oct 2026","Wednesday"],["15 Oct 2026","Thursday"]];
    document.execCommand("insertHTML",false,`<table><tr>${head.map(h=>`<th>${h}</th>`).join("")}</tr>${body.slice(0,rows-1).map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</table><p><br></p>`); upd(); };
  paper.addEventListener("input",upd); paper.addEventListener("keyup",upd); paper.addEventListener("mouseup",upd);
  $("#dlDoc",el).onclick=()=>{ const html=`<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="utf-8"><title>Document</title><style>body{font-family:Calibri,Arial;font-size:11pt}h1{font-family:Cambria;color:#1F3864;font-size:20pt}h2{font-family:Cambria;color:#2F5496;font-size:14pt}table{border-collapse:collapse}td,th{border:1px solid #888;padding:4pt 6pt}</style></head><body>${paper.innerHTML}</body></html>`;
    RJ.saveBlob(new Blob(["﻿",html],{type:"application/msword"}),practice?"my-resume.doc":"leave-application.doc"); RJ.toast("Word file downloaded"); };
  upd();
};

/* ======================= EXCEL (formula engine) ======================= */
const COLS="ABCDEFGH".split(""), NROWS=14;
function colIdx(L){ return L.charCodeAt(0)-65; }
function parseRef(r){ const m=/^\$?([A-Z])\$?(\d+)$/.exec(r); return m?{c:colIdx(m[1]),r:+m[2]}:null; }
function Engine(cells){
  const E={cells,cache:{}};
  const raw=a=>E.cells[a]??"";
  E.val=a=>{ if(a in E.cache) return E.cache[a]; E.cache[a]={err:"#CIRC!"}; const r=raw(a); let v;
    if(typeof r==="string"&&r.startsWith("=")){ try{ v=evalF(r.slice(1)); }catch(e){ v={err:e.message&&e.message.startsWith("#")?e.message:"#ERROR!"}; } }
    else if(r===""){ v=""; } else if(!isNaN(r)&&String(r).trim()!==""){ v=+r; } else v=r;
    E.cache[a]=v; return v; };
  E.reset=()=>{ E.cache={}; };
  function evalF(src){
    const toks=[]; const re=/\s*(\$?[A-Z]\$?\d+:\$?[A-Z]\$?\d+|TRUE(?!\()|FALSE(?!\()|\$?[A-Z]\$?\d+(?![A-Z0-9(])|\d+(?:\.\d+)?|"(?:[^"]|"")*"|[A-Z][A-Z0-9.]*(?=\()|<=|>=|<>|[-+*/^&=<>(),%])\s*/y;
    const S=src.trim().replace(/"(?:[^"]|"")*"|[a-z]+/gi,s=>s.startsWith('"')?s:s.toUpperCase());
    let m; re.lastIndex=0;
    while(re.lastIndex<S.length){ const st=re.lastIndex; m=re.exec(S); if(!m||m.index!==st) throw new Error("#NAME?"); toks.push(m[1]); }
    let p=0; const peek=()=>toks[p], next=()=>toks[p++];
    const num=v=>{ if(v&&v.err) throw new Error(v.err); if(v===""||v==null) return 0; if(typeof v==="boolean") return v?1:0; if(typeof v==="number") return v; const n=Number(v); if(isNaN(n)) throw new Error("#VALUE!"); return n; };
    const str=v=>{ if(v&&v.err) throw new Error(v.err); if(typeof v==="boolean") return v?"TRUE":"FALSE"; return String(v??""); };
    function cmp(){ let a=cat(); while(["=","<>","<",">","<=",">="].includes(peek())){ const op=next(), b=cat(); const x=typeof a==="string"||typeof b==="string"?[str(a).toLowerCase(),str(b).toLowerCase()]:[num(a),num(b)];
      a={"=":x[0]===x[1],"<>":x[0]!==x[1],"<":x[0]<x[1],">":x[0]>x[1],"<=":x[0]<=x[1],">=":x[0]>=x[1]}[op]; } return a; }
    function cat(){ let a=add(); while(peek()==="&"){ next(); a=str(a)+str(add()); } return a; }
    function add(){ let a=mul(); while(peek()==="+"||peek()==="-"){ const op=next(), b=mul(); a=op==="+"?num(a)+num(b):num(a)-num(b); } return a; }
    function mul(){ let a=pow(); while(peek()==="*"||peek()==="/"){ const op=next(), b=pow(); if(op==="/"){ if(num(b)===0) throw new Error("#DIV/0!"); a=num(a)/num(b);} else a=num(a)*num(b); } return a; }
    function pow(){ let a=unary(); while(peek()==="^"){ next(); a=Math.pow(num(a),num(unary())); } return a; }
    function unary(){ if(peek()==="-"){ next(); return -num(unary()); } if(peek()==="+"){ next(); return num(unary()); } let v=prim(); if(peek()==="%"){ next(); v=num(v)/100; } return v; }
    function range(t){ const [a,b]=t.split(":").map(parseRef); if(!a||!b) throw new Error("#REF!"); const out=[]; for(let r=Math.min(a.r,b.r);r<=Math.max(a.r,b.r);r++){ const row=[]; for(let c=Math.min(a.c,b.c);c<=Math.max(a.c,b.c);c++) row.push(E.val(COLS[c]+r)); out.push(row);} return out; }
    function prim(){ const t=next(); if(t==null) throw new Error("#ERROR!");
      if(t==="("){ const v=cmp(); if(next()!==")") throw new Error("#ERROR!"); return v; }
      if(/^\d/.test(t)) return +t;
      if(t[0]==='"') return t.slice(1,-1).replace(/""/g,'"');
      if(t.includes(":")) return {range:range(t)};
      if(/^\$?[A-Z]\$?\d+$/.test(t)){ const r=parseRef(t); if(!r||r.c>=COLS.length||r.r<1||r.r>NROWS) throw new Error("#REF!"); const v=E.val(COLS[r.c]+r.r); if(v&&v.err) throw new Error(v.err); return v; }
      if(t==="TRUE") return true; if(t==="FALSE") return false;
      if(/^[A-Z]/.test(t)){ if(next()!=="(") throw new Error("#NAME?"); const args=[]; if(peek()!==")"){ args.push(cmp()); while(peek()===","){ next(); args.push(cmp()); } } if(next()!==")") throw new Error("#ERROR!"); return fn(t,args); }
      throw new Error("#ERROR!"); }
    const flat=args=>args.flatMap(a=>a&&a.range?a.range.flat():[a]);
    const nums=args=>flat(args).filter(v=>typeof v==="number");
    function crit(c){ const m=/^(<=|>=|<>|<|>|=)?(.*)$/.exec(str(c)); const op=m[1]||"=", rhs=m[2]; const isN=rhs!==""&&!isNaN(rhs);
      return v=>{ if(isN&&typeof v==="number"){ const r=+rhs; return {"=":v===r,"<>":v!==r,"<":v<r,">":v>r,"<=":v<=r,">=":v>=r}[op]; } const a=str(v).toLowerCase(), b=rhs.toLowerCase(); return op==="<>"?a!==b:op==="="?a===b:false; }; }
    function fn(n,a){ const F={
      SUM:()=>nums(a).reduce((x,y)=>x+y,0),
      AVERAGE:()=>{ const v=nums(a); if(!v.length) throw new Error("#DIV/0!"); return v.reduce((x,y)=>x+y,0)/v.length; },
      MIN:()=>{ const v=nums(a); return v.length?Math.min(...v):0; }, MAX:()=>{ const v=nums(a); return v.length?Math.max(...v):0; },
      COUNT:()=>nums(a).length, COUNTA:()=>flat(a).filter(v=>v!==""&&v!=null).length,
      IF:()=>{ const c=a[0]; const t=typeof c==="string"?c!=="":typeof c==="number"?c!==0:!!c; return t?(a[1]??true):(a[2]??false); },
      AND:()=>flat(a).every(v=>!!v), OR:()=>flat(a).some(v=>!!v), NOT:()=>!a[0],
      ROUND:()=>{ const f=Math.pow(10,num(a[1]??0)); return Math.round(num(a[0])*f)/f; }, ABS:()=>Math.abs(num(a[0])),
      COUNTIF:()=>{ const t=crit(a[1]); return flat([a[0]]).filter(t).length; },
      SUMIF:()=>{ const t=crit(a[1]); const r=flat([a[0]]), s=a[2]?flat([a[2]]):r; return r.reduce((x,v,i)=>x+(t(v)&&typeof s[i]==="number"?s[i]:0),0); },
      CONCAT:()=>flat(a).map(str).join(""), CONCATENATE:()=>flat(a).map(str).join(""),
      UPPER:()=>str(a[0]).toUpperCase(), LOWER:()=>str(a[0]).toLowerCase(), PROPER:()=>str(a[0]).toLowerCase().replace(/\b\w/g,c=>c.toUpperCase()),
      LEN:()=>str(a[0]).length, TRIM:()=>str(a[0]).trim().replace(/\s+/g," "),
      IFERROR:()=>a[0], TODAY:()=>new Date().toLocaleDateString("en-IN"),
      VLOOKUP:()=>{ const tb=a[1]&&a[1].range; if(!tb) throw new Error("#REF!"); const ci=num(a[2])-1; const row=tb.find(r=>str(r[0]).toLowerCase()===str(a[0]).toLowerCase()); if(!row) throw new Error("#N/A"); if(ci<0||ci>=row.length) throw new Error("#REF!"); return row[ci]; }
    }; if(!F[n]) throw new Error("#NAME?"); return F[n](); }
    const v=cmp(); if(p<toks.length) throw new Error("#ERROR!"); if(v&&v.range) return v.range[0][0]; return v;
  }
  return E;
}
RJ.Engine=Engine;
function show(v){ if(v&&v.err) return v.err; if(typeof v==="boolean") return v?"TRUE":"FALSE"; if(typeof v==="number"){ return Number.isInteger(v)?String(v):String(Math.round(v*100)/100); } return String(v??""); }
RJ.LABS.excel=(el,o)=>{
  const practice=o.mode==="practice";
  const cells={};
  const put=(a,v)=>{ cells[a]=v; };
  let hdr=[];
  if(practice){ hdr=["A1","B1","C1","D1","E1","F1"]; [["Name","Maths","Science","English","Total","Result"],["Riya Shah",78,85,72],["Aman Patel",45,52,38],["Priya Desai",91,88,95],["Karan Mehta",62,48,55],["Neha Joshi",35,42,50]].forEach((r,i)=>r.forEach((v,j)=>put(COLS[j]+(i+1),String(v))));
    put("A8","Class Average"); put("A9","Highest Total"); put("A10","Students Passed"); hdr.push("A8","A9","A10"); }
  else { hdr=["A1","B1","C1","D1"]; [["Category","Amount (Rs)","Share %","Status"],["Rent",8000],["Food",4500],["Transport",1500],["Phone & Internet",800],["Books",1200],["Entertainment",1000]].forEach((r,i)=>r.forEach((v,j)=>put(COLS[j]+(i+1),String(v))));
    put("A9","Total"); put("A10","Highest expense"); put("A11","Average expense"); hdr.push("A9","A10","A11"); }
  const E=Engine(cells);
  const isF=a=>String(cells[a]||"").startsWith("=");
  const has=(a,f)=>isF(a)&&String(cells[a]).toUpperCase().includes(f);
  const near=(x,y)=>typeof x==="number"&&Math.abs(x-y)<0.06;
  const v=a=>E.val(a);
  const rng=(c,a,b)=>{ const o=[]; for(let r=a;r<=b;r++) o.push(c+r); return o; };
  const tasks=practice?[
    ["In **E2:E6**, calculate each Total with **=SUM()**",()=>[2,3,4,5,6].every(r=>has("E"+r,"SUM")&&near(v("E"+r),num3(r)))],
    ["In **F2:F6**, show **\"Pass\"** if Total ≥ 150, else **\"Fail\"** using **=IF()**",()=>[2,3,4,5,6].every(r=>has("F"+r,"IF")&&String(v("F"+r)).toLowerCase()===(num3(r)>=150?"pass":"fail"))],
    ["In **B8**, find the Maths class average with **=AVERAGE()**",()=>has("B8","AVERAGE")&&near(v("B8"),62.2)],
    ["In **E9**, find the highest total with **=MAX()**",()=>has("E9","MAX")&&near(v("E9"),274)],
    ["In **F10**, count students who passed with **=COUNTIF()**",()=>has("F10","COUNTIF")&&v("F10")===3]
  ]:[
    ["In **B9**, calculate the total with **=SUM()**",()=>has("B9","SUM")&&near(v("B9"),17000)],
    ["In **C2:C7**, calculate each share of the total in % (amount ÷ total × 100)",()=>rng("C",2,7).every((a,i)=>isF(a)&&near(v(a),[8000,4500,1500,800,1200,1000][i]/17000*100))],
    ["In **D2:D7**, show **\"High\"** if amount > 2000, else **\"OK\"** using =IF()",()=>rng("D",2,7).every((a,i)=>has(a,"IF")&&String(v(a)).toLowerCase()===([8000,4500,1500,800,1200,1000][i]>2000?"high":"ok"))],
    ["In **B10**, find the highest expense with **=MAX()**",()=>has("B10","MAX")&&near(v("B10"),8000)],
    ["In **B11**, find the average expense with **=AVERAGE()**",()=>has("B11","AVERAGE")&&near(v("B11"),17000/6)]
  ];
  function num3(r){ return (+cells["B"+r]||0)+(+cells["C"+r]||0)+(+cells["D"+r]||0); }
  const tr=tracker(o,tasks);
  let sel="E2", editing=null;
  if(!practice) sel="B9";
  el.innerHTML=`<div class="bench-bar"><b style="padding:0 6px">${practice?"Marksheet.xlsx":"Monthly-Budget.xlsx"}</b><span class="muted small">Click a cell, type a value or a formula starting with =, press Enter</span>
     <button class="btn sm pri" id="dlX" style="margin-left:auto">${RJ.icon("download")} Download .xlsx</button></div>
    <div class="fbar"><span class="addr" id="addr">A1</span><span class="fx">fx</span><input id="fx" aria-label="Formula bar" autocomplete="off" spellcheck="false"></div>
    <div class="sheet-wrap" id="sw"><table class="sheet" id="grid"></table></div>
    <div class="exp-msg small">Supported: + − × ÷ ^ &amp;, SUM, AVERAGE, MIN, MAX, COUNT, COUNTA, IF, AND, OR, ROUND, COUNTIF, SUMIF, VLOOKUP, CONCAT, UPPER, LOWER, PROPER, LEN, TRIM. Absolute references like $B$9 work.</div>`;
  const grid=$("#grid",el), fx=$("#fx",el);
  const render=()=>{ E.reset();
    let h=`<thead><tr><th class="corner"></th>${COLS.map(c=>`<th>${c}</th>`).join("")}</tr></thead><tbody>`;
    for(let r=1;r<=NROWS;r++){ h+=`<tr><th class="rh">${r}</th>`; for(const c of COLS){ const a=c+r, val=E.val(a), err=val&&val.err;
      h+=`<td data-a="${a}" class="${sel===a?'sel':''} ${typeof val==="number"?'num':''} ${err?'err':''} ${hdr.includes(a)?'hdrcell':''}">${editing===a?`<input id="ced" value="${esc(cells[a]||"")}" spellcheck="false">`:`<div class="cv">${esc(show(val))}</div>`}</td>`; } h+="</tr>"; }
    grid.innerHTML=h+"</tbody>"; $("#addr",el).textContent=sel; if(document.activeElement!==fx) fx.value=cells[sel]||"";
    const ce=$("#ced",el); if(ce){ ce.focus(); ce.setSelectionRange(ce.value.length,ce.value.length);
      ce.onkeydown=e=>{ if(e.key==="Enter"||e.key==="Tab"){ e.preventDefault(); commit(ce.value); move(e.key==="Tab"?1:0,e.key==="Enter"?1:0); } else if(e.key==="Escape"){ editing=null; render(); } };
      ce.oninput=()=>{ fx.value=ce.value; }; ce.onblur=()=>{ if(editing){ commit(ce.value); } }; }
    tr.recheck();
  };
  const commit=val=>{ const a=editing||sel; if(val==="") delete cells[a]; else cells[a]=val; editing=null; render(); };
  const move=(dc,dr)=>{ const p=parseRef(sel); const c=Math.max(0,Math.min(COLS.length-1,p.c+dc)), r=Math.max(1,Math.min(NROWS,p.r+dr)); sel=COLS[c]+r; render(); };
  grid.addEventListener("mousedown",e=>{ const td=e.target.closest("td"); if(!td||e.target.tagName==="INPUT") return; if(editing){ commit($("#ced",el).value); } sel=td.dataset.a; render(); $("#sw",el).focus(); });
  grid.addEventListener("dblclick",e=>{ const td=e.target.closest("td"); if(!td) return; sel=td.dataset.a; editing=sel; render(); });
  const sw=$("#sw",el); sw.tabIndex=0;
  sw.addEventListener("keydown",e=>{ if(editing) return; const k=e.key;
    if(k==="ArrowDown"||k==="Enter"){ e.preventDefault(); move(0,1); } else if(k==="ArrowUp"){ e.preventDefault(); move(0,-1); } else if(k==="ArrowLeft"){ e.preventDefault(); move(-1,0); } else if(k==="ArrowRight"||k==="Tab"){ e.preventDefault(); move(1,0); }
    else if(k==="Delete"||k==="Backspace"){ e.preventDefault(); delete cells[sel]; render(); } else if(k==="F2"){ e.preventDefault(); editing=sel; render(); }
    else if(k.length===1&&!e.ctrlKey&&!e.metaKey){ e.preventDefault(); editing=sel; cells[sel]=k; render(); } });
  fx.addEventListener("keydown",e=>{ if(e.key==="Enter"){ e.preventDefault(); editing=null; const val=fx.value; if(val==="") delete cells[sel]; else cells[sel]=val; fx.blur(); move(0,1); } });
  $("#dlX",el).onclick=()=>{ if(!window.XLSX){ RJ.toast("Spreadsheet engine not loaded."); return; } E.reset(); const ws={}; let maxR=1;
    Object.keys(cells).forEach(a=>{ const p=parseRef(a); maxR=Math.max(maxR,p.r); const r=cells[a]; const val=E.val(a);
      if(String(r).startsWith("=")) ws[a]={t:typeof val==="number"?"n":typeof val==="boolean"?"b":"s",v:val&&val.err?val.err:val,f:String(r).slice(1)};
      else if(!isNaN(r)&&r!=="") ws[a]={t:"n",v:+r}; else ws[a]={t:"s",v:String(r)}; });
    ws["!ref"]=`A1:${COLS[COLS.length-1]}${maxR}`; ws["!cols"]=[{wch:20},{wch:12},{wch:12},{wch:12},{wch:12},{wch:12},{wch:12},{wch:12}];
    const wb=XLSX.utils.book_new(); XLSX.utils.book_append_sheet(wb,ws,practice?"Marksheet":"Budget"); XLSX.writeFile(wb,practice?"marksheet.xlsx":"monthly-budget.xlsx"); RJ.toast("Excel file downloaded"); };
  render();
};

/* ======================= POWERPOINT ======================= */
const THEMES=[{n:"Plain",bg:"#FFFFFF",fg:"#1F2937",ac:"#6B7280",sub:"#6B7280"},{n:"Midnight",bg:"#0B1120",fg:"#FFFFFF",ac:"#5B8CFF",sub:"#9FB2DA"},{n:"Ocean",bg:"#0E4D64",fg:"#FFFFFF",ac:"#7FE0F0",sub:"#B9E6EF"},{n:"Paper",bg:"#FAF7F0",fg:"#14213D",ac:"#E85D04",sub:"#5C6784"},{n:"Forest",bg:"#123B2E",fg:"#F1F7F2",ac:"#8BD3A7",sub:"#B7D6C3"}];
function slideHTML(s,th){ const T=THEMES[th]; const lines=(s.body||"").split("\n").map(x=>x.trim()).filter(Boolean);
  const deco=`<span class="deco" style="left:0;top:0;bottom:0;width:2.2cqw;background:${T.ac}"></span>`;
  if(s.layout==="title") return `<div class="slide title" style="background:${T.bg};color:${T.fg}">${deco}<div class="in"><h3>${esc(s.title)||'<span style="opacity:.35">Click to add title</span>'}</h3><div class="sub" style="color:${T.sub}">${esc(lines.join(" · "))}</div><span style="display:block;width:14cqw;height:.8cqw;background:${T.ac};margin-top:3cqw"></span></div></div>`;
  if(s.layout==="section") return `<div class="slide section" style="background:${T.ac};color:${T.bg}"><div class="in"><div style="font-family:var(--mono);font-size:2.4cqw;letter-spacing:.2em;opacity:.8">SECTION</div><h3>${esc(s.title)||'<span style="opacity:.4">Section title</span>'}</h3></div></div>`;
  return `<div class="slide" style="background:${T.bg};color:${T.fg}">${deco}<div class="in"><h3 style="color:${T.fg}">${esc(s.title)||'<span style="opacity:.35">Slide title</span>'}</h3><span style="display:block;width:8cqw;height:.6cqw;background:${T.ac};margin-top:1.6cqw"></span><ul>${lines.map(l=>`<li>${esc(l)}</li>`).join("")}</ul></div></div>`;
}
RJ.LABS.ppt=(el,o)=>{
  const practice=o.mode==="practice";
  const D={theme:0,slides:[{layout:"title",title:"",body:"",notes:""}]}; let cur=0;
  const bullets=s=>(s.body||"").split("\n").filter(x=>x.trim()).length;
  const tasks=practice?[
    ["Slide 1 uses the **Title** layout with your name as the title",()=>D.slides[0].layout==="title"&&D.slides[0].title.trim().length>=3],
    ["Have at least **4 slides**",()=>D.slides.length>=4],
    ["At least **2 bullet slides** with **3+ bullets** each",()=>D.slides.filter(s=>s.layout==="bullets"&&bullets(s)>=3).length>=2],
    ["Apply a **theme** other than Plain",()=>D.theme!==0],
    ["Add **speaker notes** to at least one slide",()=>D.slides.some(s=>s.notes.trim().length>=10)],
    ["The last slide title contains **Thank you**",()=>/thank/i.test(D.slides[D.slides.length-1].title)]
  ]:[
    ["Slide 1: **Title** layout with a title containing **Cyber**",()=>D.slides[0].layout==="title"&&/cyber/i.test(D.slides[0].title)],
    ["Have at least **6 slides**",()=>D.slides.length>=6],
    ["Include at least one **Section** slide",()=>D.slides.some(s=>s.layout==="section"&&s.title.trim())],
    ["At least **3 bullet slides** with **3+ bullets** each",()=>D.slides.filter(s=>s.layout==="bullets"&&bullets(s)>=3).length>=3],
    ["**Speaker notes** on at least 3 slides",()=>D.slides.filter(s=>s.notes.trim().length>=10).length>=3],
    ["Apply a theme other than Plain",()=>D.theme!==0],
    ["Last slide title contains **Thank you** or **Questions**",()=>/thank|question/i.test(D.slides[D.slides.length-1].title)]
  ];
  const tr=tracker(o,tasks);
  el.innerHTML=`<div class="bench-bar">
    <button class="tb" data-a="add">${RJ.icon("plus")} New slide</button><button class="tb" data-a="dup">${RJ.icon("copy")} Duplicate</button><button class="tb" data-a="del">${RJ.icon("trash")} Delete</button>
    <button class="tb" data-a="upm" title="Move up">↑</button><button class="tb" data-a="dnm" title="Move down">↓</button><span class="sep"></span>
    <label class="small muted" for="thm">Theme</label><select id="thm">${THEMES.map((t,i)=>`<option value="${i}">${t.n}</option>`).join("")}</select>
    <button class="btn sm pri" id="dlP" style="margin-left:auto">${RJ.icon("download")} Download .pptx</button></div>
    <div class="ppt"><div class="thumbs" id="thumbs"></div><div class="stage"><div id="big"></div>
      <div class="fields"><div class="grid g2" style="gap:10px"><div class="field"><label for="lay">Layout</label><select id="lay"><option value="title">Title slide</option><option value="bullets">Title and bullets</option><option value="section">Section header</option></select></div>
      <div class="field"><label for="tt">Title</label><input id="tt" maxlength="80" placeholder="Slide title"></div></div>
      <div class="field"><label for="bd" id="bdl">Bullets (one per line)</label><textarea id="bd" rows="4"></textarea></div>
      <div class="field"><label for="nt">Speaker notes (what you will say)</label><textarea id="nt" rows="2" placeholder="Speaker notes are visible only to you in Presenter View"></textarea></div></div></div></div>`;
  const draw=()=>{ const s=D.slides[cur];
    $("#thumbs",el).innerHTML=D.slides.map((x,i)=>`<button class="thumb ${i===cur?'on':''}" data-i="${i}" aria-label="Slide ${i+1}"><span class="no">${i+1}</span>${slideHTML(x,D.theme)}</button>`).join("");
    $("#thumbs",el).querySelectorAll(".thumb").forEach(b=>b.onclick=()=>{ cur=+b.dataset.i; fill(); draw(); });
    $("#big",el).innerHTML=slideHTML(s,D.theme); $("#thm",el).value=D.theme; tr.recheck(); };
  const fill=()=>{ const s=D.slides[cur]; $("#lay",el).value=s.layout; $("#tt",el).value=s.title; $("#bd",el).value=s.body; $("#nt",el).value=s.notes; $("#bdl",el).textContent=s.layout==="title"?"Subtitle":s.layout==="section"?"(not used for section slides)":"Bullets (one per line)"; $("#bd",el).disabled=s.layout==="section"; };
  $("#lay",el).onchange=e=>{ D.slides[cur].layout=e.target.value; fill(); draw(); };
  ["tt","bd","nt"].forEach(id=>$("#"+id,el).oninput=e=>{ D.slides[cur][{tt:"title",bd:"body",nt:"notes"}[id]]=e.target.value; draw(); });
  $("#thm",el).onchange=e=>{ D.theme=+e.target.value; draw(); };
  el.querySelectorAll("[data-a]").forEach(b=>b.onclick=()=>{ const a=b.dataset.a;
    if(a==="add"){ D.slides.splice(cur+1,0,{layout:"bullets",title:"",body:"",notes:""}); cur++; }
    if(a==="dup"){ D.slides.splice(cur+1,0,{...D.slides[cur]}); cur++; }
    if(a==="del"&&D.slides.length>1){ D.slides.splice(cur,1); cur=Math.max(0,cur-1); }
    if(a==="upm"&&cur>0){ [D.slides[cur-1],D.slides[cur]]=[D.slides[cur],D.slides[cur-1]]; cur--; }
    if(a==="dnm"&&cur<D.slides.length-1){ [D.slides[cur+1],D.slides[cur]]=[D.slides[cur],D.slides[cur+1]]; cur++; }
    fill(); draw(); });
  $("#dlP",el).onclick=async()=>{ if(!window.PptxGenJS){ RJ.toast("Presentation engine not loaded."); return; } const T=THEMES[D.theme], c=x=>x.replace("#","");
    const p=new PptxGenJS(); p.layout="LAYOUT_WIDE";
    D.slides.forEach(s=>{ const sl=p.addSlide(); const lines=(s.body||"").split("\n").map(x=>x.trim()).filter(Boolean);
      if(s.layout==="section"){ sl.background={color:c(T.ac)}; sl.addText("SECTION",{x:0.8,y:4.2,w:11,h:0.4,fontSize:14,color:c(T.bg),fontFace:"Consolas",charSpacing:6}); sl.addText(s.title||"",{x:0.8,y:4.6,w:11.5,h:1.4,fontSize:44,bold:true,color:c(T.bg),fontFace:"Segoe UI"}); }
      else { sl.background={color:c(T.bg)}; sl.addShape(p.ShapeType.rect,{x:0,y:0,w:0.28,h:7.5,fill:{color:c(T.ac)},line:{color:c(T.ac)}});
        if(s.layout==="title"){ sl.addText(s.title||"",{x:0.9,y:2.3,w:11.4,h:1.6,fontSize:48,bold:true,color:c(T.fg),fontFace:"Segoe UI"}); sl.addText(lines.join("  ·  "),{x:0.9,y:3.9,w:11.4,h:0.8,fontSize:22,color:c(T.sub),fontFace:"Segoe UI"}); sl.addShape(p.ShapeType.rect,{x:0.9,y:4.9,w:1.8,h:0.1,fill:{color:c(T.ac)},line:{color:c(T.ac)}}); }
        else { sl.addText(s.title||"",{x:0.9,y:0.5,w:11.4,h:1.0,fontSize:36,bold:true,color:c(T.fg),fontFace:"Segoe UI"}); sl.addShape(p.ShapeType.rect,{x:0.9,y:1.5,w:1.1,h:0.08,fill:{color:c(T.ac)},line:{color:c(T.ac)}});
          if(lines.length) sl.addText(lines.map(l=>({text:l,options:{bullet:true}})),{x:0.9,y:1.9,w:11.4,h:4.8,fontSize:24,color:c(T.fg),fontFace:"Segoe UI",paraSpaceAfter:10,valign:"top"}); } }
      if(s.notes) sl.addNotes(s.notes); });
    await p.writeFile({fileName:practice?"about-me.pptx":"cyber-safety.pptx"}); RJ.toast("PowerPoint file downloaded"); };
  fill(); draw();
};
})();
