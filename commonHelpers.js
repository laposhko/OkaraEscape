/* empty css                      */import{S as u}from"./assets/vendor-9f715778.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const a=document.querySelector(".header-btn"),c=document.querySelector(".backdrop"),m=document.querySelectorAll(".mobmenu-link");function f(){c.classList.add("backdrop--show"),document.body.style.overflow="hidden"}function l(t){t.target===t.currentTarget&&(c.classList.remove("backdrop--show"),document.body.style.overflow="auto")}a.addEventListener("click",f);c.addEventListener("click",l);m.forEach(t=>{t.addEventListener("click",o=>{o.preventDefault(),document.getElementById(t.getAttribute("href")).scrollIntoView({behavior:"smooth"}),l(o)})});const h=document.querySelectorAll(".header-link");h.forEach(t=>t.addEventListener("click",o=>{o.preventDefault(),document.getElementById(t.getAttribute("href")).scrollIntoView({behavior:"smooth"})}));document.querySelector(".uniqueness-list").addEventListener("click",function(){const t=document.querySelectorAll(".uniqueness-list .uniqueness-item");let o=[...t].findIndex(i=>i.classList.contains("visible-element"));if(o===-1)return;let r=t[o],s=(o+1)%t.length,e=t[s],n=window.matchMedia("(min-width: 1024px)").matches?"moveOut-desktop":"moveOut-mobile";r.style.animation=`${n} 0.5s forwards`,r.addEventListener("animationend",function i(){r.classList.remove("visible-element"),r.style.animation="",e.classList.add("visible-element"),e.style.animation="fadeIn 0.5s forwards",r.removeEventListener("animationend",i)})});const d=new u(".swiper",{loop:!0,navigation:{nextEl:".swiper-button-next-custom",prevEl:".swiper-button-prev-custom"},breakpoints:{320:{direction:"horizontal",slidesPerView:1},1200:{direction:"vertical",slidesPerView:2,spaceBetween:32}}});document.querySelector(".swiper-button-next-custom").addEventListener("click",()=>{d.slideNext()});document.querySelector(".swiper-button-prev-custom").addEventListener("click",()=>{d.slidePrev()});const p=document.querySelectorAll(".footer-scroll");p.forEach(t=>t.addEventListener("click",o=>{o.preventDefault(),document.getElementById(t.getAttribute("href")).scrollIntoView({behavior:"smooth"})}));
//# sourceMappingURL=commonHelpers.js.map
