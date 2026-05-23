import{p as r,g as i}from"./reveal-BBM4lrTc.js";function d(s,l,{phonetic:t="",translation:a=""}={}){if(!s)return null;if(s.innerHTML="",r())return s.innerHTML=`
      <span class="spanish-text">${l}</span>
      ${t?`<span class="phonetic-chip">${t}</span>`:""}
      ${a?`<span class="translation-chip">${a}</span>`:""}
    `,null;const o=[...l].map(e=>{const n=document.createElement("span");return n.textContent=e,n.className="explode-letter",n.style.display="inline-block",s.appendChild(n),n}),p=i.timeline();if(p.set(o,{opacity:0,scale:0,x:()=>i.utils.random(-130,130),y:()=>i.utils.random(-90,90),rotation:()=>i.utils.random(-40,40)}),p.to(o,{opacity:1,scale:1,x:0,y:0,rotation:0,duration:.7,stagger:.04,ease:"back.out(1.8)"}),t||a){const e=document.createElement("div");e.className="explode-meta d-flex gap-2 justify-content-center flex-wrap mt-3",e.innerHTML=`
      ${t?`<span class="phonetic-chip">${t}</span>`:""}
      ${a?`<span class="translation-chip">${a}</span>`:""}
    `,s.appendChild(e),p.from(e,{opacity:0,y:12,duration:.35,ease:"power2.out"},"-=0.15")}return p}export{d as i};
