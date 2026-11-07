/* rootjavs — page renderers */
(function(){
const RJ=window.RJ, $=RJ.$, $$=RJ.$$, esc=RJ.esc, I=RJ.icon, S=RJ.S;
const C=window.RJ_COURSES, app=()=>$("#app");
const PAGES={};
const TL=()=>C.reduce((n,c)=>n+c.lessons.length,0);
const labName=c=>(c.lab&&c.lab.title)||labTitle[c.lab.type];
const labTitle={laptop:"Laptop Anatomy",explorer:"File Explorer Simulator",typing:"Typing Trainer",shortcuts:"Shortcut Trainer",word:"Document Editor",excel:"Spreadsheet Lab",ppt:"Slide Builder"};
const head=(eyebrow,title,sub,crumbs)=>`<div class="page-head fade">${crumbs?`<div class="crumbs">${crumbs}</div>`:""}<span class="eyebrow">${eyebrow}</span><h1>${title}</h1>${sub?`<p>${sub}</p>`:""}</div>`;
const gate=(title,text,href,label)=>`<div class="card" style="max-width:620px;margin:40px auto;text-align:center;padding:36px"><span class="icon gold" style="margin:0 auto 14px">${I("lock")}</span><h2 style="font-size:24px;margin-bottom:10px">${title}</h2><p class="muted">${text}</p>${href?`<a class="btn pri" href="${href}">${label}</a>`:""}</div>`;

/* ================= HOME ================= */
PAGES.home=()=>{
  const cheat=window.RJ_CHEATS.slice(0,4);
  app().innerHTML=`
  <section class="hero">
    <div class="fade">
      <span class="pill"><b>NEW</b> Word, Excel and PowerPoint labs are live</span>
      <h1>Learn computers by <span class="grad">doing</span>, not by watching.</h1>
      <p class="lead">Hands-on courses from your very first laptop to MS Office and cyber security. Every lesson has notes with a PDF, a live lab in your browser, two exams and a verifiable certificate.</p>
      <div class="row"><a class="btn pri lg" href="courses.html">Start learning free ${I("arrow")}</a><a class="btn lg" href="labs.html">${I("flask")} Explore the labs</a></div>
      <div class="trust"><span>${I("checkc")} No installs</span><span>${I("checkc")} PDF notes</span><span>${I("checkc")} Practical exams</span><span>${I("checkc")} Certificates</span></div>
    </div>
    <div class="appwin fade" style="animation-delay:.12s">
      <div class="bar" role="tablist">
        <button class="on" data-demo="xl"><i style="background:#1E9E5A"></i>Excel</button>
        <button data-demo="wd"><i style="background:#2F64F0"></i>Word</button>
        <button data-demo="pp"><i style="background:#E8692C"></i>PowerPoint</button>
        <button data-demo="tm"><i style="background:#7C8BA8"></i>Terminal</button>
      </div>
      <div class="body" id="demo"></div>
      <div class="foot"><span id="demoHint">Try it: change any mark and watch the formulas update</span><span>live lab preview</span></div>
    </div>
  </section>
  <div class="band fade"><div><b>${C.length}</b><span>Courses live now</span></div><div><b>${TL()}</b><span>Lessons with PDF notes</span></div><div><b>${C.length}</b><span>Hands-on browser labs</span></div><div><b>${window.RJ_CHEATS.length}</b><span>Downloadable cheat sheets</span></div></div>

  <section class="sec"><div class="sec-head"><div><span class="eyebrow">How it works</span><h2>Four steps in every course</h2><p>Reading alone does not build skill. Every rootjavs course makes you practise and prove what you learned.</p></div></div>
   <div class="steps">${[["01","Learn","Short, clear notes with tables, pro tips and a PDF you can keep.","book"],["02","Practise","Do the real task in a browser lab: a document, a spreadsheet, a file system.","flask"],["03","Test","A timed theory exam and a practical exam that checks your actual work.","quiz"],["04","Certify","Get a certificate with a unique ID anyone can verify.","award"]].map(s=>`<div class="card step"><span class="icon ${s[3]==="award"?"gold":s[3]==="flask"?"cyan":""}">${I(s[3])}</span><div class="n" style="margin-top:16px">STEP ${s[0]}</div><h3>${s[1]}</h3><p>${s[2]}</p></div>`).join("")}</div></section>

  <section class="sec"><div class="sec-head"><div><span class="eyebrow">Courses</span><h2>Start with the skills every job needs</h2><p>Computer basics and the complete MS Office suite, from beginner to advanced.</p></div><a class="btn" href="courses.html">View all courses ${I("arrow")}</a></div>
   <div class="grid g3">${C.slice(0,6).map(RJ.courseCard).join("")}</div></section>

  <section class="sec"><div class="sec-head"><div><span class="eyebrow">Labs</span><h2>Real tools, right in your browser</h2><p>Every lab checks your work automatically. Files you create download in real Office formats.</p></div><a class="btn" href="labs.html">All labs ${I("arrow")}</a></div>
   <div class="grid g4">${C.map(c=>`<a class="card hover" href="lab.html?c=${c.id}&mode=practice"><span class="icon cyan">${I(c.icon)}</span><h3 style="font-size:17px;margin:14px 0 6px">${labName(c)}</h3><p class="muted small" style="margin:0">${esc(c.title)}</p></a>`).join("")}<a class="card hover" href="typing-test.html"><span class="icon gold">${I("bolt")}</span><h3 style="font-size:17px;margin:14px 0 6px">Typing Speed Test</h3><p class="muted small" style="margin:0">How fast are you? Find out in 60 seconds.</p></a></div></section>

  <section class="sec"><div class="sec-head"><div><span class="eyebrow">Career roadmaps</span><h2>Know exactly what to learn next</h2></div><a class="btn" href="roadmaps.html">See roadmaps ${I("arrow")}</a></div>
   <div class="grid g4">${window.RJ_ROADMAPS.map(r=>`<a class="card hover" href="roadmaps.html#${r.id}"><span class="icon">${I(r.icon)}</span><h3 style="font-size:18px;margin:14px 0 6px">${esc(r.title)}</h3><p class="muted small">${esc(r.desc)}</p><span class="chip">${I("clock")} ${r.time}</span></a>`).join("")}</div></section>

  <section class="sec"><div class="sec-head"><div><span class="eyebrow">Free resources</span><h2>Cheat sheets you will actually use</h2><p>One-page PDFs for your desk, your phone and your exam revision.</p></div><a class="btn" href="cheatsheets.html">All cheat sheets ${I("arrow")}</a></div>
   <div class="grid g4">${cheat.map(cs=>`<div class="card"><span class="icon">${I(cs.icon)}</span><h3 style="font-size:17px;margin:14px 0 6px">${esc(cs.title)}</h3><p class="muted small">${esc(cs.desc)}</p><button class="btn sm" data-cheat="${cs.id}">${I("download")} PDF</button></div>`).join("")}</div></section>

  <section class="sec"><div class="grid g2" style="align-items:center;gap:40px">
   <div class="cert-mini"><small>CERTIFICATE OF COMPLETION</small><h4>MS Excel: Basic to Advanced</h4><span class="small" style="color:#6A7390">awarded to</span><div class="nm">Riya Shah</div><small style="margin-top:8px">ID RJ-XL-261011-3F2A9</small><div class="seal">VERIFIED</div></div>
   <div><span class="eyebrow">Certificates</span><h2 style="font-size:clamp(26px,3.4vw,38px);margin:10px 0 14px">Proof that you can do the work</h2><p class="muted">Certificates are issued only after you pass every lesson quiz, the final theory exam and the practical exam. Each one carries a unique ID that employers can check on our verification page.</p>
    <div class="row" style="margin-top:20px"><a class="btn pri" href="courses.html">Earn your first certificate</a><a class="btn" href="verify.html">${I("shield")} Verify a certificate</a></div></div></div></section>

  <section class="sec"><div class="card" style="display:flex;flex-wrap:wrap;gap:24px;align-items:center;justify-content:space-between;padding:30px"><div style="display:flex;gap:18px;align-items:center"><span class="icon gold" style="width:56px;height:56px">${I("keyboard")}</span><div><h3 style="font-size:22px">How fast do you type?</h3><p class="muted" style="margin:4px 0 0">Take the free 60-second test. Most beginners type 15 to 25 WPM.</p></div></div><a class="btn gold lg" href="typing-test.html">Take the typing test</a></div></section>

  <section class="sec"><div class="grid g2" style="gap:40px;align-items:start"><div><span class="eyebrow">FAQ</span><h2 style="font-size:clamp(26px,3.4vw,38px);margin-top:10px">Questions, answered</h2><p class="muted" style="margin-top:12px">Still curious? <a href="faq.html">Read the full FAQ</a> or <a href="contact.html">contact us</a>.</p></div>
   <div>${window.RJ_FAQ.slice(0,5).map(f=>`<details class="faq"><summary>${esc(f[0])}</summary><p>${esc(f[1])}</p></details>`).join("")}</div></div></section>

  <section class="sec"><div class="cta"><div><span class="eyebrow">Get started</span><h2 style="margin-top:10px">Your first certificate is a few lessons away.</h2></div><div class="row"><a class="btn pri lg" href="login.html?mode=signup">Create free account</a><a class="btn lg" href="courses.html">Browse courses</a></div></div></section>`;
  $$("[data-cheat]").forEach(b=>b.onclick=()=>RJ.cheatPDF(window.RJ_CHEATS.find(x=>x.id===b.dataset.cheat)));
  // hero demos
  const demos={
    xl(){ const rows=[["Riya",78,85],["Aman",45,52],["Priya",91,88],["Karan",62,48]];
      const draw=()=>{ const tot=rows.map(r=>r[1]+r[2]); $("#demo").innerHTML=`<div class="fbar" style="border:1px solid var(--line);border-radius:8px 8px 0 0"><span class="addr">D2</span><span class="fx">fx</span><input readonly value="=SUM(B2:C2)"></div>
        <div style="overflow:auto;border:1px solid var(--line);border-top:0;border-radius:0 0 8px 8px"><table class="sheet" style="min-width:100%"><thead><tr><th class="corner"></th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th></tr></thead><tbody>
        <tr><th class="rh">1</th><td class="hdrcell"><div class="cv">Name</div></td><td class="hdrcell"><div class="cv">Maths</div></td><td class="hdrcell"><div class="cv">Science</div></td><td class="hdrcell"><div class="cv">Total</div></td><td class="hdrcell"><div class="cv">Result</div></td></tr>
        ${rows.map((r,i)=>`<tr><th class="rh">${i+2}</th><td><div class="cv">${r[0]}</div></td>${[1,2].map(j=>`<td class="num"><input aria-label="${r[0]} marks" data-r="${i}" data-c="${j}" value="${r[j]}" style="outline:0;text-align:right;font-family:var(--body)"></td>`).join("")}<td class="num ${i===0?'sel':''}"><div class="cv">${tot[i]}</div></td><td><div class="cv" style="color:${tot[i]>=100?'var(--ok)':'var(--bad)'};font-weight:700">${tot[i]>=100?'Pass':'Fail'}</div></td></tr>`).join("")}
        <tr><th class="rh">6</th><td class="hdrcell"><div class="cv">Average</div></td><td class="num"><div class="cv">${(rows.reduce((s,r)=>s+r[1],0)/4).toFixed(1)}</div></td><td class="num"><div class="cv">${(rows.reduce((s,r)=>s+r[2],0)/4).toFixed(1)}</div></td><td class="num"><div class="cv">${(tot.reduce((a,b)=>a+b,0)/4).toFixed(1)}</div></td><td><div class="cv muted">=IF(D2&gt;=100…</div></td></tr></tbody></table></div>`;
        $$("#demo input[data-r]").forEach(inp=>inp.onchange=()=>{ rows[+inp.dataset.r][+inp.dataset.c]=Math.max(0,Math.min(100,+inp.value||0)); draw(); }); };
      draw(); $("#demoHint").textContent="Try it: change any mark and the totals recalculate"; },
    wd(){ $("#demo").innerHTML=`<div class="bench-bar" style="border:1px solid var(--line);border-radius:8px 8px 0 0"><button class="tb" data-c="bold"><b>B</b></button><button class="tb" data-c="italic"><i>I</i></button><button class="tb" data-c="underline"><u>U</u></button><span class="sep"></span><button class="tb" data-c="justifyCenter">Center</button><button class="tb" data-c="insertUnorderedList">• List</button></div>
      <div style="background:var(--bg-2);padding:14px;border:1px solid var(--line);border-top:0;border-radius:0 0 8px 8px"><div class="paper" contenteditable="true" style="min-height:220px;padding:28px 32px;font-size:14px"><h1 style="text-align:center;font-size:22px">Riya Shah</h1><p style="text-align:center;color:#555">riya.shah@email.com · Vadodara</p><h2 style="font-size:16px">Skills</h2><ul><li>MS Excel: formulas, charts, pivot tables</li><li>Typing: 42 WPM</li><li>Basic HTML and CSS</li></ul></div></div>`;
      $$("#demo [data-c]").forEach(b=>b.onmousedown=e=>{ e.preventDefault(); document.execCommand(b.dataset.c); }); $("#demoHint").textContent="Try it: select text and press B or Center"; },
    pp(){ const sl=[["Cyber Safety 101","For first-year students","#0B1120","#fff","#5B8CFF"],["Strong passwords","12+ characters\nA different password for every site\nUse a password manager","#0B1120","#fff","#5B8CFF"],["Thank you","Questions?","#5B8CFF","#0B1120","#0B1120"]]; let cur=0;
      const one=(s,big)=>`<div class="slide ${big&&cur!==1?'title':''}" style="background:${s[2]};color:${s[3]}"><span class="deco" style="left:0;top:0;bottom:0;width:2cqw;background:${s[4]}"></span><div class="in" ${s[0].startsWith("Strong")?'':'style="justify-content:center"'}><h3>${s[0]}</h3>${s[0].startsWith("Strong")?`<ul>${s[1].split("\n").map(x=>`<li>${x}</li>`).join("")}</ul>`:`<div class="sub">${s[1]}</div>`}</div></div>`;
      const draw=()=>{ $("#demo").innerHTML=`<div style="display:grid;grid-template-columns:110px 1fr;gap:12px"><div style="display:grid;gap:8px;align-content:start">${sl.map((s,i)=>`<button class="thumb ${i===cur?'on':''}" data-i="${i}">${one(s)}</button>`).join("")}</div><div>${one(sl[cur],true)}<p class="small muted" style="margin-top:10px">Speaker notes: ${["Start with a question: who reuses passwords?","Show a password manager demo.","Invite questions."][cur]}</p></div></div>`; $$("#demo .thumb").forEach(b=>b.onclick=()=>{ cur=+b.dataset.i; draw(); }); };
      draw(); $("#demoHint").textContent="Try it: click a slide thumbnail"; },
    tm(){ const out=[`<span class="c">rootjavs</span> learning shell. Type <b>help</b>.`]; const run=c=>{ const k=c.trim().toLowerCase(); if(!k) return;
        out.push(`<span class="p">student@rootjavs:~$</span> ${esc(c)}`);
        if(k==="help") out.push("Commands: whoami, ls, courses, date, clear");
        else if(k==="whoami") out.push("student  (future cyber security professional)");
        else if(k==="ls") out.push("notes/  labs/  certificates/  cheatsheets/");
        else if(k==="courses") C.forEach(x=>out.push(`  ${x.code}  ${esc(x.title)}`));
        else if(k==="date") out.push(new Date().toString());
        else if(k==="clear") out.length=0;
        else out.push(`command not found: ${esc(k)}  (try the Linux Fundamentals course)`); };
      const draw=()=>{ $("#demo").innerHTML=`<div class="term" id="tm">${out.map(l=>`<div>${l}</div>`).join("")}<div><span class="p">student@rootjavs:~$</span> <input id="tmi" aria-label="Terminal input" autocomplete="off" spellcheck="false"></div></div>`; const i=$("#tmi"); i.onkeydown=e=>{ if(e.key==="Enter"){ run(i.value); draw(); $("#tmi").focus(); } }; $("#tm").scrollTop=1e6; };
      draw(); $("#demoHint").textContent="Try it: type whoami or courses"; }
  };
  $$(".appwin .bar button").forEach(b=>b.onclick=()=>{ $$(".appwin .bar button").forEach(x=>x.classList.toggle("on",x===b)); demos[b.dataset.demo](); });
  demos.xl();
};

/* ================= COURSES ================= */
PAGES.courses=()=>{
  const cats=["All","Computer Basics","Office","Coming soon"];
  app().innerHTML=head("Course catalogue","All courses",`${C.length} courses live, ${TL()} lessons, every one with notes, a lab and exams.`)+
   `<div class="row" style="justify-content:space-between;margin-bottom:6px"><div class="filters" id="flt" style="margin:0">${cats.map((c,i)=>`<button class="${i?'':'on'}" data-f="${c}">${c}</button>`).join("")}</div><label class="search"><span class="sr-only">Search courses</span>${I("search")}<input id="q" placeholder="Search courses"></label></div><div class="grid g3" id="list" style="margin-top:20px"></div>`;
  let f="All";
  const draw=()=>{ const q=$("#q").value.toLowerCase(); const live=C.filter(c=>(f==="All"||c.cat===f)&&(c.title+c.short).toLowerCase().includes(q)); const soon=window.RJ_SOON.filter(s=>(f==="All"||f==="Coming soon")&&(s.title+s.short).toLowerCase().includes(q));
    $("#list").innerHTML=(f==="Coming soon"?"":live.map(RJ.courseCard).join(""))+soon.map(RJ.soonCard).join("")||`<p class="muted">No courses match your search.</p>`; };
  $$("#flt button").forEach(b=>b.onclick=()=>{ f=b.dataset.f; $$("#flt button").forEach(x=>x.classList.toggle("on",x===b)); draw(); });
  $("#q").oninput=draw; draw();
};

/* ================= COURSE ================= */
PAGES.course=()=>{
  const c=RJ.course(RJ.qp("c")); if(!c){ app().innerHTML=gate("Course not found","This course does not exist or has moved.","courses.html","Browse courses"); return; }
  document.title=c.title+" · rootjavs";
  const p=RJ.progress(c); const next=c.lessons.findIndex((_,i)=>!RJ.lessonPassed(c.id,i)); const nx=next<0?0:next;
  const step=(ok,label,sub)=>`<li style="display:grid;grid-template-columns:24px 1fr;gap:10px;align-items:start"><span style="color:${ok?'var(--ok)':'var(--dim)'}">${I(ok?"checkc":"clock")}</span><span><b style="font-weight:600">${label}</b><br><small class="muted">${sub}</small></span></li>`;
  app().innerHTML=`<div class="crumbs"><a href="courses.html">Courses</a> / ${esc(c.cat)}</div>
  <div class="course-hero fade"><div>
    <div class="row"><span class="chip cyan">${esc(c.cat)}</span><span class="chip">${esc(c.level)}</span></div>
    <h1 style="font-size:clamp(30px,4.4vw,46px);margin:14px 0 12px">${esc(c.title)}</h1><p class="muted" style="font-size:18px;max-width:60ch">${esc(c.short)}</p>
    <div class="row" style="gap:18px;color:var(--muted);font-size:15px;margin:16px 0 22px"><span class="row" style="gap:6px">${I("book")}${c.lessons.length} lessons</span><span class="row" style="gap:6px">${I("clock")}${c.hours} hours</span><span class="row" style="gap:6px">${I("flask")}${labName(c)}</span><span class="row" style="gap:6px">${I("award")}Certificate</span></div>
    <div class="row"><a class="btn pri lg" href="lesson.html?c=${c.id}&l=${nx}">${RJ.started(c)?"Continue":"Start course"} ${I("arrow")}</a><button class="btn lg" id="allpdf">${I("download")} Full notes PDF</button></div></div>
   <div class="card" style="background:var(--card-2)"><div class="result" style="gap:18px"><div class="ring" style="--p:${p.pct}"><b>${p.pct}%</b></div><div><b style="font-size:18px">${p.complete?"Course complete":"Your progress"}</b><p class="muted small" style="margin:4px 0 0">${p.passed} of ${p.n} lessons passed</p></div></div>
    <ul style="list-style:none;padding:0;margin:20px 0 0;display:grid;gap:12px">${step(p.allLessons,"All lesson quizzes",`${p.passed}/${p.n} passed (3 of 5 to pass)`)}${step(p.fin,"Final theory exam",S.final[c.id]!=null?`Best score ${S.final[c.id]}/10 · 6 to pass`:"10 questions · 15 minutes")}${step(p.prac,"Practical exam","Complete every task in the lab")}${step(p.complete,"Certificate",p.complete?"Issued":"Unlocks when all above are done")}</ul>
    ${p.complete?`<a class="btn gold" style="width:100%;margin-top:18px" href="certificate.html?c=${c.id}">${I("award")} View certificate</a>`:""}</div></div>

  <section class="sec" style="margin-top:56px"><h2 style="font-size:26px;margin-bottom:18px">What you will learn</h2><div class="card"><ul class="learn-list">${c.learn.map(x=>`<li>${I("check")}<span>${esc(x)}</span></li>`).join("")}</ul></div></section>
  <section class="sec" style="margin-top:56px"><h2 style="font-size:26px;margin-bottom:18px">Curriculum</h2><div class="lesson-list">${c.lessons.map((L,i)=>{ const sc=RJ.lessonScore(c.id,i), ok=RJ.lessonPassed(c.id,i);
    return `<a class="lrow ${ok?'done':''}" href="lesson.html?c=${c.id}&l=${i}"><span class="num">${ok?"✓":String(i+1).padStart(2,"0")}</span><span style="min-width:0"><b>${esc(L.title)}</b><small>${L.min} min read · notes + PDF · 5-question quiz</small></span><span class="chip ${ok?'ok':sc!=null?'bad':''}">${ok?`Passed ${sc}/5`:sc!=null?`${sc}/5 retry`:"Start"}</span></a>`; }).join("")}</div></section>
  <section class="sec" style="margin-top:56px"><h2 style="font-size:26px;margin-bottom:18px">Lab and final assessment</h2><div class="grid g3">
    <div class="card"><span class="icon cyan">${I("flask")}</span><h3 style="font-size:19px;margin:14px 0 8px">${labName(c)}</h3><p class="muted small">${esc(c.lab.brief)}</p><a class="btn sm" href="lab.html?c=${c.id}&mode=practice">Open practice lab</a></div>
    <div class="card"><span class="icon">${I("quiz")}</span><h3 style="font-size:19px;margin:14px 0 8px">Final theory exam</h3><p class="muted small">10 questions from the whole course, 15-minute timer, question navigator. Pass mark 60%.</p>${p.allLessons?`<a class="btn sm pri" href="exam.html?c=${c.id}">Start exam</a>`:`<span class="chip">${I("lock")} Pass all lessons first</span>`}</div>
    <div class="card"><span class="icon gold">${I("target")}</span><h3 style="font-size:19px;margin:14px 0 8px">Practical exam</h3><p class="muted small">New tasks in the lab, checked automatically. Complete all of them to pass.</p>${p.prac?`<span class="chip ok">${I("check")} Passed</span>`:p.allLessons?`<a class="btn sm pri" href="lab.html?c=${c.id}&mode=exam">Start practical</a>`:`<span class="chip">${I("lock")} Pass all lessons first</span>`}</div></div></section>`;
  $("#allpdf").onclick=()=>RJ.coursePDF(c);
};

/* ================= LESSON ================= */
PAGES.lesson=()=>{
  const c=RJ.course(RJ.qp("c")); if(!c){ app().innerHTML=gate("Lesson not found","","courses.html","Browse courses"); return; }
  let li=Math.max(0,Math.min(c.lessons.length-1,+RJ.qp("l")||0)); const L=c.lessons[li];
  document.title=`${L.title} · ${c.title} · rootjavs`;
  let tab=location.hash==="#quiz"?"quiz":location.hash==="#practice"?"practice":"notes";
  const side=()=>`<aside class="lside" aria-label="Lessons"><a href="course.html?c=${c.id}" style="grid-template-columns:28px 1fr"><span class="n">${I("arrow")}</span><span>Course overview</span></a>${c.lessons.map((x,i)=>`<a href="lesson.html?c=${c.id}&l=${i}" class="${i===li?'on':''} ${RJ.lessonPassed(c.id,i)?'done':''}"><span class="n">${RJ.lessonPassed(c.id,i)?"✓":i+1}</span><span>${esc(x.title)}</span></a>`).join("")}<a href="lab.html?c=${c.id}&mode=practice"><span class="n">${I("flask")}</span><span>Practice lab</span></a><a href="exam.html?c=${c.id}"><span class="n">${I("quiz")}</span><span>Final theory exam</span></a><a href="lab.html?c=${c.id}&mode=exam"><span class="n">${I("target")}</span><span>Practical exam</span></a></aside>`;
  const render=()=>{
    app().innerHTML=`<div class="lesson-wrap">${side()}<article style="min-width:0">
      <div class="crumbs"><a href="courses.html">Courses</a> / <a href="course.html?c=${c.id}">${esc(c.title)}</a> / Lesson ${li+1}</div>
      <span class="eyebrow">Lesson ${li+1} of ${c.lessons.length} · ${L.min} min</span><h1 style="font-size:clamp(28px,4vw,40px);margin-top:10px">${esc(L.title)}</h1>
      <div class="ltabs" role="tablist">${[["notes","book","Notes"],["quiz","quiz","Quiz"],["practice","flask","Practice"]].map(t=>`<button role="tab" aria-selected="${tab===t[0]}" class="${tab===t[0]?'on':''}" data-t="${t[0]}">${I(t[1])} ${t[2]}${t[0]==="quiz"&&RJ.lessonPassed(c.id,li)?' <span class="ck">✓</span>':''}</button>`).join("")}</div>
      <div id="pane" class="fade"></div></article></div>`;
    $$(".ltabs button").forEach(b=>b.onclick=()=>{ tab=b.dataset.t; history.replaceState(null,"","#"+tab); render(); });
    const pane=$("#pane");
    if(tab==="notes"){
      pane.innerHTML=`<div class="notes-tools"><span class="icon">${I("doc")}</span><div><b>Lesson notes</b><br><small class="muted">Read online or keep the PDF for revision</small></div><span class="sp"></span><button class="btn sm pri" id="pdf">${I("download")} Download PDF</button><button class="btn sm" id="pdfAll">Full course PDF</button></div>
       <div class="notes">${RJ.renderNotes(L.notes)}</div>
       <div class="row" style="justify-content:space-between;margin-top:40px;padding-top:24px;border-top:1px solid var(--line)">${li>0?`<a class="btn" href="lesson.html?c=${c.id}&l=${li-1}">← Previous lesson</a>`:"<span></span>"}<button class="btn pri" id="toQuiz">Take the quiz ${I("arrow")}</button></div>`;
      $("#pdf").onclick=()=>RJ.notesPDF(c,li); $("#pdfAll").onclick=()=>RJ.coursePDF(c); $("#toQuiz").onclick=()=>{ tab="quiz"; history.replaceState(null,"","#quiz"); render(); scrollTo(0,0); };
    }
    if(tab==="quiz") quiz(pane);
    if(tab==="practice"){
      const tasks=L.notes.find(b=>b.task);
      pane.innerHTML=`<div class="grid g2"><div class="card"><span class="icon cyan">${I("flask")}</span><h3 style="font-size:20px;margin:14px 0 8px">${labName(c)}</h3><p class="muted">${esc(c.lab.brief)}</p><a class="btn pri" href="lab.html?c=${c.id}&mode=practice">Open the lab ${I("arrow")}</a></div>
        <div class="card"><span class="icon">${I("target")}</span><h3 style="font-size:20px;margin:14px 0 8px">${L.practice&&L.practice.length?"Practice tasks":"Real task for this lesson"}</h3>${L.practice&&L.practice.length?`<ol style="padding-left:20px;margin:0;display:grid;gap:6px">${L.practice.map(x=>`<li>${RJ.fmt(x)}</li>`).join("")}</ol>`:tasks?`<ol style="padding-left:20px;margin:0;display:grid;gap:6px">${tasks.task.map(x=>`<li>${RJ.fmt(x)}</li>`).join("")}</ol>`:'<p class="muted">Apply what you learned on your own computer.</p>'}</div></div>`;
    }
  };
  const quiz=pane=>{
    const sc=RJ.lessonScore(c.id,li);
    pane.innerHTML=`<p class="muted">5 questions. Score 3 or more to pass this lesson.${sc!=null?` Your best: <b>${sc}/5</b>.`:""}</p><form id="qf">${L.quiz.map((q,k)=>`<div class="q"><fieldset><legend><span class="qn">QUESTION ${k+1}</span>${RJ.fmt(q[0])}</legend>${q[1].map((o,j)=>`<label class="opt" for="o${k}_${j}"><input type="radio" id="o${k}_${j}" name="q${k}" value="${j}"><span>${RJ.fmt(o)}</span></label>`).join("")}</fieldset></div>`).join("")}<div id="res"></div><div class="row"><button class="btn pri lg" type="submit">Submit answers</button></div></form>`;
    $("#qf").onsubmit=e=>{ e.preventDefault(); const fd=new FormData(e.target); const miss=L.quiz.filter((_,k)=>fd.get("q"+k)===null).length;
      if(miss){ $("#res").innerHTML=`<div class="status bad" style="margin-bottom:14px">${I("alert")} Answer all questions (${miss} left).</div>`; return; }
      let s=0; L.quiz.forEach((q,k)=>{ const v=+fd.get("q"+k); if(v===q[2]) s++; q[1].forEach((_,j)=>{ const lb=$(`label[for="o${k}_${j}"]`); lb.classList.toggle("right",j===q[2]); lb.classList.toggle("wrong",j===v&&v!==q[2]); }); if(q[3]){ const fs=$$("#qf fieldset")[k]; if(fs&&!fs.querySelector(".why")) fs.insertAdjacentHTML("beforeend",`<p class="why">${I("info")} ${RJ.fmt(q[3])}</p>`); } }); });
      RJ.setLesson(c.id,li,s); const ok=s>=RJ.PASS_LESSON, last=li===c.lessons.length-1;
      $("#res").innerHTML=`<div class="card" style="margin-bottom:16px"><div class="result"><div class="ring ${ok?'ok':'bad'}" style="--p:${s*20}"><b>${s}/5</b></div><div style="flex:1;min-width:200px"><h3 style="font-size:20px">${ok?"Lesson passed":"Not passed yet"}</h3><p class="muted" style="margin:6px 0 0">${ok?"Correct answers are highlighted in green.":"Review the green answers and the notes, then try again."}</p></div>
        <div class="row">${ok?(last?`<a class="btn pri" href="course.html?c=${c.id}">Go to final exams</a>`:`<a class="btn pri" href="lesson.html?c=${c.id}&l=${li+1}">Next lesson ${I("arrow")}</a>`):`<button type="button" class="btn" id="retry">Try again</button>`}</div></div></div>`;
      const r=$("#retry"); if(r) r.onclick=()=>quiz(pane); $("#res").scrollIntoView({behavior:"smooth",block:"center"});
      $$(".lside a")[li+1]?.classList.toggle("done",ok); };
  };
  render();
};

