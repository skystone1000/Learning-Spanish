(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();const g="spanish_app_state",y=864e5,d={mode:"game",theme:"dark",streak:{current:0,longest:0,lastStudiedDate:null},xp:{total:0,weeklyHistory:[0,0,0,0,0,0,0]},hearts:{current:5,lastRefillTime:null},lessons:{},unlockedMonths:[1],currentLesson:"m1-w1-l1"};function u(e){return JSON.parse(JSON.stringify(e))}function k(e={}){var a;const t=u(d);return{...t,...e,streak:{...t.streak,...e.streak},xp:{...t.xp,...e.xp,weeklyHistory:Array.isArray((a=e.xp)==null?void 0:a.weeklyHistory)?[...e.xp.weeklyHistory].slice(-7).concat(Array(Math.max(0,7-e.xp.weeklyHistory.length)).fill(0)).slice(0,7):[...t.xp.weeklyHistory]},hearts:{...t.hearts,...e.hearts},lessons:{...t.lessons,...e.lessons},unlockedMonths:Array.isArray(e.unlockedMonths)&&e.unlockedMonths.length?[...new Set(e.unlockedMonths)]:[1]}}function l(){try{const e=localStorage.getItem(g);return e?k(JSON.parse(e)):u(d)}catch{return u(d)}}function o(e){localStorage.setItem(g,JSON.stringify(k(e)))}function w(e,t,a,s=new Date){var m;const r=l(),n=a>=5?3:a>=3?2:1,i=((m=r.lessons[e])==null?void 0:m.xpEarned)||0,h=Math.max(0,t-i);return r.lessons[e]={completed:!0,xpEarned:t,stars:n},r.xp.total+=h,r.xp.weeklyHistory[6]+=h,r.currentLesson=e,b(r,s),M(r),o(r),r.lessons[e]}function A(){const e=l();return e.hearts.current=Math.max(0,e.hearts.current-1),o(e),e.hearts.current}function b(e,t=new Date){const a=p(t);if(e.streak.lastStudiedDate===a)return e.streak.current;const s=p(new Date(t.getTime()-y));return e.streak.current=e.streak.lastStudiedDate===s?e.streak.current+1:1,e.streak.longest=Math.max(e.streak.longest,e.streak.current),e.streak.lastStudiedDate=a,e.streak.current}function x(e){const t=l();return t.mode=e==="story"?"story":"game",o(t),t.mode}function S(e){const t=l();return t.theme=e==="light"?"light":"dark",o(t),t.theme}function D(e=Date.now()){const t=l(),a=t.hearts.lastRefillTime||0;return t.hearts.current>=5?(t.hearts.lastRefillTime=e,o(t),t.hearts.current):((!a||e-a>=y)&&(t.hearts.current=5,t.hearts.lastRefillTime=e,o(t)),t.hearts.current)}function H(e){const t=l();return t.currentLesson=e,o(t),e}function p(e){const t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${t}-${a}-${s}`}function M(e){const t=e.currentLesson.match(/^m(\d+)-w4-l5$/);if(!t)return;const a=Number(t[1])+1;a<=6&&!e.unlockedMonths.includes(a)&&(e.unlockedMonths.push(a),e.unlockedMonths.sort((s,r)=>s-r))}function v(e){return Array.from({length:5},(t,a)=>{const s=a<e;return`<span class="heart ${s?"":"empty"}" aria-hidden="true">${s?"♥":"♡"}</span>`}).join("")}function f(e,t="Mode"){return`
    <label class="mode-toggle" title="Switch between game and story modes">
      <span>${t==="Mode"?"Game":t}</span>
      <input class="mode-toggle-cb" type="checkbox" ${e.mode==="story"?"checked":""} aria-label="Switch to story mode" />
      <span>Story</span>
    </label>
  `}function c(e,t){const a=e.querySelector(".site-header"),s=e.querySelector("#header-overflow-menu"),r=e.querySelector("#header-menu-toggle"),n=r==null?void 0:r.querySelector(".material-symbols-outlined");!a||!s||!r||(a.classList.toggle("is-menu-open",t),s.hidden=!t,r.setAttribute("aria-expanded",String(t)),n&&(n.textContent=t?"close":"menu"))}function $(e){e.dataset.headerListeners!=="true"&&(e.dataset.headerListeners="true",e.addEventListener("click",t=>{const a=t.target.closest("#header-menu-toggle");if(a){c(e,a.getAttribute("aria-expanded")!=="true");return}if(t.target.closest("#theme-toggle")){const s=document.body.dataset.theme==="dark"?"light":"dark";document.body.dataset.theme=s,S(s),L(e,l())}}),e.addEventListener("change",t=>{t.target.matches(".mode-toggle-cb")&&(x(t.target.checked?"story":"game"),window.location.reload())}),document.addEventListener("click",t=>{e.contains(t.target)||c(e,!1)}),document.addEventListener("keydown",t=>{t.key==="Escape"&&c(e,!1)}))}function L(e,t=l()){if(!e)return;const a=v(t.hearts.current),s=t.theme==="dark"?"light_mode":"dark_mode";e.innerHTML=`
    <header class="site-header">
      <div class="header-left">
        <a class="header-logo" href="index.html" aria-label="Aprende home">
          <span class="header-mark">A</span>
          <span>Aprende</span>
        </a>
        <nav class="header-primary" aria-label="Main navigation">
          <a class="header-link" href="dashboard.html">Dashboard</a>
          <a class="header-link" href="reference.html">Reference</a>
          ${f(t)}
        </nav>
      </div>

      <div class="header-actions" aria-label="Progress and settings">
        <span class="header-pill optional" aria-label="${t.streak.current} day streak">
          <span class="material-symbols-outlined filled" aria-hidden="true">local_fire_department</span>
          <span class="header-pill-text">${t.streak.current} day</span>
        </span>
        <span class="header-pill" aria-label="${t.xp.total} experience points">
          <span class="material-symbols-outlined filled" aria-hidden="true">stars</span>
          <span class="header-pill-text">${t.xp.total} XP</span>
        </span>
        <span class="header-hearts" aria-label="${t.hearts.current} hearts">${a}</span>
        <button class="icon-btn" id="theme-toggle" type="button" title="Toggle theme" aria-label="Toggle theme">
          <span class="material-symbols-outlined" aria-hidden="true">${s}</span>
        </button>
        <button class="icon-btn header-menu-toggle" id="header-menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="header-overflow-menu">
          <span class="material-symbols-outlined" aria-hidden="true">menu</span>
        </button>
      </div>

      <div class="header-menu" id="header-overflow-menu" hidden>
        <a class="header-menu-link" href="dashboard.html">
          <span class="material-symbols-outlined" aria-hidden="true">space_dashboard</span>
          Dashboard
        </a>
        <a class="header-menu-link" href="reference.html">
          <span class="material-symbols-outlined" aria-hidden="true">menu_book</span>
          Reference
        </a>
        <div class="header-menu-row">
          <span>Mode</span>
          ${f(t,"Game")}
        </div>
        <div class="header-menu-stats" aria-label="Progress summary">
          <span>${t.streak.current} day streak</span>
          <span>${t.xp.total} XP</span>
          <span>${t.hearts.current} hearts</span>
        </div>
      </div>
    </header>
  `,$(e)}export{L as a,w as c,l as g,A as l,D as r,H as s};
