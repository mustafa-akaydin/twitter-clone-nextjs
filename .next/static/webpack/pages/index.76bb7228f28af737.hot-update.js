"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout/index.js\");\n/* harmony import */ var _components_tweet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/tweet */ \"./components/tweet/index.js\");\n/* harmony import */ var _lib_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/fetch */ \"./lib/fetch.js\");\n/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/loading */ \"./components/loading/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction HomePage() {\n    _s();\n    const { data } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/tweet\", _lib_fetch__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            !data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().loading),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loading__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\pages\\\\index.js\",\n                    lineNumber: 18,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\pages\\\\index.js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, this),\n            data && data.statuses.map((tweet)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tweet__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    ...tweet\n                }, tweet, false, {\n                    fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\pages\\\\index.js\",\n                    lineNumber: 21,\n                    columnNumber: 45\n                }, this)),\n            \";\",\n            data && data.statuses.map((tweet)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tweet__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    ...tweet\n                }, tweet.id, false, {\n                    fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\pages\\\\index.js\",\n                    lineNumber: 24,\n                    columnNumber: 18\n                }, this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\pages\\\\index.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"Bw9uScf/xQBWZKhLCWSR33xISM4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNEO0FBRWU7QUFFRTtBQUNGO0FBQ0w7QUFDUztBQUU1QyxTQUFTTzs7SUFDUCxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHUCwrQ0FBTUEsQ0FBQyxjQUFjSSxrREFBT0E7SUFFN0MscUJBQ0UsOERBQUNGLDBEQUFNQTs7WUFDSixDQUFDSyxzQkFDQSw4REFBQ0M7Z0JBQUlDLFdBQVdSLGtFQUFjOzBCQUM1Qiw0RUFBQ0ksMkRBQU9BOzs7Ozs7Ozs7O1lBR1hFLFFBQVFBLEtBQUtJLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLHNCQUFVLDhEQUFDVix5REFBS0E7b0JBQWEsR0FBR1UsS0FBSzttQkFBZkE7Ozs7O1lBQXFCO1lBQ3RFTixRQUNDQSxLQUFLSSxRQUFRLENBQUNDLEdBQUcsQ0FBQyxDQUFDQztnQkFDakIscUJBQU8sOERBQUNWLHlEQUFLQTtvQkFBaUIsR0FBR1UsS0FBSzttQkFBbkJBLE1BQU1DLEVBQUU7Ozs7O1lBQzdCOzs7Ozs7O0FBR1I7R0FqQlNSOztRQUNVTiwyQ0FBTUE7OztLQURoQk07QUFtQlQsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuY3NzXCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgVHdlZXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvdHdlZXRcIjtcbmltcG9ydCBmZXRjaGVyIGZyb20gXCIuLi9saWIvZmV0Y2hcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jb21wb25lbnRzL2xvYWRpbmdcIjtcblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlU1dSKFwiL2FwaS90d2VldFwiLCBmZXRjaGVyKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICB7IWRhdGEgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRpbmd9PlxuICAgICAgICAgIDxMb2FkaW5nIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHtkYXRhICYmIGRhdGEuc3RhdHVzZXMubWFwKCh0d2VldCkgPT4gPFR3ZWV0IGtleT17dHdlZXR9ey4uLnR3ZWV0fSAvPil9O1xuICAgICAge2RhdGEgJiZcbiAgICAgICAgZGF0YS5zdGF0dXNlcy5tYXAoKHR3ZWV0KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxUd2VldCBrZXk9e3R3ZWV0LmlkfSB7Li4udHdlZXR9IC8+O1xuICAgICAgICB9KX1cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTV1IiLCJzdHlsZXMiLCJMYXlvdXQiLCJUd2VldCIsImZldGNoZXIiLCJMb2FkaW5nIiwiSG9tZVBhZ2UiLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwibG9hZGluZyIsInN0YXR1c2VzIiwibWFwIiwidHdlZXQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});