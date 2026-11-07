/* rootjavs — course loader.
   Reads content/catalog.json (master list) and content/courses/<category>/<id>.json (ready courses)
   and turns them into the same course objects the old site uses (window.RJ_COURSES), so every old
   page keeps working. Old courses in data.js are never changed or removed.

   To make a course live: put its JSON in content/courses/<category-folder>/ and set
   "status": "ready" for it in content/catalog.json. Nothing else is needed.

   Rules
   - An old course with the same id as a catalog course keeps its id (so old progress and
     certificates stay valid). If the catalog course is also ready, the new one gets "<id>-new".
   - If a catalog course is not ready but an old course has the same id, the old content is used.
   - Old courses that are not in the catalog are added after the last catalog number. */
(function(){
const RJ=window.RJ;
const OLD=(window.RJ_COURSES||[]).slice();               // the 7 courses from data.js
const OLD_IDS=new Set(OLD.map(c=>c.id));
const FOLDER=cat=>String(cat).toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
const ICON={"Cyber Security":"shield","AI":"spark","Cloud":"cloud","Development":"code","Career":"target","Basics":"laptop","Emerging Tech":"cpu"};
const ICON_ID={"linux-fundamentals":"terminal","computer-fundamentals":"laptop","dbms-concepts":"list","ui-ux-design-figma":"edit","red-team-vs-blue-team":"target","malware-analysis":"alert","ai-agents-automation":"bolt"};
const LAB_KIND={linux:"Linux mission lab",python:"Python mission lab",web:"Web mission lab",sql:"SQL mission lab",web3:"Web3 mission lab",ai:"AI mission lab",docker:"Docker mission lab",simulator:"Simulator mission lab"};

RJ.CATALOG=[]; RJ.TRACKS=[]; RJ.catalogError=null;
RJ.entry = id => RJ.CATALOG.find(e=>e.siteId===id||e.id===id);
RJ.trackOf = c => (c&&c.track)||"Basics";

// old courses: every one lives under the Basics track
OLD.forEach(c=>{ c.track="Basics"; c.isOld=true; });

const usedCodes=new Set(OLD.map(c=>c.code));
function codeFor(e){
  if(e.code&&!usedCodes.has(e.code)){ usedCodes.add(e.code); return e.code; }
  const w=e.id.split("-").filter(Boolean), L=e.id.replace(/[^a-z]/g,"").toUpperCase();
  const tries=[(w[0]||"")[0]+((w[1]||w[0]||"")[w[1]?0:1]||"X")];
  for(let i=1;i<L.length;i++) tries.push(L[0]+L[i]);
  for(const t of tries){ const k=t.toUpperCase(); if(/^[A-Z]{2}$/.test(k)&&!usedCodes.has(k)){ usedCodes.add(k); return k; } }
  for(let a=65;a<91;a++) for(let b=65;b<91;b++){ const k=String.fromCharCode(a,b); if(!usedCodes.has(k)){ usedCodes.add(k); return k; } }
}
const firstSentences=(s,n=2)=>{ const m=String(s||"").match(/[^.!?]+[.!?]+/g); return m?m.slice(0,n).join("").trim():String(s||""); };

/* convert one new-format course JSON into the old course shape */
function convert(j,e){
  const lessons=(j.lessons||[]).map(L=>({
    title:L.title, min:L.minutes||L.min||20,
    notes:(L.notes||[]).map(b=>b.task!==undefined&&!Array.isArray(b.task)?{task:[b.task]}:b),
    quiz:L.quiz||[], practice:L.practice||[]
  }));
  const lab=j.lab||{};
  return {
    lessons, learn:j.learn||e.learn||[], short:j.short||e.short||"", level:j.level||e.level, hours:j.hours||e.hours,
    prerequisites:j.prerequisites||[],
    lab:{type:lab.type||"simulator", engine:"mission", title:lab.name||LAB_KIND[lab.type]||"Mission lab", kind:LAB_KIND[lab.type]||"Mission lab",
         brief:firstSentences(lab.story,2), story:lab.story||"", steps:lab.steps||[]},
    finalExam:j.finalExam||[], practicalExam:j.practicalExam||{scenario:"",tasks:[]},
    cheatsheet:j.cheatsheet||null, glossary:j.glossary||[], interview:j.interview||[],
    xp:j.xp||{lesson:50,lab:150,finalExam:200,practicalExam:300}, loaded:true
  };
}

/* placeholder course object for a ready course whose JSON is not fetched on this page */
function stub(e){
  return {id:e.siteId, code:e.code, title:e.title, cat:e.category, track:e.category, no:e.no, level:e.level||"Beginner", hours:e.hours||0,
    short:e.short||"", learn:e.learn||[], icon:ICON_ID[e.id]||ICON[e.category]||"book", isNew:true, entry:e, file:e.file,
    lessons:[], lab:{type:"simulator",engine:"mission",title:"Mission lab",brief:""}, loaded:false};
}

function fetchJSON(url){ return fetch(url,{cache:"no-cache"}).then(r=>{ if(!r.ok) throw new Error(url+" "+r.status); return r.json(); }); }

RJ.loadCourse = c => {
  if(!c||c.isOld||c.loaded) return Promise.resolve(c);
  if(c._p) return c._p;
  c._p=fetchJSON(c.file).then(j=>{ Object.assign(c,convert(j,c.entry)); return c; });
  return c._p;
};

function buildCatalog(cat){
  RJ.TRACKS=(cat.filters||["All"]).filter(f=>f!=="All");
  const list=cat.courses||[];
  let maxNo=0;
  list.forEach(e=>{
    maxNo=Math.max(maxNo,e.no||0);
    const folder=FOLDER(e.category);
    const x=Object.assign({},e,{track:e.category, folder, file:e.file||`content/courses/${folder}/${e.id}.json`});
    const oldSame=OLD.find(o=>o.id===e.id);
    if(e.status==="ready"){
      x.siteId=oldSame?e.id+"-new":e.id; x.code=codeFor(e); x.ready=true;
      const c=stub(x); if(oldSame) c.dupOf=oldSame.id;
      x.course=c; window.RJ_COURSES.push(c);
    } else if(oldSame){
      // not written yet in the new format: the old full course is shown on this card
      x.siteId=e.id; x.ready=true; x.useOld=true; x.course=oldSame;
      oldSame.no=e.no; oldSame.track=e.category;
    } else {
      x.siteId=e.id; x.ready=false;
    }
    RJ.CATALOG.push(x);
  });
  // old courses that the catalog does not list: add them after the last number
  OLD.forEach(o=>{
    if(RJ.CATALOG.some(x=>x.course===o)) return;
    o.no=++maxNo;
    const dup=RJ.CATALOG.find(x=>x.id===o.id&&x.ready&&!x.useOld);
    if(dup){ o.hasNew=dup.siteId; dup.course.dupOf=o.id; }
    RJ.CATALOG.push({no:o.no,id:o.id,siteId:o.id,title:o.title,category:"Basics",track:"Basics",status:"ready",ready:true,old:true,course:o,level:o.level,hours:o.hours,short:o.short,learn:o.learn});
  });
  RJ.CATALOG.sort((a,b)=>a.no-b.no);
  // keep RJ_COURSES in catalogue order so every list shows the same order
  window.RJ_COURSES.sort((a,b)=>(a.no||999)-(b.no||999));
  // the old "coming soon" list: hide items that are now real courses
  (window.RJ_SOON||[]).forEach(s=>{ s.inCatalog=true; });
}

/* add cheat sheets, glossary terms and interview questions of loaded new courses to the shared lists */
function mergeResources(){
  const cs=window.RJ_CHEATS, gl=window.RJ_GLOSSARY, iv=window.RJ_INTERVIEW;
  const have=new Set(gl.map(g=>g[0].toLowerCase()));
  window.RJ_COURSES.filter(c=>c.isNew&&c.loaded).forEach(c=>{
    if(c.cheatsheet&&!cs.some(x=>x.id===c.id)) cs.push({id:c.id, title:c.cheatsheet.title||c.title, cat:c.track, icon:c.icon, desc:`Quick reference for the ${c.title} course.`, sections:c.cheatsheet.sections||[], course:c.id});
    (c.glossary||[]).forEach(g=>{ const k=String(g[0]).toLowerCase(); if(!have.has(k)){ have.add(k); gl.push([g[0],g[1]]); } });
    if((c.interview||[]).length){ let grp=iv.find(x=>x.cat===c.track); if(!grp){ grp={cat:c.track,qs:[]}; iv.push(grp); }
      c.interview.forEach(q=>{ if(!grp.qs.some(y=>y[0]===q[0])) grp.qs.push([q[0],q[1]]); }); }
  });
}

// which pages need which course content
const ONE=["course","lesson","exam","lab"];
const ALL=["labs","mock","dashboard","certificate","verify","about","cheats","glossary","interview"];

RJ.ready = page => {
  const S=RJ.S; S.labs=S.labs||{}; S.bonus=S.bonus||{xp:0,done:{}};
  return fetchJSON("content/catalog.json").then(buildCatalog).then(()=>{
    const newCourses=window.RJ_COURSES.filter(c=>c.isNew);
    let need=[];
    if(ONE.includes(page)||(page==="certificate"&&RJ.qp("c"))){ const c=RJ.course(RJ.qp("c")); if(c) need=[c]; }
    else if(ALL.includes(page)) need=newCourses;
    return Promise.all(need.map(c=>RJ.loadCourse(c).catch(err=>{ c.loadError=String(err); })));
  }).then(()=>{ mergeResources(); }).catch(err=>{ RJ.catalogError=String(err); console.warn("rootjavs: catalogue not loaded",err); });
};

/* ---------------- XP and ranks (from real progress) ---------------- */
RJ.RANKS=[["guest",0,"No rights yet. Read, explore, start a course.","#8A93A0"],["user",100,"Your own account. Labs unlocked.","#5CE1E6"],["sudoer",1000,"Borrow admin powers. Advanced labs.","#FFD166"],["admin",5000,"Run the system. Mentor others.","#FF79C6"],["root",10000,"Full control. The top of rootjavs.","#3B9EFF"]];
RJ.XP={lesson:50,lab:150,finalExam:200,practicalExam:300};
RJ.xp = ()=>{
  const S=RJ.S; let xp=0;
  Object.values(S.lessons||{}).forEach(m=>Object.values(m).forEach(sc=>{ if(sc>=RJ.PASS_LESSON) xp+=RJ.XP.lesson; }));
  Object.values(S.final||{}).forEach(sc=>{ if(sc>=RJ.PASS_FINAL) xp+=RJ.XP.finalExam; });
  Object.values(S.practical||{}).forEach(v=>{ if(v) xp+=RJ.XP.practicalExam; });
  Object.values(S.labs||{}).forEach(v=>{ if(v) xp+=RJ.XP.lab; });
  return xp+((S.bonus&&S.bonus.xp)||0);
};
RJ.rankOf = xp => { let r=RJ.RANKS[0]; for(const k of RJ.RANKS) if(xp>=k[1]) r=k; return r; };
RJ.addBonus = (key,n)=>{ const S=RJ.S; S.bonus=S.bonus||{xp:0,done:{}}; if(S.bonus.done[key]) return false; S.bonus.done[key]=1; S.bonus.xp+=n; RJ.save(); RJ.toast(`+${n} XP`); return true; };
})();
