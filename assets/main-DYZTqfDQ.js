import{g as d,a as c}from"./header-ConrUMEu.js";import{i as m}from"./explode-BMg1_SZ8.js";import{g as r,S as o,p as h,i as u}from"./reveal-BBM4lrTc.js";r.registerPlugin(o);function p(t,{scroller:e=null}={}){h()||(t.forEach(a=>{const n=[...a.children];r.set(n,{opacity:0,y:36});const i={trigger:a,start:"top 72%",once:!0,onEnter:()=>{r.to(n,{opacity:1,y:0,duration:.65,stagger:.1,ease:"power3.out"})}};e&&(i.scroller=e),o.create(i)}),o.refresh())}const g="/learning-spanish/images/landing-hero-sharp.png",s=d();document.body.dataset.theme=s.theme;c(document.getElementById("header-root"),s);document.getElementById("snap-hero").innerHTML=`
  <div class="landing-hero-bg" aria-hidden="true">
    <img src="${g}" alt="" />
  </div>
  <div class="section-band landing-hero">
    <p class="landing-eyebrow">Immersion Protocol Activated</p>
    <h1 id="hero-word" class="hero-word"></h1>
    <p class="hero-pronunciation">OH-lah • Hello</p>
    <p class="hero-sub">Enter a focused six-month Spanish journey built for cinematic flow, rapid recall, and adult learners who want momentum without clutter.</p>
    <div class="toolbar justify-content-center">
        <a href="dashboard.html" class="btn-primary-custom">Start Learning</a>
        <a href="reference.html" class="btn-secondary-custom">Open Reference</a>
    </div>
    <span class="material-symbols-outlined landing-scroll-cue" aria-hidden="true">keyboard_arrow_down</span>
  </div>
`;m(document.getElementById("hero-word"),"¡Hola!");document.getElementById("snap-how").innerHTML=`
  <div class="section-band">
    <div class="landing-section-heading reveal-item">
      <h2>The Architecture of Fluency</h2>
      <p>Engineered routines that move Spanish from recognition to reflex.</p>
    </div>
    <div class="method-grid">
      ${[["bolt","Quick lessons","High-intensity intervals designed to lock vocabulary into working memory without draining your day."],["target","Practice rounds","Recall sessions mix listening, matching, typing, and sentence assembly around your weakest points."],["menu_book","Story mode","A pressure-free path turns the same curriculum into an immersive reading flow."]].map(([t,e,a],n)=>`
        <article class="method-card reveal-item ${n===1?"method-card-raised":""}">
          <div class="method-icon"><span class="material-symbols-outlined">${t}</span></div>
          <div>
            <h3>${e}</h3>
            <p>${a}</p>
          </div>
        </article>
      `).join("")}
    </div>
  </div>
`;document.getElementById("snap-cta").innerHTML=`
  <div class="landing-cta-rings" aria-hidden="true"></div>
  <div class="section-band landing-cta reveal-item">
    <h2>Commit to the <span>Process.</span></h2>
    <p>Your six-month journey awaits. Focused execution, cinematic pacing, and verifiable progress.</p>
    <a href="dashboard.html" class="btn-primary-custom btn-cta">
      Join Now
      <span class="material-symbols-outlined">rocket_launch</span>
    </a>
  </div>
  <footer class="landing-footer">
    <strong>Aprende</strong>
    <nav aria-label="Landing footer">
      <a href="dashboard.html">Dashboard</a>
      <a href="reference.html">Reference</a>
      <a href="module.html#1">Journey</a>
    </nav>
    <span>© 2026 Aprende Language Systems.</span>
  </footer>
`;const l=document.getElementById("snap-container");p([...document.querySelectorAll(".snap-section")],{scroller:l});u([...document.querySelectorAll(".reveal-item")],{scroller:l});
