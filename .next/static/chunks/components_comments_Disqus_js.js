"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_comments_Disqus_js"],{

/***/ "./components/comments/Disqus.js":
/*!***************************************!*\
  !*** ./components/comments/Disqus.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/data/siteMetadata */ \"./data/siteMetadata.js\");\n/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"E:\\\\LEARN\\\\PORTFOLIO WEBSITE\\\\agusfahmiajipramana\\\\components\\\\comments\\\\Disqus.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Disqus = function Disqus(_ref) {\n  _s();\n\n  var frontMatter = _ref.frontMatter;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      enableLoadComments = _useState[0],\n      setEnabledLoadComments = _useState[1];\n\n  var COMMENTS_ID = 'disqus_thread';\n\n  function LoadComments() {\n    setEnabledLoadComments(false);\n\n    window.disqus_config = function () {\n      this.page.url = window.location.href;\n      this.page.identifier = frontMatter.slug;\n    };\n\n    if (window.DISQUS === undefined) {\n      var script = document.createElement('script');\n      script.src = 'https://' + (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default().comment.disqusConfig.shortname) + '.disqus.com/embed.js';\n      script.setAttribute('data-timestamp', +new Date());\n      script.setAttribute('crossorigin', 'anonymous');\n      script.async = true;\n      document.body.appendChild(script);\n    } else {\n      window.DISQUS.reset({\n        reload: true\n      });\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"pt-6 pb-6 text-center text-gray-700 dark:text-gray-300\",\n    children: [enableLoadComments && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n      onClick: LoadComments,\n      children: \"Load Comments\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 30\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"disqus-frame\",\n      id: COMMENTS_ID\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Disqus, \"dfMgWeNM1bRlPC8jqT+DpE1ITEA=\");\n\n_c = Disqus;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Disqus);\n\nvar _c;\n\n$RefreshReg$(_c, \"Disqus\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1lbnRzL0Rpc3F1cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBRUE7OztBQUVBLElBQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXFCO0VBQUE7O0VBQUEsSUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjs7RUFDbEMsZ0JBQXFESCwrQ0FBUSxDQUFDLElBQUQsQ0FBN0Q7RUFBQSxJQUFPSSxrQkFBUDtFQUFBLElBQTJCQyxzQkFBM0I7O0VBRUEsSUFBTUMsV0FBVyxHQUFHLGVBQXBCOztFQUVBLFNBQVNDLFlBQVQsR0FBd0I7SUFDdEJGLHNCQUFzQixDQUFDLEtBQUQsQ0FBdEI7O0lBRUFHLE1BQU0sQ0FBQ0MsYUFBUCxHQUF1QixZQUFZO01BQ2pDLEtBQUtDLElBQUwsQ0FBVUMsR0FBVixHQUFnQkgsTUFBTSxDQUFDSSxRQUFQLENBQWdCQyxJQUFoQztNQUNBLEtBQUtILElBQUwsQ0FBVUksVUFBVixHQUF1QlgsV0FBVyxDQUFDWSxJQUFuQztJQUNELENBSEQ7O0lBSUEsSUFBSVAsTUFBTSxDQUFDUSxNQUFQLEtBQWtCQyxTQUF0QixFQUFpQztNQUMvQixJQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFmO01BQ0FGLE1BQU0sQ0FBQ0csR0FBUCxHQUFhLGFBQWFwQiwwRkFBYixHQUEyRCxzQkFBeEU7TUFDQWlCLE1BQU0sQ0FBQ08sWUFBUCxDQUFvQixnQkFBcEIsRUFBc0MsQ0FBQyxJQUFJQyxJQUFKLEVBQXZDO01BQ0FSLE1BQU0sQ0FBQ08sWUFBUCxDQUFvQixhQUFwQixFQUFtQyxXQUFuQztNQUNBUCxNQUFNLENBQUNTLEtBQVAsR0FBZSxJQUFmO01BQ0FSLFFBQVEsQ0FBQ1MsSUFBVCxDQUFjQyxXQUFkLENBQTBCWCxNQUExQjtJQUNELENBUEQsTUFPTztNQUNMVixNQUFNLENBQUNRLE1BQVAsQ0FBY2MsS0FBZCxDQUFvQjtRQUFFQyxNQUFNLEVBQUU7TUFBVixDQUFwQjtJQUNEO0VBQ0Y7O0VBRUQsb0JBQ0U7SUFBSyxTQUFTLEVBQUMsd0RBQWY7SUFBQSxXQUNHM0Isa0JBQWtCLGlCQUFJO01BQVEsT0FBTyxFQUFFRyxZQUFqQjtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUR6QixlQUVFO01BQUssU0FBUyxFQUFDLGNBQWY7TUFBOEIsRUFBRSxFQUFFRDtJQUFsQztNQUFBO01BQUE7TUFBQTtJQUFBLFNBRkY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUFNRCxDQTlCRDs7R0FBTUo7O0tBQUFBO0FBZ0NOLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29tbWVudHMvRGlzcXVzLmpzPzUxYTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzaXRlTWV0YWRhdGEgZnJvbSAnQC9kYXRhL3NpdGVNZXRhZGF0YSdcblxuY29uc3QgRGlzcXVzID0gKHsgZnJvbnRNYXR0ZXIgfSkgPT4ge1xuICBjb25zdCBbZW5hYmxlTG9hZENvbW1lbnRzLCBzZXRFbmFibGVkTG9hZENvbW1lbnRzXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgY29uc3QgQ09NTUVOVFNfSUQgPSAnZGlzcXVzX3RocmVhZCdcblxuICBmdW5jdGlvbiBMb2FkQ29tbWVudHMoKSB7XG4gICAgc2V0RW5hYmxlZExvYWRDb21tZW50cyhmYWxzZSlcblxuICAgIHdpbmRvdy5kaXNxdXNfY29uZmlnID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5wYWdlLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gICAgICB0aGlzLnBhZ2UuaWRlbnRpZmllciA9IGZyb250TWF0dGVyLnNsdWdcbiAgICB9XG4gICAgaWYgKHdpbmRvdy5ESVNRVVMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcbiAgICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly8nICsgc2l0ZU1ldGFkYXRhLmNvbW1lbnQuZGlzcXVzQ29uZmlnLnNob3J0bmFtZSArICcuZGlzcXVzLmNvbS9lbWJlZC5qcydcbiAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGltZXN0YW1wJywgK25ldyBEYXRlKCkpXG4gICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdjcm9zc29yaWdpbicsICdhbm9ueW1vdXMnKVxuICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZVxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5ESVNRVVMucmVzZXQoeyByZWxvYWQ6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNiBwYi02IHRleHQtY2VudGVyIHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+XG4gICAgICB7ZW5hYmxlTG9hZENvbW1lbnRzICYmIDxidXR0b24gb25DbGljaz17TG9hZENvbW1lbnRzfT5Mb2FkIENvbW1lbnRzPC9idXR0b24+fVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNxdXMtZnJhbWVcIiBpZD17Q09NTUVOVFNfSUR9IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlzcXVzXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInNpdGVNZXRhZGF0YSIsIkRpc3F1cyIsImZyb250TWF0dGVyIiwiZW5hYmxlTG9hZENvbW1lbnRzIiwic2V0RW5hYmxlZExvYWRDb21tZW50cyIsIkNPTU1FTlRTX0lEIiwiTG9hZENvbW1lbnRzIiwid2luZG93IiwiZGlzcXVzX2NvbmZpZyIsInBhZ2UiLCJ1cmwiLCJsb2NhdGlvbiIsImhyZWYiLCJpZGVudGlmaWVyIiwic2x1ZyIsIkRJU1FVUyIsInVuZGVmaW5lZCIsInNjcmlwdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImNvbW1lbnQiLCJkaXNxdXNDb25maWciLCJzaG9ydG5hbWUiLCJzZXRBdHRyaWJ1dGUiLCJEYXRlIiwiYXN5bmMiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJyZXNldCIsInJlbG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/comments/Disqus.js\n"));

/***/ })

}]);