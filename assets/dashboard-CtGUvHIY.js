import{p as y,h as f,r as g,c as x,f as $,i as k,g as M,C as p}from"./curriculum-DMmQFzYt.js";import{m as E}from"./router-CTbApqkT.js";import{i as C}from"./explode-xVEHiX-R.js";import{r as I,m as L}from"./progressBar-vhJ40-nb.js";function S(t,n){const a=n.length;let s=0;function o(m=!0){if(!a)return;if(y()){n.forEach((u,r)=>{u.style.display=r===s?"grid":"none"});return}const b=Math.min(42,360/a);n.forEach((u,r)=>{const l=r-s,d=Math.abs(l)>a/2?l-Math.sign(l)*a:l,i=r===s;f.to(u,{xPercent:-50,x:d*56,rotateY:d*b,z:i?80:-Math.abs(d)*90,opacity:Math.abs(d)>2?0:i?1:.34,scale:i?1:.82,pointerEvents:i?"auto":"none",duration:m?.55:0,ease:"power3.out"})}),t.style.transformStyle="preserve-3d"}return o(!1),{next(){s=(s+1)%a,o()},prev(){s=(s-1+a)%a,o()},goTo(m){s=Math.max(0,Math.min(m,a-1)),o()},getCurrent(){return s}}}g();x();const e=$();document.body.dataset.theme=e.theme;k(document.getElementById("header-root"),e);const B=Object.values(e.lessons).filter(t=>t.completed).length,c=M(e.currentLesson)||p.months[0].lessons[0],P=document.getElementById("dashboard-root");P.innerHTML=`
  <section class="mb-4">
    <p class="topic-chip mb-3">Mi Progreso</p>
    <h1 class="mb-2">Welcome back.</h1>
    <p class="text-muted mb-0">Continue from ${c.title}, or jump into any unlocked month.</p>
  </section>

  <section class="dashboard-grid mb-4">
    <div class="stat-card">
      <div class="stat-value" id="streak-val">${e.streak.current}</div>
      <div class="text-muted small">Day streak</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${e.xp.total}</div>
      <div class="text-muted small">Total XP</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${B}</div>
      <div class="text-muted small">Lessons done</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${e.hearts.current}</div>
      <div class="text-muted small">Hearts</div>
    </div>
  </section>

  <section class="journey-layout">
    <div>
      <div class="d-flex justify-content-between align-items-center gap-3 mb-3">
        <h2 class="h3 mb-0">Six-Month Journey</h2>
        <div class="slider-nav m-0">
          <button class="icon-btn" type="button" id="prev-btn" aria-label="Previous month">‹</button>
          <button class="icon-btn" type="button" id="next-btn" aria-label="Next month">›</button>
        </div>
      </div>
      <div class="slider-3d-track" id="month-slider">
        ${p.months.map(t=>{const n=e.mode==="story"||e.unlockedMonths.includes(t.id);return`
            <article class="slider-3d-item" style="border-top:4px solid ${t.color}">
              <div class="small fw-bold" style="color:${t.color}">MONTH ${t.id}</div>
              <h3 class="h5 mb-0">${t.title}</h3>
              <p class="text-muted small mb-0">${t.subtitle}</p>
              <div id="progress-m${t.id}"></div>
              ${n?`<a href="${E(t.id)}" class="btn-primary-custom mt-auto">Open Month</a>`:'<span class="btn-secondary-custom mt-auto" aria-disabled="true">Locked</span>'}
            </article>
          `}).join("")}
      </div>
    </div>

    <aside class="continue-panel">
      <span class="topic-chip">Next Lesson</span>
      <h3 class="h5 mb-0">${c.title}</h3>
      <p class="text-muted small mb-0">${c.topic}</p>
      <a class="btn-primary-custom" href="lesson.html#${c.id}">Continue</a>
      <a class="btn-secondary-custom" href="reference.html">Reference</a>
    </aside>
  </section>
`;p.months.forEach(t=>{I(document.getElementById(`progress-m${t.id}`),L(t.lessons,e.lessons),"Month Progress",t.color)});const v=document.getElementById("month-slider"),h=S(v,[...v.querySelectorAll(".slider-3d-item")]);document.getElementById("prev-btn").addEventListener("click",h.prev);document.getElementById("next-btn").addEventListener("click",h.next);C(document.getElementById("streak-val"),String(e.streak.current));
