/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/app.css */ \"./styles/app.css\");\n/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ \"./store/index.js\");\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const [theme, themeSet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{\n        const theme = localStorage.getItem(\"THEME\") || \"light\";\n        themeSet(theme);\n    }, []);\n    const changeTheme = (theme)=>{\n        themeSet(theme);\n        localStorage.setItem(\"THEME\", theme);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!theme) return;\n        const $html = document.querySelector(\"html\");\n        $html.classList.remove(\"light\");\n        $html.classList.remove(\"dark\");\n        $html.classList.remove(\"dim\");\n        $html.classList.add(theme.toString());\n    }, [\n        theme\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n        value: {\n            theme,\n            changeTheme\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\pages\\\\_app.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\MUSTAFA\\\\Documents\\\\GitHub\\\\twitter-clone-nextjs\\\\pages\\\\_app.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtRTtBQUV6QztBQUNTO0FBRXBCLFNBQVNLLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDcEQsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDO0lBRW5DRCxzREFBZUEsQ0FBQztRQUNkLE1BQU1NLFFBQVFFLGFBQWFDLE9BQU8sQ0FBQyxZQUFZO1FBQy9DRixTQUFTRDtJQUNYLEdBQUcsRUFBRTtJQUVMLE1BQU1JLGNBQWMsQ0FBQ0o7UUFDbkJDLFNBQVNEO1FBQ1RFLGFBQWFHLE9BQU8sQ0FBQyxTQUFTTDtJQUNoQztJQUVBUCxnREFBU0EsQ0FBQztRQUNSLElBQUksQ0FBQ08sT0FBTztRQUNaLE1BQU1NLFFBQVFDLFNBQVNDLGFBQWEsQ0FBQztRQUNyQ0YsTUFBTUcsU0FBUyxDQUFDQyxNQUFNLENBQUM7UUFDdkJKLE1BQU1HLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDO1FBQ3ZCSixNQUFNRyxTQUFTLENBQUNDLE1BQU0sQ0FBQztRQUN2QkosTUFBTUcsU0FBUyxDQUFDRSxHQUFHLENBQUNYLE1BQU1ZLFFBQVE7SUFDcEMsR0FBRztRQUFDWjtLQUFNO0lBRVYscUJBQ0UsOERBQUNKLHVEQUFxQjtRQUFDa0IsT0FBTztZQUFFZDtZQUFPSTtRQUFZO2tCQUNqRCw0RUFBQ047WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3R3aXR0ZXItY2xvbmUvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgJy4uL3N0eWxlcy9hcHAuY3NzJ1xuaW1wb3J0IFN0b3JlQ29udGV4dCBmcm9tICcuLi9zdG9yZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IFt0aGVtZSwgdGhlbWVTZXRdID0gdXNlU3RhdGUobnVsbClcblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1RIRU1FJykgfHwgJ2xpZ2h0J1xuICAgIHRoZW1lU2V0KHRoZW1lKVxuICB9LCBbXSlcblxuICBjb25zdCBjaGFuZ2VUaGVtZSA9ICh0aGVtZSkgPT4ge1xuICAgIHRoZW1lU2V0KHRoZW1lKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdUSEVNRScsIHRoZW1lKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXRoZW1lKSByZXR1cm5cbiAgICBjb25zdCAkaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKVxuICAgICRodG1sLmNsYXNzTGlzdC5yZW1vdmUoJ2xpZ2h0JylcbiAgICAkaHRtbC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJylcbiAgICAkaHRtbC5jbGFzc0xpc3QucmVtb3ZlKCdkaW0nKVxuICAgICRodG1sLmNsYXNzTGlzdC5hZGQodGhlbWUudG9TdHJpbmcoKSlcbiAgfSwgW3RoZW1lXSlcblxuICByZXR1cm4gKFxuICAgIDxTdG9yZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdGhlbWUsIGNoYW5nZVRoZW1lIH19PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvU3RvcmVDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VTdGF0ZSIsIlN0b3JlQ29udGV4dCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbWUiLCJ0aGVtZVNldCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjaGFuZ2VUaGVtZSIsInNldEl0ZW0iLCIkaHRtbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInRvU3RyaW5nIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst StoreContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StoreContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsTUFBTUMsNkJBQWVELG9EQUFhQSxDQUFDO0FBRW5DLGlFQUFlQyxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHdpdHRlci1jbG9uZS8uL3N0b3JlL2luZGV4LmpzPzU2YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgU3RvcmVDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JlQ29udGV4dDtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJTdG9yZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/index.js\n");

/***/ }),

/***/ "./styles/app.css":
/*!************************!*\
  !*** ./styles/app.css ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();