/* ================= LAB ================= */
PAGES.lab=()=>{
  const c=RJ.course(RJ.qp("c")); if(!c){ app().innerHTML=gate("Lab not found","","labs.html","All labs"); return; }
  const exam=RJ.qp("mode")==="exam"; const p=RJ.progress(c);
  document.title=`${labName(c)} · ${exam?"Practical exam":"Practice"} · rootjavs`;
  if(exam&&!p.allLessons){ app().innerHTML=gate("Practical exam locked",`Pass all ${c.lessons.length} lesson quizzes in ${esc(c.title)} to unlock the practical exam. You have passed ${p.passed}.`,`course.html?c=${c.id}`,"Back to course"); return; }
  app().innerHTML=`<div class="crumbs"><a href="labs.html">Labs</a> / <a href="course.html?c=${c.id}">${esc(c.title)}</a></div>
   <div class="lab-wrap"><aside class="card lab-brief"><span class="chip ${exam?'gold':'cyan'}">${exam?"Practical exam":"Practice mode"}</span><h1 style="font-size:24px;margin:14px 0 8px">${labName(c)}</h1><p class="muted small">${exam?"Complete every task below. The lab checks your work automatically and records your result.":esc(c.lab.brief)}</p>
     <h3 style="font-size:13px;font-family:var(--mono);letter-spacing:.1em;color:var(--dim);margin-top:18px">TASKS</h3><ul class="tasks" id="tasks"></ul><div id="lres"></div>
     <div class="row" style="margin-top:18px">${exam?`<a class="btn sm" href="lab.html?c=${c.id}&mode=practice">Back to practice</a>`:(p.allLessons&&!p.prac?`<a class="btn sm pri" href="lab.html?c=${c.id}&mode=exam">Take practical exam</a>`:"")}<button class="btn sm" id="reset">${I("restore")} Restart</button></div></aside>
     <div class="bench" id="bench"></div></div>`;
  const start=()=>{ RJ.stopTimers(); $("#lres").innerHTML=""; RJ.LABS[c.lab.engine||c.lab.type]($("#bench"),{course:c,mode:exam?"exam":"practice",tasksEl:$("#tasks"),onAllDone:()=>{
      if(exam){ S.practical[c.id]=true; RJ.save(); const pp=RJ.progress(c); if(pp.complete) RJ.issueCert(c);
        $("#lres").innerHTML=`<div class="status ok">${I("checkc")} Practical exam passed</div><div class="row" style="margin-top:12px">${pp.complete?`<a class="btn gold sm" href="certificate.html?c=${c.id}">${I("award")} Get certificate</a>`:pp.fin?"":`<a class="btn pri sm" href="exam.html?c=${c.id}">Take the final theory exam</a>`}</div>`; }
      else $("#lres").innerHTML=`<div class="status ok">${I("checkc")} All practice tasks complete</div>`; }}); };
  $("#reset").onclick=start; start();
};

