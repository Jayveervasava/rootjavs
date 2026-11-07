/* rootjavs — mission lab engine for new-format courses.
   Practice mode uses course.lab.steps (goal, hint, check). Exam mode uses course.practicalExam.tasks (task, check).
   Short answers (a command, a key combination, one term) are checked automatically.
   Longer tasks are written out by the student, then compared against the shown criteria (self-check).
   Real in-browser engines (Linux VM, Python, SQL) can replace this per lab type later. */
(function(){
const RJ=window.RJ, esc=RJ.esc;
RJ.LABS=RJ.LABS||{};

const RUBRIC=/\b(contains?|shows?|returns?|exists?|prints?|fails?|has|have|recorded|names?|lists?|executes?|is|are|with|then|least|equivalent|written|present|defined|follows|says|mentions?|uses?)\b/i;
const norm=s=>String(s).toLowerCase().replace(/[“”]/g,'"').replace(/[‘’]/g,"'").replace(/\s*\+\s*/g,"+").replace(/\s+/g," ").replace(/[;.\s]+$/,"").trim();
RJ.missionAuto = check => { const c=String(check||"").trim(); return c.length>0 && c.length<=60 && c.split(/\s+/).length<=7 && !RUBRIC.test(c) && !/[,;]/.test(c); };

RJ.LABS.mission=(el,o)=>{
  const c=o.course||{}; const exam=o.mode==="exam";
  const items=exam?((c.practicalExam||{}).tasks||[]).map(t=>({goal:t.task,check:t.check})):((c.lab||{}).steps||[]).map(s=>({goal:s.goal,hint:s.hint,check:s.check}));
  const intro=exam?(c.practicalExam||{}).scenario:(c.lab||{}).story;
  const term=["linux","docker","simulator"].includes((c.lab||{}).type);
  const done=items.map(()=>false), tries=items.map(()=>0); let fired=false;
  const list=()=>{ if(o.tasksEl) o.tasksEl.innerHTML=items.map((t,i)=>`<li class="${done[i]?'done':''}"><span class="ck">${done[i]?'✓':''}</span><span>${RJ.fmt(t.goal.length>90?t.goal.slice(0,88)+"…":t.goal)}</span></li>`).join(""); };
  const finish=()=>{ list(); const n=done.filter(Boolean).length; const st=el.querySelector("[data-ml-count]"); if(st) st.textContent=`${n} of ${items.length} done`;
    if(!fired&&done.every(Boolean)){ fired=true; if(!exam&&c.id){ RJ.S.labs=RJ.S.labs||{}; RJ.S.labs[c.id]=true; RJ.save(); } o.onAllDone&&o.onAllDone(); } };
  if(!items.length){ el.innerHTML=`<div class="card"><p class="muted">This lab has no tasks yet.</p></div>`; return; }
  el.innerHTML=`<div class="ml-win"><div class="ml-bar"><span class="d" style="background:#FF5F57"></span><span class="d" style="background:#FEBC2E"></span><span class="d" style="background:#28C840"></span><span class="ml-url">${esc((c.lab||{}).kind||"Mission lab")} · ${exam?"practical exam":"practice"}</span><span class="ml-count mono" data-ml-count></span></div>
   <div class="ml-body"><p class="ml-story"><b>${exam?"Scenario":"Mission"}:</b> ${RJ.fmt(intro||"")}</p>
   ${items.map((t,i)=>{ const auto=RJ.missionAuto(t.check);
     return `<div class="ml-step" data-i="${i}"><div class="ml-head"><span class="ml-n mono">${exam?"TASK":"STEP"} ${i+1}</span><span class="ml-mode">${auto?"auto-checked":"self-checked"}</span></div>
      <p class="ml-goal">${RJ.fmt(t.goal)}</p>
      ${t.hint&&!exam?`<details class="ml-hint"><summary>Hint</summary><p>${RJ.fmt(t.hint)}</p></details>`:""}
      ${auto?`<form class="ml-prompt" data-f="${i}" autocomplete="off"><label for="mli${i}" class="mono">${term?"student@rootjavs:~$":"answer &gt;"}</label><input id="mli${i}" spellcheck="false" autocapitalize="off" placeholder="${term?"type the command":"type your answer"}"><button class="btn sm pri" type="submit">Check</button></form>`
        :`<label class="sr-only" for="mlt${i}">Your work for ${exam?"task":"step"} ${i+1}</label><textarea id="mlt${i}" class="ml-text" rows="4" placeholder="Write your answer, command or notes here"></textarea><div class="row"><button class="btn sm pri" type="button" data-s="${i}">Submit</button></div>`}
      <div class="ml-res" data-r="${i}"></div></div>`; }).join("")}</div></div>`;
  el.querySelectorAll("[data-f]").forEach(f=>f.onsubmit=e=>{ e.preventDefault(); const i=+f.dataset.f, t=items[i], v=f.querySelector("input").value, r=el.querySelector(`[data-r="${i}"]`);
    if(!v.trim()) return; tries[i]++;
    if(norm(v)===norm(t.check)){ done[i]=true; f.querySelector("input").disabled=true; r.innerHTML=`<div class="status ok">${RJ.icon("checkc")} Correct</div>`; finish(); }
    else r.innerHTML=`<div class="status bad">${RJ.icon("alert")} Not correct yet. ${!exam&&tries[i]>=2?`Answer: <code>${esc(t.check)}</code>`:"Try again."}</div>`; });
  el.querySelectorAll("[data-s]").forEach(b=>b.onclick=()=>{ const i=+b.dataset.s, t=items[i], ta=el.querySelector("#mlt"+i), r=el.querySelector(`[data-r="${i}"]`);
    if(ta.value.trim().length<10){ r.innerHTML=`<div class="status bad">${RJ.icon("alert")} Write your answer first (at least a full line).</div>`; return; }
    r.innerHTML=`<div class="status info" style="display:block"><b>Check your work against this:</b><br>${RJ.fmt(t.check)}<div class="row" style="margin-top:10px"><button class="btn sm pri" type="button" data-y="${i}">Yes, my work meets this</button><button class="btn sm" type="button" data-n="${i}">Not yet</button></div></div>`;
    r.querySelector("[data-y]").onclick=()=>{ done[i]=true; ta.disabled=true; b.disabled=true; r.innerHTML=`<div class="status ok">${RJ.icon("checkc")} Marked done</div>`; finish(); };
    r.querySelector("[data-n]").onclick=()=>{ r.innerHTML=`<div class="status info">Improve your answer and submit again.</div>`; }; });
  finish();
};
})();
