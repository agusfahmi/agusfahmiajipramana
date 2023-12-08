(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next-themes"
const external_next_themes_namespaceObject = require("next-themes");
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./data/siteMetadata.js
var siteMetadata = __webpack_require__(7059);
var siteMetadata_default = /*#__PURE__*/__webpack_require__.n(siteMetadata);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
;// CONCATENATED MODULE: ./components/analytics/GoogleAnalytics.js



const GAScript = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                src: `https://www.googletagmanager.com/gtag/js?id=${(siteMetadata_default()).analytics.googleAnalyticsId}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                id: "ga-script",
                children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${(siteMetadata_default()).analytics.googleAnalyticsId}', {
              page_path: window.location.pathname,
            });
        `
            })
        ]
    });
};
/* harmony default export */ const GoogleAnalytics = (GAScript);
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const logEvent = (action, category, label, value)=>{
    window.gtag?.("event", action, {
        event_category: category,
        event_label: label,
        value: value
    });
};

;// CONCATENATED MODULE: ./components/analytics/Plausible.js



const PlausibleScript = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                "data-domain": (siteMetadata_default()).analytics.plausibleDataDomain,
                src: "https://plausible.io/js/plausible.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                id: "plausible-script",
                children: `
            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
        `
            })
        ]
    });
};
/* harmony default export */ const Plausible = (PlausibleScript);
// https://plausible.io/docs/custom-event-goals
const Plausible_logEvent = (eventName, ...rest)=>{
    return window.plausible?.(eventName, ...rest);
};

;// CONCATENATED MODULE: ./components/analytics/SimpleAnalytics.js


const SimpleAnalyticsScript = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                id: "sa-script",
                children: `
            window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};
        `
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                src: "https://scripts.simpleanalyticscdn.com/latest.js"
            })
        ]
    });
};
// https://docs.simpleanalytics.com/events
const SimpleAnalytics_logEvent = (eventName, callback)=>{
    if (callback) {
        return window.sa_event?.(eventName, callback);
    } else {
        return window.sa_event?.(eventName);
    }
};
/* harmony default export */ const SimpleAnalytics = (SimpleAnalyticsScript);

;// CONCATENATED MODULE: ./components/analytics/Umami.js



const UmamiScript = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
            async: true,
            defer: true,
            "data-website-id": (siteMetadata_default()).analytics.umamiWebsiteId,
            src: "https://umami.example.com/umami.js" // Replace with your umami instance
        })
    });
};
/* harmony default export */ const Umami = (UmamiScript);

;// CONCATENATED MODULE: ./components/analytics/index.js






const isProduction = "production" === "production";
const Analytics = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            isProduction && (siteMetadata_default()).analytics.plausibleDataDomain && /*#__PURE__*/ jsx_runtime_.jsx(Plausible, {}),
            isProduction && (siteMetadata_default()).analytics.simpleAnalytics && /*#__PURE__*/ jsx_runtime_.jsx(SimpleAnalytics, {}),
            isProduction && (siteMetadata_default()).analytics.umamiWebsiteId && /*#__PURE__*/ jsx_runtime_.jsx(Umami, {}),
            isProduction && (siteMetadata_default()).analytics.googleAnalyticsId && /*#__PURE__*/ jsx_runtime_.jsx(GoogleAnalytics, {})
        ]
    });
};
/* harmony default export */ const analytics = (Analytics);