/* ================= EXAM ================= */
PAGES.exam=()=>{
  const c=RJ.course(RJ.qp("c")); const mock=RJ.qp("mock")==="1";
  if(!c){ app().innerHTML=gate("Exam not found","","mock-tests.html","Mock tests"); return; }
  const p=RJ.progress(c);
  if(!mock&&!p.allLessons){ app().innerHTML=gate("Final exam locked",`Pass all lesson quizzes first (${p.passed}/${p.n} passed). You can practise with a mock test meanwhile.`,`mock-tests.html`,"Try a mock test"); return; }
  const pool=(!mock&&c.finalExam&&c.finalExam.length)?c.finalExam:c.lessons.flatMap(L=>L.quiz).concat(c.finalExam||[]); const N=mock?15:RJ.FINAL_Q, MIN=mock?20:15;
  const qs=RJ.shuffle(pool).slice(0,N).map(q=>{ const ord=RJ.shuffle(q[1].map((_,i)=>i)); return [q[0],ord.map(i=>q[1][i]),ord.indexOf(q[2]),q[3]]; });
  const ans=Array(N).fill(null); let cur=0, left=MIN*60, done=false;
  document.title=`${mock?"Mock test":"Final exam"} · ${c.title} · rootjavs`;
  const intro=()=>{ app().innerHTML=`<div class="crumbs"><a href="course.html?c=${c.id}">${esc(c.title)}</a> / ${mock?"Mock test":"Final theory exam"}</div><div class="card" style="max-width:680px;margin:20px auto;padding:34px">
     <span class="chip ${mock?'cyan':'gold'}">${mock?"Mock test · practice":"Final theory exam"}</span><h1 style="font-size:30px;margin:14px 0 10px">${esc(c.title)}</h1>
     <div class="grid g3" style="margin:22px 0"><div class="kpi"><b>${N}</b><span>Questions</span></div><div class="kpi"><b>${MIN} min</b><span>Time limit</span></div><div class="kpi"><b>60%</b><span>Pass mark</span></div></div>
     <ul class="muted" style="padding-left:20px;display:grid;gap:6px;margin:0 0 22px"><li>Questions come from every lesson in the course and are shuffled each time.</li><li>Use the navigator to jump between questions. You can change answers before submitting.</li><li>The exam submits automatically when the timer reaches zero.</li></ul>
     <button class="btn pri lg" id="go">Start ${mock?"mock test":"exam"}</button></div>`; $("#go").onclick=run; };
  const run=()=>{ RJ.stopTimers();
    const iv=setInterval(()=>{ left--; const t=$("#tmr"); if(t){ t.textContent=`${String(Math.floor(left/60)).padStart(2,"0")}:${String(left%60).padStart(2,"0")}`; t.classList.toggle("low",left<=60); } if(left<=0){ clearInterval(iv); submit(); } },1000); RJ.timers.push(iv);
    const draw=()=>{ const q=qs[cur];
      app().innerHTML=`<div class="exam-wrap"><div><div class="crumbs">${esc(c.title)} / ${mock?"Mock test":"Final exam"}</div>
        <div class="q" style="padding:28px"><fieldset><legend style="font-size:20px"><span class="qn">QUESTION ${cur+1} OF ${N}</span>${RJ.fmt(q[0])}</legend>${q[1].map((o,j)=>`<label class="opt" for="x${j}"><input type="radio" id="x${j}" name="x" value="${j}" ${ans[cur]===j?'checked':''}><span>${RJ.fmt(o)}</span></label>`).join("")}</fieldset></div>
        <div class="row" style="justify-content:space-between"><button class="btn" id="prev" ${cur?'':'disabled'}>← Previous</button>${cur<N-1?`<button class="btn pri" id="next">Next →</button>`:`<button class="btn pri" id="sub">Submit exam</button>`}</div></div>
        <aside class="card exam-side"><small class="muted mono">TIME LEFT</small><div class="timer" id="tmr">${String(Math.floor(left/60)).padStart(2,"0")}:${String(left%60).padStart(2,"0")}</div><p class="small muted" style="margin:10px 0 0">${ans.filter(a=>a!==null).length} of ${N} answered</p>
        <div class="qnav">${qs.map((_,i)=>`<button class="${ans[i]!==null?'ans':''} ${i===cur?'cur':''}" data-i="${i}" aria-label="Question ${i+1}">${i+1}</button>`).join("")}</div><button class="btn sm" style="width:100%;margin-top:16px" id="sub2">Submit exam</button></aside></div>`;
      $$('input[name="x"]').forEach(r=>r.onchange=()=>{ ans[cur]=+r.value; draw(); });
      $("#prev").onclick=()=>{ cur--; draw(); }; const n=$("#next"); if(n) n.onclick=()=>{ cur++; draw(); };
      $$(".qnav button").forEach(b=>b.onclick=()=>{ cur=+b.dataset.i; draw(); });
      const confirmSub=()=>{ const un=ans.filter(a=>a===null).length; if(un&&!$("#sure")){ const d=document.createElement("div"); d.id="sure"; d.className="status info"; d.innerHTML=`${un} unanswered. <button class="btn sm pri" id="yes" style="margin-left:auto">Submit anyway</button>`; $(".exam-wrap > div").appendChild(d); $("#yes").onclick=submit; } else if(!un) submit(); };
      const s1=$("#sub"); if(s1) s1.onclick=confirmSub; $("#sub2").onclick=confirmSub; };
    run.draw=draw; draw(); };
  const submit=()=>{ if(done) return; done=true; RJ.stopTimers(); const score=qs.reduce((s,q,i)=>s+(ans[i]===q[2]?1:0),0); const pct=Math.round(score/N*100), pass=pct>=60;
    if(!mock){ S.final[c.id]=Math.max(S.final[c.id]??0,score); RJ.save(); }
    const pp=RJ.progress(c); if(!mock&&pp.complete) RJ.issueCert(c);
    app().innerHTML=`<div class="card" style="max-width:860px;margin:10px auto"><div class="result"><div class="ring ${pass?'ok':'bad'}" style="--p:${pct}"><b>${pct}%</b></div><div style="flex:1;min-width:220px"><span class="chip ${pass?'ok':'bad'}">${pass?"Passed":"Not passed"}</span><h1 style="font-size:28px;margin:10px 0 6px">${score} / ${N} correct</h1><p class="muted" style="margin:0">${mock?"Mock tests do not affect your progress.":pass?(pp.complete?"Course complete. Your certificate is ready.":pp.prac?"":"Now complete the practical exam to earn your certificate."):"You need 60%. Review the answers below and try again."}</p></div>
      <div class="row">${!mock&&pp.complete?`<a class="btn gold" href="certificate.html?c=${c.id}">${I("award")} Certificate</a>`:""}${!mock&&pass&&!pp.prac?`<a class="btn pri" href="lab.html?c=${c.id}&mode=exam">Practical exam</a>`:""}<a class="btn" href="${mock?'exam.html?c='+c.id+'&mock=1':'exam.html?c='+c.id}">Retake</a></div></div></div>
      <h2 style="font-size:22px;margin:30px 0 14px">Answer review</h2>${qs.map((q,i)=>`<div class="q"><span class="qn">QUESTION ${i+1} · ${ans[i]===q[2]?'<span style="color:var(--ok)">CORRECT</span>':'<span style="color:var(--bad)">INCORRECT</span>'}</span><b>${RJ.fmt(q[0])}</b>${q[1].map((o,j)=>`<div class="opt ${j===q[2]?'right':j===ans[i]?'wrong':''}" style="cursor:default">${RJ.fmt(o)}</div>`).join("")}${q[3]?`<p class="why">${I("info")} ${RJ.fmt(q[3])}</p>`:""}</div>`).join("")}`; scrollTo(0,0); };
  intro();
};

