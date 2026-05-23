import{g as m,a as u}from"./header-ConrUMEu.js";import{i as f}from"./reveal-BBM4lrTc.js";import{C as h}from"./curriculum-DIRFPJHL.js";const l=m();document.body.dataset.theme=l.theme;u(document.getElementById("header-root"),l);const o=h.months.map(e=>({label:`Month ${e.id}: ${e.title}`,color:e.color,weeks:[1,2,3,4].map(a=>({week:a,lessons:e.lessons.filter(s=>s.week===a).map(s=>({...s,vocabulary:s.content.filter(t=>t.type==="vocabulary"||t.type==="phrase"),grammar:s.content.filter(t=>t.type==="grammar"),dialogues:s.content.filter(t=>t.type==="dialogue")}))}))})),v=document.getElementById("reference-root");v.innerHTML=`
  <section class="mb-4">
    <p class="topic-chip mb-3">Reference</p>
    <h1 class="mb-2">Vocabulary & Grammar</h1>
    <p class="text-muted mb-0">Everything in the six-month curriculum, organized by module, week, and lesson.</p>
  </section>
  <section class="reference-layout">
    <div class="reference-tabs" role="tablist" aria-label="Reference months">
      ${o.map((e,a)=>`
        <button class="reference-tab ${a===0?"active":""}" type="button" data-index="${a}" style="--tab-color:${e.color}">
          ${e.label}
        </button>
      `).join("")}
    </div>
    <div id="reference-panel" class="reference-panel"></div>
  </section>
`;const n=document.getElementById("reference-panel"),i=[...document.querySelectorAll(".reference-tab")];function d(e){const a=o[e],s=a.weeks.reduce((t,r)=>t+r.lessons.reduce((p,c)=>p+c.vocabulary.length+c.grammar.length+c.dialogues.length,0),0);i.forEach((t,r)=>t.classList.toggle("active",r===e)),n.innerHTML=`
    <header class="reference-panel-header">
      <div>
        <h2 class="h4 mb-1" style="color:${a.color}">${a.label}</h2>
        <p class="text-muted mb-0">${s} reference entries grouped by learning module.</p>
      </div>
      <div class="reference-panel-actions" aria-label="Reference lesson controls">
        <button class="btn-secondary-custom" type="button" data-expand-reference>Expand all</button>
        <button class="btn-secondary-custom" type="button" data-collapse-reference>Collapse all</button>
      </div>
    </header>
    ${a.weeks.map(t=>`
      <section class="reference-week reveal-item">
        <h3 class="reference-week-title">Week ${t.week}</h3>
        <div class="reference-lessons">
          ${t.lessons.map(r=>g(r)).join("")}
        </div>
      </section>
    `).join("")}
  `,b(),f([...n.querySelectorAll(".reveal-item")])}function g(e){return`
    <details class="reference-lesson" ${e.week===1&&e.lesson===1?"open":""}>
      <summary class="reference-lesson-summary">
        <span class="topic-chip">Lesson ${e.lesson}</span>
        <div>
          <h4 class="h5 mb-1">${e.title}</h4>
          <p class="text-muted small mb-0">${e.topic}</p>
        </div>
        <span class="reference-lesson-count">${e.vocabulary.length+e.grammar.length+e.dialogues.length}</span>
      </summary>
      <div class="reference-lesson-body">
        ${e.vocabulary.length?`
          <section>
            <h5 class="reference-section-title">Vocabulary & Phrases</h5>
            <div class="reference-list">
              ${e.vocabulary.map(a=>`
                <div class="reference-item">
                  <div class="spanish-text h5 mb-0">${a.spanish}</div>
                  <div class="text-muted small">${a.english}</div>
                  ${a.phonetic?`<span class="phonetic-chip">${a.phonetic}</span>`:""}
                  ${a.notes?`<span class="text-muted small">${a.notes}</span>`:""}
                </div>
              `).join("")}
            </div>
          </section>
        `:""}
        ${e.grammar.length?`
          <section>
            <h5 class="reference-section-title">Grammar</h5>
            <div class="reference-grammar-list">
              ${e.grammar.map(a=>`
                <div class="reference-item reference-item-wide">
                  <strong>${a.title}</strong>
                  <span class="text-muted small">${a.explanation}</span>
                  ${(a.examples||[]).length?`
                    <div class="reference-examples">
                      ${a.examples.map(s=>`
                        <span><span class="spanish-text">${s.spanish}</span> - ${s.english}</span>
                      `).join("")}
                    </div>
                  `:""}
                </div>
              `).join("")}
            </div>
          </section>
        `:""}
        ${e.dialogues.length?`
          <section>
            <h5 class="reference-section-title">Dialogues</h5>
            <div class="reference-dialogue-list">
              ${e.dialogues.map(a=>`
                <div class="reference-item reference-item-wide">
                  ${(a.lines||[]).map(s=>`
                    <span><strong>${s.speaker}:</strong> <span class="spanish-text">${s.text}</span></span>
                  `).join("")}
                </div>
              `).join("")}
            </div>
          </section>
        `:""}
      </div>
    </details>
  `}function b(){var e,a;(e=n.querySelector("[data-expand-reference]"))==null||e.addEventListener("click",()=>{n.querySelectorAll(".reference-lesson").forEach(s=>{s.open=!0})}),(a=n.querySelector("[data-collapse-reference]"))==null||a.addEventListener("click",()=>{n.querySelectorAll(".reference-lesson").forEach(s=>{s.open=!1})})}i.forEach(e=>{e.addEventListener("click",()=>d(Number(e.dataset.index)))});d(0);