;// CONCATENATED MODULE: ./data/headerNavLinks.js
const headerNavLinks = [
    {
        href: "/",
        title: "Home"
    },
    {
        href: "/blog",
        title: "Notes"
    },
    {
        href: "/projects",
        title: "Projects"
    },
    {
        href: "/about",
        title: "About"
    }, 
];
/* harmony default export */ const data_headerNavLinks = (headerNavLinks);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./data/logo.svg
var _defs, _path, _path2, _path3, _path4;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLogo = function SvgLogo(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "70pt",
    height: "70pt",
    viewBox: "0 0 2351.09 1290.35"
  }, props), _defs || (_defs = /*#__PURE__*/external_react_.createElement("defs", null, /*#__PURE__*/external_react_.createElement("style", null, ".logo_svg__a{fill:#4286f4}"))), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    className: "logo_svg__a",
    d: "M430.75 801.49c-27.51-9.17-59.17-18.09-80-45.06-26.16-34.48-34.48-70.15-36.86-148.64 7.91-178.69 115.6-192.74 164.55-155.59 40.75-17.17 91.1-30 144.77-32.86 0-.6-.08-1.2-.11-1.81C619.53 345 639.75 257 640.94 235.6c2.38-36.87-23.79-39.24-60.65-34.49-67.78 9.52-193.82 104.65-260.42 212.89 1.19-14.27 2.38-28.54 4.76-41.62 10.7-70.16 10.7-132-32.11-145.08C249.72 213 218.8 242.73 157 282c-53.51 33.3-80.86 33.3-109.4 54.7-25 19-36.86 45.19-21.4 71.35 33.3 55.89 114.16 46.38 114.16 189.07 0 76.1-7.14 120.1-36.87 159.34C60.65 813.51 0 807.57 0 863.45c0 30.92 28.54 55.89 72.54 55.89 60.64 0 128.42-9.51 178.37-9.51 34.7 0 82.55 4.38 120.87 7.2 13.86-38.4 33.76-77.51 58.97-115.54Z"
  })), _path2 || (_path2 = /*#__PURE__*/external_react_.createElement("path", {
    className: "logo_svg__a",
    d: "M948.09 1136.86c6.28-7.77 12.33-17.66 18.08-31.85 17-41.76 25.55-107.43 25.55-195.18v-65.15c-39.77-95.2-44.57-143.51-7.13-204.78 1.22-2 2.45-3.92 3.68-5.84-5.27-56.73-15.78-91.95-25.82-107.5l-.14-.22c-6.59-10.35-12.93-19.71-19-28.4-27.25 7.91-57.38 20.29-87.16 34.94-58.27-44-118.91-66.59-210.47-66.59-120.1 0-225.94 59.45-223.56 90.37 2.38 29.73 22.6 52.32 64.21 51.13 55.89-2.38 135.56-8.32 203.34 19C436.4 766 325.81 1058.47 443.54 1146.47c78.48 58.26 283-25 386.46-185.51 24.69 88.39 68.58 146.88 118.09 175.9Zm-193-243.68c-47.57 65.4-97.51 85.62-129.62 63-33.29-23.79-17.83-84.43 36.86-152.21 41.62-52.32 74.92-82 110.59-105.83 32.08 58.29 23.79 136.78-17.83 195.04Z"
  })), _path3 || (_path3 = /*#__PURE__*/external_react_.createElement("path", {
    className: "logo_svg__a",
    d: "M1344.89 1184.52c-74.92-16.65-132-48.76-132-121.29v-109.4c44 30.92 98.69 47.56 161.72 47.56a360.18 360.18 0 0 0 100-14 92.52 92.52 0 0 1-12.55-46.66c0-56.73 28.89-81.4 52.1-101.22 11.84-10.12 24.1-20.59 37.09-37.91 5.09-6.72 14.32-24.38 20.51-69.23 4.6-33.32 6.84-76.8 6.84-132.92V484.12c0-58-.88-95.59-6.83-118.85a305.9 305.9 0 0 0-173.37-53.57c-59.46 0-101.08 19-136.75 40.43-48.75 29.73-97.51 36.86-154.59 3.57-86.8-51.13-121.29-55.89-159.34-17.84-47.56 47.57-5.94 67.78 54.7 162.91 23.78 36.86 36.86 114.16 36.86 214v195c0 317.5-108.21 258-108.21 328.2 0 25 25 52.32 72.54 52.32 44 0 124.86-9.51 172.42-9.51 41.62 0 129.62 9.51 166.48 9.51 44 0 60.65-25 60.65-52.32 0-24.91-24.98-46.32-58.27-53.45Zm-26.16-749.15c113 4.76 168.85 143.88 173.61 261.61 4.76 115.34-30.92 192.64-107 191.45-98.7-1.19-164.1-117.73-171.23-242.59C1207 515 1234.3 431.8 1318.73 435.37Z"
  })), _path4 || (_path4 = /*#__PURE__*/external_react_.createElement("path", {
    className: "logo_svg__a",
    d: "M1509.62 940.75c0-55.89 36.86-53.51 79.67-110.59 29.73-39.24 36.86-127.24 36.86-230.69V484.12c0-99.88 0-164.09-52.32-190.26-32.1-16.64-54.7-10.7-73.72-42.8-15.46-26.16-3.57-52.33 21.4-71.35 28.54-21.41 59.46-34.49 99.89-64.21 41.62-30.92 63-66.59 101.07-95.13C1758.15-7 1793.82-7 1815.22 21.56c23.79 32.1 15.46 64.21 3.57 109.39-19 72.54-19 205.72-19 293.72v38.05c55.88-103.45 147.45-157 266.36-157 145.07 0 234.26 93.94 208.1 281.82-23.79 173.61-15.46 215.23 35.67 266.36 35.67 35.68 44 52.32 40.43 86.81-3.57 30.91-28.54 52.32-72.54 52.32-47.56 0-97.5-9.51-148.64-9.51-49.94 0-58.26 9.51-107 9.51-44 0-59.45-22.59-60.64-52.32-2.38-55.89 70.16-67.78 124.85-225.94 53.52-155.77-54.69-305.6-181.93-252.09-126.05 53.51-137.94 242.58-67.78 367.44 26.16 46.37 46.37 80.86 44 110.59-2.38 30.91-28.54 52.32-60.65 52.32-35.67 0-55.89-9.51-107-9.51-49.94 0-70.16 9.51-130.8 9.51-44.06.04-72.6-21.37-72.6-52.28Z"
  })));
};
/* harmony default export */ const logo = (SvgLogo);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(4373);
// EXTERNAL MODULE: ./components/SectionContainer.js
var SectionContainer = __webpack_require__(9072);
// EXTERNAL MODULE: ./components/social-icons/index.js + 6 modules
var social_icons = __webpack_require__(4642);
;// CONCATENATED MODULE: ./components/Footer.js




