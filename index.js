import{a as m,S as b,i as n}from"./assets/vendor-CDCTPtxx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const v="52796639-16b0da086bf021f69585a6f18",w="https://pixabay.com/api/";async function g(a,t=1){try{return(await m.get(w,{params:{key:v,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:16,page:t}})).data}catch(r){throw console.error("Pixabay API error:",r),r}}const L=new b(".gallery a");function h(a,t=!1){const r=a.map(i=>`
    <li class="gallery-list-item">
      <a class="gallery-link" href="${i.largeImageURL}">
        <img class="gallery-list-img" src="${i.webformatURL}" alt="${i.tags}" width="360" height="200">
      </a>
      <div class="gallery-list-container">
        <div class="subtitle-container">
          <h2 class="gallery-list-subtitle">likes</h2>
          <p class="subtitle-p">${i.likes}</p>
        </div>
        <div class="subtitle-container">
          <h2 class="gallery-list-subtitle">views</h2>
          <p class="subtitle-p">${i.views}</p>
        </div>
        <div class="subtitle-container">
          <h2 class="gallery-list-subtitle">comments</h2>
          <p class="subtitle-p">${i.comments}</p>
        </div>
        <div class="subtitle-container">
          <h2 class="gallery-list-subtitle">downloads</h2>
          <p class="subtitle-p">${i.downloads}</p>
        </div>
      </div>
    </li>`).join("");t?o.gallery.innerHTML+=r:o.gallery.innerHTML=r,L.refresh()}function M(){o.gallery.innerHTML=""}function f(){o.loader.classList.remove("hidden")}function p(){o.loader.classList.add("hidden")}function S(){o.loadMore.classList.remove("hidden")}function y(){o.loadMore.classList.add("hidden")}const o={form:document.querySelector(".form"),input:document.querySelector('input[name="search-text"]'),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMore:document.querySelector(".load-more-btn")};let l=1,d=0,u="";o.form.addEventListener("submit",P);o.loadMore.addEventListener("click",q);async function P(a){a.preventDefault();const t=o.input.value.trim();if(!t){n.warning({message:"Please enter a search term!",position:"topRight"});return}u=t,l=1,y(),M(),f();try{const r=await g(u,l);if(!r.hits.length){n.error({message:"Sorry, no images found. Try again!",position:"topRight"});return}h(r.hits),d=Math.ceil(r.totalHits/16),l<d&&S()}catch{n.error({message:"Something went wrong. Please try again!",position:"topRight"})}finally{p()}}async function q(){l++,f();try{const t=await g(u,l);h(t.hits,!0),l>=d&&(y(),n.warning({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{n.error({message:"Something went wrong. Please try again!",position:"topRight"})}finally{p()}const{height:a}=o.gallery.firstElementChild.getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