/* ================= LABS ================= */
PAGES.labs=()=>{
  app().innerHTML=head("Hands-on labs","Practise in real tools, right in your browser","Every lab checks your work automatically. Documents, spreadsheets and presentations you build download in real Office formats.")+
  `<div class="grid g3">${C.map(c=>`<div class="card hover" style="display:flex;flex-direction:column;gap:12px"><div class="row" style="justify-content:space-between"><span class="icon cyan">${I(c.icon)}</span><span class="chip">${esc(c.cat)}</span></div><h3 style="font-size:20px">${labName(c)}</h3><p class="muted small" style="margin:0">${esc(c.lab.brief)}</p><p class="small" style="margin:0;color:var(--dim)">Part of ${esc(c.title)}</p><div class="row" style="margin-top:auto"><a class="btn sm pri" href="lab.html?c=${c.id}&mode=practice">Open lab</a><a class="btn sm" href="course.html?c=${c.id}">Course</a></div></div>`).join("")}
   <div class="card hover" style="display:flex;flex-direction:column;gap:12px"><div class="row" style="justify-content:space-between"><span class="icon gold">${I("bolt")}</span><span class="chip">Typing</span></div><h3 style="font-size:20px">Typing Speed Test</h3><p class="muted small" style="margin:0">Timed test with live WPM and accuracy. Save your best score.</p><div class="row" style="margin-top:auto"><a class="btn sm pri" href="typing-test.html">Start test</a></div></div>
   ${[["Linux Terminal","terminal","A real Linux shell in your browser."],["Phishing Spotter","shield","Spot fake emails and websites."],["HTML & CSS Playground","code","Write code, see the page instantly."]].map(x=>`<div class="card soon" style="display:flex;flex-direction:column;gap:12px"><div class="row" style="justify-content:space-between"><span class="icon">${I(x[1])}</span><span class="chip">Being built</span></div><h3 style="font-size:20px">${x[0]}</h3><p class="muted small" style="margin:0">${x[2]}</p></div>`).join("")}</div>`;
};

