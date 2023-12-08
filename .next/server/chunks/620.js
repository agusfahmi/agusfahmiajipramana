exports.id = 620;
exports.ids = [620];
exports.modules = {

/***/ 9618:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./AuthorLayout": 4152,
	"./AuthorLayout.js": 4152,
	"./ListLayout": 9795,
	"./ListLayout.js": 9795,
	"./PostLayout": 5105,
	"./PostLayout.js": 5105,
	"./PostSimple": 3746,
	"./PostSimple.js": 3746
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 9618;

/***/ }),

/***/ 8620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ MDXLayoutRenderer)
});

// UNUSED EXPORTS: MDXComponents

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "mdx-bundler/client"
var client_ = __webpack_require__(1228);
// EXTERNAL MODULE: ./components/Image.js
var Image = __webpack_require__(6009);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(4373);
;// CONCATENATED MODULE: ./components/TOCInline.js
/**
 * @typedef TocHeading
 * @prop {string} value
 * @prop {number} depth
 * @prop {string} url
 */ /**
 * Generates an inline table of contents
 * Exclude titles matching this string (new RegExp('^(' + string + ')$', 'i')).
 * If an array is passed the array gets joined with a pipe (new RegExp('^(' + array.join('|') + ')$', 'i')).
 *
 * @param {{
 *  toc: TocHeading[],
 *  indentDepth?: number,
 *  fromHeading?: number,
 *  toHeading?: number,
 *  asDisclosure?: boolean,
 *  exclude?: string|string[]
 * }} props
 *
 */ 
