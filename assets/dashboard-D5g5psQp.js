import{r as f,c as y,g as v,b as g}from"./header-tpRfakPe.js";import{l as c,m as $}from"./router-CTbApqkT.js";import{m as h}from"./progressBar-vhJ40-nb.js";import{g as k,C as n}from"./curriculum-DIRFPJHL.js";const _=new Intl.NumberFormat("en-US"),j="https://lh3.googleusercontent.com/aida-public/AB6AXuB-_Z_KR69UHdo5XFYpyMqfMb3JXyVM3sE5H3jj1uiHAEkx-gTishOCm8K5qlgXGq6jmg-5ccI97T1d3qaQ21P1gXe0NFIv2FgNGL_D3gvFxeBbYd3uKdhyM4hEL5wONv8puKFdRIDI-LKIu4lzhXXdi0ucLqmJMyd-y8Nx9v0GdpK3inbhTkvr2G8oSTPPYQmmN8JVav4mLE4Kz7eefgZO3HfgLf8vuhkueP1D4QEYD_e2wfz9EGEEfjDu8nUGc-y9vm2r47SdjcDAPeT9jKU",L=["waving_hand","groups","calendar_month","travel_explore","history_edu","forum"];f();y();const e=v();document.body.dataset.theme=e.theme;g(document.getElementById("header-root"),e);const x=Object.values(e.lessons).filter(s=>s.completed).length,a=k(e.currentLesson)||n.months[0].lessons[0],u=n.months.find(s=>s.id===a.month)||n.months[0],m=h(u.lessons,e.lessons);var p;const I=((p=e.profile)==null?void 0:p.name)||"Alex",M=document.getElementById("dashboard-root"),U=[["local_fire_department",e.streak.current,"Day streak","#f97316"],["stars",e.xp.total,"Total XP","#facc15"],["check_circle",x,"Lessons done","#22d3ee"],["favorite",e.hearts.current,"Hearts","#fb7185"]];M.innerHTML=`
  <div class="dashboard-kinetic">
    <section class="dashboard-hero">
      <div>
        <p class="dashboard-eyebrow">Spanish command center</p>
        <h1>Welcome back, ${I}!</h1>
        <p>Pick up at ${a.title}, or scan the six-month journey from one quiet, high-signal dashboard.</p>
      </div>
      <a class="btn-primary-custom dashboard-hero-action" href="${c(a.id)}">
        Continue
        <span class="material-symbols-outlined">arrow_forward</span>
      </a>
    </section>

    <section class="stats-grid" aria-label="Progress stats">
      ${U.map(([s,o,t,r])=>`
        <article class="stat-tile" style="--tile-color:${r}">
          <span class="material-symbols-outlined filled" aria-hidden="true">${s}</span>
          <strong>${_.format(o)}</strong>
          <span>${t}</span>
        </article>
      `).join("")}
    </section>

    <section class="dashboard-layout">
      <div class="journey-panel">
        <div class="journey-heading">
          <div>
            <p class="dashboard-eyebrow">Module journey</p>
            <h2>Six-month path</h2>
          </div>
          <a href="reference.html" class="reference-link">
            Reference
            <span class="material-symbols-outlined">menu_book</span>
          </a>
        </div>

        <div class="journey-strip" aria-label="Spanish modules">
          ${n.months.map((s,o)=>{const t=h(s.lessons,e.lessons),r=s.lessons.filter(b=>{var d;return(d=e.lessons[b.id])==null?void 0:d.completed}).length,l=e.mode==="story"||e.unlockedMonths.includes(s.id),i=s.id===u.id;return`
              <article class="month-card ${i?"is-active":""} ${l?"":"is-locked"}" style="--month-color:${s.color}">
                <div class="month-card-media ${o===0?"has-photo":""}" ${o===0?`style="--month-image:url(${j})"`:""}>
                  <span class="material-symbols-outlined" aria-hidden="true">${L[o]||"school"}</span>
                </div>
                <div class="month-card-body">
                  <div class="month-kicker">Month ${s.id}</div>
                  <h3>${s.title}</h3>
                  <p>${s.subtitle}</p>
                  <div class="month-progress" aria-label="${t}% complete">
                    <span style="width:${t}%"></span>
                  </div>
                  <div class="month-meta">
                    <span>${r}/${s.lessons.length} lessons</span>
                    <span>${t}%</span>
                  </div>
                  ${l?`<a class="month-action" href="${$(s.id)}">${i?"Resume month":"Open month"}</a>`:'<span class="month-action is-disabled" aria-disabled="true">Locked</span>'}
                </div>
              </article>
            `}).join("")}
        </div>
      </div>

      <aside class="next-panel" aria-label="Up next">
        <div class="next-ring" style="--next-progress:${m}%">
          <span>${m}%</span>
        </div>
        <p class="dashboard-eyebrow">Up next</p>
        <h2>${a.title}</h2>
        <p>${a.topic}</p>
        <div class="next-meta">
          <span><span class="material-symbols-outlined" aria-hidden="true">schedule</span>5 min</span>
          <span><span class="material-symbols-outlined" aria-hidden="true">bolt</span>${a.xp} XP</span>
        </div>
        <a class="btn-primary-custom" href="${c(a.id)}">
          Continue lesson
          <span class="material-symbols-outlined">play_arrow</span>
        </a>
        <a class="btn-secondary-custom" href="reference.html">
          Open reference
          <span class="material-symbols-outlined">library_books</span>
        </a>
      </aside>
    </section>

    <footer class="dashboard-footer">
      <strong>Aprende</strong>
      <span>Game mode unlocks modules in order. Story mode opens the full reference path.</span>
    </footer>
  </div>
`;