/* ================= TYPING TEST ================= */
PAGES.typing=()=>{
  let secs=60;
  const best=()=>S.typing.best;
  const render=()=>{ RJ.stopTimers();
    app().innerHTML=head("Free tool","Typing Speed Test","Type the text below. The timer starts with your first key. Speed is measured in words per minute (5 characters = 1 word).")+
    `<div class="grid" style="grid-template-columns:minmax(0,1fr) 300px;gap:22px;align-items:start" id="tt"><div class="card"><div class="row" style="justify-content:space-between;margin-bottom:14px"><div class="filters" style="margin:0" id="dur">${[30,60,120].map(s=>`<button class="${s===secs?'on':''}" data-s="${s}">${s<60?s+" sec":s/60+" min"}</button>`).join("")}</div><button class="btn sm" id="newt">${I("restore")} New text</button></div><div id="ty"></div><div id="tres"></div></div>
     <aside class="card"><span class="eyebrow">Your stats</span><div class="kpi" style="margin-top:12px"><b>${best()?best().wpm:"—"}</b><span>Best WPM ${best()?`· ${best().acc}% accuracy`:""}</span></div>
     <h3 style="font-size:14px;margin:20px 0 8px;font-family:var(--mono);color:var(--dim);letter-spacing:.08em">RECENT TESTS</h3>${(S.typing.history||[]).slice(-6).reverse().map(h=>`<div class="row" style="justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--line);font-size:14.5px"><span>${h.wpm} WPM</span><span class="muted">${h.acc}%</span></div>`).join("")||'<p class="muted small">No tests yet.</p>'}
     <h3 style="font-size:14px;margin:20px 0 8px;font-family:var(--mono);color:var(--dim);letter-spacing:.08em">BENCHMARKS</h3><div class="small muted" style="display:grid;gap:4px"><span>Beginner: 10-20 WPM</span><span>Average: 30-40 WPM</span><span>Data entry jobs: 30-35 WPM</span><span>Professional: 60+ WPM</span></div>
     <a class="btn sm" style="margin-top:18px;width:100%" href="lab.html?c=typing-mastery&mode=practice">Improve with lessons</a></aside></div>`;
    if(innerWidth<900) $("#tt").style.gridTemplateColumns="1fr";
    $$("#dur button").forEach(b=>b.onclick=()=>{ secs=+b.dataset.s; render(); }); $("#newt").onclick=render;
    const t=RJ.TYPE_TEXTS[Math.floor(Math.random()*RJ.TYPE_TEXTS.length)];
    RJ.typer($("#ty"),t+t+t,{seconds:secs,onFinish:s=>{ S.typing.history.push({wpm:s.wpm,acc:s.acc,at:Date.now()}); S.typing.history=S.typing.history.slice(-30); if(!S.typing.best||s.wpm>S.typing.best.wpm) S.typing.best={wpm:s.wpm,acc:s.acc}; RJ.save();
      const lvl=s.wpm>=60?"Professional":s.wpm>=40?"Fast":s.wpm>=30?"Average":s.wpm>=20?"Improving":"Beginner";
      $("#tres").innerHTML=`<div class="card" style="background:var(--card-2);margin-top:16px"><div class="result"><div class="ring ok" style="--p:${Math.min(100,s.wpm)}"><b>${s.wpm}</b></div><div style="flex:1;min-width:200px"><span class="chip blue">${lvl}</span><h3 style="font-size:22px;margin:8px 0 4px">${s.wpm} WPM · ${s.acc}% accuracy</h3><p class="muted small" style="margin:0">${s.chars} characters typed, ${s.errors} errors.</p></div><div class="row"><button class="btn sm" id="copy">${I("copy")} Copy result</button><button class="btn sm pri" id="again">Try again</button></div></div></div>`;
      $("#again").onclick=render; $("#copy").onclick=()=>{ const txt=`I typed ${s.wpm} WPM with ${s.acc}% accuracy on the rootjavs Typing Test.`; (navigator.clipboard?navigator.clipboard.writeText(txt):Promise.reject()).then(()=>RJ.toast("Result copied")).catch(()=>RJ.toast(txt)); };
    }}).focus(); };
  render();
};

