"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/lists",{

/***/ "./components/navigation.js":
/*!**********************************!*\
  !*** ./components/navigation.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation.module.css */ \"./components/navigation.module.css\");\n/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_navigation_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _navigation_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation-button */ \"./components/navigation-button.js\");\n/* harmony import */ var _text_title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./text-title */ \"./components/text-title.js\");\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons */ \"./components/icons/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Navigation(param) {\n    let { flat = false } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().nav),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navigation_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_7__.Twitter, {\n                    style: {\n                        fontSize: 30\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            _constants__WEBPACK_IMPORTED_MODULE_3__.MENU.map((menu)=>{\n                const showTitle = !flat && menu.title.length > 0;\n                const selected = router.pathNamre === menu.path;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navigation_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    notify: menu.notify,\n                    selected: selected,\n                    href: menu.path,\n                    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_navigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().navButton), menu.key),\n                    children: [\n                        selected ? menu.iconSelected : menu.icon,\n                        showTitle && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_text_title__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            children: menu.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n                            lineNumber: 34,\n                            columnNumber: 27\n                        }, this)\n                    ]\n                }, menu.key, true, {\n                    fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(Navigation, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmlnYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYztBQUVKO0FBQ1M7QUFDakI7QUFFdUI7QUFDZDtBQUVIO0FBRWxDLFNBQVNRLFdBQVcsS0FBZ0I7UUFBaEIsRUFBRUMsT0FBTyxLQUFLLEVBQUUsR0FBaEI7O0lBQ2xCLE1BQU1DLFNBQVNULHNEQUFTQTtJQUV4QixxQkFDRSw4REFBQ1U7UUFBSUMsV0FBV1QsbUVBQVU7OzBCQUN4Qiw4REFBQ0UsMERBQWdCQTswQkFDZiw0RUFBQ0UsMkNBQU9BO29CQUFDTSxPQUFPO3dCQUFFQyxVQUFVO29CQUFHOzs7Ozs7Ozs7OztZQUVoQ1osNENBQUlBLENBQUNhLEdBQUcsQ0FBQyxDQUFDQztnQkFDVCxNQUFNQyxZQUFZLENBQUNSLFFBQVFPLEtBQUtFLEtBQUssQ0FBQ0MsTUFBTSxHQUFHO2dCQUMvQyxNQUFNQyxXQUFXVixPQUFPVyxTQUFTLEtBQUtMLEtBQUtNLElBQUk7Z0JBRS9DLHFCQUNFLDhEQUFDakIsMERBQWdCQTtvQkFFZmtCLFFBQVFQLEtBQUtPLE1BQU07b0JBQ25CSCxVQUFVQTtvQkFDVkksTUFBTVIsS0FBS00sSUFBSTtvQkFDZlYsV0FBV1IsaURBQUVBLENBQUNELHlFQUFnQixFQUFFYSxLQUFLVSxHQUFHOzt3QkFFdkNOLFdBQVdKLEtBQUtXLFlBQVksR0FBR1gsS0FBS1ksSUFBSTt3QkFDeENYLDJCQUFhLDhEQUFDWCxtREFBU0E7c0NBQUVVLEtBQUtFLEtBQUs7Ozs7Ozs7bUJBUC9CRixLQUFLVSxHQUFHOzs7OztZQVVuQjs7Ozs7OztBQUdOO0dBM0JTbEI7O1FBQ1FQLGtEQUFTQTs7O0tBRGpCTztBQTZCVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmlnYXRpb24uanM/MDg0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgTUVOVSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9uYXZpZ2F0aW9uLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5pbXBvcnQgTmF2aWdhdGlvbkJ1dHRvbiBmcm9tIFwiLi9uYXZpZ2F0aW9uLWJ1dHRvblwiO1xyXG5pbXBvcnQgVGV4dFRpdGxlIGZyb20gXCIuL3RleHQtdGl0bGVcIjtcclxuXHJcbmltcG9ydCB7IFR3aXR0ZXIgfSBmcm9tIFwiLi9pY29uc1wiO1xyXG5cclxuZnVuY3Rpb24gTmF2aWdhdGlvbih7IGZsYXQgPSBmYWxzZSB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XHJcbiAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uPlxyXG4gICAgICAgIDxUd2l0dGVyIHN0eWxlPXt7IGZvbnRTaXplOiAzMCB9fSAvPlxyXG4gICAgICA8L05hdmlnYXRpb25CdXR0b24+XHJcbiAgICAgIHtNRU5VLm1hcCgobWVudSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNob3dUaXRsZSA9ICFmbGF0ICYmIG1lbnUudGl0bGUubGVuZ3RoID4gMDtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHJvdXRlci5wYXRoTmFtcmUgPT09IG1lbnUucGF0aDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uXHJcbiAgICAgICAgICAgIGtleT17bWVudS5rZXl9XHJcbiAgICAgICAgICAgIG5vdGlmeT17bWVudS5ub3RpZnl9XHJcbiAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cclxuICAgICAgICAgICAgaHJlZj17bWVudS5wYXRofVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NuKHN0eWxlcy5uYXZCdXR0b24sIG1lbnUua2V5KX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3NlbGVjdGVkID8gbWVudS5pY29uU2VsZWN0ZWQgOiBtZW51Lmljb259XHJcbiAgICAgICAgICAgIHtzaG93VGl0bGUgJiYgPFRleHRUaXRsZT57bWVudS50aXRsZX08L1RleHRUaXRsZT59XHJcbiAgICAgICAgICA8L05hdmlnYXRpb25CdXR0b24+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJNRU5VIiwic3R5bGVzIiwiY24iLCJOYXZpZ2F0aW9uQnV0dG9uIiwiVGV4dFRpdGxlIiwiVHdpdHRlciIsIk5hdmlnYXRpb24iLCJmbGF0Iiwicm91dGVyIiwibmF2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJmb250U2l6ZSIsIm1hcCIsIm1lbnUiLCJzaG93VGl0bGUiLCJ0aXRsZSIsImxlbmd0aCIsInNlbGVjdGVkIiwicGF0aE5hbXJlIiwicGF0aCIsIm5vdGlmeSIsImhyZWYiLCJuYXZCdXR0b24iLCJrZXkiLCJpY29uU2VsZWN0ZWQiLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navigation.js\n"));

/***/ })

});