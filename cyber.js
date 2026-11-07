/* rootjavs — cyber widgets used on the home page, Challenges and Cyber Tools.
   Everything runs in the browser only: nothing typed here is saved or sent anywhere. */
(function(){
const RJ=window.RJ, esc=RJ.esc;
const W=RJ.cyber={};
const bonus=(k,n)=>{ if(RJ.addBonus&&RJ.addBonus(k,n)&&RJ.paintXp) RJ.paintXp(); };

/* ---------- Linux mission: find the hidden file ---------- */
W.shell=(el,opt={})=>{
  const user=opt.user||"student", home="/home/"+user;
  const FS={[home]:{dirs:["labs","notes"],files:{"readme.txt":"Welcome to the rootjavs practice machine.\nHint: some files are hidden. Hidden names start with a dot.",".mission.txt":"FLAG{hidden_files_start_with_a_dot}\nWell done. Use ls -a to see hidden files."}},
    [home+"/labs"]:{dirs:[],files:{"scan.log":"22/tcp   open  ssh\n80/tcp   open  http\n443/tcp  open  https"}},
    [home+"/notes"]:{dirs:[],files:{"linux.txt":"ls lists files. cd changes folder. cat prints a file. pwd shows where you are."}}};
  let cwd=home;
  const short=p=>p.replace(home,"~");
  el.innerHTML=`<div class="cy-scr" data-scr role="log" aria-live="polite"></div><form class="cy-prompt" data-f autocomplete="off"><label class="mono" data-ps for="cyIn${opt.id||""}">${user}@rootjavs:~$</label><input id="cyIn${opt.id||""}" spellcheck="false" autocapitalize="off" placeholder="try: ls -a"></form>
    <div class="cy-chips">${["ls","ls -a","cat readme.txt","cd labs","pwd","help"].map(c=>`<button type="button" data-c="${c}">${c}</button>`).join("")}</div>`;
  const scr=el.querySelector("[data-scr]"), inp=el.querySelector("input");
  const ln=(h,c)=>{ const d=document.createElement("div"); if(c) d.className=c; d.innerHTML=h; scr.appendChild(d); scr.scrollTop=scr.scrollHeight; };
  ln(`<span class="c-mu">Mission: a file is hidden in your home folder. Find it and read it to get the flag.</span>`);
  const run=raw=>{ const c=raw.trim(); if(!c) return; ln(`<span class="c-cy">${user}@rootjavs:${short(cwd)}$</span> ${esc(c)}`); const [cmd,...a]=c.split(/\s+/); const d=FS[cwd];
    if(cmd==="ls"){ const all=a.includes("-a")||a.includes("-la"); const items=[...d.dirs.map(x=>`<span class="c-bl">${x}/</span>`),...Object.keys(d.files).filter(f=>all||!f.startsWith(".")).map(f=>f.startsWith(".")?`<span class="c-yl">${esc(f)}</span>`:esc(f))]; ln(items.join("  ")||'<span class="c-mu">(empty)</span>'); }
    else if(cmd==="pwd") ln(cwd);
    else if(cmd==="whoami") ln(user);
    else if(cmd==="clear") scr.innerHTML="";
    else if(cmd==="help") ln("ls, ls -a, cd <folder>, cd .., pwd, cat <file>, whoami, clear");
    else if(cmd==="cd"){ const t=(a[0]||"").replace(/\/$/,""); if(!t||t==="~") cwd=home; else if(t===".."){ if(cwd!==home) cwd=cwd.slice(0,cwd.lastIndexOf("/")); } else if(d.dirs.includes(t)) cwd=cwd+"/"+t; else ln(`<span class="c-rd">cd: ${esc(t)}: No such file or directory</span>`); }
    else if(cmd==="cat"){ const f=a[0]; if(f&&d.files[f]!==undefined){ ln(esc(d.files[f]).replace(/\n/g,"<br>")); if(f===".mission.txt"){ ln(`<span class="c-cy">✓ Flag found.</span> <span class="c-yl">+30 XP</span>`); bonus("ctf-hidden-file",30); opt.onFlag&&opt.onFlag(); } } else ln(`<span class="c-rd">cat: ${esc(f||"")}: No such file</span>`); }
    else if(cmd==="sudo") ln(`<span class="c-rd">[sudo] permission denied:</span> ${user} is not in the sudoers file. This incident will be reported.`);
    else ln(`<span class="c-rd">${esc(cmd)}: command not found.</span> Type <span class="c-cy">help</span>.`);
    el.querySelector("[data-ps]").textContent=`${user}@rootjavs:${short(cwd)}$`; };
  el.querySelector("[data-f]").onsubmit=e=>{ e.preventDefault(); run(inp.value); inp.value=""; };
  el.querySelectorAll("[data-c]").forEach(b=>b.onclick=()=>run(b.dataset.c));
};

/* ---------- Phishing quick check ---------- */
W.PHISH=[
 {f:"From: SBI Alerts <alerts@sbi-secure-kyc.top>",b:"Your account will be blocked today. Update KYC now: sbi-secure-kyc.top/verify",scam:true,why:"Scam. Banks never use domains like .top, and fake urgency is a classic trick."},
 {f:"From: GitHub <noreply@github.com>",b:"A new SSH key was added to your account. If this wasn't you, review it in Settings.",scam:false,why:"Legit. Real domain, no link to click, and it tells you to check settings yourself."},
 {f:"From: +91 98xxx xxx21 (WhatsApp)",b:"Congrats! You won ₹25,000 in the Diwali lucky draw. Share the OTP you receive to claim.",scam:true,why:"Scam. No real company ever asks for your OTP."},
 {f:"From: HR Team <jobs.tcs-careers@gmail.com>",b:"You are selected for a work-from-home job. Pay ₹1,999 registration fee to confirm your joining.",scam:true,why:"Scam. Real companies do not hire from Gmail addresses and never ask for a joining fee."},
 {f:"From: Electricity Board (SMS)",b:"Dear customer, your power will be cut tonight at 9:30 pm. Call officer 98xxxxxx45 immediately.",scam:true,why:"Scam. Electricity boards do not send threats from personal numbers. Check through the official app or bill."}
];
W.phish=(el,opt={})=>{
  const list=opt.list||W.PHISH; let i=0, score=0, lock=false;
  const show=()=>{ const p=list[i]; el.innerHTML=`<div class="cy-msg"><span class="mono c-mu">${esc(p.f)}</span><span>${esc(p.b)}</span></div><div class="cy-opts"><button type="button" data-s="1">Scam</button><button type="button" data-s="0">Legit</button></div><p class="cy-fb" data-fb>Read the sender and the link, then decide.</p><span class="mono small c-mu">Round ${i+1} of ${list.length} · score ${score}</span>`; lock=false;
    el.querySelectorAll("[data-s]").forEach(b=>b.onclick=()=>{ if(lock) return; lock=true; const ok=(b.dataset.s==="1")===p.scam; b.classList.add(ok?"right":"wrong"); el.querySelector("[data-fb]").textContent=p.why; el.querySelectorAll("[data-s]").forEach(x=>x.disabled=true);
      if(ok){ score++; bonus((opt.key||"phish")+"-"+i,20); }
      setTimeout(()=>{ i++; if(i<list.length) show(); else { el.innerHTML=`<p class="cy-big">${score===list.length?"Perfect score. You think like a security analyst.":`${score} of ${list.length} correct.`}</p><p class="cy-fb">Learn every warning sign in Cyber Security Fundamentals.</p><div class="row"><a class="btn sm pri" href="course.html?c=cyber-security-fundamentals">Open the course</a><button class="btn sm" type="button" data-again>Play again</button></div>`; el.querySelector("[data-again]").onclick=()=>{ i=0; score=0; show(); }; } },1400); }); };
  show();
};

/* ---------- Password strength (nothing is saved) ---------- */
W.pwScore=pw=>{
  let pool=0; if(/[a-z]/.test(pw)) pool+=26; if(/[A-Z]/.test(pw)) pool+=26; if(/\d/.test(pw)) pool+=10; if(/[^A-Za-z0-9]/.test(pw)) pool+=33;
  let bits=pw.length?pw.length*Math.log2(Math.max(pool,1)):0;
  const common=/^(password|123456|qwerty|admin|welcome|iloveyou|india|abc123|letmein)/i.test(pw)||/(.)\1{3,}/.test(pw)||/(1234|abcd|qwer)/i.test(pw);
  if(common) bits=Math.min(bits,20);
  const secs=Math.pow(2,bits)/1e10/2; // 10 billion guesses per second, half the space on average
  const t=s=>s<1?"instantly":s<60?Math.round(s)+" seconds":s<3600?Math.round(s/60)+" minutes":s<86400?Math.round(s/3600)+" hours":s<3.15e7?Math.round(s/86400)+" days":s<3.15e9?Math.round(s/3.15e7)+" years":"centuries";
  const lvl=bits<28?0:bits<45?1:bits<65?2:3;
  const tips=[]; if(pw.length<12) tips.push("Use at least 12 characters (a short sentence works well)."); if(!/[A-Z]/.test(pw)||!/[a-z]/.test(pw)) tips.push("Mix capital and small letters."); if(!/\d/.test(pw)) tips.push("Add numbers."); if(!/[^A-Za-z0-9]/.test(pw)) tips.push("Add a symbol such as ! or #."); if(common) tips.push("Avoid common words and patterns like 1234 or qwerty.");
  return {bits:Math.round(bits),time:t(secs),lvl,label:["Very weak","Weak","Good","Strong"][lvl],tips};
};
W.password=el=>{
  el.innerHTML=`<label class="small c-mu" for="pwIn">Type any password to test it. It never leaves this page and is not saved. Do not use your real one.</label>
   <div class="cy-prompt" style="margin-top:8px"><span class="mono c-cy">pass&gt;</span><input id="pwIn" type="text" autocomplete="off" spellcheck="false" placeholder="e.g. Riya@2004"></div>
   <div class="cy-meter"><i data-bar></i></div><div data-out class="small"></div>`;
  const out=el.querySelector("[data-out]"), bar=el.querySelector("[data-bar]");
  el.querySelector("input").oninput=e=>{ const v=e.target.value; if(!v){ out.innerHTML=""; bar.style.width="0"; return; } const s=W.pwScore(v);
    bar.style.width=[15,40,70,100][s.lvl]+"%"; bar.style.background=["#FF4D5E","#FFD166","#38C6E8","#5B8CFF"][s.lvl];
    out.innerHTML=`<p style="margin:10px 0 6px"><b>${s.label}</b> · about ${s.bits} bits · a fast attacker could crack it <b>${s.time}</b>.</p>${s.tips.length?`<ul style="margin:0;padding-left:18px">${s.tips.map(x=>`<li>${x}</li>`).join("")}</ul>`:'<p class="c-cy" style="margin:0">Nice. Now use a different one on every site, with a password manager.</p>'}`;
    if(s.lvl===3) bonus("pw-strong",10); };
};

/* ---------- Decode it ---------- */
W.DECODE=[["Base64","cm9vdGphdnN7YmFzZTY0X2lzX25vdF9lbmNyeXB0aW9ufQ==","rootjavs{base64_is_not_encryption}","Base64 only changes how data looks. Anyone can decode it, so never use it to hide passwords."],
          ["Hex","726f6f746a6176737b6865785f69735f626173655f31367d","rootjavs{hex_is_base_16}","Hex writes every byte as two characters from 0-9 and a-f."],
          ["Binary","01110010 01101111 01101111 01110100","root","Every 8 bits make one byte, and every byte here is one letter."]];
W.decode=(el,opt={})=>{
  let i=0;
  const show=()=>{ const d=W.DECODE[i]; el.innerHTML=`<p class="small c-mu" style="margin:0 0 8px">Level ${i+1} of ${W.DECODE.length} · this message is written in <b>${d[0]}</b>. Decode it and type what it says.</p>
    <div class="cy-code mono">${d[1]}</div><div class="row" style="margin:10px 0"><button class="btn sm" type="button" data-auto>Decode it for me</button></div>
    <form class="cy-prompt" data-f autocomplete="off"><span class="mono c-cy">flag&gt;</span><input spellcheck="false" placeholder="type the decoded text"><button class="btn sm pri" type="submit">Check</button></form><p class="cy-fb" data-fb></p>`;
    el.querySelector("[data-auto]").onclick=()=>{ el.querySelector("[data-fb]").innerHTML=`Decoded: <span class="mono c-cy">${esc(W.decodeAny(d[0],d[1]))}</span>. ${d[3]}`; };
    el.querySelector("[data-f]").onsubmit=e=>{ e.preventDefault(); const v=el.querySelector("input").value.trim(); const fb=el.querySelector("[data-fb]");
      if(v===d[2]){ fb.innerHTML=`<span class="c-cy">✓ Correct.</span> ${d[3]} <span class="c-yl">+15 XP</span>`; bonus("decode-"+i,15); setTimeout(()=>{ if(i<W.DECODE.length-1){ i++; show(); } else el.innerHTML=`<p class="cy-big">All levels decoded.</p><p class="cy-fb">Try the encoder and decoder in <a href="tools.html">Cyber Tools</a>.</p>`; },1600); }
      else fb.innerHTML=`<span class="c-rd">Not yet.</span> Use "Decode it for me" or the <a href="tools.html">Cyber Tools</a> decoder.`; }; };
  show();
};
W.decodeAny=(kind,s)=>{ try{
  if(kind==="Base64") return decodeURIComponent(escape(atob(s.trim())));
  if(kind==="Hex") return s.replace(/\s+/g,"").match(/.{1,2}/g).map(h=>String.fromCharCode(parseInt(h,16))).join("");
  if(kind==="Binary") return s.trim().split(/\s+/).map(b=>String.fromCharCode(parseInt(b,2))).join("");
 }catch(e){ return "(could not decode)"; } };
W.encodeAny=(kind,s)=>{ try{
  if(kind==="Base64") return btoa(unescape(encodeURIComponent(s)));
  if(kind==="Hex") return [...new TextEncoder().encode(s)].map(b=>b.toString(16).padStart(2,"0")).join("");
  if(kind==="Binary") return [...new TextEncoder().encode(s)].map(b=>b.toString(2).padStart(8,"0")).join(" ");
 }catch(e){ return "(could not encode)"; } };

/* ---------- Hash (SHA family, in the browser) ---------- */
W.hash=async(alg,s)=>{ if(!(window.crypto&&crypto.subtle)) return "(hashing needs https)"; const b=await crypto.subtle.digest(alg,new TextEncoder().encode(s)); return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join(""); };

/* ---------- Suspicious link checker (pattern based, never opens the link) ---------- */
W.checkLink=raw=>{
  const s=raw.trim(); const flags=[]; let host="";
  try{ host=new URL(/^https?:\/\//i.test(s)?s:"http://"+s).hostname.toLowerCase(); }catch(e){ return {ok:false,flags:["This does not look like a valid link."],host:""}; }
  if(/^http:\/\//i.test(s)) flags.push("Uses http, not https: the connection is not encrypted.");
  if(/^\d+\.\d+\.\d+\.\d+$/.test(host)) flags.push("Uses a raw IP address instead of a name.");
  if(/\.(top|xyz|tk|ml|ga|cf|gq|zip|click|work|rest|cam|buzz)$/.test(host)) flags.push("Uses a cheap domain ending that scammers often use.");
  if(/(kyc|verify|update|secure|login|reward|refund|lucky|prize|bonus|otp)/.test(host)) flags.push("The domain has words like kyc, verify, login or reward, a common phishing trick.");
  if(/(sbi|hdfc|icici|axis|paytm|phonepe|gpay|amazon|flipkart|irctc|uidai|incometax)/.test(host)&&!/(^|\.)(sbi\.co\.in|onlinesbi\.sbi|hdfcbank\.com|icicibank\.com|axisbank\.com|paytm\.com|phonepe\.com|google\.com|amazon\.in|amazon\.com|flipkart\.com|irctc\.co\.in|uidai\.gov\.in|incometax\.gov\.in)$/.test(host)) flags.push("Mentions a known brand but is not that brand's real domain.");
  if((host.match(/-/g)||[]).length>=3) flags.push("Has many hyphens in the domain.");
  if(host.split(".").length>4) flags.push("Has many sub-domains, which can hide the real site.");
  if(/xn--/.test(host)) flags.push("Uses look-alike letters (punycode).");
  if(/@/.test(s)) flags.push("Contains @, which can hide the real destination.");
  if(/(bit\.ly|tinyurl|t\.co|cutt\.ly|is\.gd|rb\.gy)/.test(host)) flags.push("Is a short link: you cannot see where it really goes.");
  return {ok:!flags.length,flags,host};
};

/* ---------- Common ports ---------- */
W.PORTS=[[20,"FTP data","File transfer"],[21,"FTP","File transfer (control)"],[22,"SSH","Secure remote login"],[23,"Telnet","Old, unencrypted remote login"],[25,"SMTP","Sending email"],[53,"DNS","Turns names into IP addresses"],[67,"DHCP","Gives IP addresses to devices"],[80,"HTTP","Websites (not encrypted)"],[110,"POP3","Receiving email"],[123,"NTP","Time sync"],[143,"IMAP","Reading email"],[161,"SNMP","Network device monitoring"],[389,"LDAP","Directory services"],[443,"HTTPS","Websites (encrypted)"],[445,"SMB","Windows file sharing"],[587,"SMTP (TLS)","Sending email securely"],[993,"IMAPS","Reading email securely"],[1433,"MS SQL","Microsoft SQL Server"],[3306,"MySQL","MySQL database"],[3389,"RDP","Windows Remote Desktop"],[5432,"PostgreSQL","PostgreSQL database"],[6379,"Redis","Redis database"],[8080,"HTTP-alt","Web apps and proxies"],[27017,"MongoDB","MongoDB database"]];

/* ---------- Scam alert ticker and word of the day ---------- */
W.ALERTS=["Fake KYC SMS: banks never send KYC links by SMS. Use the official app.","Never share an OTP, not even with someone who says they are from your bank.","Job offer that asks for a fee? It is a scam. Real companies never charge to hire you.","Got a 'digital arrest' video call from police? It is a scam. Police do not arrest on video calls.","Report cyber fraud in India: call 1930 or visit cybercrime.gov.in.","Use a different password on every site, and turn on two-step verification.","Public Wi-Fi? Avoid banking on it, or use mobile data.","Unknown APK on WhatsApp? Do not install it. It can read your SMS and OTPs."];
W.WORDS=[["Phishing","A fake message or website that tricks you into giving passwords, OTPs or money."],["Malware","Software made to harm a device or steal data, such as viruses and ransomware."],["Firewall","A filter that allows or blocks network traffic based on rules."],["Encryption","Scrambling data so only someone with the right key can read it."],["Two-factor authentication","Logging in with two proofs, such as a password and a code on your phone."],["Vulnerability","A weakness in software or a system that an attacker could use."],["Root","The all-powerful administrator account on Linux. The top rank on rootjavs."],["Social engineering","Tricking people, not computers, into giving access or information."],["Hash","A fixed-length fingerprint of data. Any change to the data changes the hash."],["Ransomware","Malware that locks your files and demands payment to unlock them."]];
W.today=a=>a[Math.floor(Date.now()/864e5)%a.length];
W.ticker=el=>{ const items=[...W.ALERTS,...W.ALERTS]; el.innerHTML=`<span class="tk-tag mono">SCAM ALERT</span><div class="tk-track"><div class="tk-move">${items.map(x=>`<span>${esc(x)}</span>`).join('<i>•</i>')}</div></div>`; };
})();