/* ================= MOCK TESTS ================= */
PAGES.mock=()=>{
  app().innerHTML=head("Exam practice","Mock tests","Timed practice exams with questions from the full course. They do not affect your progress, so take them as often as you like.")+
  `<div class="grid g3">${C.map(c=>{ const pool=c.lessons.length*5+(c.finalExam||[]).length; return `<div class="card hover" style="display:flex;flex-direction:column;gap:12px"><div class="row" style="justify-content:space-between"><span class="icon">${I(c.icon)}</span><span class="chip">${pool} question bank</span></div><h3 style="font-size:19px">${esc(c.title)}</h3><div class="row small muted" style="gap:16px"><span class="row" style="gap:6px">${I("quiz")}15 questions</span><span class="row" style="gap:6px">${I("clock")}20 minutes</span></div><div class="row" style="margin-top:auto"><a class="btn sm pri" href="exam.html?c=${c.id}&mock=1">Start mock test</a></div></div>`; }).join("")}</div>
  <div class="card" style="margin-top:30px;display:flex;gap:16px;align-items:center;flex-wrap:wrap"><span class="icon cyan">${I("info")}</span><div style="flex:1;min-width:240px"><b>Exam tips</b><p class="muted small" style="margin:4px 0 0">Read every option before answering. Use the navigator to skip hard questions and come back. Check the answer review after each mock to find weak lessons.</p></div></div>`;
};

/* ================= ROADMAPS ================= */
PAGES.roadmaps=()=>{
  app().innerHTML=head("Career roadmaps","Know exactly what to learn next","Step-by-step paths to real jobs. Live courses are linked; upcoming courses are marked.")+
  `<div class="grid g2">${window.RJ_ROADMAPS.map(r=>`<div class="card" id="${r.id}"><div class="row" style="justify-content:space-between"><span class="icon">${I(r.icon)}</span><span class="chip">${I("clock")} ${r.time}</span></div><h2 style="font-size:24px;margin:14px 0 8px">${esc(r.title)}</h2><p class="muted">${esc(r.desc)}</p>
   <div class="road" style="margin-top:18px">${r.steps.map((s,i)=>{ const c=s[2]&&RJ.course(s[2]); const done=c&&RJ.progress(c).complete; return `<div class="st"><div class="row" style="justify-content:space-between;padding:12px 14px;border:1px solid var(--line);border-radius:10px;background:var(--card-2)"><span><small class="mono muted">STEP ${i+1}</small><br><b style="font-weight:600">${esc(s[0])}</b></span>${s[1]==="live"?(done?`<span class="chip ok">${I("check")} Done</span>`:`<a class="btn sm" href="course.html?c=${s[2]}">Start</a>`):(()=>{ const e=RJ.findEntry&&RJ.findEntry(s[0]); return e?`<a class="btn sm" href="course.html?c=${e.siteId}">View course</a>`:`<span class="chip">Planned</span>`; })()}</div></div>`; }).join("")}</div></div>`).join("")}</div>`;
  if(location.hash){ const t=document.getElementById(location.hash.slice(1)); if(t) setTimeout(()=>t.scrollIntoView({behavior:"smooth"}),100); }
};

/* ================= CHEAT SHEETS ================= */
PAGES.cheats=()=>{
  const cats=["All",...new Set(window.RJ_CHEATS.map(c=>c.cat))];
  app().innerHTML=head("Free downloads","Cheat sheets","Print them, keep them on your phone, revise before exams. Every sheet downloads as a clean PDF.")+
   `<div class="filters" id="flt">${cats.map((c,i)=>`<button class="${i?'':'on'}" data-f="${c}">${c}</button>`).join("")}</div><div class="grid g2" id="list"></div>`;
  let f="All";
  const draw=()=>{ $("#list").innerHTML=window.RJ_CHEATS.filter(c=>f==="All"||c.cat===f).map(cs=>`<div class="card"><div class="row" style="justify-content:space-between"><div class="row"><span class="icon">${I(cs.icon)}</span><div><h3 style="font-size:19px">${esc(cs.title)}</h3><span class="chip" style="margin-top:6px">${esc(cs.cat)}</span></div></div><button class="btn sm pri" data-dl="${cs.id}">${I("download")} PDF</button></div><p class="muted small" style="margin:14px 0">${esc(cs.desc)}</p>
    <details><summary class="small" style="cursor:pointer;color:var(--accent);font-weight:700">Preview</summary>${cs.sections.map(([n,rows])=>`<h4 style="font-size:14px;margin:14px 0 8px;color:var(--accent-2)">${esc(n)}</h4><div class="tbl"><table><tbody>${rows.map(r=>`<tr><td style="width:44%"><span class="mono" style="font-weight:700;font-size:13.5px">${esc(r[0])}</span></td><td>${esc(r[1])}</td></tr>`).join("")}</tbody></table></div>`).join("")}</details></div>`).join("");
    $$("[data-dl]").forEach(b=>b.onclick=()=>{ RJ.cheatPDF(window.RJ_CHEATS.find(x=>x.id===b.dataset.dl)); RJ.toast("Downloading PDF"); }); };
  $$("#flt button").forEach(b=>b.onclick=()=>{ f=b.dataset.f; $$("#flt button").forEach(x=>x.classList.toggle("on",x===b)); draw(); }); draw();
};

/* ================= INTERVIEW ================= */
PAGES.interview=()=>{
  const all=window.RJ_INTERVIEW;
  app().innerHTML=head("Career prep","Interview questions","Common questions asked in IT, office and cyber security interviews, with clear model answers.")+
   `<div class="row" style="justify-content:space-between;margin-bottom:20px"><div class="filters" id="flt" style="margin:0">${["All",...all.map(x=>x.cat)].map((c,i)=>`<button class="${i?'':'on'}" data-f="${c}">${c}</button>`).join("")}</div><label class="search"><span class="sr-only">Search questions</span>${I("search")}<input id="q" placeholder="Search questions"></label></div><div id="list"></div>`;
  let f="All";
  const draw=()=>{ const q=$("#q").value.toLowerCase(); $("#list").innerHTML=all.filter(x=>f==="All"||x.cat===f).map(g=>{ const qs=g.qs.filter(x=>(x[0]+x[1]).toLowerCase().includes(q)); if(!qs.length) return ""; return `<h2 style="font-size:20px;margin:26px 0 12px">${esc(g.cat)} <span class="chip">${qs.length}</span></h2>${qs.map(x=>`<details class="faq"><summary>${esc(x[0])}</summary><p>${esc(x[1])}</p></details>`).join("")}`; }).join("")||'<p class="muted">No questions match.</p>'; };
  $$("#flt button").forEach(b=>b.onclick=()=>{ f=b.dataset.f; $$("#flt button").forEach(x=>x.classList.toggle("on",x===b)); draw(); }); $("#q").oninput=draw; draw();
};

/* ================= GLOSSARY ================= */
PAGES.glossary=()=>{
  const G=window.RJ_GLOSSARY.slice().sort((a,b)=>a[0].localeCompare(b[0]));
  const letters=[...new Set(G.map(g=>g[0][0].toUpperCase()))];
  app().innerHTML=head("Reference","Tech glossary",`${G.length} computer, Office and cyber security terms explained in plain English.`)+
   `<label class="search" style="margin-bottom:18px"><span class="sr-only">Search terms</span>${I("search")}<input id="q" placeholder="Search a term"></label><div class="az">${letters.map(l=>`<a href="#L-${l}">${l}</a>`).join("")}</div><div id="list" class="card" style="padding:4px 24px"></div>`;
  const draw=()=>{ const q=$("#q").value.toLowerCase(); let lastL=""; $("#list").innerHTML=G.filter(g=>(g[0]+g[1]).toLowerCase().includes(q)).map(g=>{ const L=g[0][0].toUpperCase(); const anchor=L!==lastL?` id="L-${L}"`:""; lastL=L; return `<div class="gterm"${anchor}><b>${esc(g[0])}</b><p>${esc(g[1])}</p></div>`; }).join("")||'<p class="muted" style="padding:20px 0">No terms found.</p>'; };
  $("#q").oninput=draw; draw();
};

