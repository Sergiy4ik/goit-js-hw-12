import{a as c,S as u,i as a}from"./assets/vendor-4cgTvrDY.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function l(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=l(t);fetch(t.href,r)}})();const d="52796639-16b0da086bf021f69585a6f18",f="https://pixabay.com/api/";function p(s){return c.get(f,{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12}}).then(e=>e.data).catch(e=>{throw console.error("Pixabay API error:",e),e})}const g=new u(".gallery a");function h(s){i.gallery.innerHTML=s.map(e=>`
    <li class="gallery-list-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img class="gallery-list-img" src="${e.webformatURL}" alt="${e.tags}" width="360" height="200">
      </a>
      <div class="gallery-list-container">
        <div class="subtitle-container">
          <h2 class="gallery-list-subtitle">likes</h2>
          <p class="subtitle-p">${e.likes}</p>
        </div>
        <div class="subtitle-container">
          <h2 class="gallery-list-subtitle">views</h2>
          <p class="subtitle-p">${e.views}</p>
        </div>
        <div class="subtitle-container">
          <h2 class="gallery-list-subtitle">comments</h2>
          <p class="subtitle-p">${e.comments}</p>
        </div>
        <div class="subtitle-container">
          <h2 class="gallery-list-subtitle">downloads</h2>
          <p class="subtitle-p">${e.downloads}</p>
        </div>
      </div>
    </li>`).join(""),g.refresh()}function m(){i.gallery.innerHTML=""}function y(){i.loader.classList.remove("hidden")}function b(){i.loader.classList.add("hidden")}const i={form:document.querySelector(".form"),input:document.querySelector('input[name="search-text"]'),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};i.form.addEventListener("submit",v);function v(s){s.preventDefault();const e=i.input.value.trim();if(!e){a.warning({message:"Please enter a search term!",position:"topRight"});return}m(),y(),p(e).then(l=>{if(!l.hits.length){a.error({message:"Sorry, no images found. Try again!",position:"topRight"});return}h(l.hits)}).catch(()=>{a.error({message:"Something went wrong. Please try again!",position:"topRight"})}).finally(()=>{b()})}
//# sourceMappingURL=index.js.map
