import{g as v,a as b}from"./header-ConrUMEu.js";/* empty css              */import{l as f,g as k}from"./router-CTbApqkT.js";import{i as y}from"./reveal-BBM4lrTc.js";import{r as B,m as M}from"./progressBar-vhJ40-nb.js";import{a as x}from"./curriculum-DIRFPJHL.js";function I(n,r,l={},h="game"){n&&(n.innerHTML=r.map((t,d)=>{var m;const o=l[t.id],i=!!(o!=null&&o.completed),a=r[d-1],c=h==="game"&&d>0&&!((m=l[a==null?void 0:a.id])!=null&&m.completed),u=i?"★".repeat(o.stars):"",g=["lesson-card",i?"completed":"",c?"locked":""].filter(Boolean).join(" "),$=f(t.id);return`
      <article class="${g}" data-lesson-id="${t.id}">
        <div class="stars" aria-label="${(o==null?void 0:o.stars)||0} stars">${u}</div>
        <div class="lesson-title">${t.title}</div>
        <div class="lesson-topic">${t.topic||`Week ${t.week}`}</div>
        <div class="lesson-xp">+${t.xp} XP</div>
        ${c?'<span class="topic-chip">Locked</span>':`<a class="stretched-link" href="${$}" aria-label="Open ${t.title}"></a>`}
      </article>
    `}).join(""))}const s=v();document.body.dataset.theme=s.theme;b(document.getElementById("header-root"),s);const H=Number.parseInt(k(),10)||1,e=x(H),p=document.getElementById("module-root");if(!e)p.innerHTML='<p class="text-center mt-5">Month not found.</p>';else{const n=s.mode==="game"&&!s.unlockedMonths.includes(e.id);p.innerHTML=`
    <a href="dashboard.html" class="text-muted small text-decoration-none">Back to Dashboard</a>
    <section class="my-4">
      <p class="topic-chip mb-3" style="background:color-mix(in srgb, ${e.color} 18%, transparent);color:${e.color}">Month ${e.id}</p>
      <h1 class="mb-2">${e.title}</h1>
      <p class="text-muted mb-4">${e.subtitle}</p>
      <div id="month-progress" class="mb-4"></div>
      ${n?'<div class="content-card mx-0">Complete the previous month in Game Mode to unlock this one.</div>':""}
      <div class="module-lesson-grid" id="lesson-grid"></div>
    </section>
  `,B(document.getElementById("month-progress"),M(e.lessons,s.lessons),"Month Progress",e.color),n||I(document.getElementById("lesson-grid"),e.lessons,s.lessons,s.mode),y([...document.querySelectorAll(".lesson-card")])}