/* ================= DASHBOARD ================= */
PAGES.dashboard=()=>{
  const u=S.user; const done=C.filter(c=>RJ.progress(c).complete).length; const lessons=C.reduce((n,c)=>n+RJ.progress(c).passed,0);
  const last=S.last&&RJ.course(S.last.cid); const started=C.filter(c=>RJ.started(c));
  const days=[]; const set=new Set(S.days); for(let i=27;i>=0;i--){ const d=new Date(); d.setDate(d.getDate()-i); days.push(set.has(d.toISOString().slice(0,10))); }
  app().innerHTML=`${head("Dashboard",u?`Welcome back, ${esc(u.name.split(" ")[0])}`:"Your learning dashboard",u?"Here is where you left off.":"<a href=\"login.html?mode=signup\">Create a free account</a> so your name appears on your certificates.")}
  <div class="grid g4">${[["book",lessons,"Lessons passed"],["award",done,"Courses completed"],["fire",RJ.streak(),"Day streak"],["bolt",S.typing.best?S.typing.best.wpm:"—","Best typing WPM"]].map(k=>`<div class="card kpi"><span class="icon ${k[0]==="award"?"gold":k[0]==="fire"?"cyan":""}">${I(k[0])}</span><b style="margin-top:14px">${k[1]}</b><span>${k[2]}</span></div>`).join("")}</div>
  <div class="dash-top" style="margin-top:18px"><div class="card">${last?`<span class="eyebrow">Continue learning</span><h2 style="font-size:22px;margin:10px 0 6px">${esc(last.lessons[S.last.i].title)}</h2><p class="muted">${esc(last.title)} · Lesson ${S.last.i+1}</p><div class="pbar" style="margin:12px 0"><i style="width:${RJ.progress(last).pct}%"></i></div><a class="btn pri" href="lesson.html?c=${last.id}&l=${Math.min(S.last.i+(RJ.lessonPassed(last.id,S.last.i)?1:0),last.lessons.length-1)}">Continue ${I("arrow")}</a>`:`<span class="eyebrow">Get started</span><h2 style="font-size:22px;margin:10px 0 6px">Begin with Computer Fundamentals</h2><p class="muted">The best first step for every learner.</p><a class="btn pri" href="course.html?c=computer-fundamentals">Start now ${I("arrow")}</a>`}</div>
   <div class="card"><span class="eyebrow">Activity · last 28 days</span><div style="display:grid;grid-template-columns:repeat(14,1fr);gap:5px;margin-top:14px">${days.map(a=>`<span title="${a?'Active':'No activity'}" style="aspect-ratio:1;border-radius:4px;background:${a?'var(--accent)':'var(--raise)'}"></span>`).join("")}</div><p class="small muted" style="margin:12px 0 0">Learn a little every day to build your streak.</p></div></div>
  <section class="sec" style="margin-top:44px"><div class="sec-head" style="margin-bottom:16px"><h2 style="font-size:24px">My courses</h2><a class="btn sm" href="courses.html">Browse more</a></div><div class="grid g3">${(started.length?started:C.slice(0,3)).map(RJ.courseCard).join("")}</div></section>
  <section class="sec" style="margin-top:44px"><h2 style="font-size:24px;margin-bottom:16px">My certificates</h2>${Object.keys(S.certs).length?`<div class="grid g3">${Object.entries(S.certs).map(([id,ce])=>{ const c=RJ.course(id); return c?`<a class="card hover" href="certificate.html?c=${id}"><span class="icon gold">${I("award")}</span><h3 style="font-size:18px;margin:14px 0 6px">${esc(c.title)}</h3><p class="small muted mono" style="margin:0">${ce.id||"Add your name to finalise"}</p></a>`:""; }).join("")}</div>`:`<div class="card muted">No certificates yet. Complete a course to earn one.</div>`}</section>
  <section class="sec" style="margin-top:44px"><div class="card" style="display:flex;flex-wrap:wrap;gap:14px;align-items:center;justify-content:space-between"><div><b>Account</b><p class="muted small" style="margin:4px 0 0">${u?`${esc(u.name)} · ${esc(u.email)}`:"Not signed in"}. Progress is saved in this browser.</p></div><div class="row">${u?`<button class="btn sm" id="out">${I("logout")} Log out</button>`:`<a class="btn sm pri" href="login.html">Log in</a>`}<button class="btn sm" id="rst">${I("trash")} Reset progress</button></div></div><div id="rstc"></div></section>`;
  const o=$("#out"); if(o) o.onclick=()=>{ S.user=null; RJ.save(); location.href="index.html"; };
  $("#rst").onclick=()=>{ $("#rstc").innerHTML=`<div class="status bad">This deletes all quiz scores, exams and certificates on this device. <button class="btn sm" id="rsty" style="margin-left:auto">Yes, reset everything</button></div>`; $("#rsty").onclick=()=>{ const u=S.user; Object.keys(S).forEach(k=>delete S[k]); Object.assign(S,{user:u,lessons:{},practical:{},final:{},certs:{},typing:{best:null,history:[]},days:[],last:null}); RJ.save(); location.reload(); }; };
};

/* ================= CERTIFICATE ================= */
PAGES.certificate=()=>{
  const c=RJ.course(RJ.qp("c"));
  if(!c){ const list=Object.entries(S.certs);
    app().innerHTML=head("Certificates","My certificates","Certificates you have earned on this device.")+(list.length?`<div class="grid g3">${list.map(([id,ce])=>{ const k=RJ.course(id); return k?`<a class="card hover" href="certificate.html?c=${id}"><span class="icon gold">${I("award")}</span><h3 style="font-size:18px;margin:14px 0 6px">${esc(k.title)}</h3><p class="small muted mono" style="margin:0">${ce.id||"Add your name"}</p></a>`:""; }).join("")}</div>`:gate("No certificates yet","Complete all lessons, the final theory exam and the practical exam of a course to earn its certificate.","courses.html","Browse courses")); return; }
  const p=RJ.progress(c);
  if(!p.complete){ app().innerHTML=gate("Certificate not unlocked yet",`For ${esc(c.title)} you have passed ${p.passed}/${p.n} lessons, ${p.fin?"passed":"not yet passed"} the final exam and ${p.prac?"passed":"not yet passed"} the practical exam.`,`course.html?c=${c.id}`,"Continue the course"); return; }
  const cert=RJ.issueCert(c);
  app().innerHTML=head("Certificate",esc(c.title),"Congratulations on completing the course.",`<a href="dashboard.html">Dashboard</a> / Certificates`)+
   `<div class="grid" style="grid-template-columns:minmax(0,1fr) 320px;gap:22px;align-items:start" id="cw"><div><canvas class="cert-canvas" id="cv" aria-label="Certificate"></canvas></div>
    <aside class="card"><div id="nameBox"></div><div class="row" style="margin-top:16px"><button class="btn pri" id="pdf" style="flex:1">${I("download")} PDF</button><button class="btn" id="png" style="flex:1">${I("download")} PNG</button></div>
    <h3 style="font-size:14px;margin:22px 0 8px;font-family:var(--mono);color:var(--dim);letter-spacing:.08em">CERTIFICATE ID</h3><p class="mono" style="font-weight:700;font-size:15px;word-break:break-all;margin:0" id="cid">${cert.id||"—"}</p><p class="small muted" style="margin-top:6px">Anyone can confirm it on the <a href="verify.html">verification page</a> using this ID and your name.</p>
    <button class="btn sm" id="share" style="width:100%;margin-top:10px">${I("copy")} Copy LinkedIn text</button></aside></div>`;
  if(innerWidth<900) $("#cw").style.gridTemplateColumns="1fr";
  const cv=$("#cv");
  const nameUI=()=>{ $("#nameBox").innerHTML=cert.id?`<span class="eyebrow">Awarded to</span><h3 style="font-size:22px;margin:8px 0 0">${esc(cert.name)}</h3><p class="small muted" style="margin:4px 0 0">Issued ${RJ.fmtDate(cert.date)}</p>`
     :`<span class="eyebrow">One last step</span><p class="small muted" style="margin:8px 0 10px">Enter your full name exactly as it should appear. It cannot be changed later.</p><div class="field"><label for="nm">Full name</label><input id="nm" maxlength="40" value="${esc(S.user?S.user.name:"")}"></div><button class="btn pri sm" id="setn" style="margin-top:10px">Issue certificate</button>`;
    const b=$("#setn"); if(b) b.onclick=()=>{ const v=$("#nm").value.trim().replace(/\s+/g," "); if(v.length<3){ RJ.toast("Enter your full name"); return; } cert.name=v; cert.id=RJ.makeCertId(c,v,new Date(cert.date)); RJ.save(); $("#cid").textContent=cert.id; nameUI(); RJ.drawCert(cv,c,cert); }; };
  nameUI(); RJ.drawCert(cv,c,cert);
  const ready=()=>{ if(!cert.id){ RJ.toast("Add your name first"); return false; } return true; };
  $("#pdf").onclick=()=>{ if(ready()) RJ.certPDF(cv,c); };
  $("#png").onclick=()=>{ if(ready()) cv.toBlob(b=>RJ.saveBlob(b,`rootjavs-certificate-${c.id}.png`),"image/png"); };
  $("#share").onclick=()=>{ const t=`I just completed "${c.title}" on rootjavs, passing the theory and practical exams. Certificate ID: ${cert.id||""}`; (navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(()=>RJ.toast("Copied. Paste it on LinkedIn.")).catch(()=>RJ.toast(t)); };
};

/* ================= VERIFY ================= */
PAGES.verify=()=>{
  app().innerHTML=`<div style="max-width:620px;margin:0 auto">${head("Verification","Verify a certificate","Enter the certificate ID and the holder's full name exactly as printed on the certificate.")}
   <form class="card form" id="vf"><div class="field"><label for="vid">Certificate ID</label><input id="vid" placeholder="RJ-XL-261011-3F2A9" required autocomplete="off" style="font-family:var(--mono);text-transform:uppercase"></div><div class="field"><label for="vn">Holder's full name</label><input id="vn" placeholder="Riya Shah" required></div><button class="btn pri" type="submit">${I("shield")} Verify</button></form><div id="vr"></div></div>`;
  const id=RJ.qp("id"); if(id) $("#vid").value=id;
  $("#vf").onsubmit=e=>{ e.preventDefault(); const r=RJ.verifyCert($("#vid").value,$("#vn").value);
    $("#vr").innerHTML=r.ok?`<div class="card" style="margin-top:18px;border-color:var(--ok)"><div class="row"><span class="icon ok">${I("checkc")}</span><div><h3 style="font-size:20px">Valid certificate</h3><p class="muted small" style="margin:2px 0 0">Issued by rootjavs</p></div></div><div class="tbl" style="margin:16px 0 0"><table><tbody><tr><td>Holder</td><td><b>${esc($("#vn").value.trim())}</b></td></tr><tr><td>Course</td><td>${esc(r.course.title)}</td></tr><tr><td>Completed</td><td>${RJ.fmtDate(r.date)}</td></tr><tr><td>Requirements</td><td>All lesson quizzes, final theory exam (60%+), practical exam</td></tr></tbody></table></div></div>`
     :`<div class="card" style="margin-top:18px;border-color:var(--bad)"><div class="row"><span class="icon" style="background:var(--bad-bg);color:var(--bad)">${I("alert")}</span><div><h3 style="font-size:20px">Could not verify</h3><p class="muted small" style="margin:2px 0 0">${r.reason==="format"?"The ID format is not valid. It should look like RJ-XL-261011-3F2A9.":r.reason==="course"?"The course code in this ID does not exist.":"The ID and name do not match. Check the spelling of the name."}</p></div></div></div>`; };
};

/* ================= LOGIN ================= */
PAGES.login=()=>{
  let mode=RJ.qp("mode")==="signup"?"signup":"login";
  const render=()=>{ app().innerHTML=`<div class="auth"><div class="card" style="padding:32px"><div style="text-align:center;margin-bottom:22px"><span style="display:inline-block;width:48px">${RJ.logo}</span><h1 style="font-size:26px;margin-top:12px">${mode==="signup"?"Create your free account":"Welcome back"}</h1><p class="muted small" style="margin:6px 0 0">${mode==="signup"?"Track progress and earn certificates in your name.":"Log in to continue learning."}</p></div>
    <div class="filters" style="justify-content:center"><button class="${mode==="login"?'on':''}" data-m="login">Log in</button><button class="${mode==="signup"?'on':''}" data-m="signup">Sign up</button></div>
    <form class="form" id="af" novalidate>${mode==="signup"?`<div class="field"><label for="an">Full name</label><input id="an" autocomplete="name" required></div>`:""}<div class="field"><label for="ae">Email</label><input id="ae" type="email" autocomplete="email" required></div><div class="field"><label for="ap">Password</label><input id="ap" type="password" autocomplete="${mode==="signup"?"new-password":"current-password"}" required minlength="8"></div>
    <div id="aerr"></div><button class="btn pri lg" type="submit">${mode==="signup"?"Create account":"Log in"}</button></form>
    <p class="small muted" style="text-align:center;margin:18px 0 0">By continuing you agree to our <a href="terms.html">Terms</a> and <a href="privacy.html">Privacy Policy</a>.</p></div></div>`;
    $$("[data-m]").forEach(b=>b.onclick=()=>{ mode=b.dataset.m; render(); });
    $("#af").onsubmit=async e=>{ e.preventDefault(); const em=$("#ae").value.trim().toLowerCase(), pw=$("#ap").value, err=m=>$("#aerr").innerHTML=`<div class="status bad" style="margin:0">${I("alert")} ${m}</div>`;
      if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)) return err("Enter a valid email address.");
      if(pw.length<8) return err("Password must be at least 8 characters.");
      const hash=await sha(em+"|"+pw);
      let acc; try{ acc=JSON.parse(localStorage.getItem("rj_accounts")||"{}"); }catch(x){ acc={}; }
      if(mode==="signup"){ const n=$("#an").value.trim(); if(n.length<3) return err("Enter your full name."); if(acc[em]) return err("An account with this email already exists. Log in instead.");
        acc[em]={name:n,hash}; try{ localStorage.setItem("rj_accounts",JSON.stringify(acc)); }catch(x){} S.user={name:n,email:em}; RJ.save(); location.href="dashboard.html"; }
      else { if(!acc[em]||acc[em].hash!==hash) return err("Email or password is incorrect."); S.user={name:acc[em].name,email:em}; RJ.save(); location.href="dashboard.html"; } };
  };
  const sha=async s=>{ try{ const b=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(s)); return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join(""); }catch(e){ let h=0; for(const ch of s) h=(h*31+ch.charCodeAt(0))|0; return String(h); } };
  render();
};

