import{r as D,g,a as x,s as R,c as X,l as _}from"./header-ConrUMEu.js";/* empty css              */import{i as G}from"./explode-BMg1_SZ8.js";import{g as v,i as O,r as Y,a as z}from"./reveal-BBM4lrTc.js";import{g as J}from"./router-CTbApqkT.js";import{g as K,b as Q,c as U}from"./curriculum-DIRFPJHL.js";let y=null;function V(e){Z();const s=new Audio(e);return y=s,s.play().catch(()=>{y=null}),s}function Z(){y&&(y.pause(),y=null)}function A(e=document){e.querySelectorAll("[data-audio]").forEach(s=>{s.addEventListener("click",()=>V(s.dataset.audio))})}const T=["#2563eb","#f59e0b","#10b981","#ef4444","#14b8a6","#f43f5e"];function ee(e,{xp:s,stars:t,message:r="¡Excelente!"}){if(!e)return Promise.resolve();e.innerHTML=`
    <div class="celebration-panel">
      <div class="celebration-stars" aria-label="${t} stars">${"★".repeat(t)}</div>
      <div class="celebration-xp">+${s} XP</div>
      <div class="celebration-msg">${r}</div>
      <button class="btn-primary-custom" id="celebration-continue" type="button">Continue</button>
    </div>
  `,e.classList.add("active"),te(e,60);const d=v.timeline();return d.from(e.querySelector(".celebration-panel"),{scale:.92,opacity:0,duration:.32,ease:"power2.out"}),d.from(e.querySelector(".celebration-xp"),{scale:0,duration:.45,ease:"back.out(2)"},"-=0.1"),new Promise(b=>{e.querySelector("#celebration-continue").addEventListener("click",()=>{e.classList.remove("active"),e.innerHTML="",b()})})}function te(e,s){for(let t=0;t<s;t+=1){const r=document.createElement("div");r.className="confetti-piece",r.style.left=`${Math.random()*100}%`,r.style.top="-20px",r.style.background=T[t%T.length],e.appendChild(r),v.to(r,{y:window.innerHeight+40,x:v.utils.random(-80,80),rotation:v.utils.random(0,720),duration:v.utils.random(1.2,2.4),delay:v.utils.random(0,.55),ease:"none",onComplete:()=>r.remove()})}}function $(e){return String(e??"").trim().replace(/\s+/g," ").toLocaleLowerCase()}function L(e,s){const t=e.answer;return Array.isArray(t)?t.some(r=>$(r)===$(s)):e.type==="fill-blank"||e.type==="arrange-words"?$(s)===$(t):String(s)===String(t)}function se(e){return e>=5?3:e>=3?2:1}function ne(e,s,t){const r=s*2,d=t<60?5:t<120?2:0;return Math.max(e-r+d,Math.floor(e/2))}function ae(e,s){s.innerHTML='<div class="exercise-panel"></div>';const t=s.querySelector(".exercise-panel");({"multiple-choice":N,"fill-blank":oe,matching:ie,"listen-select":re,"arrange-words":ce}[e.type]||N)(e,t)}function N(e,s){s.innerHTML=`
    <p class="exercise-question">${e.question}</p>
    <div class="options-grid">
      ${e.options.map(t=>`
        <button class="exercise-option" type="button" data-value="${S(t)}">${t}</button>
      `).join("")}
    </div>
    <div class="feedback-line" aria-live="polite"></div>
  `}function oe(e,s){s.innerHTML=`
    <label class="exercise-question" for="fill-answer">${e.question}</label>
    <input class="exercise-input" id="fill-answer" type="text" autocomplete="off" placeholder="Type your answer" />
    <button class="btn-primary-custom mt-3" type="button" data-check-input>Check</button>
    <div class="feedback-line" aria-live="polite"></div>
  `}function ie(e,s){const t=e.pairs.map((d,b)=>({...d,index:b})),r=[...t].sort(()=>Math.random()-.5);s.innerHTML=`
    <p class="exercise-question">${e.question}</p>
    <div class="matching-grid" data-total-pairs="${t.length}">
      <div class="match-col">
        ${t.map(d=>`
          <button class="match-item" type="button" data-id="${d.index}" data-side="spanish">${d.spanish}</button>
        `).join("")}
      </div>
      <div class="match-col">
        ${r.map(d=>`
          <button class="match-item" type="button" data-id="${d.index}" data-side="english">${d.english}</button>
        `).join("")}
      </div>
    </div>
    <div class="feedback-line" aria-live="polite"></div>
  `}function re(e,s){s.innerHTML=`
    <p class="exercise-question">${e.question}</p>
    <button class="audio-play-btn mb-3" type="button" data-audio="${e.audioFile}" aria-label="Play audio">▶</button>
    <div class="options-grid">
      ${e.options.map(t=>`
        <button class="exercise-option" type="button" data-value="${S(t)}">${t}</button>
      `).join("")}
    </div>
    <div class="feedback-line" aria-live="polite"></div>
  `}function ce(e,s){const t=[...e.words].sort(()=>Math.random()-.5);s.innerHTML=`
    <p class="exercise-question">${e.question}</p>
    <div class="arrange-target" data-arrange-target aria-label="Arranged sentence"></div>
    <div class="arrange-bank">
      ${t.map(r=>`<button class="arrange-word" type="button" data-word="${S(r)}">${r}</button>`).join("")}
    </div>
    <div class="d-flex gap-2 flex-wrap mt-3">
      <button class="btn-primary-custom" type="button" data-check-arrange>Check</button>
      <button class="btn-secondary-custom" type="button" data-reset-arrange>Reset</button>
    </div>
    <div class="feedback-line" aria-live="polite"></div>
  `}function S(e){return String(e).replaceAll('"',"&quot;")}D();let f=g();document.body.dataset.theme=f.theme;const le=J()||f.currentLesson,i=K(le),P=document.getElementById("lesson-root"),k=document.getElementById("header-root");i?(R(i.id),f=g(),x(k,f),de()):(x(k,f),P.innerHTML='<p class="text-center mt-5">Lesson not found.</p>');function de(){const e=f.mode==="game",s=e?["hook",...i.content.map((o,n)=>`content-${n}`),...i.exercises.map((o,n)=>`exercise-${n}`),"summary"]:["hook",...i.content.map((o,n)=>`content-${n}`),"summary"];let t=0,r=0,d=g().hearts.current;const b=Date.now();P.innerHTML=`
    <section class="lesson-topline">
      <div class="d-flex justify-content-between gap-3 flex-wrap">
        <a href="module.html#${i.month}" class="text-muted small text-decoration-none">Back to Month ${i.month}</a>
        <span class="topic-chip">${i.topic}</span>
      </div>
      <div>
        <h1 class="h3 mb-1">${i.title}</h1>
        <p class="text-muted mb-0">Month ${i.month}, Week ${i.week}, Lesson ${i.lesson}</p>
      </div>
      <div class="lesson-progress-bar" aria-label="Lesson progress">
        <div class="lesson-progress-fill" id="lesson-progress-fill"></div>
      </div>
    </section>
    <section id="lesson-stage" class="lesson-stage"></section>
  `;const h=document.getElementById("lesson-stage"),j=document.getElementById("lesson-progress-fill");function q(){j.style.width=`${Math.round(t/Math.max(1,s.length-1)*100)}%`}function M(){q();const o=s[t];if(h.innerHTML="",o==="hook"){const n=i.content.find(l=>l.spanish)||{spanish:i.title,english:i.topic};h.innerHTML=`
        <div class="hook-wrap">
          <div id="hook-word" class="hook-word"></div>
        </div>
      `,G(document.getElementById("hook-word"),n.spanish,{phonetic:n.phonetic,translation:n.english}),window.setTimeout(w,1900);return}if(o.startsWith("content-")){const n=i.content[Number(o.split("-")[1])];h.innerHTML=ue(n),A(h),O([...h.querySelectorAll(".content-card")]),h.querySelector("[data-next-content]").addEventListener("click",w);return}if(o.startsWith("exercise-")){const n=i.exercises[Number(o.split("-")[1])],l=document.createElement("div");l.className="exercise-wrap",h.appendChild(l),ae(n,l),A(l),B(l,n);return}F()}function w(){t+=1,M()}function B(o,n){var u;const l=o.querySelector(".feedback-line");function a(p,m){if(p){l.textContent="Correct",m&&(m.classList.add("correct"),Y(m)),window.setTimeout(w,550);return}r+=1,m&&(m.classList.add("wrong"),z(m)),l.textContent="Try again",e&&(d=_(),x(k,g()),d===0&&pe(o))}o.querySelectorAll(".exercise-option").forEach(p=>{p.addEventListener("click",()=>a(L(n,p.dataset.value),p))});const c=o.querySelector(".exercise-input");(u=o.querySelector("[data-check-input]"))==null||u.addEventListener("click",()=>{a(L(n,c.value),c)}),c==null||c.addEventListener("keydown",p=>{p.key==="Enter"&&a(L(n,c.value),c)}),I(o,n,a),W(o,n,a)}function I(o,n,l){if(n.type!=="matching")return;const a={spanish:null,english:null},c=n.pairs.length;let u=0;o.querySelectorAll(".match-item").forEach(p=>{p.addEventListener("click",()=>{var E,H,C;if(p.classList.contains("matched"))return;const m=p.dataset.side;(E=a[m])==null||E.classList.remove("selected"),a[m]=p,p.classList.add("selected"),!(!a.spanish||!a.english)&&(a.spanish.dataset.id===a.english.dataset.id?(a.spanish.classList.add("matched"),a.english.classList.add("matched"),a.spanish.classList.remove("selected"),a.english.classList.remove("selected"),u+=1,a.spanish=null,a.english=null,u===c&&l(!0,o.querySelector(".exercise-panel"))):(l(!1,p),(H=a.spanish)==null||H.classList.remove("selected"),(C=a.english)==null||C.classList.remove("selected"),a.spanish=null,a.english=null))})})}function W(o,n,l){if(n.type!=="arrange-words")return;const a=o.querySelector("[data-arrange-target]");o.querySelectorAll(".arrange-word").forEach(c=>{c.addEventListener("click",()=>{if(c.classList.contains("used"))return;c.classList.add("used");const u=document.createElement("button");u.className="arrange-word",u.type="button",u.textContent=c.dataset.word,u.addEventListener("click",()=>{c.classList.remove("used"),u.remove()}),a.appendChild(u)})}),o.querySelector("[data-reset-arrange]").addEventListener("click",()=>{a.innerHTML="",o.querySelectorAll(".arrange-word.used").forEach(c=>c.classList.remove("used"))}),o.querySelector("[data-check-arrange]").addEventListener("click",()=>{const c=[...a.querySelectorAll(".arrange-word")].map(u=>u.textContent).join(" ");l(L(n,c),a)})}function F(){q();const o=Math.round((Date.now()-b)/1e3),n=e?ne(i.xp,r,o):0,l=se(d),a=Q(i.id),c=U(i.id);e&&(X(i.id,n,d),f=g(),x(k,f)),h.innerHTML=`
      <div class="content-card text-center">
        <span class="topic-chip mb-3">${e?"Lesson Complete":"Story Complete"}</span>
        <h2 class="mb-2">${i.title}</h2>
        <p class="text-muted">${e?`You earned ${n} XP with ${r} mistake${r===1?"":"s"}.`:"You finished the content without exercise scoring."}</p>
        ${e?`<div class="h2" style="color:var(--color-secondary)">${"★".repeat(l)}</div>`:""}
        <div class="toolbar justify-content-center mt-4">
          ${c?`<a class="btn-secondary-custom" href="lesson.html#${c.id}">Previous</a>`:""}
          <a class="btn-secondary-custom" href="module.html#${i.month}">Month ${i.month}</a>
          ${a?`<a class="btn-primary-custom" href="lesson.html#${a.id}">Next Lesson</a>`:'<a class="btn-primary-custom" href="dashboard.html">Dashboard</a>'}
        </div>
      </div>
    `,e&&ee(document.getElementById("celebration-overlay"),{xp:n,stars:l})}M()}function ue(e){var s;if(e.type==="vocabulary"||e.type==="phrase"){const t=e.audioPath||((s=e.audioFile)!=null&&s.startsWith("/")?e.audioFile:`${i.audio}${e.audioFile}`);return`
      <article class="content-card">
        <div class="spanish-word">${e.spanish}</div>
        <div class="d-flex gap-2 flex-wrap align-items-center">
          <span class="phonetic-chip">${e.phonetic}</span>
          <span class="translation-chip">${e.english}</span>
          ${e.audioFile?`<button class="audio-play-btn" type="button" data-audio="${t}" aria-label="Play ${e.spanish}">▶</button>`:""}
        </div>
        ${e.notes?`<p class="text-muted small mt-3 mb-0">${e.notes}</p>`:""}
        <button class="btn-primary-custom mt-4" type="button" data-next-content>Next</button>
      </article>
    `}return e.type==="grammar"?`
      <article class="content-card">
        <span class="topic-chip mb-3">Grammar</span>
        <h2 class="h4">${e.title}</h2>
        <p class="text-muted">${e.explanation}</p>
        <div class="d-grid gap-2">
          ${e.examples.map(t=>`
            <div>
              <div class="spanish-text h5 mb-0">${t.spanish}</div>
              <div class="text-muted small">${t.english}</div>
            </div>
          `).join("")}
        </div>
        <button class="btn-primary-custom mt-4" type="button" data-next-content>Next</button>
      </article>
    `:e.type==="dialogue"?`
      <article class="content-card">
        <span class="topic-chip mb-3">Dialogue</span>
        ${e.lines.map(t=>`
          <div class="dialogue-line">
            <div class="dialogue-speaker">${t.speaker}</div>
            <div class="spanish-text">${t.text}</div>
          </div>
        `).join("")}
        <button class="btn-primary-custom mt-4" type="button" data-next-content>Next</button>
      </article>
    `:`
    <article class="content-card">
      <p class="text-muted">Content unavailable.</p>
      <button class="btn-primary-custom" type="button" data-next-content>Next</button>
    </article>
  `}function pe(e){e.querySelectorAll("button, input").forEach(s=>{s.disabled=!0}),e.insertAdjacentHTML("beforeend",`
    <div class="content-card mx-0 mt-3">
      <h2 class="h5">No hearts left</h2>
      <p class="text-muted">Return to the module or reload the lesson after your hearts refill.</p>
      <div class="toolbar">
        <a class="btn-secondary-custom" href="module.html#${i.month}">Back to Month ${i.month}</a>
        <button class="btn-primary-custom" type="button" onclick="window.location.reload()">Try Again</button>
      </div>
    </div>
  `)}
