function o(r,s,a,i="var(--color-primary)"){if(!r)return;const e=Math.max(0,Math.min(100,s));r.innerHTML=`
    <div class="progress-wrap">
      ${`<div class="progress-label">${a}</div>`}
      <div class="progress" style="height:10px;border-radius:8px;background:var(--color-surface-2)">
        <div class="progress-bar"
          role="progressbar"
          style="width:0%;background:${i};border-radius:8px;transition:width 0.8s ease"
          aria-valuenow="${e}"
          aria-valuemin="0"
          aria-valuemax="100"></div>
      </div>
    </div>
  `,requestAnimationFrame(()=>{r.querySelector(".progress-bar").style.width=`${e}%`})}function n(r,s={}){const a=r.length,i=r.filter(e=>{var t;return(t=s[e.id])==null?void 0:t.completed}).length;return a===0?0:Math.round(i/a*100)}export{n as m,o as r};