const TOCInline = ({ toc , indentDepth =3 , fromHeading =1 , toHeading =6 , asDisclosure =false , exclude ="" ,  })=>{
    const re = Array.isArray(exclude) ? new RegExp("^(" + exclude.join("|") + ")$", "i") : new RegExp("^(" + exclude + ")$", "i");
    const filteredToc = toc.filter((heading)=>heading.depth >= fromHeading && heading.depth <= toHeading && !re.test(heading.value));
    const tocList = /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        children: filteredToc.map((heading)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: `${heading.depth >= indentDepth && "ml-6"}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: heading.url,
                    children: heading.value
                })
            }, heading.value))
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: asDisclosure ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("details", {
            open: true,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("summary", {
                    className: "ml-6 pt-2 pb-2 text-xl font-bold",
                    children: "Table of Contents"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "ml-6",
                    children: tocList
                })
            ]
        }) : tocList
    });
};
/* harmony default export */ const components_TOCInline = (TOCInline);

;// CONCATENATED MODULE: ./components/Pre.js


const Pre = (props)=>{
    const textInput = (0,external_react_.useRef)(null);
    const { 0: hovered , 1: setHovered  } = (0,external_react_.useState)(false);
    const { 0: copied , 1: setCopied  } = (0,external_react_.useState)(false);
    const onEnter = ()=>{
        setHovered(true);
    };
    const onExit = ()=>{
        setHovered(false);
        setCopied(false);
    };
    const onCopy = ()=>{
        setCopied(true);
        navigator.clipboard.writeText(textInput.current.textContent);
        setTimeout(()=>{
            setCopied(false);
        }, 2000);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ref: textInput,
        onMouseEnter: onEnter,
        onMouseLeave: onExit,
        className: "relative",
        children: [
            hovered && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                "aria-label": "Copy code",
                type: "button",
                className: `absolute right-2 top-2 h-8 w-8 rounded border-2 bg-gray-700 p-1 dark:bg-gray-800 ${copied ? "border-green-400 focus:border-green-400 focus:outline-none" : "border-gray-300"}`,
                onClick: onCopy,
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    fill: "none",
                    className: copied ? "text-green-400" : "text-gray-300",
                    children: copied ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        })
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("pre", {
                children: props.children
            })
        ]
    });
};
/* harmony default export */ const components_Pre = (Pre);

// EXTERNAL MODULE: ./components/NewsletterForm.js
var NewsletterForm = __webpack_require__(8968);
;// CONCATENATED MODULE: ./components/MDXComponents.js
/* eslint-disable react/display-name */ 







const MDXComponents = {
    Image: Image/* default */.Z,
    TOCInline: components_TOCInline,
    a: Link/* default */.Z,
    pre: components_Pre,
    BlogNewsletterForm: NewsletterForm/* BlogNewsletterForm */.w,
    wrapper: ({ components , layout , ...rest })=>{
        const Layout = __webpack_require__(9618)(`./${layout}`).default;
        return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
            ...rest
        });
    }
};
const MDXLayoutRenderer = ({ layout , mdxSource , ...rest })=>{
    const MDXLayout = (0,external_react_.useMemo)(()=>(0,client_.getMDXComponent)(mdxSource), [
        mdxSource
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(MDXLayout, {
        layout: layout,
        components: MDXComponents,
        ...rest
    });
};


/***/ }),

/***/ 8215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PageTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function PageTitle({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: "text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",
        children: children
    });
}


/***/ }),

/***/ 2540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7059);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5786);
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_3__);




const ScrollTopAndComment = ()=>{
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_3___default().polyfill();
        const handleWindowScroll = ()=>{
            if (window.scrollY > 50) setShow(true);
            else setShow(false);
        };
        window.addEventListener("scroll", handleWindowScroll);
        return ()=>window.removeEventListener("scroll", handleWindowScroll);
    }, []);
    const handleScrollTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    const handleScrollToComment = ()=>{
        document.getElementById("comment").scrollIntoView();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `fixed right-8 bottom-8 hidden flex-col gap-3 ${show ? "md:flex" : "md:hidden"}`,
        children: [
            (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default().comment.provider) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                "aria-label": "Scroll To Comment",
                type: "button",
                onClick: handleScrollToComment,
                className: "rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    className: "h-5 w-5",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        d: "M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",
                        clipRule: "evenodd"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                "aria-label": "Scroll To Top",
                type: "button",
                onClick: handleScrollTop,
                className: "rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    className: "h-5 w-5",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        d: "M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",
                        clipRule: "evenodd"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollTopAndComment);


/***/ }),

/***/ 4152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthorLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_social_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4642);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6009);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8590);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1702);





function AuthorLayout({ children , frontMatter  }) {
    const { name , avatar , occupation , company , email , twitter , linkedin , github  } = frontMatter;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SEO__WEBPACK_IMPORTED_MODULE_3__/* .PageSEO */ .TQ, {
                title: `About - ${name}`,
                description: `About me - ${name}`
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "space-y-2 pt-6 pb-4 md:space-y-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "mb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-5xl",
                            children: "About"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "items-start",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "darK:bg-slate-100 flex flex-col items-center rounded-lg bg-slate-700 bg-opacity-10 p-2 text-center md:flex-row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        src: "/static/images/avatar.jpg",
                                        alt: "avatar",
                                        width: "150px",
                                        height: "150px",
                                        className: "rounded-full"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "py-2 text-2xl font-bold leading-8 tracking-tight",
                                    children: name
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-gray-500 dark:text-gray-400",
                                    children: occupation
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-gray-500 dark:text-gray-400",
                                    children: company
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex space-x-3 py-6 px-4 md:py-0 md:px-6",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                            kind: "mail",
                                            href: `mailto:${email}`,
                                            size: 5
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                            kind: "github",
                                            href: github,
                                            size: 5
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                            kind: "linkedin",
                                            href: linkedin,
                                            size: 5
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_social_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                            kind: "twitter",
                                            href: twitter,
                                            size: 5
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "space-y-4 text-zinc-500 dark:text-slate-300",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "my-4 leading-loose",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "prose max-w-none pt-8 pb-8 text-zinc-500 dark:prose-dark xl:col-span-2",
                                children: children
                            })
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 5105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4373);
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8215);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8590);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7059);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_utils_formatDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(811);
/* harmony import */ var _components_ScrollTopAndComment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2540);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6009);








function PostLayout({ frontMatter , authorDetails , next , prev , children  }) {
    const { date , title , slug , fileName , readingTime  } = frontMatter;
    const editUrl = (fileName)=>`${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_4___default().siteRepo)}/blob/master/data/blog/${fileName}`;
    const discussUrl = (slug)=>`https://mobile.twitter.com/search?q=${encodeURIComponent(`${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_4___default().siteUrl)}/blog/${slug}`)}`;
    const pageViews = undefined;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SEO__WEBPACK_IMPORTED_MODULE_3__/* .BlogSEO */ .Uy, {
                url: `${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_4___default().siteUrl)}/blog/${frontMatter.slug}`,
                ...frontMatter
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ScrollTopAndComment__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                            className: "pb-10",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-4 space-y-1 text-left",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dl", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                        className: "sr-only",
                                                        children: "Published on"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                        className: "text-base font-medium leading-6 text-gray-500 dark:text-gray-400",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                                            dateTime: date,
                                                            children: (0,_lib_utils_formatDate__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(date)
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageTitle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                children: title
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: authorDetails.map((author)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                    href: author.twitter,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "mb-1 flex items-center space-x-2",
                                                        children: [
                                                            author.avatar && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                                src: author.avatar,
                                                                width: "24px",
                                                                height: "24px",
                                                                alt: "avatar",
                                                                className: "h-10 w-10 rounded-full"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dl", {
                                                                className: "whitespace-nowrap text-sm font-medium leading-5",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                                        className: "sr-only",
                                                                        children: "Name"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                                        className: "text-gray-900 dark:text-gray-100",
                                                                        children: author.name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                                        className: "sr-only",
                                                                        children: "Twitter"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }, author.name))
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center space-x-2 ",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "text-gray-500 dark:text-gray-400",
                                                    children: readingTime.text
                                                }),
                                                pageViews && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: "Page Views"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "pb-8 ",
                            style: {
                                gridTemplateRows: "auto 1fr"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: " xl:col-span-3 xl:row-span-2 xl:pb-0",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "prose max-w-none pb-4 dark:prose-dark",
                                            children: children
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex justify-between pt-6 text-sm text-gray-700 dark:text-gray-300",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                    href: editUrl(fileName),
                                                    children: "Have a nice day \uD83C\uDF1E"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                    href: discussUrl(slug),
                                                    rel: "nofollow",
                                                    children: "Discuss on Twitter"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base",
                                        children: [
                                            prev && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "pt-2 xl:pt-8",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                    href: `/blog/${prev.slug}`,
                                                    className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                    children: [
                                                        "← ",
                                                        prev.title
                                                    ]
                                                })
                                            }),
                                            next && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "pt-4 xl:pt-8",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                    href: `/blog/${next.slug}`,
                                                    className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                    children: [
                                                        next.title,
                                                        " →"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 3746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PostLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(4373);
// EXTERNAL MODULE: ./components/PageTitle.js
var PageTitle = __webpack_require__(8215);
// EXTERNAL MODULE: ./components/SectionContainer.js
var SectionContainer = __webpack_require__(9072);
// EXTERNAL MODULE: ./components/SEO.js
var SEO = __webpack_require__(8590);
// EXTERNAL MODULE: ./data/siteMetadata.js
var siteMetadata = __webpack_require__(7059);
var siteMetadata_default = /*#__PURE__*/__webpack_require__.n(siteMetadata);
// EXTERNAL MODULE: ./lib/utils/formatDate.js
var formatDate = __webpack_require__(811);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./components/comments/index.js



const UtterancesComponent = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\comments\\index.js -> " + "@/components/comments/Utterances"
        ]
    },
    ssr: false
});
const GiscusComponent = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\comments\\index.js -> " + "@/components/comments/Giscus"
        ]
    },
    ssr: false
});
const DisqusComponent = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\comments\\index.js -> " + "@/components/comments/Disqus"
        ]
    },
    ssr: false
});
const Comments = ({ frontMatter  })=>{
    let term;
    const comment = (siteMetadata_default())?.comment;
    if (!comment || Object.keys(comment).length === 0) return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
    switch((siteMetadata_default()).comment.giscusConfig.mapping || (siteMetadata_default()).comment.utterancesConfig.issueTerm){
        case "pathname":
            term = frontMatter.slug;
            break;
        case "url":
            term = window.location.href;
            break;
        case "title":
            term = frontMatter.title;
            break;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "comment",
        children: [
            (siteMetadata_default()).comment && (siteMetadata_default()).comment.provider === "giscus" && /*#__PURE__*/ jsx_runtime_.jsx(GiscusComponent, {
                mapping: term
            }),
            (siteMetadata_default()).comment && (siteMetadata_default()).comment.provider === "utterances" && /*#__PURE__*/ jsx_runtime_.jsx(UtterancesComponent, {
                issueTerm: term
            }),
            (siteMetadata_default()).comment && (siteMetadata_default()).comment.provider === "disqus" && /*#__PURE__*/ jsx_runtime_.jsx(DisqusComponent, {
                frontMatter: frontMatter
            })
        ]
    });
};
/* harmony default export */ const comments = (Comments);

