(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const f="spanish_app_state",g=864e5,d={mode:"game",theme:"dark",streak:{current:0,longest:0,lastStudiedDate:null},xp:{total:0,weeklyHistory:[0,0,0,0,0,0,0]},hearts:{current:5,lastRefillTime:null},lessons:{},unlockedMonths:[1],currentLesson:"m1-w1-l1"};function u(t){return JSON.parse(JSON.stringify(t))}function y(t={}){var s;const e=u(d);return{...e,...t,streak:{...e.streak,...t.streak},xp:{...e.xp,...t.xp,weeklyHistory:Array.isArray((s=t.xp)==null?void 0:s.weeklyHistory)?[...t.xp.weeklyHistory].slice(-7).concat(Array(Math.max(0,7-t.xp.weeklyHistory.length)).fill(0)).slice(0,7):[...e.xp.weeklyHistory]},hearts:{...e.hearts,...t.hearts},lessons:{...e.lessons,...t.lessons},unlockedMonths:Array.isArray(t.unlockedMonths)&&t.unlockedMonths.length?[...new Set(t.unlockedMonths)]:[1]}}function l(){try{const t=localStorage.getItem(f);return t?y(JSON.parse(t)):u(d)}catch{return u(d)}}function o(t){localStorage.setItem(f,JSON.stringify(y(t)))}function L(t,e,s){var h;const a=l(),r=s>=5?3:s>=3?2:1,n=((h=a.lessons[t])==null?void 0:h.xpEarned)||0,i=Math.max(0,e-n);return a.lessons[t]={completed:!0,xpEarned:e,stars:r},a.xp.total+=i,a.xp.weeklyHistory[6]+=i,a.currentLesson=t,x(a),o(a),a.lessons[t]}function $(){const t=l();return t.hearts.current=Math.max(0,t.hearts.current-1),o(t),t.hearts.current}function A(t=new Date){const e=l(),s=m(t);if(e.streak.lastStudiedDate===s)return e.streak.current;const a=m(new Date(t.getTime()-g));return e.streak.current=e.streak.lastStudiedDate===a?e.streak.current+1:1,e.streak.longest=Math.max(e.streak.longest,e.streak.current),e.streak.lastStudiedDate=s,o(e),e.streak.current}function k(t){const e=l();return e.mode=t==="story"?"story":"game",o(e),e.mode}function b(t){const e=l();return e.theme=t==="light"?"light":"dark",o(e),e.theme}function w(t=Date.now()){const e=l(),s=e.hearts.lastRefillTime||0;return e.hearts.current>=5?(e.hearts.lastRefillTime=t,o(e),e.hearts.current):((!s||t-s>=g)&&(e.hearts.current=5,e.hearts.lastRefillTime=t,o(e)),e.hearts.current)}function H(t){const e=l();return e.currentLesson=t,o(e),t}function m(t){return t.toISOString().split("T")[0]}function x(t){const e=t.currentLesson.match(/^m(\d+)-w4-l5$/);if(!e)return;const s=Number(e[1])+1;s<=6&&!t.unlockedMonths.includes(s)&&(t.unlockedMonths.push(s),t.unlockedMonths.sort((a,r)=>a-r))}function S(t){return Array.from({length:5},(e,s)=>{const a=s<t;return`<span class="heart ${a?"":"empty"}" aria-hidden="true">${a?"♥":"♡"}</span>`}).join("")}function p(t,e="Mode"){return`
    <label class="mode-toggle" title="Switch between game and story modes">
      <span>${e==="Mode"?"Game":e}</span>
      <input class="mode-toggle-cb" type="checkbox" ${t.mode==="story"?"checked":""} aria-label="Switch to story mode" />
      <span>Story</span>
    </label>
  `}function c(t,e){const s=t.querySelector(".site-header"),a=t.querySelector("#header-overflow-menu"),r=t.querySelector("#header-menu-toggle"),n=r==null?void 0:r.querySelector(".material-symbols-outlined");!s||!a||!r||(s.classList.toggle("is-menu-open",e),a.hidden=!e,r.setAttribute("aria-expanded",String(e)),n&&(n.textContent=e?"close":"menu"))}function v(t){t.dataset.headerListeners!=="true"&&(t.dataset.headerListeners="true",t.addEventListener("click",e=>{const s=e.target.closest("#header-menu-toggle");if(s){c(t,s.getAttribute("aria-expanded")!=="true");return}if(e.target.closest("#theme-toggle")){const a=document.body.dataset.theme==="dark"?"light":"dark";document.body.dataset.theme=a,b(a),M(t,l())}}),t.addEventListener("change",e=>{e.target.matches(".mode-toggle-cb")&&(k(e.target.checked?"story":"game"),window.location.reload())}),document.addEventListener("click",e=>{t.contains(e.target)||c(t,!1)}),document.addEventListener("keydown",e=>{e.key==="Escape"&&c(t,!1)}))}function M(t,e=l()){if(!t)return;const s=S(e.hearts.current),a=e.theme==="dark"?"light_mode":"dark_mode";t.innerHTML=`
    <header class="site-header">
      <div class="header-left">
        <a class="header-logo" href="index.html" aria-label="Aprende home">
          <span class="header-mark">A</span>
          <span>Aprende</span>
        </a>
        <nav class="header-primary" aria-label="Main navigation">
          <a class="header-link" href="dashboard.html">Dashboard</a>
          <a class="header-link" href="reference.html">Reference</a>
          ${p(e)}
        </nav>
      </div>

      <div class="header-actions" aria-label="Progress and settings">
        <span class="header-pill optional" aria-label="${e.streak.current} day streak">
          <span class="material-symbols-outlined filled" aria-hidden="true">local_fire_department</span>
          <span class="header-pill-text">${e.streak.current} day</span>
        </span>
        <span class="header-pill" aria-label="${e.xp.total} experience points">
          <span class="material-symbols-outlined filled" aria-hidden="true">stars</span>
          <span class="header-pill-text">${e.xp.total} XP</span>
        </span>
        <span class="header-hearts" aria-label="${e.hearts.current} hearts">${s}</span>
        <button class="icon-btn" id="theme-toggle" type="button" title="Toggle theme" aria-label="Toggle theme">
          <span class="material-symbols-outlined" aria-hidden="true">${a}</span>
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
          ${p(e,"Game")}
        </div>
        <div class="header-menu-stats" aria-label="Progress summary">
          <span>${e.streak.current} day streak</span>
          <span>${e.xp.total} XP</span>
          <span>${e.hearts.current} hearts</span>
        </div>
      </div>
    </header>
  `,v(t)}export{L as a,M as b,A as c,l as g,$ as l,w as r,H as s};
