var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",i=0/0,r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,m=Math.max,v=Math.min,p=function(){return s.Date.now()};function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return i;if(g(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=g(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var l=a.test(e);return l||u.test(e)?f(e.slice(2),l?2:8):o.test(e)?i:+e}t=function(e,t,i){var r=!0,o=!0;if("function"!=typeof e)throw TypeError(n);return g(i)&&(r="leading"in i?!!i.leading:r,o="trailing"in i?!!i.trailing:o),function(e,t,i){var r,o,a,u,f,l,c=0,s=!1,d=!1,b=!0;if("function"!=typeof e)throw TypeError(n);function T(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function j(e){var n=e-l,i=e-c;return void 0===l||n>=t||n<0||d&&i>=a}function S(){var e,n,i,r=p();if(j(r))return h(r);f=setTimeout(S,(e=r-l,n=r-c,i=t-e,d?v(i,a-n):i))}function h(e){return(f=void 0,b&&r)?T(e):(r=o=void 0,u)}function E(){var e,n=p(),i=j(n);if(r=arguments,o=this,l=n,i){if(void 0===f)return c=e=l,f=setTimeout(S,t),s?T(e):u;if(d)return f=setTimeout(S,t),T(l)}return void 0===f&&(f=setTimeout(S,t)),u}return t=y(t)||0,g(i)&&(s=!!i.leading,a=(d="maxWait"in i)?m(y(i.maxWait)||0,t):a,b="trailing"in i?!!i.trailing:b),E.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},E.flush=function(){return void 0===f?u:h(p())},E}(e,t,{leading:r,maxWait:t,trailing:o})};const b="feedback-form-state",T=document.querySelector(".feedback-form");let j=document.querySelector(".feedback-form input"),S=document.querySelector(".feedback-form textarea");function h(e){let{elements:{email:t,message:n}}=e.currentTarget,i={Email:t.value,Message:n.value};localStorage.setItem(b,JSON.stringify(i))}T.addEventListener("submit",function(e){e.preventDefault();let{elements:{email:t,message:n}}=e.currentTarget,i={Email:t.value,Message:n.value};console.log(i),e.currentTarget.reset(),localStorage.removeItem(b)}),function(){let e=localStorage.getItem(b);print=JSON.parse(e),e?(j.value=print.Email,S.value=print.Message):(j.value="",S.value="")}(),T.addEventListener("input",h),T.addEventListener("input",(function(e){return e&&e.__esModule?e.default:e})(t)(h),500);
//# sourceMappingURL=03-feedback.4d84f1c6.js.map