// EXTERNAL MODULE: ./components/ScrollTopAndComment.js
var ScrollTopAndComment = __webpack_require__(2540);
;// CONCATENATED MODULE: ./layouts/PostSimple.js









function PostLayout({ frontMatter , authorDetails , next , prev , children  }) {
    const { date , title  } = frontMatter;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SectionContainer/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SEO/* BlogSEO */.Uy, {
                url: `${(siteMetadata_default()).siteUrl}/blog/${frontMatter.slug}`,
                ...frontMatter
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ScrollTopAndComment/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("article", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("header", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("dl", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                                    className: "sr-only",
                                                    children: "Published on"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                                    className: "text-base font-medium leading-6 text-gray-500 dark:text-gray-400",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("time", {
                                                        dateTime: date,
                                                        children: (0,formatDate/* default */.Z)(date)
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(PageTitle/* default */.Z, {
                                            children: title
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 ",
                            style: {
                                gridTemplateRows: "auto 1fr"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "prose max-w-none pt-10 pb-8 dark:prose-dark",
                                        children: children
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(comments, {
                                    frontMatter: frontMatter
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base",
                                        children: [
                                            prev && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "pt-4 xl:pt-8",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Link/* default */.Z, {
                                                    href: `/blog/${prev.slug}`,
                                                    className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                    children: [
                                                        "← ",
                                                        prev.title
                                                    ]
                                                })
                                            }),
                                            next && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "pt-4 xl:pt-8",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Link/* default */.Z, {
                                                    href: `/blog/${next.slug}`,
                                                    className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                    children: [
                                                        next.title,
                                                        " →"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}


/***/ })

};
;