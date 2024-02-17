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

/***/ "./components/navigation.js":
/*!**********************************!*\
  !*** ./components/navigation.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation.module.css */ \"./components/navigation.module.css\");\n/* harmony import */ var _navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_navigation_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _navigation_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation-button */ \"./components/navigation-button.js\");\n/* harmony import */ var _text_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-title */ \"./components/text-title.js\");\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons */ \"./components/icons/index.js\");\n\n\n\n\n\n\nconst MENU = [\n    {\n        key: \"home\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_4__.Home, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n            lineNumber: 21,\n            columnNumber: 11\n        }, undefined),\n        title: \"Home\",\n        notify: 0\n    },\n    {\n        key: \"explore\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_4__.Explore, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n            lineNumber: 27,\n            columnNumber: 11\n        }, undefined),\n        title: \"Explore\",\n        notify: 0\n    }\n];\nfunction Navigation(param) {\n    let { flat = false, selectedKey } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_navigation_module_css__WEBPACK_IMPORTED_MODULE_5___default().nav),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navigation_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_4__.Twitter, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            MENU.map((menu)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navigation_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    selected: selectedKey === menu.key,\n                    children: [\n                        menu.icon,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_text_title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            children: menu.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navigation_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                selected: selectedKey === \"explore\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_4__.Explore, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_text_title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        children: \"Explore\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navigation_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                notify: 1,\n                selected: selectedKey === \"notification\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_4__.Notification, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_text_title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        children: \"Notification\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navigation_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                selected: selectedKey === \"messages\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_4__.Messages, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_text_title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        children: \"Messages\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navigation_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                selected: selectedKey === \"bookmark\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_4__.Bookmark, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_text_title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        children: \"Bookmark\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navigation_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                selected: selectedKey === \"lists\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_4__.Lists, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_text_title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        children: \"Lists\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navigation_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                selected: selectedKey === \"profile\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_4__.Profile, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_text_title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        children: \"Profile\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navigation_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                selected: selectedKey === \"More\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_4__.More, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_text_title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        children: \"More\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\components\\\\navigation.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmlnYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEI7QUFDbUI7QUFDTTtBQUNkO0FBWXBCO0FBRWpCLE1BQU1hLE9BQU87SUFDWDtRQUNFQyxLQUFLO1FBQ0xDLG9CQUFNLDhEQUFDVix3Q0FBSUE7Ozs7O1FBQ1hXLE9BQU87UUFDUEMsUUFBTztJQUNUO0lBQ0E7UUFDRUgsS0FBSztRQUNMQyxvQkFBTSw4REFBQ1QsMkNBQU9BOzs7OztRQUNkVSxPQUFPO1FBQ1BDLFFBQU87SUFDVDtDQUNEO0FBRUQsU0FBU0MsV0FBVyxLQUE2QjtRQUE3QixFQUFFQyxPQUFPLEtBQUssRUFBRUMsV0FBVyxFQUFFLEdBQTdCO0lBQ2xCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXckIsbUVBQVU7OzBCQUN4Qiw4REFBQ0MsMERBQWdCQTswQkFDZiw0RUFBQ0UsMkNBQU9BOzs7Ozs7Ozs7O1lBRVRTLEtBQUtVLEdBQUcsQ0FBQyxDQUFDQyxxQkFDVCw4REFBQ3RCLDBEQUFnQkE7b0JBQUN1QixVQUFVTCxnQkFBZ0JJLEtBQUtWLEdBQUc7O3dCQUNqRFUsS0FBS1QsSUFBSTtzQ0FDViw4REFBQ1osbURBQVNBO3NDQUFFcUIsS0FBS1IsS0FBSzs7Ozs7Ozs7Ozs7OzBCQUkxQiw4REFBQ2QsMERBQWdCQTtnQkFBQ3VCLFVBQVVMLGdCQUFnQjs7a0NBQzFDLDhEQUFDZCwyQ0FBT0E7Ozs7O2tDQUNSLDhEQUFDSCxtREFBU0E7a0NBQUM7Ozs7Ozs7Ozs7OzswQkFFYiw4REFBQ0QsMERBQWdCQTtnQkFBQ2UsUUFBUTtnQkFBR1EsVUFBVUwsZ0JBQWdCOztrQ0FDckQsOERBQUNULGdEQUFZQTs7Ozs7a0NBQ2IsOERBQUNSLG1EQUFTQTtrQ0FBQzs7Ozs7Ozs7Ozs7OzBCQUViLDhEQUFDRCwwREFBZ0JBO2dCQUFDdUIsVUFBVUwsZ0JBQWdCOztrQ0FDMUMsOERBQUNiLDRDQUFRQTs7Ozs7a0NBQ1QsOERBQUNKLG1EQUFTQTtrQ0FBQzs7Ozs7Ozs7Ozs7OzBCQUViLDhEQUFDRCwwREFBZ0JBO2dCQUFDdUIsVUFBVUwsZ0JBQWdCOztrQ0FDMUMsOERBQUNWLDRDQUFRQTs7Ozs7a0NBQ1QsOERBQUNQLG1EQUFTQTtrQ0FBQzs7Ozs7Ozs7Ozs7OzBCQUViLDhEQUFDRCwwREFBZ0JBO2dCQUFDdUIsVUFBVUwsZ0JBQWdCOztrQ0FDMUMsOERBQUNaLHlDQUFLQTs7Ozs7a0NBQ04sOERBQUNMLG1EQUFTQTtrQ0FBQzs7Ozs7Ozs7Ozs7OzBCQUViLDhEQUFDRCwwREFBZ0JBO2dCQUFDdUIsVUFBVUwsZ0JBQWdCOztrQ0FDMUMsOERBQUNYLDJDQUFPQTs7Ozs7a0NBQ1IsOERBQUNOLG1EQUFTQTtrQ0FBQzs7Ozs7Ozs7Ozs7OzBCQUViLDhEQUFDRCwwREFBZ0JBO2dCQUFDdUIsVUFBVUwsZ0JBQWdCOztrQ0FDMUMsOERBQUNSLHdDQUFJQTs7Ozs7a0NBQ0wsOERBQUNULG1EQUFTQTtrQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSW5CO0tBM0NTZTtBQTZDVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmlnYXRpb24uanM/MDg0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbmF2aWdhdGlvbi5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uQnV0dG9uIGZyb20gXCIuL25hdmlnYXRpb24tYnV0dG9uXCI7XHJcbmltcG9ydCBUZXh0VGl0bGUgZnJvbSBcIi4vdGV4dC10aXRsZVwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBUd2l0dGVyLFxyXG4gIEhvbWUsXHJcbiAgRXhwbG9yZSxcclxuICBNZXNzYWdlcyxcclxuICBMaXN0cyxcclxuICBQcm9maWxlLFxyXG4gIEJvb2ttYXJrLFxyXG4gIE5vdGlmaWNhdGlvbixcclxuICBNb3JlLFxyXG59IGZyb20gXCIuL2ljb25zXCI7XHJcblxyXG5jb25zdCBNRU5VID0gW1xyXG4gIHtcclxuICAgIGtleTogXCJob21lXCIsXHJcbiAgICBpY29uOiA8SG9tZSAvPixcclxuICAgIHRpdGxlOiBcIkhvbWVcIixcclxuICAgIG5vdGlmeTowLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiBcImV4cGxvcmVcIixcclxuICAgIGljb246IDxFeHBsb3JlIC8+LFxyXG4gICAgdGl0bGU6IFwiRXhwbG9yZVwiLFxyXG4gICAgbm90aWZ5OjBcclxuICB9LFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gTmF2aWdhdGlvbih7IGZsYXQgPSBmYWxzZSwgc2VsZWN0ZWRLZXkgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XHJcbiAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uPlxyXG4gICAgICAgIDxUd2l0dGVyIC8+XHJcbiAgICAgIDwvTmF2aWdhdGlvbkJ1dHRvbj5cclxuICAgICAge01FTlUubWFwKChtZW51KSA9PiAoXHJcbiAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gc2VsZWN0ZWQ9e3NlbGVjdGVkS2V5ID09PSBtZW51LmtleX0+XHJcbiAgICAgICAgICB7bWVudS5pY29ufVxyXG4gICAgICAgICAgPFRleHRUaXRsZT57bWVudS50aXRsZX08L1RleHRUaXRsZT5cclxuICAgICAgICA8L05hdmlnYXRpb25CdXR0b24+XHJcbiAgICAgICkpfVxyXG5cclxuICAgICAgPE5hdmlnYXRpb25CdXR0b24gc2VsZWN0ZWQ9e3NlbGVjdGVkS2V5ID09PSBcImV4cGxvcmVcIn0+XHJcbiAgICAgICAgPEV4cGxvcmUgLz5cclxuICAgICAgICA8VGV4dFRpdGxlPkV4cGxvcmU8L1RleHRUaXRsZT5cclxuICAgICAgPC9OYXZpZ2F0aW9uQnV0dG9uPlxyXG4gICAgICA8TmF2aWdhdGlvbkJ1dHRvbiBub3RpZnk9ezF9IHNlbGVjdGVkPXtzZWxlY3RlZEtleSA9PT0gXCJub3RpZmljYXRpb25cIn0+XHJcbiAgICAgICAgPE5vdGlmaWNhdGlvbiAvPlxyXG4gICAgICAgIDxUZXh0VGl0bGU+Tm90aWZpY2F0aW9uPC9UZXh0VGl0bGU+XHJcbiAgICAgIDwvTmF2aWdhdGlvbkJ1dHRvbj5cclxuICAgICAgPE5hdmlnYXRpb25CdXR0b24gc2VsZWN0ZWQ9e3NlbGVjdGVkS2V5ID09PSBcIm1lc3NhZ2VzXCJ9PlxyXG4gICAgICAgIDxNZXNzYWdlcyAvPlxyXG4gICAgICAgIDxUZXh0VGl0bGU+TWVzc2FnZXM8L1RleHRUaXRsZT5cclxuICAgICAgPC9OYXZpZ2F0aW9uQnV0dG9uPlxyXG4gICAgICA8TmF2aWdhdGlvbkJ1dHRvbiBzZWxlY3RlZD17c2VsZWN0ZWRLZXkgPT09IFwiYm9va21hcmtcIn0+XHJcbiAgICAgICAgPEJvb2ttYXJrIC8+XHJcbiAgICAgICAgPFRleHRUaXRsZT5Cb29rbWFyazwvVGV4dFRpdGxlPlxyXG4gICAgICA8L05hdmlnYXRpb25CdXR0b24+XHJcbiAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHNlbGVjdGVkPXtzZWxlY3RlZEtleSA9PT0gXCJsaXN0c1wifT5cclxuICAgICAgICA8TGlzdHMgLz5cclxuICAgICAgICA8VGV4dFRpdGxlPkxpc3RzPC9UZXh0VGl0bGU+XHJcbiAgICAgIDwvTmF2aWdhdGlvbkJ1dHRvbj5cclxuICAgICAgPE5hdmlnYXRpb25CdXR0b24gc2VsZWN0ZWQ9e3NlbGVjdGVkS2V5ID09PSBcInByb2ZpbGVcIn0+XHJcbiAgICAgICAgPFByb2ZpbGUgLz5cclxuICAgICAgICA8VGV4dFRpdGxlPlByb2ZpbGU8L1RleHRUaXRsZT5cclxuICAgICAgPC9OYXZpZ2F0aW9uQnV0dG9uPlxyXG4gICAgICA8TmF2aWdhdGlvbkJ1dHRvbiBzZWxlY3RlZD17c2VsZWN0ZWRLZXkgPT09IFwiTW9yZVwifT5cclxuICAgICAgICA8TW9yZSAvPlxyXG4gICAgICAgIDxUZXh0VGl0bGU+TW9yZTwvVGV4dFRpdGxlPlxyXG4gICAgICA8L05hdmlnYXRpb25CdXR0b24+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJOYXZpZ2F0aW9uQnV0dG9uIiwiVGV4dFRpdGxlIiwiVHdpdHRlciIsIkhvbWUiLCJFeHBsb3JlIiwiTWVzc2FnZXMiLCJMaXN0cyIsIlByb2ZpbGUiLCJCb29rbWFyayIsIk5vdGlmaWNhdGlvbiIsIk1vcmUiLCJNRU5VIiwia2V5IiwiaWNvbiIsInRpdGxlIiwibm90aWZ5IiwiTmF2aWdhdGlvbiIsImZsYXQiLCJzZWxlY3RlZEtleSIsIm5hdiIsImNsYXNzTmFtZSIsIm1hcCIsIm1lbnUiLCJzZWxlY3RlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navigation.js\n"));

/***/ })

});