function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "mt-16 mt-16 flex flex-col items-center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-3 flex space-x-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons/* default */.Z, {
                            kind: "mail",
                            href: `mailto:${(siteMetadata_default()).email}`,
                            size: "5"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons/* default */.Z, {
                            kind: "github",
                            href: (siteMetadata_default()).github,
                            size: "5"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons/* default */.Z, {
                            kind: "linkedin",
                            href: (siteMetadata_default()).linkedin,
                            size: "5"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons/* default */.Z, {
                            kind: "twitter",
                            href: (siteMetadata_default()).twitter,
                            size: "5"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: `© ${new Date().getFullYear()}`
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: ` • `
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: (siteMetadata_default()).author
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-8 flex flex-col space-x-2 text-sm text-gray-500 dark:text-gray-400 md:flex-row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                            className: "hover:text-primary-600 hover:underline dark:hover:text-primary-600",
                            href: "/",
                            children: "home"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                            className: "hover:text-primary-600 hover:underline dark:hover:text-primary-600",
                            href: "/blog",
                            children: "notes"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                            className: "hover:text-primary-600 hover:underline dark:hover:text-primary-600",
                            href: "/projects",
                            children: "projects"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                            className: "hover:text-primary-600 hover:underline dark:hover:text-primary-600",
                            href: "/about",
                            children: "about"
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/MobileNav.js




const MobileNav = ()=>{
    const { 0: navShow , 1: setNavShow  } = (0,external_react_.useState)(false);
    const onToggleNav = ()=>{
        setNavShow((status)=>{
            if (status) {
                document.body.style.overflow = "auto";
            } else {
                // Prevent scrolling
                document.body.style.overflow = "hidden";
            }
            return !status;
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "sm:hidden",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                className: "ml-1 mr-1 h-8 w-8 rounded py-1",
                "aria-label": "Toggle Menu",
                onClick: onToggleNav,
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    className: "text-gray-900 dark:text-gray-100",
                    children: navShow ? /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                        clipRule: "evenodd"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                        clipRule: "evenodd"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `fixed top-24 right-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 ${navShow ? "translate-x-0" : "translate-x-full"}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        "aria-label": "toggle modal",
                        className: "fixed h-full w-full cursor-auto focus:outline-none",
                        onClick: onToggleNav
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "fixed mt-8 h-full",
                        children: data_headerNavLinks.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "px-12 py-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                    href: link.href,
                                    className: "text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100",
                                    onClick: onToggleNav,
                                    children: link.title
                                })
                            }, link.title))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_MobileNav = (MobileNav);

;// CONCATENATED MODULE: ./components/ThemeSwitch.js



const ThemeSwitch = ()=>{
    const { 0: mounted , 1: setMounted  } = (0,external_react_.useState)(false);
    const { theme , setTheme , resolvedTheme  } = (0,external_next_themes_namespaceObject.useTheme)();
    // When mounted on client, now we can show the UI
    (0,external_react_.useEffect)(()=>setMounted(true), []);
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        "aria-label": "Toggle Dark Mode",
        type: "button",
        className: "ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4",
        onClick: ()=>setTheme(theme === "dark" || resolvedTheme === "dark" ? "light" : "dark"),
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            className: "text-gray-900 dark:text-gray-100",
            children: mounted && (theme === "dark" || resolvedTheme === "dark") ? /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                clipRule: "evenodd"
            }) : /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            })
        })
    });
};
/* harmony default export */ const components_ThemeSwitch = (ThemeSwitch);

;// CONCATENATED MODULE: ./components/LayoutWrapper.js









const LayoutWrapper = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(SectionContainer/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex h-screen flex-col justify-between",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                    className: "flex items-center justify-between py-10",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex items-center justify-between",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mr-3",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(logo, {})
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center text-base leading-5",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "hidden sm:block",
                                    children: data_headerNavLinks.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                            href: link.href,
                                            className: "p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4",
                                            children: link.title
                                        }, link.title))
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(components_ThemeSwitch, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(components_MobileNav, {})
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    className: "mb-auto",
                    children: children
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
            ]
        })
    });
};
/* harmony default export */ const components_LayoutWrapper = (LayoutWrapper);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./components/ClientReload.js


/**
 * Client-side complement to next-remote-watch
 * Re-triggers getStaticProps when watched mdx files change
 *
 */ const ClientReload = ()=>{
    // Exclude socket.io from prod bundle
    (0,external_react_.useEffect)(()=>{
        Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 4612)).then((module)=>{
            const socket = module.io();
            socket.on("reload", (data)=>{
                router_default().replace((router_default()).asPath, undefined, {
                    scroll: false
                });
            });
        });
    }, []);
    return null;
};

;// CONCATENATED MODULE: ./pages/_app.js











const isDevelopment = "production" === "development";
const isSocket = process.env.SOCKET;
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_next_themes_namespaceObject.ThemeProvider, {
        attribute: "class",
        defaultTheme: (siteMetadata_default()).theme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    content: "width=device-width, initial-scale=1",
                    name: "viewport"
                })
            }),
            isDevelopment && isSocket && /*#__PURE__*/ jsx_runtime_.jsx(ClientReload, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(analytics, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_LayoutWrapper, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}


/***/ }),

/***/ 4298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(699)


/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4612:
/***/ ((module) => {

"use strict";
module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,373,59,211], () => (__webpack_exec__(3358)));
module.exports = __webpack_exports__;

})();