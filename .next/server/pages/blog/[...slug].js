"use strict";
(() => {
var exports = {};
exports.id = 94;
exports.ids = [94,195];
exports.modules = {

/***/ 8604:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Blog),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8215);
/* harmony import */ var _lib_generate_rss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3440);
/* harmony import */ var _components_MDXComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8620);
/* harmony import */ var _lib_mdx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6852);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_mdx__WEBPACK_IMPORTED_MODULE_5__]);
_lib_mdx__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const DEFAULT_LAYOUT = "PostLayout";
async function getStaticPaths() {
    const posts = (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_5__/* .getFiles */ .bE)("blog");
    return {
        paths: posts.map((p)=>({
                params: {
                    slug: (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_5__/* .formatSlug */ .gf)(p).split("/")
                }
            })),
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const allPosts = await (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_5__/* .getAllFilesFrontMatter */ .sj)("blog");
    const postIndex = allPosts.findIndex((post)=>(0,_lib_mdx__WEBPACK_IMPORTED_MODULE_5__/* .formatSlug */ .gf)(post.slug) === params.slug.join("/"));
    const prev = allPosts[postIndex + 1] || null;
    const next = allPosts[postIndex - 1] || null;
    const post = await (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_5__/* .getFileBySlug */ .x7)("blog", params.slug.join("/"));
    const authorList = post.frontMatter.authors || [
        "default"
    ];
    const authorPromise = authorList.map(async (author)=>{
        const authorResults = await (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_5__/* .getFileBySlug */ .x7)("authors", [
            author
        ]);
        return authorResults.frontMatter;
    });
    const authorDetails = await Promise.all(authorPromise);
    // rss
    if (allPosts.length > 0) {
        const rss = (0,_lib_generate_rss__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(allPosts);
        fs__WEBPACK_IMPORTED_MODULE_1___default().writeFileSync("./public/feed.xml", rss);
    }
    return {
        props: {
            post,
            authorDetails,
            prev,
            next
        }
    };
}
function Blog({ post , authorDetails , prev , next  }) {
    const { mdxSource , toc , frontMatter  } = post;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: frontMatter.draft !== true ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MDXComponents__WEBPACK_IMPORTED_MODULE_4__/* .MDXLayoutRenderer */ .J, {
            layout: frontMatter.layout || DEFAULT_LAYOUT,
            toc: toc,
            mdxSource: mdxSource,
            frontMatter: frontMatter,
            authorDetails: authorDetails,
            prev: prev,
            next: next
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mt-24 text-center",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_PageTitle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                children: [
                    "Under Construction",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        role: "img",
                        "aria-label": "roadwork sign",
                        children: "\uD83D\uDEA7"
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8904:
/***/ ((module) => {

module.exports = require("github-slugger");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 7219:
/***/ ((module) => {

module.exports = require("image-size");

/***/ }),

/***/ 9793:
/***/ ((module) => {

module.exports = require("js-yaml");

/***/ }),

/***/ 8214:
/***/ ((module) => {

module.exports = require("mdx-bundler");

/***/ }),

/***/ 1228:
/***/ ((module) => {

module.exports = require("mdx-bundler/client");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4956:
/***/ ((module) => {

module.exports = require("reading-time");

/***/ }),

/***/ 5786:
/***/ ((module) => {

module.exports = require("smoothscroll-polyfill");

/***/ }),

/***/ 3614:
/***/ ((module) => {

module.exports = import("mdast-util-to-string");;

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = import("rehype-autolink-headings");;

/***/ }),

/***/ 1380:
/***/ ((module) => {

module.exports = import("rehype-citation");;

/***/ }),

/***/ 9521:
/***/ ((module) => {

module.exports = import("rehype-katex");;

/***/ }),

/***/ 6370:
/***/ ((module) => {

module.exports = import("rehype-preset-minify");;

/***/ }),

/***/ 483:
/***/ ((module) => {

module.exports = import("rehype-prism-plus");;

/***/ }),

/***/ 7752:
/***/ ((module) => {

module.exports = import("rehype-slug");;

/***/ }),

/***/ 1083:
/***/ ((module) => {

module.exports = import("remark-footnotes");;

/***/ }),

/***/ 6809:
/***/ ((module) => {

module.exports = import("remark-gfm");;

/***/ }),

/***/ 9832:
/***/ ((module) => {

module.exports = import("remark-math");;

/***/ }),

/***/ 6016:
/***/ ((module) => {

module.exports = import("unist-util-visit");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,675,152,373,59,590,717,795,702,211,968,620,440], () => (__webpack_exec__(8604)));
module.exports = __webpack_exports__;

})();