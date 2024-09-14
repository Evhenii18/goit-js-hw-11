import{S as p,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y="45969466-58730abf31a7490a9e4f6988e",b="https://pixabay.com/api/";function L(n,t=1,o=40){const i=`${b}?key=${y}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${o}`;return fetch(i).then(e=>{if(!e.ok)throw new Error("Failed to fetch images");return e.json()}).catch(e=>{throw console.error("Error:",e),e})}let l=null;function $(n,t){const o=n.map(({webformatURL:i,largeImageURL:e,tags:r,likes:s,views:g,comments:d,downloads:h})=>`
    <li class="gallery-item">
			<a href="${e}" >
				<img class="gallery-img" src="${i}" alt="${r}" loading="lazy" />
				<div class="info">
					<p><b>Likes</b> ${s}</p>
					<p><b>Views</b> ${g}</p>
					<p><b>Comments</b> ${d}</p>
					<p><b>Downloads</b> ${h}</p>
				</div>
			</a>
		</li>
  `).join("");t.innerHTML=o,l?l.refresh():l=new p(".gallery a")}function w(n){n.innerHTML=""}const S=document.querySelector("#search-form"),c=document.querySelector(".gallery"),m=document.querySelector(".loader");let u=1,f="";S.addEventListener("submit",E);function E(n){n.preventDefault();const t=n.target.elements.searchQuery.value.trim();if(t===""){a.warning({title:"Warning",message:"Please enter a search query!"});return}f=t,u=1,w(c),P(),L(f,u).then(o=>{if(o.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please, try again!"});return}$(o.hits,c)}).catch(o=>{a.error({title:"Error",message:"Something went wrong. Please try again later."}),console.error("Error fetching images:",o)}).finally(()=>{q()})}function P(){m.style.display="block"}function q(){m.style.display="none"}
//# sourceMappingURL=index.js.map
