!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=214)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(34))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,n){var r=n(0),o=n(25),i=n(2),c=n(26),u=n(27),a=n(52),f=o("wks"),s=r.Symbol,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,e,n){var r=n(4),o=n(8),i=n(14);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(3);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(4),o=n(29),i=n(7),c=n(16),u=Object.defineProperty;e.f=r?u:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(0),o=n(20).f,i=n(6),c=n(23),u=n(15),a=n(49),f=n(53);t.exports=function(t,e){var n,s,l,p,d,v=t.target,y=t.global,h=t.stat;if(n=y?r:h?r[v]||u(v,{}):(r[v]||{}).prototype)for(s in e){if(p=e[s],l=t.noTargetGet?(d=o(n,s))&&d.value:n[s],!f(y?s:v+(h?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(n,s,p,t)}}},function(t,e,n){var r=n(24),o=n(13);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(17),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(0),o=n(6);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(3);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports={}},function(t,e,n){var r=n(50),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){var r=n(4),o=n(42),i=n(14),c=n(10),u=n(16),a=n(2),f=n(29),s=Object.getOwnPropertyDescriptor;e.f=r?s:function(t,e){if(t=c(t),e=u(e,!0),f)try{return s(t,e)}catch(t){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){var r=n(13);t.exports=function(t){return Object(r(t))}},,function(t,e,n){var r=n(0),o=n(6),i=n(2),c=n(15),u=n(28),a=n(35),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,e,n,u){var a=!!u&&!!u.unsafe,f=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),s(n).source=l.join("string"==typeof e?e:"")),t!==r?(a?!p&&t[e]&&(f=!0):delete t[e],f?t[e]=n:o(t,e,n)):f?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},function(t,e,n){var r=n(1),o=n(12),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(36),o=n(30);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"?? 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){var r=n(30),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(4),o=n(1),i=n(43);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(0),o=n(15),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r=n(12);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(4),o=n(1),i=n(2),c=Object.defineProperty,u={},a=function(t){throw t};t.exports=function(t,e){if(i(u,t))return u[t];e||(e={});var n=[][t],f=!!i(e,"ACCESSORS")&&e.ACCESSORS,s=i(e,0)?e[0]:a,l=i(e,1)?e[1]:void 0;return u[t]=!!n&&!o((function(){if(f&&!r)return!0;var t={length:-1};f?c(t,1,{enumerable:!0,get:a}):t[1]=1,n.call(t,s,l)}))}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r,o,i,c=n(55),u=n(0),a=n(3),f=n(6),s=n(2),l=n(37),p=n(18),d=u.WeakMap;if(c){var v=new d,y=v.get,h=v.has,g=v.set;r=function(t,e){return g.call(v,t,e),e},o=function(t){return y.call(v,t)||{}},i=function(t){return h.call(v,t)}}else{var m=l("state");p[m]=!0,r=function(t,e){return f(t,m,e),e},o=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e){t.exports=!1},function(t,e,n){var r=n(25),o=n(26),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,n){var r=n(17),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var r=n(45),o=n(39).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){"use strict";var r=n(47).forEach,o=n(54),i=n(32),c=o("forEach"),u=i("forEach");t.exports=c&&u?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(0),o=n(3),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e,n){var r=n(33);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(2),o=n(10),i=n(51).indexOf,c=n(18);t.exports=function(t,e){var n,u=o(t),a=0,f=[];for(n in u)!r(c,n)&&r(u,n)&&f.push(n);for(;e.length>a;)r(u,n=e[a++])&&(~i(f,n)||f.push(n));return f}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(44),o=n(24),i=n(21),c=n(11),u=n(48),a=[].push,f=function(t){var e=1==t,n=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(d,v,y,h){for(var g,m,S=i(d),b=o(S),x=r(v,y,3),L=c(b.length),E=0,w=h||u,O=e?w(d,L):n?w(d,0):void 0;L>E;E++)if((p||E in b)&&(m=x(g=b[E],E,S),t))if(e)O[E]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return E;case 2:a.call(O,g)}else if(s)return!1;return l?-1:f||s?s:O}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,e,n){var r=n(3),o=n(31),i=n(5)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(2),o=n(56),i=n(20),c=n(8);t.exports=function(t,e){for(var n=o(e),u=c.f,a=i.f,f=0;f<n.length;f++){var s=n[f];r(t,s)||u(t,s,a(e,s))}}},function(t,e,n){var r=n(0);t.exports=r},function(t,e,n){var r=n(10),o=n(11),i=n(38),c=function(t){return function(e,n,c){var u,a=r(e),f=o(a.length),s=i(c,f);if(t&&n!=n){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e,n){var r=n(27);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var r=n(1),o=/#|\.prototype\./,i=function(t,e){var n=u[c(t)];return n==f||n!=a&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,e,n){"use strict";var r=n(1);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){var r=n(0),o=n(28),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,n){var r=n(19),o=n(40),i=n(46),c=n(7);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){"use strict";var r=n(9),o=n(41);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,e,n){var r=n(0),o=n(59),i=n(41),c=n(6);for(var u in o){var a=r[u],f=a&&a.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){n(215),n(216),n(217),t.exports=n(218)},function(t,e,n){"use strict";n.r(e),n(57),n(58);var r=document.querySelector(".main"),o=document.querySelectorAll(".tooltip-toggle"),i=document.querySelector(".language-notification"),c="";if(i&&(c=i.querySelector("button")),r){var u=document.querySelector(".footer").offsetHeight,a=document.querySelector(".header").offsetHeight+u;r.style.minHeight="".concat(window.innerHeight-a,"px")}window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),o.forEach((function(t){t.onclick=function(e){e.preventDefault(),t.closest(".tooltip").classList.toggle("active")}})),i&&(c.onclick=function(){return i.hasAttribute("open")?i.removeAttribute("open"):i.setAttribute("open",!0)})},function(t,e){var n=document.querySelector(".language-picker"),r=document.querySelector(".language-picker__list");n&&n.addEventListener("click",(function(){"true"===n.getAttribute("aria-expanded")?(r.setAttribute("aria-hidden",!0),n.setAttribute("aria-expanded",!1)):(r.setAttribute("aria-hidden",!1),n.setAttribute("aria-expanded",!0))}));var o=document.querySelector(".nav--mobile .language-picker"),i=document.querySelector(".nav--mobile .language-picker__list"),c=document.querySelector(".nav__darkbox");o&&o.addEventListener("click",(function(){"true"===o.getAttribute("aria-expanded")?(i.setAttribute("aria-hidden",!0),o.setAttribute("aria-expanded",!1),c.style.display="none",document.body.style.overflowY="initial"):(i.setAttribute("aria-hidden",!1),o.setAttribute("aria-expanded",!0),c.style.display="block",document.body.style.overflowY="hidden")}))},function(t,e,n){"use strict";n.r(e),n(57),n(58);var r=document.querySelector("#nav-toggle"),o=document.querySelectorAll("label[for=nav-toggle]"),i=document.querySelector("#sites-toggle"),c=document.querySelectorAll("label[for=sites-toggle]"),u=document.querySelector("#search-toggle"),a=document.querySelectorAll("label[for=search-toggle]"),f=document.querySelector(".nav__main-links"),s=document.querySelector(".nav__site-links"),l=document.querySelector(".nav__search_input");o&&o.forEach((function(t){t.addEventListener("click",(function(){f.classList.remove("visually-hidden"),r.checked?(s.classList.remove("visually-hidden"),l.classList.remove("visually-hidden")):(i.checked=!1,s.classList.add("visually-hidden"),l.classList.add("visually-hidden"))}))})),c&&c.forEach((function(t){t.addEventListener("click",(function(){s.classList.remove("visually-hidden"),i.checked?(f.classList.remove("visually-hidden"),l.classList.remove("visually-hidden")):(r.checked=!1,f.classList.add("visually-hidden"),l.classList.add("visually-hidden"))}))})),a&&a.forEach((function(t){t.addEventListener("click",(function(){l.classList.remove("visually-hidden"),u.checked?(f.classList.remove("visually-hidden"),s.classList.remove("visually-hidden")):(r.checked=!1,f.classList.add("visually-hidden"),s.classList.add("visually-hidden"),requestAnimationFrame((function(){return l.querySelector("input[name=query]").focus()})))}))}))},function(t,e,n){"use strict";n.r(e),n(57),n(58);var r=document.querySelectorAll(".sub-navigation"),o=document.querySelectorAll(".has-children");r.forEach((function(t){t.classList.add("hidden")})),o.forEach((function(t){t.addEventListener("click",(function(){t.nextElementSibling.classList.toggle("hidden")}))}))}]);