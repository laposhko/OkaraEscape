/* empty css                      */import{S as a}from"./assets/vendor-9f715778.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();const u=document.querySelector(".header-btn"),s=document.querySelector(".backdrop"),m=document.querySelectorAll(".mobmenu-link");function f(){s.classList.remove("backdrop--hide"),s.classList.add("backdrop--show"),document.body.style.overflow="hidden"}function d(t){t.target===t.currentTarget&&(s.classList.remove("backdrop--show"),s.classList.add("backdrop--hide"),document.body.style.overflow="auto")}u.addEventListener("click",f);s.addEventListener("click",d);m.forEach(t=>{t.addEventListener("click",o=>{o.preventDefault(),document.getElementById(t.getAttribute("href")).scrollIntoView({behavior:"smooth"}),d(o)})});const p=document.querySelectorAll(".header-link");p.forEach(t=>t.addEventListener("click",o=>{o.preventDefault(),document.getElementById(t.getAttribute("href")).scrollIntoView({behavior:"smooth"})}));document.querySelector(".uniqueness-list").addEventListener("click",function(){const t=document.querySelectorAll(".uniqueness-list .uniqueness-item");let o=[...t].findIndex(r=>r.classList.contains("visible-element"));if(o===-1)return;let i=t[o],c=(o+1)%t.length,e=t[c],n=window.matchMedia("(min-width: 1024px)").matches?"moveOut-desktop":"moveOut-mobile";i.style.animation=`${n} 0.5s forwards`,i.addEventListener("animationend",function r(){i.classList.remove("visible-element"),i.style.animation="",e.classList.add("visible-element"),e.style.animation="fadeIn 0.5s forwards",i.removeEventListener("animationend",r)})});const l=new a(".swiper",{loop:!0,navigation:{nextEl:".swiper-button-next-custom",prevEl:".swiper-button-prev-custom"},breakpoints:{320:{direction:"horizontal",slidesPerView:1},1200:{direction:"vertical",slidesPerView:2,spaceBetween:32}}});document.querySelector(".swiper-button-next-custom").addEventListener("click",()=>{l.slideNext()});document.querySelector(".swiper-button-prev-custom").addEventListener("click",()=>{l.slidePrev()});
//# sourceMappingURL=commonHelpers.js.map