/* ================= STATIC PAGES ================= */
PAGES.about=()=>{
  app().innerHTML=head("About","Practical skills for every student","rootjavs is a learning platform that teaches computers, Office and cyber security the way they are used at work: by doing.")+
  `<div class="grid g2" style="gap:24px"><div class="card"><span class="icon">${I("target")}</span><h2 style="font-size:22px;margin:14px 0 10px">Our mission</h2><p class="muted">Millions of students graduate without confidence on a computer. Videos and theory are not enough. We built rootjavs so that every learner, from someone holding a laptop for the first time to a future security analyst, learns by completing real tasks and proves it with real exams.</p></div>
   <div class="card"><span class="icon cyan">${I("flask")}</span><h2 style="font-size:22px;margin:14px 0 10px">How we teach</h2><p class="muted">Short notes you can download. Browser labs that behave like the real tools. A theory exam and a practical exam for every course. Certificates with IDs that anyone can verify.</p></div>
   <div class="card"><span class="icon gold">${I("user")}</span><h2 style="font-size:22px;margin:14px 0 10px">Founder</h2><p class="muted">rootjavs was founded by <b style="color:var(--text)">Jayveer Vasava</b>, an M.Tech Cyber Security student at Parul University, Vadodara, with industry internships in cyber security and web development.</p></div>
   <div class="card"><span class="icon">${I("map")}</span><h2 style="font-size:22px;margin:14px 0 10px">What is next</h2><p class="muted">Web development, Python, Linux, networking, cyber security, cloud and AI security courses, a live Linux terminal lab and a phishing simulator are on the roadmap.</p><a class="btn sm" href="roadmaps.html">See the roadmaps</a></div></div>
  <div class="band"><div><b>${C.length}</b><span>Live courses</span></div><div><b>${TL()}</b><span>Lessons</span></div><div><b>${C.reduce((n,c)=>n+c.lessons.length*5,0)}</b><span>Quiz questions</span></div><div><b>${window.RJ_CHEATS.length}</b><span>Cheat sheets</span></div></div>`;
};
PAGES.contact=()=>{
  app().innerHTML=head("Contact","Get in touch","Questions about courses, certificates, college workshops or partnerships? We usually reply within two working days.")+
  `<div class="grid" style="grid-template-columns:minmax(0,1.3fr) minmax(0,1fr);gap:22px" id="cg"><form class="card form" id="cf"><div class="grid g2" style="gap:14px"><div class="field"><label for="cn">Name</label><input id="cn" required autocomplete="name"></div><div class="field"><label for="ce">Email</label><input id="ce" type="email" required autocomplete="email"></div></div>
    <div class="field"><label for="ct">Topic</label><select id="ct"><option>Course question</option><option>Certificate</option><option>College workshop</option><option>Partnership</option><option>Report a problem</option></select></div><div class="field"><label for="cm">Message</label><textarea id="cm" rows="6" required></textarea></div><div id="cres"></div><button class="btn pri" type="submit">${I("mail")} Send message</button></form>
   <div class="grid" style="gap:14px;align-content:start"><div class="card"><span class="icon">${I("mail")}</span><h3 style="font-size:17px;margin:12px 0 4px">Email</h3><p class="muted small mono" style="margin:0;word-break:break-all">jayveervasava0710@gmail.com</p></div><div class="card"><span class="icon cyan">${I("star")}</span><h3 style="font-size:17px;margin:12px 0 4px">Instagram</h3><p class="muted small" style="margin:0">@rootjavs</p></div><div class="card"><span class="icon gold">${I("map")}</span><h3 style="font-size:17px;margin:12px 0 4px">Location</h3><p class="muted small" style="margin:0">Vadodara, Gujarat, India</p></div></div></div>`;
  if(innerWidth<900) $("#cg").style.gridTemplateColumns="1fr";
  $("#cf").onsubmit=e=>{ e.preventDefault(); const n=$("#cn").value.trim(), em=$("#ce").value.trim(), m=$("#cm").value.trim(); if(!n||!/\S+@\S+\.\S+/.test(em)||m.length<10){ $("#cres").innerHTML=`<div class="status bad" style="margin:0">${I("alert")} Fill in your name, a valid email and a message of at least 10 characters.</div>`; return; }
    const body=encodeURIComponent(`Name: ${n}\nEmail: ${em}\n\n${m}`); location.href=`mailto:jayveervasava0710@gmail.com?subject=${encodeURIComponent("[rootjavs] "+$("#ct").value)}&body=${body}`;
    $("#cres").innerHTML=`<div class="status ok" style="margin:0">${I("check")} Your email app has opened with the message. Press send there to deliver it.</div>`; };
};
PAGES.faq=()=>{ app().innerHTML=`<div style="max-width:820px;margin:0 auto">${head("Help centre","Frequently asked questions","")}${window.RJ_FAQ.map(f=>`<details class="faq"><summary>${esc(f[0])}</summary><p>${esc(f[1])}</p></details>`).join("")}<div class="card" style="margin-top:24px;display:flex;flex-wrap:wrap;gap:14px;align-items:center;justify-content:space-between"><div><b>Still need help?</b><p class="muted small" style="margin:4px 0 0">Send us a message and we will get back to you.</p></div><a class="btn pri" href="contact.html">Contact us</a></div></div>`; };
const legal=(t,secs)=>`<div style="max-width:780px;margin:0 auto">${head("Legal",t,"Last updated: October 2026")}<div class="notes">${secs.map(s=>`<h2>${s[0]}</h2><p>${s[1]}</p>`).join("")}</div></div>`;
PAGES.privacy=()=>{ app().innerHTML=legal("Privacy Policy",[["What we collect","Your name and email when you create an account, and your learning progress: quiz scores, exam results, typing scores and certificates."],["Where it is stored","In this version, all data is stored in your own browser on your device. Nothing is sent to our servers. Clearing your browser data removes it."],["How we use it","Only to show your progress, issue certificates in your name and personalise your dashboard. We never sell personal data."],["Your choices","You can reset your progress from the dashboard at any time, or log out to remove your account details from this device."],["Contact","For privacy questions, email jayveervasava0710@gmail.com."]]); };
PAGES.terms=()=>{ app().innerHTML=legal("Terms of Use",[["Using rootjavs","You may use the courses, labs and resources for personal learning. Do not copy or resell the content."],["Certificates","Certificates confirm completion of the course requirements on rootjavs. Attempting to forge or misuse a certificate is not allowed."],["Acceptable use","Use labs and tools only for learning. Security topics are taught for defensive and ethical purposes; never test systems you do not own or have permission to test."],["Changes","We may update courses and these terms. Continued use means you accept the latest version."],["Contact","Questions about these terms: jayveervasava0710@gmail.com."]]); };
PAGES.notfound=()=>{ app().innerHTML=gate("Page not found","The page you are looking for does not exist.","index.html","Go to home"); };

document.addEventListener("DOMContentLoaded",()=>{ const p=document.body.dataset.page;
  (RJ.ready?RJ.ready(p):Promise.resolve()).then(()=>{ try{ (PAGES[p]||PAGES.notfound)(); }catch(err){ console.error(err); app().innerHTML=gate("Something went wrong","This page could not be shown. Please reload, or go back to the courses.","courses.html","Browse courses"); } }); });
})();
