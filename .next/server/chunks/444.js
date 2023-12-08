"use strict";
exports.id = 444;
exports.ids = [444];
exports.modules = {

/***/ 2444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1038);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2250);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const Card = ({
  title,
  description,
  imgSrc,
  href
}) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
  className: "md p-4 md:w-1/2",
  style: {
    maxWidth: '544px'
  },
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: `${imgSrc && 'h-full'}  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`,
    children: [imgSrc && (href ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      href: href,
      "aria-label": `Link to ${title}`,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_Image__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
        alt: title,
        src: imgSrc,
        className: "object-cover object-center md:h-36 lg:h-48",
        width: 544,
        height: 306
      })
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_Image__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
      alt: title,
      src: imgSrc,
      className: "object-cover object-center md:h-36 lg:h-48",
      width: 544,
      height: 306
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "p-6",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h2", {
        className: "mb-3 text-2xl font-bold leading-8 tracking-tight",
        children: href ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          href: href,
          "aria-label": `Link to ${title}`,
          children: title
        }) : title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
        className: "prose mb-3 max-w-none text-gray-500 dark:text-gray-400",
        children: description
      }), href && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        href: href,
        className: "text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
        "aria-label": `Link to ${title}`,
        children: "Learn more \u2192"
      })]
    })]
  })
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ })

};
;