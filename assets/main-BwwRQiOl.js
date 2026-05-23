import{h as t,p as r,f as n,i as l,C as d}from"./curriculum-DMmQFzYt.js";import{i as c}from"./explode-xVEHiX-R.js";import{S as i,i as m}from"./reveal-DIdJkQJ2.js";t.registerPlugin(i);function h(e){r()||e.forEach(s=>{const a=[...s.children];t.set(a,{opacity:0,y:36}),i.create({trigger:s,start:"top 72%",once:!0,onEnter:()=>{t.to(a,{opacity:1,y:0,duration:.65,stagger:.1,ease:"power3.out"})}})})}const o=n();document.body.dataset.theme=o.theme;l(document.getElementById("header-root"),o);document.getElementById("snap-hero").innerHTML=`
  <div class="section-band hero-layout">
    <div>
      <h1 id="hero-word" class="hero-word"></h1>
      <p class="hero-sub mb-4">A six-month beginner path from first greetings to real conversations, with quick lessons, practice rounds, and a pressure-free story mode.</p>
      <div class="toolbar">
        <a href="dashboard.html" class="btn-primary-custom">Start Learning</a>
        <a href="reference.html" class="btn-secondary-custom">Open Reference</a>
      </div>
    </div>
    <div class="learning-visual" aria-label="Spanish learning progress preview">
      <div class="visual-board">
        ${[["Hola","Hello",92],["Gracias","Thank you",78],["Voy al banco","I am going to the bank",64],["Hablaba","I used to speak",42]].map(([e,s,a])=>`
          <div class="visual-row">
            <div>
              <div class="visual-word">${e}</div>
              <div class="text-muted small">${s}</div>
            </div>
            <div class="visual-meter"><span style="width:${a}%"></span></div>
          </div>
        `).join("")}
      </div>
    </div>
  </div>
`;c(document.getElementById("hero-word"),"¡Hola!",{phonetic:"OH-lah",translation:"Hello"});document.getElementById("snap-how").innerHTML=`
  <div class="section-band">
    <h2 class="mb-4">Daily Rhythm</h2>
    <div class="row g-3">
      ${[["1","Learn","Meet vocabulary, grammar, and mini-dialogues in short focused cards."],["2","Practice","Answer listening, matching, typing, and sentence-building prompts."],["3","Return","Keep your streak alive and review every month from the reference guide."]].map(([e,s,a])=>`
        <div class="col-md-4 reveal-item">
          <div class="how-step">
            <div class="step-num">${e}</div>
            <h3 class="h5">${s}</h3>
            <p class="text-muted mb-0">${a}</p>
          </div>
        </div>
      `).join("")}
    </div>
  </div>
`;document.getElementById("snap-curriculum").innerHTML=`
  <div class="section-band">
    <h2 class="mb-4">Six-Month Roadmap</h2>
    <div class="row g-3">
      ${d.months.map(e=>`
        <div class="col-md-4 reveal-item">
          <a class="month-preview-card d-block text-decoration-none" href="module.html#${e.id}" style="border-left-color:${e.color}">
            <div class="small fw-bold" style="color:${e.color}">Month ${e.id}</div>
            <h3 class="h5 mb-1">${e.title}</h3>
            <p class="text-muted mb-0">${e.subtitle}</p>
          </a>
        </div>
      `).join("")}
    </div>
  </div>
`;document.getElementById("snap-modes").innerHTML=`
  <div class="section-band">
    <h2 class="mb-4">Choose Your Pace</h2>
    <div class="d-flex gap-3 flex-wrap">
      <div class="mode-panel reveal-item">
        <span class="topic-chip mb-3">Game Mode</span>
        <h3 class="h5">XP, hearts, locked progression</h3>
        <p class="text-muted mb-0">Move through lessons in order, protect your hearts, and unlock each month as you finish the last lesson of the previous one.</p>
      </div>
      <div class="mode-panel reveal-item">
        <span class="topic-chip mb-3">Story Mode</span>
        <h3 class="h5">All lessons, no quizzes</h3>
        <p class="text-muted mb-0">Read the same curriculum as a guided story with animations and no scoring pressure.</p>
      </div>
    </div>
  </div>
`;document.getElementById("snap-cta").innerHTML=`
  <div class="section-band text-center">
    <h2 class="mb-3">Begin with a single greeting.</h2>
    <p class="hero-sub mx-auto mb-4">The first lesson starts with Hola and ends with your first practice round.</p>
    <a href="lesson.html#m1-w1-l1" class="btn-primary-custom">Open Lesson 1</a>
  </div>
`;h([...document.querySelectorAll(".snap-section")]);m([...document.querySelectorAll(".reveal-item")]);
