(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[373],{8566:function(e,t,i){"use strict";var n=i(930),o=i(5696),a=i(7980);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,i=e.src,l=e.sizes,s=e.unoptimized,m=void 0!==s&&s,h=e.priority,w=void 0!==h&&h,k=e.loading,E=e.lazyRoot,I=void 0===E?null:E,R=e.lazyBoundary,_=e.className,L=e.quality,O=e.width,q=e.height,C=e.style,N=e.objectFit,P=e.objectPosition,M=e.onLoadingComplete,W=e.placeholder,B=void 0===W?"empty":W,D=e.blurDataURL,U=c(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),V=d.useContext(p.ImageConfigContext),F=d.useMemo((function(){var e=y||V||f.imageConfigDefault,t=[].concat(a(e.deviceSizes),a(e.imageSizes)).sort((function(e,t){return e-t})),i=e.deviceSizes.sort((function(e,t){return e-t}));return r({},e,{allSizes:t,deviceSizes:i})}),[V]),H=U,Z=l?"responsive":"intrinsic";"layout"in H&&(H.layout&&(Z=H.layout),delete H.layout);var G=x;if("loader"in H){if(H.loader){var T=H.loader;G=function(e){e.config;var t=c(e,["config"]);return T(t)}}delete H.loader}var J="";if(function(e){return"object"===typeof e&&(z(e)||function(e){return void 0!==e.src}(e))}(i)){var Q=z(i)?i.default:i;if(!Q.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Q)));if(D=D||Q.blurDataURL,J=Q.src,(!Z||"fill"!==Z)&&(q=q||Q.height,O=O||Q.width,!Q.height||!Q.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Q)))}var K=!w&&("lazy"===k||"undefined"===typeof k);((i="string"===typeof i?i:J).startsWith("data:")||i.startsWith("blob:"))&&(m=!0,K=!1);b.has(i)&&(K=!1);F.unoptimized&&(m=!0);var X,Y=d.useState(!1),$=o(Y,2),ee=$[0],te=$[1],ie=g.useIntersection({rootRef:I,rootMargin:R||"200px",disabled:!K}),ne=o(ie,3),oe=ne[0],ae=ne[1],re=ne[2],le=!K||ae,se={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ce={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de=!1,ue={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:N,objectPosition:P},fe=A(O),ge=A(q),pe=A(L);0;var me=Object.assign({},C,ue),he="blur"!==B||ee?{}:{backgroundSize:N||"cover",backgroundPosition:P||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(D,'")')};if("fill"===Z)se.display="block",se.position="absolute",se.top=0,se.left=0,se.bottom=0,se.right=0;else if("undefined"!==typeof fe&&"undefined"!==typeof ge){var ye=ge/fe,be=isNaN(ye)?"100%":"".concat(100*ye,"%");"responsive"===Z?(se.display="block",se.position="relative",de=!0,ce.paddingTop=be):"intrinsic"===Z?(se.display="inline-block",se.position="relative",se.maxWidth="100%",de=!0,ce.maxWidth="100%",X="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(fe,"%27%20height=%27").concat(ge,"%27/%3e")):"fixed"===Z&&(se.display="inline-block",se.position="relative",se.width=fe,se.height=ge)}else 0;var ve={src:v,srcSet:void 0,sizes:void 0};le&&(ve=S({config:F,src:i,unoptimized:m,layout:Z,width:fe,quality:pe,sizes:l,loader:G}));var we=i;0;0;var ze=(n(t={},"imagesrcset",ve.srcSet),n(t,"imagesizes",ve.sizes),n(t,"crossOrigin",H.crossOrigin),t),Se=d.default.useLayoutEffect,Ae=d.useRef(M),xe=d.useRef(i);d.useEffect((function(){Ae.current=M}),[M]),Se((function(){xe.current!==i&&(re(),xe.current=i)}),[re,i]);var ke=r({isLazy:K,imgAttributes:ve,heightInt:ge,widthInt:fe,qualityInt:pe,layout:Z,className:_,imgStyle:me,blurStyle:he,loading:k,config:F,unoptimized:m,placeholder:B,loader:G,srcString:we,onLoadingCompleteRef:Ae,setBlurComplete:te,setIntersection:oe,isVisible:le,noscriptSizes:l},H);return d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{style:se},de?d.default.createElement("span",{style:ce},X?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:X}):null):null,d.default.createElement(j,Object.assign({},ke))),w?d.default.createElement(u.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+ve.src+ve.srcSet+ve.sizes,rel:"preload",as:"image",href:ve.srcSet?void 0:ve.src},ze))):null)};var r=i(6495).Z,l=i(2648).Z,s=i(1598).Z,c=i(7273).Z,d=s(i(1720)),u=l(i(2717)),f=i(8187),g=i(639),p=i(9239),m=(i(9475),i(4969));function h(e){return"/"===e[0]?e.slice(1):e}var y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1},b=new Set,v=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,o=e.quality;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,o=e.quality,a=new URL("".concat(t.path).concat(h(i))),r=a.searchParams;return r.set("auto",r.getAll("auto").join(",")||"format"),r.set("fit",r.get("fit")||"max"),r.set("w",r.get("w")||n.toString()),o&&r.set("q",o.toString()),a.href}],["cloudinary",function(e){var t=e.config,i=e.src,n=["f_auto","c_limit","w_"+e.width,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(t.path).concat(n).concat(h(i))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(h(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function z(e){return void 0!==e.default}function S(e){var t=e.config,i=e.src,n=e.unoptimized,o=e.layout,r=e.width,l=e.quality,s=e.sizes,c=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var d=function(e,t,i,n){var o=e.deviceSizes,r=e.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var l,s=/(^|\s)(1?\d?\d)vw/g,c=[];l=s.exec(n);l)c.push(parseInt(l[2]));if(c.length){var d=.01*Math.min.apply(Math,c);return{widths:r.filter((function(e){return e>=o[0]*d})),kind:"w"}}return{widths:r,kind:"w"}}return"number"!==typeof t||"fill"===i||"responsive"===i?{widths:o,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return r.find((function(t){return t>=e}))||r[r.length-1]})))),kind:"x"}}(t,r,o,s),u=d.widths,f=d.kind,g=u.length-1;return{sizes:s||"w"!==f?s:"100vw",srcSet:u.map((function(e,n){return"".concat(c({config:t,src:i,quality:l,width:e})," ").concat("w"===f?e:n+1).concat(f)})).join(", "),src:c({config:t,src:i,quality:l,width:u[g]})}}function A(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function x(e){var t,i=(null==(t=e.config)?void 0:t.loader)||"default",n=w.get(i);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(i))}function k(e,t,i,n,o,a){e&&e.src!==v&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(b.add(t),"blur"===n&&a(!0),null==o?void 0:o.current)){var i=e.naturalWidth,r=e.naturalHeight;o.current({naturalWidth:i,naturalHeight:r})}})))}var j=function(e){var t=e.imgAttributes,i=(e.heightInt,e.widthInt),n=e.qualityInt,o=e.layout,a=e.className,l=e.imgStyle,s=e.blurStyle,u=e.isLazy,f=e.placeholder,g=e.loading,p=e.srcString,m=e.config,h=e.unoptimized,y=e.loader,b=e.onLoadingCompleteRef,v=e.setBlurComplete,w=e.setIntersection,z=e.onLoad,A=e.onError,x=(e.isVisible,e.noscriptSizes),j=c(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return g=u?"lazy":g,d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},j,t,{decoding:"async","data-nimg":o,className:a,style:r({},l,s),ref:d.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&k(e,p,0,f,b,v)}),[w,p,o,f,b,v]),onLoad:function(e){k(e.currentTarget,p,0,f,b,v),z&&z(e)},onError:function(e){"blur"===f&&v(!0),A&&A(e)}})),(u||"blur"===f)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},j,S({config:m,src:p,unoptimized:h,layout:o,width:i,quality:n,sizes:x,loader:y}),{decoding:"async","data-nimg":o,style:l,className:a,loading:g}))))};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},930:function(e){e.exports=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e},e.exports.default=e.exports,e.exports.__esModule=!0},5675:function(e,t,i){e.exports=i(8566)},6864:function(e,t,i){"use strict";function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},n.apply(this,arguments)}i.d(t,{Z:function(){return n}})}}]);