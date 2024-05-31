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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n// pages/_app.js\n\n\n\n// Custom error handler component\nclass MyApp extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {\n    static async getInitialProps({ Component, ctx }) {\n        let pageProps = {};\n        if (Component.getInitialProps) {\n            pageProps = await Component.getInitialProps(ctx);\n        }\n        return {\n            pageProps\n        };\n    }\n    componentDidCatch(error, errorInfo) {\n        // Custom error handling logic\n        if (error.message.includes(\"Failed to execute 'end' on 'TimeRanges'\") || error.message.includes(\"IndexSizeError\")) {\n            // Suppress the specific error\n            console.warn(\"Suppressed an IndexSizeError\");\n        } else {\n            // Log other errors\n            super.componentDidCatch(error, errorInfo);\n        }\n    }\n    render() {\n        const { Component, pageProps } = this.props;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/kadenmiller/Desktop/Coding/GitHub/vbs_song_player/pages/_app.js\",\n            lineNumber: 32,\n            columnNumber: 12\n        }, this);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxnQkFBZ0I7O0FBQ2M7QUFFVztBQUV6QyxpQ0FBaUM7QUFDakMsTUFBTUUsY0FBY0Ysd0RBQWU7SUFDakMsYUFBYUksZ0JBQWdCLEVBQUVELFNBQVMsRUFBRUUsR0FBRyxFQUFFLEVBQUU7UUFDL0MsSUFBSUMsWUFBWSxDQUFDO1FBQ2pCLElBQUlILFVBQVVDLGVBQWUsRUFBRTtZQUM3QkUsWUFBWSxNQUFNSCxVQUFVQyxlQUFlLENBQUNDO1FBQzlDO1FBQ0EsT0FBTztZQUFFQztRQUFVO0lBQ3JCO0lBRUFDLGtCQUFrQkMsS0FBSyxFQUFFQyxTQUFTLEVBQUU7UUFDbEMsOEJBQThCO1FBQzlCLElBQ0VELE1BQU1FLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDLDhDQUN2QkgsTUFBTUUsT0FBTyxDQUFDQyxRQUFRLENBQUMsbUJBQ3ZCO1lBQ0EsOEJBQThCO1lBQzlCQyxRQUFRQyxJQUFJLENBQUM7UUFDZixPQUFPO1lBQ0wsbUJBQW1CO1lBQ25CLEtBQUssQ0FBQ04sa0JBQWtCQyxPQUFPQztRQUNqQztJQUNGO0lBRUFLLFNBQVM7UUFDUCxNQUFNLEVBQUVYLFNBQVMsRUFBRUcsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDUyxLQUFLO1FBQzNDLHFCQUFPLDhEQUFDWjtZQUFXLEdBQUdHLFNBQVM7Ozs7OztJQUNqQztBQUNGO0FBRUEsaUVBQWVKLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92YnNfc29uZ19wbGF5ZXIvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvX2FwcC5qc1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbC5jc3NcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBDdXN0b20gZXJyb3IgaGFuZGxlciBjb21wb25lbnRcbmNsYXNzIE15QXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IENvbXBvbmVudCwgY3R4IH0pIHtcbiAgICBsZXQgcGFnZVByb3BzID0ge307XG4gICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICB9XG4gICAgcmV0dXJuIHsgcGFnZVByb3BzIH07XG4gIH1cblxuICBjb21wb25lbnREaWRDYXRjaChlcnJvciwgZXJyb3JJbmZvKSB7XG4gICAgLy8gQ3VzdG9tIGVycm9yIGhhbmRsaW5nIGxvZ2ljXG4gICAgaWYgKFxuICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcyhcIkZhaWxlZCB0byBleGVjdXRlICdlbmQnIG9uICdUaW1lUmFuZ2VzJ1wiKSB8fFxuICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcyhcIkluZGV4U2l6ZUVycm9yXCIpXG4gICAgKSB7XG4gICAgICAvLyBTdXBwcmVzcyB0aGUgc3BlY2lmaWMgZXJyb3JcbiAgICAgIGNvbnNvbGUud2FybihcIlN1cHByZXNzZWQgYW4gSW5kZXhTaXplRXJyb3JcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExvZyBvdGhlciBlcnJvcnNcbiAgICAgIHN1cGVyLmNvbXBvbmVudERpZENhdGNoKGVycm9yLCBlcnJvckluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJwYWdlUHJvcHMiLCJjb21wb25lbnREaWRDYXRjaCIsImVycm9yIiwiZXJyb3JJbmZvIiwibWVzc2FnZSIsImluY2x1ZGVzIiwiY29uc29sZSIsIndhcm4iLCJyZW5kZXIiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
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