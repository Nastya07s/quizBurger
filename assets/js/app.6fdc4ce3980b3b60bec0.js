!function(e){function t(t){for(var o,i,l=t[0],a=t[1],c=t[2],d=0,p=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);for(u&&u(t);p.length;)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,l=1;l<n.length;l++){var a=n[l];0!==s[a]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},s={0:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="https://nastya07s.github.io/quizBurger/";var l=window.webpackJsonp=window.webpackJsonp||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=a;r.push([0,1]),n()}([function(e,t,n){"use strict";n.r(t);n(1),n(2)},function(e,t){document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("btnOpenModal"),t=document.getElementById("modalBlock"),n=document.getElementById("closeModal"),o=document.getElementById("question"),s=document.getElementById("formAnswers"),r=document.getElementById("burger"),i=document.getElementById("prev"),l=document.getElementById("next"),a=document.querySelector(".modal-dialog"),c=[{question:"Какого цвета бургер?",answers:[{title:"Стандарт",url:"./assets/img/burger.png"},{title:"Черный",url:"./assets/img/burgerBlack.png"}],type:"radio"},{question:"Из какого мяса котлета?",answers:[{title:"Курица",url:"./assets/img/chickenMeat.png"},{title:"Говядина",url:"./assets/img/beefMeat.png"},{title:"Свинина",url:"./assets/img/porkMeat.png"}],type:"radio"},{question:"Дополнительные ингредиенты?",answers:[{title:"Помидор",url:"./assets/img/tomato.png"},{title:"Огурец",url:"./assets/img/cucumber.png"},{title:"Салат",url:"./assets/img/salad.png"},{title:"Лук",url:"./assets/img/onion.png"}],type:"checkbox"},{question:"Добавить соус?",answers:[{title:"Чесночный",url:"./assets/img/sauce1.png"},{title:"Томатный",url:"./assets/img/sauce2.png"},{title:"Горчичный",url:"./assets/img/sauce3.png"}],type:"radio"}],u=document.documentElement.clientWidth;r.style.display=u<768?"flex":"none",window.addEventListener("resize",(function(){u=document.documentElement.clientWidth,r.style.display=u<768?"flex":"none"}));var d=-100,p=function e(){a.style.top="".concat(d,"%"),(d+=3)<0?requestAnimationFrame(e):d=-100},m=function(){var e=0,t=function(e){var t;s.innerHTML="",o.textContent="".concat(c[e].question),l.style.display=e<c.length-1?"inline-block":"none",i.style.display=e>0?"inline-block":"none",c[t=e].answers.forEach((function(e){var n=e.title,o=e.url,r=document.createElement("div");r.classList.add("answers-item","d-flex","justify-content-center"),r.innerHTML='\n          <input type="'.concat(c[t].type,'" id="').concat(n,'" name="answer" class="d-none">\n          <label for="').concat(n,'" class="d-flex flex-column justify-content-between">\n            <img class="answerImg" src="').concat(o,'" alt="burger">\n            <span>').concat(n,"</span>\n          </label>\n        "),s.appendChild(r)}))};t(e),l.onclick=function(){t(e+=1)},i.onclick=function(){t(e-=1)}};r.addEventListener("click",(function(){r.classList.add("active"),t.classList.add("d-block"),m()})),e.addEventListener("click",(function(){requestAnimationFrame(p),t.classList.add("d-block"),m()})),document.body.addEventListener("click",(function(e){var n=e.target;n.closest(".modal-dialog")||n.closest(".openModalButton")||n.closest(".burger")||(t.classList.remove("d-block"),r.classList.remove("active"))})),n.addEventListener("click",(function(){t.classList.remove("d-block"),r.classList.remove("active")}))}))},function(e,t,n){var o=n(3),s=n(4);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var r={insert:"head",singleton:!1},i=(o(s,r),s.locals?s.locals:{});e.exports=i},,function(e,t,n){}]);