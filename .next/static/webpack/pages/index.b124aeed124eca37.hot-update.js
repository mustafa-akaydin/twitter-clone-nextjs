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

/***/ "./components/tweet/index.js":
/*!***********************************!*\
  !*** ./components/tweet/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var date_fns_formatDistanceToNowStrict__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/formatDistanceToNowStrict */ \"./node_modules/date-fns/formatDistanceToNowStrict.mjs\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.module.css */ \"./components/tweet/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _photo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../photo */ \"./components/photo/index.js\");\n/* harmony import */ var _button_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button/icon */ \"./components/button/icon.js\");\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons */ \"./components/icons/index.js\");\n\n\n\n\n\n\n\nfunction Tweet(param) {\n    let { name, slug, datetime, text } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().tweet),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().avatar),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_photo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\tweet\\\\index.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\tweet\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().body),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().name),\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\tweet\\\\index.js\",\n                                lineNumber: 20,\n                                columnNumber: 11\n                            }, this),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    \"@\",\n                                    slug\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\tweet\\\\index.js\",\n                                lineNumber: 20,\n                                columnNumber: 55\n                            }, this),\n                            \" \\xb7\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: (0,date_fns_formatDistanceToNowStrict__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(datetime)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\tweet\\\\index.js\",\n                                lineNumber: 21,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\tweet\\\\index.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().content),\n                        children: text\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\tweet\\\\index.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().footer),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().footerButton),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button_icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().actionButton),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_4__.Reply, {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\tweet\\\\index.js\",\n                                            lineNumber: 30,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\tweet\\\\index.js\",\n                                        lineNumber: 29,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"3\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\tweet\\\\index.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\tweet\\\\index.js\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().footerButton),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button_icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().actionButton),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_4__.Retweet, {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\tweet\\\\index.js\",\n                                            lineNumber: 38,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\tweet\\\\index.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"12\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\tweet\\\\index.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\tweet\\\\index.js\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().footerButton),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button_icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().actionButton),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_4__.Like, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\tweet\\\\index.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\tweet\\\\index.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\tweet\\\\index.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().footerButton),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button_icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().actionButton),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_4__.Share, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\tweet\\\\index.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\tweet\\\\index.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\tweet\\\\index.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\tweet\\\\index.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\tweet\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\tweet\\\\index.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = Tweet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tweet);\nvar _c;\n$RefreshReg$(_c, \"Tweet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3R3ZWV0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNpRDtBQUVuQztBQUNYO0FBQ1c7QUFDUDtBQUVoQyxTQUFTTSxNQUFNLEtBQThCO1FBQTlCLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLElBQUksRUFBRSxHQUE5QjtJQUNiLHFCQUNFLDhEQUFDQztRQUFRQyxXQUFXVixnRUFBWTs7MEJBRTlCLDhEQUFDWTtnQkFBSUYsV0FBV1YsaUVBQWE7MEJBQzNCLDRFQUFDQyw4Q0FBS0E7Ozs7Ozs7Ozs7MEJBSVIsOERBQUNXO2dCQUFJRixXQUFXViwrREFBVzs7a0NBQ3pCLDhEQUFDZTt3QkFBT0wsV0FBV1YsaUVBQWE7OzBDQUM5Qiw4REFBQ2dCO2dDQUFLTixXQUFXViwrREFBVzswQ0FBR0s7Ozs7Ozs0QkFBWTswQ0FBQyw4REFBQ1c7O29DQUFLO29DQUFFVjs7Ozs7Ozs0QkFBWTs0QkFBRzswQ0FDbkUsOERBQUNVOzBDQUFNakIsOEVBQXlCQSxDQUFDUTs7Ozs7Ozs7Ozs7O2tDQUduQyw4REFBQ0s7d0JBQUlGLFdBQVdWLGtFQUFjO2tDQUFHUTs7Ozs7O2tDQUVqQyw4REFBQ1U7d0JBQU9SLFdBQVdWLGlFQUFhOzswQ0FFOUIsOERBQUNZO2dDQUFJRixXQUFXVix1RUFBbUI7O2tEQUNqQyw4REFBQ0Usb0RBQVVBO3dDQUFDUSxXQUFXVix1RUFBbUI7a0RBQ3hDLDRFQUFDRyx5Q0FBVTs7Ozs7Ozs7OztrREFFYiw4REFBQ2E7a0RBQUs7Ozs7Ozs7Ozs7OzswQ0FJUiw4REFBQ0o7Z0NBQUlGLFdBQVdWLHVFQUFtQjs7a0RBQ2pDLDhEQUFDRSxvREFBVUE7d0NBQUNRLFdBQVdWLHVFQUFtQjtrREFDeEMsNEVBQUNHLDJDQUFZOzs7Ozs7Ozs7O2tEQUVmLDhEQUFDYTtrREFBSzs7Ozs7Ozs7Ozs7OzBDQUlSLDhEQUFDSjtnQ0FBSUYsV0FBV1YsdUVBQW1COzBDQUNqQyw0RUFBQ0Usb0RBQVVBO29DQUFDUSxXQUFXVix1RUFBbUI7OENBQ3hDLDRFQUFDRyx3Q0FBUzs7Ozs7Ozs7Ozs7Ozs7OzBDQUtkLDhEQUFDUztnQ0FBSUYsV0FBV1YsdUVBQW1COzBDQUNqQyw0RUFBQ0Usb0RBQVVBO29DQUFDUSxXQUFXVix1RUFBbUI7OENBQ3hDLDRFQUFDRyx5Q0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3pCO0tBbkRTQztBQXFEVCwrREFBZUEsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3R3ZWV0L2luZGV4LmpzP2QwZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnXG5pbXBvcnQgUGhvdG8gZnJvbSAnLi4vcGhvdG8nXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICcuLi9idXR0b24vaWNvbidcbmltcG9ydCAqIGFzIEljb24gZnJvbSAnLi4vaWNvbnMnXG5cbmZ1bmN0aW9uIFR3ZWV0KHsgbmFtZSwgc2x1ZywgZGF0ZXRpbWUsIHRleHQgfSkge1xuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLnR3ZWV0fT5cbiAgICAgIHsvKiBhdmF0YXIgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+XG4gICAgICAgIDxQaG90byAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBib2R5ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PntuYW1lfTwvc3Bhbj4gPHNwYW4+QHtzbHVnfTwvc3Bhbj4gwrd7JyAnfVxuICAgICAgICAgIDxzcGFuPntmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0KGRhdGV0aW1lKX08L3NwYW4+XG4gICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+e3RleHR9PC9kaXY+XG5cbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICAgIHsvKiByZXBseSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlckJ1dHRvbn0+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25CdXR0b259PlxuICAgICAgICAgICAgICA8SWNvbi5SZXBseSAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPHNwYW4+Mzwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiByZXR3ZWV0ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyQnV0dG9ufT5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbkJ1dHRvbn0+XG4gICAgICAgICAgICAgIDxJY29uLlJldHdlZXQgLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxzcGFuPjEyPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIGxpa2UgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJCdXR0b259PlxuICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uQnV0dG9ufT5cbiAgICAgICAgICAgICAgPEljb24uTGlrZSAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIHNoYXJlICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyQnV0dG9ufT5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbkJ1dHRvbn0+XG4gICAgICAgICAgICAgIDxJY29uLlNoYXJlIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9hcnRpY2xlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFR3ZWV0XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0Iiwic3R5bGVzIiwiUGhvdG8iLCJJY29uQnV0dG9uIiwiSWNvbiIsIlR3ZWV0IiwibmFtZSIsInNsdWciLCJkYXRldGltZSIsInRleHQiLCJhcnRpY2xlIiwiY2xhc3NOYW1lIiwidHdlZXQiLCJkaXYiLCJhdmF0YXIiLCJib2R5IiwiaGVhZGVyIiwic3BhbiIsImNvbnRlbnQiLCJmb290ZXIiLCJmb290ZXJCdXR0b24iLCJhY3Rpb25CdXR0b24iLCJSZXBseSIsIlJldHdlZXQiLCJMaWtlIiwiU2hhcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/tweet/index.js\n"));

/***/ })

});