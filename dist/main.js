(()=>{"use strict";var e={402:(e,n,t)=>{t.d(n,{Z:()=>f});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(929),t.b),p=new URL(t(45),t.b),l=i()(r()),u=s()(d),h=s()(p);l.push([e.id,`html,\nbody {\n    width: 100vw;\n    height: 100vh;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n#content {\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-rows: 100px 1fr 50px;\n    row-gap: 10px;\n    background-image: url(${u});\n    background-attachment: fixed;\n    background-size: cover;\n}\n\n* {\n    box-sizing: border-box;\n    padding: 0px;\n    margin: 0px;\n    box-sizing: border-box;\n}\n\na {\n    text-decoration: none;\n    color: black;\n}\n\n.restaurant-logo {\n    width: 70px;\n    height: auto;\n}\n\n.left-header {\n    display: flex;\n    align-items: center;\n}\n\n#header {\n    position: sticky;\n    display: grid;\n    grid-template-columns: 350px 1fr;\n    align-items: center;\n    -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);\n    -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);\n    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);\n    background-color: #fff;\n    padding: 0px 10px;\n    opacity: 0.9;\n}\n#header ul{\n    display: flex;\n    flex-wrap:wrap-reverse;\n    flex-direction: minmax(column, row);\n    justify-content: end;\n    gap: 2vw;\n    list-style: none;\n}\n\n#header button {\n    padding: 8px 10px;\n    width: 10vw;\n    min-width: 60px;\n    background-color: red;\n    color: white;\n    border: 1px solid black;\n    border-radius: 10px;\n    display: flex;\n    position: relative;\n    justify-content: center;\n    text-align: center;\n    transition: all 0.25s linear;\n}\n\n#header button:hover {\n    cursor: pointer;\n    border: 1px solid black;\n    scale: 1.1;\n}\n#header #active, \n#header #active:hover {\n    background-color: lightslategray;\n    margin-top: 5px;\n    scale: 1;\n    cursor: auto;\n}\n\n.center-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    overflow: scroll;\n}\n\n#footer {\n    display: flex;\n    justify-content: center;\n    height: 50px;\n    padding-top: 5px;\n    border-top: 3px solid red;\n    background-color: white;\n    opacity: 0.9;\n    font-size: 18px;\n}\n\n.card {\n    position: relative;\n    height: 200px;\n    width: 80vw;\n    min-width: 355px;\n    background: white;\n    display: grid;\n    grid-template-rows: 1fr 3fr;\n    grid-template-columns: 1fr 2fr;\n    border: 2px solid lightslategray;\n    border-radius: 10px;\n    column-gap: 10px;\n    padding: 0px 5px;\n    -webkit-box-shadow: 3px 4px 5px 0px rgba(0, 0, 0, 0.75);\n    -moz-box-shadow: 3px 4px 5px 0px rgba(0, 0, 0, 0.75);\n    box-shadow: 3px 4px 5px 0px rgba(0, 0, 0, 0.75);\n    overflow: auto;\n    transition: scale 0.3s 0.1s;\n    opacity: 0.95;\n}\n\n.card:hover  {\n    scale: 1.02;\n    transition-duration: 0.3s 0.1s;\n}\n\n.card-img {\n    position: relative;\n    grid-row: 1 / -1;\n    grid-column: 1 / 2;\n\n    width: 200px;\n    align-self: center;\n    justify-self: center;\n    border: 1px dotted lightslategray;\n}\n\n.card-title {\n    align-self: end;\n}\n\n.card-description {\n    overflow-y: scroll;\n    justify-self: center;\n    align-self: start;\n}\n\n\n.home-page {\n    background-image: url(${h});\n    background-position: center;\n    background-size: cover;\n    grid-template-columns: 1fr;\n    grid-template-rows: minmax(100px, 1fr) 2fr;\n    row-gap: 30px;\n}\n\n#home-name {\n    text-align: center;\n    align-self: end;\n    opacity: .9;\n}\n#home-name, #home-description {\n    opacity: 0.9;\n    background-color: #fff;\n    border: 2px solid lightslategray ;\n    border-radius: 10px;\n}\n#home-description {\n    align-self: start;\n    grid-area: 2 / 1;\n    padding: 20px 15px;\n}\n\n.home-page:hover, #contact-page:hover {\n    scale: 1.01;\n}\n\n.home-page, #contact-page {\n    margin-top: 20px;\n    padding: 10px;\n    background-color: white;\n    border: 2px solid lightslategray;\n    border-radius: 15px;\n    opacity: 0.97;\n    width: 80vw;\n    height: 90%;\n    display: grid;\n    transition: scale 0.5s 0.1s;\n}\n\n#contact-page {\n    text-align: center;\n    grid-template-rows: 80px 1fr 80px;\n}\n\n#pizza-boy {\n    width: 100%;\n    opacity: 1;\n    justify-self: center;\n    max-width: 550px;\n    height: auto;\n}\n\n.contact-greet {\n    align-self: end;\n    margin-bottom: 20px;\n    color: red;\n}\n\n.contact-phone {\n    margin-top: 20px;\n}`,""]);const f=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);o&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),n.push(p))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],p=a[d]||0,l="".concat(d," ").concat(p);a[d]=p+1;var u=t(l),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var f=r(h,o);o.byIndex=c,n.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=o(e,r),d=0;d<a.length;d++){var p=t(a[d]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},929:(e,n,t)=>{e.exports=t.p+"bb7d7f5236b67993a485.jpg"},45:(e,n,t)=>{e.exports=t.p+"64c6dfd8bf530e5d2cba.png"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),p=t.n(d),l=t(589),u=t.n(l),h=t(402),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=p(),n()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const m=function(e,n){const t=document.createElement(e);return t.classList.add(n),t},g=function(e,n){const t=document.createElement(e);return t.id=n,t},x=t.p+"0fd39c3a971a977590b2.jpg";var b=t(929);const v=t.p+"cba4ac44d770a357418f.png",y=t.p+"0b4104420e519447dfb7.png",w=t.p+"3fb1719c685dbb297ae4.jpeg";var C=t(45);const k=function(e){const n=document.createElement("link");n.rel="prefetch",n.href=e,document.head.appendChild(n)},E=function(){const e=document.querySelector(".center-content"),n=m("div","home-page"),t=document.createElement("div");t.id="home-name";const o=document.createElement("h1");o.textContent="Welcome to Derogatory Danny's",n.appendChild(t),t.appendChild(o);const r=document.createElement("h3");r.textContent="Here at Danny's, we provide you the best service through our business practices. You will love all of our food.";const a=document.createElement("br"),i=document.createElement("h3");i.textContent="We have been in business since 1602. There is a reason why we have stayed around for so long.";const c=g("div","home-description");c.appendChild(r),c.appendChild(a),c.appendChild(i),n.appendChild(c),e.appendChild(n)},S=function(e,n,t){const o=m("div","card"),r=new Image;r.src=e,r.classList.add("card-img");const a=document.createElement("h2");a.textContent=n,a.classList.add("card-title");const i=document.createElement("p");return i.textContent=t,i.classList.add("card-description"),o.appendChild(r),o.appendChild(a),o.appendChild(i),o},z=new Image;z.src=w,z.id="pizza-boy";const j=function(e,n){const t=document.querySelector(".center-content");document.querySelector(`#${e}`).onclick=function(){t.innerHTML="",document.querySelectorAll(".header-button").forEach((e=>e.id="")),this.id="active",n()}};!function(){k(C),k(w),k(y),k(v),k(b),k(x),function(){const e=g("div","header");content.append(e);const n=m("div","left-header");e.appendChild(n);const t=new Image;t.src=C,t.classList.add("restaurant-logo"),n.appendChild(t);const o=document.createElement("h1");o.textContent="Derogatory Danny",n.appendChild(o);const r=document.createElement("ul"),a=function(e){const n=document.createElement("li"),t=g("button",e.toLowerCase());t.classList.add("header-button"),t.textContent=e[0].toUpperCase()+e.substr(1).toLowerCase(),n.appendChild(t),r.appendChild(n)};a("Home"),a("Menu"),a("Contact"),e.appendChild(r)}();const e=m("div","center-content");content.appendChild(e),function(){const e=g("div","footer"),n=document.createElement("a");n.href="https://www.youtube.com/watch?v=hxGOiiR9ZKg&ab_channel=CodeAesthetic",n.textContent="Pierce Strutt | Github Repo",content.appendChild(e),e.appendChild(n)}()}(),E(),j("menu",(function(){const e=document.querySelector(".center-content"),n=S(y,"Italian Pizza","This is a famous dish equivalent to that of lorem ipsum. Everybody loves pizza. Including your mother. You would think my dick was made out of pizza. you stupid hoe."),t=S(v,"Pasta","Pasta is a versatile and beloved staple of Italian cuisine, consisting of dough made from wheat flour, water, and sometimes eggs. It comes in various shapes and sizes, each tailored to complement different sauces and dishes."),o=S(x,"Cheese Stick","The cheese stick is typically seasoned with a blend of herbs and spices before being coated in a breadcrumb mixture, then fried or baked to achieve a satisfyingly crunchy exterior. When bitten into, the cheese stick reveals a delightful contrast between its crunchy outer layer and the gooey, melted cheese center. With its irresistible combination of textures and flavors, the cheese stick is a popular and indulgent treat enjoyed by people of all ages.");e.appendChild(n),e.appendChild(t),e.appendChild(o)})),j("home",E),j("contact",(function(){const e=document.querySelector(".center-content"),n=g("div","contact-page"),t=m("h1","contact-greet");t.textContent="Contact us now!";const o=m("h2","contact-phone");o.textContent="+1 123-999-9999",n.appendChild(t),n.appendChild(z),n.appendChild(o),e.appendChild(n)})),document.querySelector("#home").id="active"})()})();