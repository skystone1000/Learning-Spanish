import{f as b,i as f,b as v}from"./curriculum-DMmQFzYt.js";/* empty css              */import{l as k,g as y}from"./router-CTbApqkT.js";import{i as B}from"./reveal-DIdJkQJ2.js";import{r as M,m as x}from"./progressBar-vhJ40-nb.js";function I(a,l,c={},h="game"){a&&(a.innerHTML=l.map((t,r)=>{var m;const o=c[t.id],d=!!(o!=null&&o.completed),n=l[r-1],i=h==="game"&&r>0&&!((m=c[n==null?void 0:n.id])!=null&&m.completed),u=d?"★".repeat(o.stars):"",g=["lesson-card",d?"completed":"",i?"locked":""].filter(Boolean).join(" "),$=k(t.id);return`
      <article class="${g}" data-lesson-id="${t.id}">
        <div class="stars" aria-label="${(o==null?void 0:o.stars)||0} stars">${u}</div>
        <div class="lesson-title">${t.title}</div>
        <div class="lesson-topic">${t.topic||`Week ${t.week}`}</div>
        <div class="lesson-xp">+${t.xp} XP</div>
        ${i?'<span class="topic-chip">Locked</span>':`<a class="stretched-link" href="${$}" aria-label="Open ${t.title}"></a>`}
      </article>
    `}).join(""))}const s=b();document.body.dataset.theme=s.theme;f(document.getElementById("header-root"),s);const E=Number.parseInt(y(),10)||1,e=v(E),p=document.getElementById("module-root");if(!e)p.innerHTML='<p class="text-center mt-5">Month not found.</p>';else{const a=s.mode==="game"&&!s.unlockedMonths.includes(e.id);p.innerHTML=`
    <a href="dashboard.html" class="text-muted small text-decoration-none">Back to Dashboard</a>
    <section class="my-4">
      <p class="topic-chip mb-3" style="background:color-mix(in srgb, ${e.color} 18%, transparent);color:${e.color}">Month ${e.id}</p>
      <h1 class="mb-2">${e.title}</h1>
      <p class="text-muted mb-4">${e.subtitle}</p>
      <div id="month-progress" class="mb-4"></div>
      ${a?'<div class="content-card mx-0">Complete the previous month in Game Mode to unlock this one.</div>':""}
      <div class="row g-3" id="lesson-grid"></div>
    </section>
  `,M(document.getElementById("month-progress"),x(e.lessons,s.lessons),"Month Progress",e.color),a||(I(document.getElementById("lesson-grid"),e.lessons,s.lessons,s.mode),document.querySelectorAll("#lesson-grid > article").forEach(l=>{l.classList.add("col-12","col-sm-6","col-lg-3")})),B([...document.querySelectorAll(".lesson-card")])}
