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

/***/ "./components/button/index.js":
/*!************************************!*\
  !*** ./components/button/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.module.css */ \"./components/button/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction LinkButton(param) {\n    let { href, children, ...props } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: href,\n        legacyBehavior: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            ...props,\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\button\\\\index.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\button\\\\index.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = LinkButton;\nfunction BaseButton(param) {\n    let { children, ...props } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        ...props,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\button\\\\index.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_c1 = BaseButton;\nfunction Button(param) {\n    let { full = false, children, className, ...props } = param;\n    const Comp = props.href ? LinkButton : BaseButton;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Comp, {\n        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().button), full && (_style_module_css__WEBPACK_IMPORTED_MODULE_4___default().fullWidth), className),\n        ...props,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\button\\\\index.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_c2 = Button;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"LinkButton\");\n$RefreshReg$(_c1, \"BaseButton\");\n$RefreshReg$(_c2, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2J1dHRvbi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDRTtBQUNDO0FBRVc7QUFFdkMsU0FBU0ksV0FBVyxLQUE0QjtRQUE1QixFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRSxHQUFHQyxPQUFPLEdBQTVCO0lBQ2xCLHFCQUNFLDhEQUFDTCxrREFBSUE7UUFBQ0csTUFBTUE7UUFBTUcsY0FBYztrQkFDOUIsNEVBQUNDO1lBQUcsR0FBR0YsS0FBSztzQkFBR0Q7Ozs7Ozs7Ozs7O0FBR3JCO0tBTlNGO0FBUVQsU0FBU00sV0FBVyxLQUFzQjtRQUF0QixFQUFFSixRQUFRLEVBQUUsR0FBR0MsT0FBTyxHQUF0QjtJQUNsQixxQkFDRSw4REFBQ0k7UUFBT0MsTUFBSztRQUFVLEdBQUdMLEtBQUs7a0JBQzVCRDs7Ozs7O0FBR1A7TUFOU0k7QUFRVCxTQUFTRyxPQUFPLEtBQStDO1FBQS9DLEVBQUVDLE9BQU8sS0FBSyxFQUFFUixRQUFRLEVBQUVTLFNBQVMsRUFBRSxHQUFHUixPQUFPLEdBQS9DO0lBQ2QsTUFBTVMsT0FBT1QsTUFBTUYsSUFBSSxHQUFHRCxhQUFhTTtJQUV2QyxxQkFDRSw4REFBQ007UUFDQ0QsV0FBV2QsaURBQUVBLENBQUNFLGlFQUFhLEVBQUVXLFFBQVFYLG9FQUFnQixFQUFFWTtRQUN0RCxHQUFHUixLQUFLO2tCQUVSRDs7Ozs7O0FBR1A7TUFYU087QUFhVCwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2J1dHRvbi9pbmRleC5qcz9kNmQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcydcblxuZnVuY3Rpb24gTGlua0J1dHRvbih7IGhyZWYsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj17aHJlZn0gbGVnYWN5QmVoYXZpb3I+XG4gICAgICA8YSB7Li4ucHJvcHN9PntjaGlsZHJlbn08L2E+XG4gICAgPC9MaW5rPlxuICApXG59XG5cbmZ1bmN0aW9uIEJhc2VCdXR0b24oeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHsuLi5wcm9wc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9idXR0b24+XG4gIClcbn1cblxuZnVuY3Rpb24gQnV0dG9uKHsgZnVsbCA9IGZhbHNlLCBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IENvbXAgPSBwcm9wcy5ocmVmID8gTGlua0J1dHRvbiA6IEJhc2VCdXR0b25cblxuICByZXR1cm4gKFxuICAgIDxDb21wXG4gICAgICBjbGFzc05hbWU9e2NuKHN0eWxlcy5idXR0b24sIGZ1bGwgJiYgc3R5bGVzLmZ1bGxXaWR0aCwgY2xhc3NOYW1lKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Db21wPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY24iLCJMaW5rIiwic3R5bGVzIiwiTGlua0J1dHRvbiIsImhyZWYiLCJjaGlsZHJlbiIsInByb3BzIiwibGVnYWN5QmVoYXZpb3IiLCJhIiwiQmFzZUJ1dHRvbiIsImJ1dHRvbiIsInR5cGUiLCJCdXR0b24iLCJmdWxsIiwiY2xhc3NOYW1lIiwiQ29tcCIsImZ1bGxXaWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/button/index.js\n"));

/***/ })

});