"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[617],{5617:function(e,t,n){n.r(t);var r=n(1720),a=n(425),c=n(2758),s=n.n(c),u=n(7320);t.default=function(e){var t=e.issueTerm,n=(0,r.useState)(!0),c=n[0],i=n[1],m=(0,a.F)(),o=m.theme,l=m.resolvedTheme,d="dark"===o||"dark"===l?s().comment.utterancesConfig.darkTheme:s().comment.utterancesConfig.theme,f="comments-container",b=(0,r.useCallback)((function(){i(!1);var e=document.createElement("script");e.src="https://utteranc.es/client.js",e.setAttribute("repo",s().comment.utterancesConfig.repo),e.setAttribute("issue-term",t),e.setAttribute("label",s().comment.utterancesConfig.label),e.setAttribute("theme",d),e.setAttribute("crossorigin","anonymous"),e.async=!0;var n=document.getElementById(f);return n&&n.appendChild(e),function(){var e=document.getElementById(f);e&&(e.innerHTML="")}}),[d,t]);return(0,r.useEffect)((function(){document.querySelector("iframe.utterances-frame")&&b()}),[b]),(0,u.BX)("div",{className:"pt-6 pb-6 text-center text-gray-700 dark:text-gray-300",children:[c&&(0,u.tZ)("button",{onClick:b,children:"Load Comments"}),(0,u.tZ)("div",{className:"utterances-frame relative",id:f})]})}}}]);