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

/***/ "./components/button.js":
/*!******************************!*\
  !*** ./components/button.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button.module.css */ \"./components/button.module.css\");\n/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_button_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction LinkButton(param) {\n    let { href, children, ...props } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: href,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            ...props,\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\button.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\button.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = LinkButton;\nfunction BaseButton(param) {\n    let { children, ...props } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        ...props,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\button.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_c1 = BaseButton;\nfunction Button(param) {\n    let { full = false, children, className, ...props } = param;\n    const Comp = props.href ? LinkButton : BaseButton;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_button_module_css__WEBPACK_IMPORTED_MODULE_4___default().button), full && (_button_module_css__WEBPACK_IMPORTED_MODULE_4___default().fullWidth), className),\n        ...props,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\button.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_c2 = Button;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"LinkButton\");\n$RefreshReg$(_c1, \"BaseButton\");\n$RefreshReg$(_c2, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2J1dHRvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEI7QUFDZTtBQUNiO0FBRUM7QUFFN0IsU0FBU0ksV0FBVyxLQUE0QjtRQUE1QixFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRSxHQUFHQyxPQUFPLEdBQTVCO0lBQ2xCLHFCQUNFLDhEQUFDSixrREFBSUE7UUFBQ0UsTUFBTUE7a0JBQ1YsNEVBQUNHO1lBQUcsR0FBR0QsS0FBSztzQkFBR0Q7Ozs7Ozs7Ozs7O0FBR3JCO0tBTlNGO0FBT1QsU0FBU0ssV0FBVyxLQUFzQjtRQUF0QixFQUFFSCxRQUFRLEVBQUUsR0FBR0MsT0FBTyxHQUF0QjtJQUNsQixxQkFDRSw4REFBQ0c7UUFDQ0MsTUFBSztRQUNKLEdBQUdKLEtBQUs7a0JBRVJEOzs7Ozs7QUFHUDtNQVRTRztBQVVULFNBQVNHLE9BQU8sS0FBZ0Q7UUFBaEQsRUFBR0MsT0FBTyxLQUFLLEVBQUVQLFFBQVEsRUFBRVEsU0FBUyxFQUFFLEdBQUdQLE9BQU8sR0FBaEQ7SUFDZCxNQUFNUSxPQUFPUixNQUFNRixJQUFJLEdBQUdELGFBQWFLO0lBRXZDLHFCQUNFLDhEQUFDRztRQUNDRSxXQUFXWixpREFBRUEsQ0FBQ0Qsa0VBQWEsRUFBRVksUUFBUVoscUVBQWdCLEVBQUVhO1FBQ3RELEdBQUdQLEtBQUs7a0JBRVJEOzs7Ozs7QUFHUDtNQVhTTTtBQWFULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYnV0dG9uLmpzPzI1N2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2J1dHRvbi5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZnVuY3Rpb24gTGlua0J1dHRvbih7IGhyZWYsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgICA8YSB7Li4ucHJvcHN9PntjaGlsZHJlbn08L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufVxyXG5mdW5jdGlvbiBCYXNlQnV0dG9uKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59XHJcbmZ1bmN0aW9uIEJ1dHRvbih7ICBmdWxsID0gZmFsc2UsIGNoaWxkcmVuLCBjbGFzc05hbWUsIC4uLnByb3BzIH0pIHtcclxuICBjb25zdCBDb21wID0gcHJvcHMuaHJlZiA/IExpbmtCdXR0b24gOiBCYXNlQnV0dG9uO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvblxyXG4gICAgICBjbGFzc05hbWU9e2NuKHN0eWxlcy5idXR0b24sIGZ1bGwgJiYgc3R5bGVzLmZ1bGxXaWR0aCwgY2xhc3NOYW1lKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0J1dHRvbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsImNuIiwiTGluayIsIkxpbmtCdXR0b24iLCJocmVmIiwiY2hpbGRyZW4iLCJwcm9wcyIsImEiLCJCYXNlQnV0dG9uIiwiYnV0dG9uIiwidHlwZSIsIkJ1dHRvbiIsImZ1bGwiLCJjbGFzc05hbWUiLCJDb21wIiwiZnVsbFdpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/button.js\n"));

/***/ })

});