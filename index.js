import{S as m,i as c}from"./assets/vendor-De63neY_.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p=t=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${t.largeImageURL}">
        <img
          class="gallery-image"
          src="${t.webformatURL}"
          data-source="${t.largeImageURL}"
          alt="${t.tags}"
        />
      </a>
      <div class="wrapper">
        <ul class="img-content-wrapper">
          <li class="text-info">
            Likes<span class="number">${t.likes}</span>
          </li>
          <li class="text-info">
            Views<span class="number">${t.views}</span>
          </li>
          <li class="text-info">
            Comments<span class="number">${t.comments}</span>
          </li>
          <li class="text-info">
            Downloads<span class="number">${t.downloads}</span>
          </li>
        </ul>
      </div>
    </li>
    `,d="https://pixabay.com/api",f=t=>{const a=new URLSearchParams({key:"45714704-c3295be315f324c1eb86e3dfd",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}/?${a}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},l=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),u=document.querySelector(".js-loader"),h=new m(".js-gallery a",{overlayOpacity:.9,captions:!0,captionsData:"alt",captionDelay:350}),y=t=>{t.preventDefault();const a=l.elements.user_query.value;if(!a){c.warning({message:"Input field must not be empty.",position:"topRight"});return}n.innerHTML="",u.classList.remove("is-hidden"),f(a).then(s=>{if(n.innerHTML="",!s.hits.length){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.innerHTML="";return}const o=s.hits.map(e=>p(e)).join("");n.innerHTML=o,h.refresh(),l.reset()}).catch(s=>{console.log(s)}).finally(()=>{u.classList.add("is-hidden")})};l.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
