import{S as p}from"./assets/vendor-pq8dOVZ9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y="45969466-58730abf31a7490a9e4f6988e",b="https://pixabay.com/api/";function L(n,t=1,o=40){const i=`${b}?key=${y}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${o}`;return fetch(i).then(e=>{if(!e.ok)throw new Error("Failed to fetch images");return e.json()}).catch(e=>{throw console.error("Error:",e),e})}let a=null;function $(n,t){const o=n.map(({webformatURL:i,largeImageURL:e,tags:r,likes:s,views:g,comments:h,downloads:d})=>`
    <li class="gallery-item">
			<a href="${e}" >
				<img class="gallery-img" src="${i}" alt="${r}" loading="lazy" />
				<div class="info">
					<p><b>Likes</b> ${s}</p>
					<p><b>Views</b> ${g}</p>
					<p><b>Comments</b> ${h}</p>
					<p><b>Downloads</b> ${d}</p>
				</div>
			</a>
		</li>
  `).join("");t.innerHTML=o,a?a.refresh():a=new p(".gallery a")}function w(n){n.innerHTML=""}const f=document.querySelector("#search-form"),l=document.querySelector(".gallery"),m=document.querySelector(".loader");let c=1,u="";f.addEventListener("submit",S);function S(n){n.preventDefault();const t=n.target.elements.searchQuery.value.trim();if(t===""){iziToast.warning({title:"Warning",message:"Please enter a search query!"});return}u=t,c=1,w(l),P(),L(u,c).then(o=>{if(o.hits.length===0){iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please, try again!"});return}$(o.hits,l)}).catch(o=>{iziToast.error({message:"Something went wrong. Please try again later."}),console.error("Error fetching images:",o)}).finally(()=>{E(),q()})}function P(){m.style.display="block"}function E(){m.style.display="none"}function q(){f.elements.searchQuery.value=""}
//# sourceMappingURL=index.js.map
