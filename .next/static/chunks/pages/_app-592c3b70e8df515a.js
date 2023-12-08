(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{425:function(e,t,n){"use strict";n.d(t,{F:function(){return l},f:function(){return s}});var r=n(1720),a=n(9008),o=n.n(a),i=(0,r.createContext)({setTheme:function(e){},themes:[]}),l=function(){return(0,r.useContext)(i)},c=["light","dark"],u="(prefers-color-scheme: dark)",s=function(e){var t=e.forcedTheme,n=e.disableTransitionOnChange,a=void 0!==n&&n,o=e.enableSystem,l=void 0===o||o,s=e.enableColorScheme,p=void 0===s||s,v=e.storageKey,g=void 0===v?"theme":v,y=e.themes,b=void 0===y?["light","dark"]:y,w=e.defaultTheme,x=void 0===w?l?"system":"light":w,_=e.attribute,Z=void 0===_?"data-theme":_,j=e.value,C=e.children,O=(0,r.useState)((function(){return d(g,x)})),k=O[0],E=O[1],T=(0,r.useState)((function(){return d(g)})),M=T[0],N=T[1],L=j?Object.values(j):b,S=(0,r.useCallback)((function(e){var n=h(e);N(n),"system"!==k||t||z(n,!1)}),[k,t]),P=(0,r.useRef)(S);P.current=S;var z=(0,r.useCallback)((function(e,t,n){void 0===t&&(t=!0),void 0===n&&(n=!0);var r=(null==j?void 0:j[e])||e,o=a&&n?m():null;if(t)try{localStorage.setItem(g,e)}catch(e){}if("system"===e&&l){var i=h();r=(null==j?void 0:j[i])||i}if(n){var c,u=document.documentElement;"class"===Z?((c=u.classList).remove.apply(c,L),u.classList.add(r)):u.setAttribute(Z,r),null==o||o()}}),[]);(0,r.useEffect)((function(){var e=function(){return P.current.apply(P,[].slice.call(arguments))},t=window.matchMedia(u);return t.addListener(e),e(t),function(){return t.removeListener(e)}}),[]);var I=(0,r.useCallback)((function(e){t?z(e,!0,!1):z(e),E(e)}),[t]);return(0,r.useEffect)((function(){var e=function(e){e.key===g&&I(e.newValue)};return window.addEventListener("storage",e),function(){return window.removeEventListener("storage",e)}}),[I]),(0,r.useEffect)((function(){if(p){var e=t&&c.includes(t)?t:k&&c.includes(k)?k:"system"===k&&M||null;document.documentElement.style.setProperty("color-scheme",e)}}),[p,k,M,t]),r.default.createElement(i.Provider,{value:{theme:k,setTheme:I,forcedTheme:t,resolvedTheme:"system"===k?M:k,themes:l?[].concat(b,["system"]):b,systemTheme:l?M:void 0}},r.default.createElement(f,{forcedTheme:t,storageKey:g,attribute:Z,value:j,enableSystem:l,defaultTheme:x,attrs:L}),C)},f=(0,r.memo)((function(e){var t=e.forcedTheme,n=e.storageKey,a=e.attribute,i=e.enableSystem,l=e.defaultTheme,c=e.value,s="class"===a?"var d=document.documentElement.classList;d.remove("+e.attrs.map((function(e){return"'"+e+"'"})).join(",")+");":"var d=document.documentElement;",f=function(e,t){e=(null==c?void 0:c[e])||e;var n=t?e:"'"+e+"'";return"class"===a?"d.add("+n+")":"d.setAttribute('"+a+"', "+n+")"},d="system"===l;return r.default.createElement(o(),null,r.default.createElement("script",t?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){"+s+f(t)+"}()"}}:i?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try {"+s+"var e=localStorage.getItem('"+n+"');"+(d?"":f(l)+";")+'if("system"===e||(!e&&'+d+')){var t="'+u+'",m=window.matchMedia(t);m.media!==t||m.matches?'+f("dark")+":"+f("light")+"}else if(e) "+(c?"var x="+JSON.stringify(c)+";":"")+f(c?"x[e]":"e",!0)+"}catch(e){}}()"}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try{"+s+'var e=localStorage.getItem("'+n+'");if(e){'+(c?"var x="+JSON.stringify(c)+";":"")+f(c?"x[e]":"e",!0)+"}else{"+f(l)+";}}catch(t){}}();"}}))}),(function(e,t){return e.forcedTheme===t.forcedTheme})),d=function(e,t){if("undefined"!=typeof window){var n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},m=function(){var e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),function(){window.getComputedStyle(document.body),setTimeout((function(){document.head.removeChild(e)}),1)}},h=function(e){return e||(e=window.matchMedia(u)),e.matches?"dark":"light"}},3454:function(e,t,n){"use strict";var r,a;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"===typeof(null==(a=n.g.process)?void 0:a.env)?n.g.process:n(7663)},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(6613)}])},4373:function(e,t,n){"use strict";var r=n(1799),a=n(9534),o=n(7320),i=n(1664),l=n.n(i);t.Z=function(e){var t=e.href,n=(0,a.Z)(e,["href"]),i=t&&t.startsWith("/"),c=t&&t.startsWith("#");return i?(0,o.tZ)(l(),{href:t,children:(0,o.tZ)("a",(0,r.Z)({},n))}):c?(0,o.tZ)("a",(0,r.Z)({href:t},n)):(0,o.tZ)("a",(0,r.Z)({target:"_blank",rel:"noopener noreferrer",href:t},n))}},9072:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7320);function a(e){var t=e.children;return(0,r.tZ)("div",{className:"mx-auto my-auto max-w-2xl px-4 sm:px-6 xl:max-w-2xl xl:px-0",children:t})}},4642:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r,a,o=n(7320),i=n(1720);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var c;function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}var s;function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}var d;function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}var h;function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}var v;function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}var y={mail:function(e){return i.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},e),r||(r=i.createElement("path",{d:"M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"})),a||(a=i.createElement("path",{d:"m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"})))},github:function(e){return i.createElement("svg",u({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),c||(c=i.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})))},facebook:function(e){return i.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),s||(s=i.createElement("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})))},youtube:function(e){return i.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),d||(d=i.createElement("path",{d:"M23.499 6.203a3.008 3.008 0 0 0-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 0 0-2.088 2.09A31.258 31.26 0 0 0 0 12.01a31.258 31.26 0 0 0 .523 5.785 3.008 3.008 0 0 0 2.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 0 0 2.089-2.09 31.258 31.26 0 0 0 .5-5.784 31.258 31.26 0 0 0-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"})))},linkedin:function(e){return i.createElement("svg",p({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),h||(h=i.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})))},twitter:function(e){return i.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),v||(v=i.createElement("path",{d:"M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"})))}},b=function(e){var t=e.kind,n=e.href,r=e.size,a=void 0===r?8:r;if(!n||"mail"===t&&!/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(n))return null;var i=y[t];return(0,o.BX)("a",{className:"text-sm text-gray-500 transition hover:text-gray-600",target:"_blank",rel:"noopener noreferrer",href:n,children:[(0,o.tZ)("span",{className:"sr-only",children:t}),(0,o.tZ)(i,{className:"fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-".concat(a," w-").concat(a)})]})}},7059:function(e,t,n){"use strict";var r=n(3454),a={title:"Agus Fahmi Aji Pramana - Machine Learning",author:"Agus Fahmi Aji Pramana",headerTitle:"Agus Fahmi Aji Pramana",description:"Portfolio of a Student Machine Learning.",language:"en-us",theme:"system",siteUrl:"https://agusfahmiajipramana.vercel.app/",siteRepo:"https://github.com/agusfahmi/agusfahmiajipramana",siteLogo:"/static/images/raph-logo.png",image:"/static/images/avatar.jpg",socialBanner:"/static/images/twitter-card.png",email:"agusfahmiajipramana@gmail.com",github:"https://github.com/agusfahmi",twitter:"https://twitter.com/agfmi",linkedin:"https://www.linkedin.com/in/agusfahmiajipramana",locale:"en-US",analytics:{plausibleDataDomain:"",simpleAnalytics:!1,umamiWebsiteId:"",googleAnalyticsId:"G-YBS6CTTW3S"},newsletter:{provider:"buttondown"},comment:{provider:"",giscusConfig:{repo:r.env.NEXT_PUBLIC_GISCUS_REPO,repositoryId:r.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,category:r.env.NEXT_PUBLIC_GISCUS_CATEGORY,categoryId:r.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,mapping:"pathname",reactions:"1",metadata:"0",theme:"light",inputPosition:"bottom",lang:"en",darkTheme:"transparent_dark",themeURL:""},utterancesConfig:{repo:r.env.NEXT_PUBLIC_UTTERANCES_REPO,issueTerm:"",label:"",theme:"",darkTheme:""},disqusConfig:{shortname:r.env.NEXT_PUBLIC_DISQUS_SHORTNAME}}};e.exports=a},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(2648).Z,o=n(7273).Z,i=a(n(1720)),l=n(6273),c=n(2725),u=n(3462),s=n(1018),f=n(7190),d=n(1210),m=n(8684),h={};function p(e,t,n,r){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;h[t+"%"+n+(a?"%"+a:"")]=!0}}var v=i.default.forwardRef((function(e,t){var n,a=e.href,v=e.as,g=e.children,y=e.prefetch,b=e.passHref,w=e.replace,x=e.shallow,_=e.scroll,Z=e.locale,j=e.onClick,C=e.onMouseEnter,O=e.onTouchStart,k=e.legacyBehavior,E=void 0===k?!0!==Boolean(!1):k,T=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,!E||"string"!==typeof n&&"number"!==typeof n||(n=i.default.createElement("a",null,n));var M=!1!==y,N=i.default.useContext(u.RouterContext),L=i.default.useContext(s.AppRouterContext);L&&(N=L);var S,P=i.default.useMemo((function(){var e=r(l.resolveHref(N,a,!0),2),t=e[0],n=e[1];return{href:t,as:v?l.resolveHref(N,v):n||t}}),[N,a,v]),z=P.href,I=P.as,B=i.default.useRef(z),A=i.default.useRef(I);E&&(S=i.default.Children.only(n));var R=E?S&&"object"===typeof S&&S.ref:t,H=r(f.useIntersection({rootMargin:"200px"}),3),X=H[0],U=H[1],D=H[2],Y=i.default.useCallback((function(e){A.current===I&&B.current===z||(D(),A.current=I,B.current=z),X(e),R&&("function"===typeof R?R(e):"object"===typeof R&&(R.current=e))}),[I,R,z,D,X]);i.default.useEffect((function(){var e=U&&M&&l.isLocalURL(z),t="undefined"!==typeof Z?Z:N&&N.locale,n=h[z+"%"+I+(t?"%"+t:"")];e&&!n&&p(N,z,I,{locale:t})}),[I,z,U,Z,M,N]);var V={ref:Y,onClick:function(e){E||"function"!==typeof j||j(e),E&&S.props&&"function"===typeof S.props.onClick&&S.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,c,u,s,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n)){e.preventDefault();var d=function(){"beforePopState"in t?t[a?"replace":"push"](n,r,{shallow:o,locale:u,scroll:c}):t[a?"replace":"push"](n,{forceOptimisticNavigation:!f})};s?i.default.startTransition(d):d()}}(e,N,z,I,w,x,_,Z,Boolean(L),M)},onMouseEnter:function(e){E||"function"!==typeof C||C(e),E&&S.props&&"function"===typeof S.props.onMouseEnter&&S.props.onMouseEnter(e),!M&&L||l.isLocalURL(z)&&p(N,z,I,{priority:!0})},onTouchStart:function(e){E||"function"!==typeof O||O(e),E&&S.props&&"function"===typeof S.props.onTouchStart&&S.props.onTouchStart(e),!M&&L||l.isLocalURL(z)&&p(N,z,I,{priority:!0})}};if(!E||b||"a"===S.type&&!("href"in S.props)){var G="undefined"!==typeof Z?Z:N&&N.locale,q=N&&N.isLocaleDomain&&d.getDomainLocale(I,G,N.locales,N.domainLocales);V.href=q||m.addBasePath(c.addLocale(I,G,N&&N.defaultLocale))}return E?i.default.cloneElement(S,V):i.default.createElement("a",Object.assign({},T,V),n)}));t.default=v,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,u=e.disabled||!i,s=r(a.useState(!1),2),f=s[0],d=s[1],m=r(a.useState(null),2),h=m[0],p=m[1];a.useEffect((function(){if(i){if(u||f)return;if(h&&h.tagName){var e=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=l.get(r)))return t;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:o,elements:a},c.push(n),l.set(n,t),t}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(a);var t=c.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&c.splice(t,1)}}}(h,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!f){var r=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(r)}}}),[h,u,n,t,f]);var v=a.useCallback((function(){d(!1)}),[]);return[p,f,v]};var a=n(1720),o=n(9311),i="function"===typeof IntersectionObserver,l=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(1720)),a=r.default.createContext(null);t.AppRouterContext=a;var o=r.default.createContext(null);t.LayoutRouterContext=o;var i=r.default.createContext(null);t.GlobalLayoutRouterContext=i;var l=r.default.createContext(null);t.TemplateContext=l},6613:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var r,a,o,i,l,c=n(1799),u=n(7320),s=(n(7762),n(6870),n(4315),n(1330),n(425)),f=n(9008),d=n.n(f),m=n(7059),h=n.n(m),p=n(4298),v=n.n(p),g=function(){return(0,u.BX)(u.HY,{children:[(0,u.tZ)(v(),{strategy:"lazyOnload",src:"https://www.googletagmanager.com/gtag/js?id=".concat(h().analytics.googleAnalyticsId)}),(0,u.tZ)(v(),{strategy:"lazyOnload",id:"ga-script",children:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(h().analytics.googleAnalyticsId,"', {\n              page_path: window.location.pathname,\n            });\n        ")})]})},y=function(){return(0,u.BX)(u.HY,{children:[(0,u.tZ)(v(),{strategy:"lazyOnload","data-domain":h().analytics.plausibleDataDomain,src:"https://plausible.io/js/plausible.js"}),(0,u.tZ)(v(),{strategy:"lazyOnload",id:"plausible-script",children:"\n            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }\n        "})]})},b=function(){return(0,u.BX)(u.HY,{children:[(0,u.tZ)(v(),{strategy:"lazyOnload",id:"sa-script",children:"\n            window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};\n        "}),(0,u.tZ)(v(),{strategy:"lazyOnload",src:"https://scripts.simpleanalyticscdn.com/latest.js"})]})},w=function(){return(0,u.tZ)(u.HY,{children:(0,u.tZ)(v(),{async:!0,defer:!0,"data-website-id":h().analytics.umamiWebsiteId,src:"https://umami.example.com/umami.js"})})},x=function(){return(0,u.BX)(u.HY,{children:[h().analytics.plausibleDataDomain&&(0,u.tZ)(y,{}),h().analytics.simpleAnalytics&&(0,u.tZ)(b,{}),h().analytics.umamiWebsiteId&&(0,u.tZ)(w,{}),h().analytics.googleAnalyticsId&&(0,u.tZ)(g,{})]})},_=[{href:"/",title:"Home"},{href:"/blog",title:"Notes"},{href:"/projects",title:"Projects"},{href:"/about",title:"About"}],Z=n(1720);function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}var C=function(e){return Z.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",width:"70pt",height:"70pt",viewBox:"0 0 2351.09 1290.35"},e),r||(r=Z.createElement("defs",null,Z.createElement("style",null,".logo_svg__a{fill:#4286f4}"))),a||(a=Z.createElement("path",{className:"logo_svg__a",d:"M430.75 801.49c-27.51-9.17-59.17-18.09-80-45.06-26.16-34.48-34.48-70.15-36.86-148.64 7.91-178.69 115.6-192.74 164.55-155.59 40.75-17.17 91.1-30 144.77-32.86 0-.6-.08-1.2-.11-1.81C619.53 345 639.75 257 640.94 235.6c2.38-36.87-23.79-39.24-60.65-34.49-67.78 9.52-193.82 104.65-260.42 212.89 1.19-14.27 2.38-28.54 4.76-41.62 10.7-70.16 10.7-132-32.11-145.08C249.72 213 218.8 242.73 157 282c-53.51 33.3-80.86 33.3-109.4 54.7-25 19-36.86 45.19-21.4 71.35 33.3 55.89 114.16 46.38 114.16 189.07 0 76.1-7.14 120.1-36.87 159.34C60.65 813.51 0 807.57 0 863.45c0 30.92 28.54 55.89 72.54 55.89 60.64 0 128.42-9.51 178.37-9.51 34.7 0 82.55 4.38 120.87 7.2 13.86-38.4 33.76-77.51 58.97-115.54Z"})),o||(o=Z.createElement("path",{className:"logo_svg__a",d:"M948.09 1136.86c6.28-7.77 12.33-17.66 18.08-31.85 17-41.76 25.55-107.43 25.55-195.18v-65.15c-39.77-95.2-44.57-143.51-7.13-204.78 1.22-2 2.45-3.92 3.68-5.84-5.27-56.73-15.78-91.95-25.82-107.5l-.14-.22c-6.59-10.35-12.93-19.71-19-28.4-27.25 7.91-57.38 20.29-87.16 34.94-58.27-44-118.91-66.59-210.47-66.59-120.1 0-225.94 59.45-223.56 90.37 2.38 29.73 22.6 52.32 64.21 51.13 55.89-2.38 135.56-8.32 203.34 19C436.4 766 325.81 1058.47 443.54 1146.47c78.48 58.26 283-25 386.46-185.51 24.69 88.39 68.58 146.88 118.09 175.9Zm-193-243.68c-47.57 65.4-97.51 85.62-129.62 63-33.29-23.79-17.83-84.43 36.86-152.21 41.62-52.32 74.92-82 110.59-105.83 32.08 58.29 23.79 136.78-17.83 195.04Z"})),i||(i=Z.createElement("path",{className:"logo_svg__a",d:"M1344.89 1184.52c-74.92-16.65-132-48.76-132-121.29v-109.4c44 30.92 98.69 47.56 161.72 47.56a360.18 360.18 0 0 0 100-14 92.52 92.52 0 0 1-12.55-46.66c0-56.73 28.89-81.4 52.1-101.22 11.84-10.12 24.1-20.59 37.09-37.91 5.09-6.72 14.32-24.38 20.51-69.23 4.6-33.32 6.84-76.8 6.84-132.92V484.12c0-58-.88-95.59-6.83-118.85a305.9 305.9 0 0 0-173.37-53.57c-59.46 0-101.08 19-136.75 40.43-48.75 29.73-97.51 36.86-154.59 3.57-86.8-51.13-121.29-55.89-159.34-17.84-47.56 47.57-5.94 67.78 54.7 162.91 23.78 36.86 36.86 114.16 36.86 214v195c0 317.5-108.21 258-108.21 328.2 0 25 25 52.32 72.54 52.32 44 0 124.86-9.51 172.42-9.51 41.62 0 129.62 9.51 166.48 9.51 44 0 60.65-25 60.65-52.32 0-24.91-24.98-46.32-58.27-53.45Zm-26.16-749.15c113 4.76 168.85 143.88 173.61 261.61 4.76 115.34-30.92 192.64-107 191.45-98.7-1.19-164.1-117.73-171.23-242.59C1207 515 1234.3 431.8 1318.73 435.37Z"})),l||(l=Z.createElement("path",{className:"logo_svg__a",d:"M1509.62 940.75c0-55.89 36.86-53.51 79.67-110.59 29.73-39.24 36.86-127.24 36.86-230.69V484.12c0-99.88 0-164.09-52.32-190.26-32.1-16.64-54.7-10.7-73.72-42.8-15.46-26.16-3.57-52.33 21.4-71.35 28.54-21.41 59.46-34.49 99.89-64.21 41.62-30.92 63-66.59 101.07-95.13C1758.15-7 1793.82-7 1815.22 21.56c23.79 32.1 15.46 64.21 3.57 109.39-19 72.54-19 205.72-19 293.72v38.05c55.88-103.45 147.45-157 266.36-157 145.07 0 234.26 93.94 208.1 281.82-23.79 173.61-15.46 215.23 35.67 266.36 35.67 35.68 44 52.32 40.43 86.81-3.57 30.91-28.54 52.32-72.54 52.32-47.56 0-97.5-9.51-148.64-9.51-49.94 0-58.26 9.51-107 9.51-44 0-59.45-22.59-60.64-52.32-2.38-55.89 70.16-67.78 124.85-225.94 53.52-155.77-54.69-305.6-181.93-252.09-126.05 53.51-137.94 242.58-67.78 367.44 26.16 46.37 46.37 80.86 44 110.59-2.38 30.91-28.54 52.32-60.65 52.32-35.67 0-55.89-9.51-107-9.51-49.94 0-70.16 9.51-130.8 9.51-44.06.04-72.6-21.37-72.6-52.28Z"})))},O=n(4373),k=n(9072),E=n(4642);function T(){return(0,u.tZ)("footer",{children:(0,u.BX)("div",{className:"mt-16 mt-16 flex flex-col items-center",children:[(0,u.BX)("div",{className:"mb-3 flex space-x-4",children:[(0,u.tZ)(E.Z,{kind:"mail",href:"mailto:".concat(h().email),size:"5"}),(0,u.tZ)(E.Z,{kind:"github",href:h().github,size:"5"}),(0,u.tZ)(E.Z,{kind:"linkedin",href:h().linkedin,size:"5"}),(0,u.tZ)(E.Z,{kind:"twitter",href:h().twitter,size:"5"})]}),(0,u.BX)("div",{className:"mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400",children:[(0,u.tZ)("div",{children:"\xa9 ".concat((new Date).getFullYear())}),(0,u.tZ)("div",{children:" \u2022 "}),(0,u.tZ)("div",{children:h().author})]}),(0,u.BX)("div",{className:"mb-8 flex flex-col space-x-2 text-sm text-gray-500 dark:text-gray-400 md:flex-row",children:[(0,u.tZ)(O.Z,{className:"hover:text-primary-600 hover:underline dark:hover:text-primary-600",href:"/",children:"home"}),(0,u.tZ)(O.Z,{className:"hover:text-primary-600 hover:underline dark:hover:text-primary-600",href:"/blog",children:"notes"}),(0,u.tZ)(O.Z,{className:"hover:text-primary-600 hover:underline dark:hover:text-primary-600",href:"/projects",children:"projects"}),(0,u.tZ)(O.Z,{className:"hover:text-primary-600 hover:underline dark:hover:text-primary-600",href:"/about",children:"about"})]})]})})}var M=function(){var e=(0,Z.useState)(!1),t=e[0],n=e[1],r=function(){n((function(e){return document.body.style.overflow=e?"auto":"hidden",!e}))};return(0,u.BX)("div",{className:"sm:hidden",children:[(0,u.tZ)("button",{type:"button",className:"ml-1 mr-1 h-8 w-8 rounded py-1","aria-label":"Toggle Menu",onClick:r,children:(0,u.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:t?(0,u.tZ)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}):(0,u.tZ)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),(0,u.BX)("div",{className:"fixed top-24 right-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 ".concat(t?"translate-x-0":"translate-x-full"),children:[(0,u.tZ)("button",{type:"button","aria-label":"toggle modal",className:"fixed h-full w-full cursor-auto focus:outline-none",onClick:r}),(0,u.tZ)("nav",{className:"fixed mt-8 h-full",children:_.map((function(e){return(0,u.tZ)("div",{className:"px-12 py-4",children:(0,u.tZ)(O.Z,{href:e.href,className:"text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100",onClick:r,children:e.title})},e.title)}))})]})]})},N=function(){var e=(0,Z.useState)(!1),t=e[0],n=e[1],r=(0,s.F)(),a=r.theme,o=r.setTheme,i=r.resolvedTheme;return(0,Z.useEffect)((function(){return n(!0)}),[]),(0,u.tZ)("button",{"aria-label":"Toggle Dark Mode",type:"button",className:"ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4",onClick:function(){return o("dark"===a||"dark"===i?"light":"dark")},children:(0,u.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:!t||"dark"!==a&&"dark"!==i?(0,u.tZ)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}):(0,u.tZ)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})})})},L=function(e){var t=e.children;return(0,u.tZ)(k.Z,{children:(0,u.BX)("div",{className:"flex h-screen flex-col justify-between",children:[(0,u.BX)("header",{className:"flex items-center justify-between py-10",children:[(0,u.tZ)("div",{children:(0,u.tZ)(O.Z,{href:"/",children:(0,u.tZ)("div",{className:"flex items-center justify-between",children:(0,u.tZ)("div",{className:"mr-3",children:(0,u.tZ)(C,{})})})})}),(0,u.BX)("div",{className:"flex items-center text-base leading-5",children:[(0,u.tZ)("div",{className:"hidden sm:block",children:_.map((function(e){return(0,u.tZ)(O.Z,{href:e.href,className:"p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4",children:e.title},e.title)}))}),(0,u.tZ)(N,{}),(0,u.tZ)(M,{})]})]}),(0,u.tZ)("main",{className:"mb-auto",children:t}),(0,u.tZ)(T,{})]})})},S=(n(1163),n(3454));S.env.SOCKET;function P(e){var t=e.Component,n=e.pageProps;return(0,u.BX)(s.f,{attribute:"class",defaultTheme:h().theme,children:[(0,u.tZ)(d(),{children:(0,u.tZ)("meta",{content:"width=device-width, initial-scale=1",name:"viewport"})}),false,(0,u.tZ)(x,{}),(0,u.tZ)(L,{children:(0,u.tZ)(t,(0,c.Z)({},n))})]})}},1330:function(){},4315:function(){},6870:function(){},7762:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,r=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var l,c=[],u=!1,s=-1;function f(){u&&l&&(u=!1,l.length?c=l.concat(c):s=-1,c.length&&d())}function d(){if(!u){var e=i(f);u=!0;for(var t=c.length;t;){for(l=c,c=[];++s<t;)l&&l[s].run();s=-1,t=c.length}l=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new m(e,t)),1!==c.length||u||i(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}},i=!0;try{t[e](o,o.exports,r),i=!1}finally{i&&delete n[e]}return o.exports}r.ab="//";var a=r(229);e.exports=a}()},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)},4298:function(e,t,n){e.exports=n(699)},6584:function(e,t,n){"use strict";n.r(t),n.d(t,{Fragment:function(){return r.HY},jsx:function(){return u},jsxAttr:function(){return m},jsxDEV:function(){return u},jsxEscape:function(){return h},jsxTemplate:function(){return s},jsxs:function(){return u}});var r=n(6400),a=/["&<]/;function o(e){if(0===e.length||!1===a.test(e))return e;for(var t=0,n=0,r="",o="";n<e.length;n++){switch(e.charCodeAt(n)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;default:continue}n!==t&&(r+=e.slice(t,n)),r+=o,t=n+1}return n!==t&&(r+=e.slice(t,n)),r}var i=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,l=0,c=Array.isArray;function u(e,t,n,a,o,i){var c,u,s={};for(u in t)"ref"==u?c=t[u]:s[u]=t[u];var f={type:e,props:s,key:n,ref:c,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--l,__i:-1,__u:0,__source:o,__self:i};if("function"==typeof e&&(c=e.defaultProps))for(u in c)void 0===s[u]&&(s[u]=c[u]);return r.YM.vnode&&r.YM.vnode(f),f}function s(e){var t=u(r.HY,{tpl:e,exprs:[].slice.call(arguments,1)});return t.key=t.__v,t}var f={},d=/[A-Z]/g;function m(e,t){if(r.YM.attr){var n=r.YM.attr(e,t);if("string"==typeof n)return n}if("ref"===e||"key"===e)return"";if("style"===e&&"object"==typeof t){var a="";for(var l in t){var c=t[l];if(null!=c&&""!==c){var u="-"==l[0]?l:f[l]||(f[l]=l.replace(d,"-$&").toLowerCase()),s=";";"number"!=typeof c||u.startsWith("--")||i.test(u)||(s="px;"),a=a+u+":"+c+s}}return e+'="'+a+'"'}return null==t||!1===t||"function"==typeof t||"object"==typeof t?"":!0===t?e:e+'="'+o(t)+'"'}function h(e){if(null==e||"boolean"==typeof e||"function"==typeof e)return null;if("object"==typeof e){if(void 0===e.constructor)return e;if(c(e)){for(var t=0;t<e.length;t++)e[t]=h(e[t]);return e}}return o(""+e)}},1799:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}n.d(t,{Z:function(){return a}})},9534:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})},7320:function(e,t,n){"use strict";n.d(t,{BX:function(){return r.jsxs},HY:function(){return r.Fragment},tZ:function(){return r.jsx}});n(1720);var r=n(6584)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(387)}));var n=e.O();_N_E=n}]);