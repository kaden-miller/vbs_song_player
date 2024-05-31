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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _madzadev_audio_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @madzadev/audio-player */ \"./node_modules/@madzadev/audio-player/dist/audio-player.js\");\n/* harmony import */ var _madzadev_audio_player_dist_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @madzadev/audio-player/dist/index.css */ \"./node_modules/@madzadev/audio-player/dist/style.css\");\n/* harmony import */ var _madzadev_audio_player_dist_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_madzadev_audio_player_dist_index_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst tracks = [\n    {\n        url: \"/assets/01_Camp_Firelight.mp3\",\n        title: \"Camp Firelight\",\n        tags: [\n            \"VBS 2024\"\n        ]\n    },\n    {\n        url: \"/assets/02_Firelight_Chant.mp3\",\n        title: \"Firelight Chant\",\n        tags: [\n            \"VBS 2024\"\n        ]\n    },\n    {\n        url: \"/assets/03_Trust_In_You.mp3\",\n        title: \"Trust In You\",\n        tags: [\n            \"VBS 2024\"\n        ]\n    },\n    {\n        url: \"/assets/04_Go_Go_Go_With_Us.mp3\",\n        title: \"Go Go Go With Us\",\n        tags: [\n            \"VBS 2024\"\n        ]\n    },\n    {\n        url: \"/assets/05_Where_You_Lead.mp3\",\n        title: \"Where You Lead\",\n        tags: [\n            \"VBS 2024\"\n        ]\n    },\n    {\n        url: \"/assets/06_W-I-S-E.mp3\",\n        title: \"W-I-S-E\",\n        tags: [\n            \"VBS 2024\"\n        ]\n    },\n    {\n        url: \"/assets/07_Peace_Sweet_Peace.mp3\",\n        title: \"Peace Sweet Peace\",\n        tags: [\n            \"VBS 2024\"\n        ]\n    },\n    {\n        url: \"/assets/08_Beautiful_Day.mp3\",\n        title: \"Beautiful Day\",\n        tags: [\n            \"VBS 2024\"\n        ]\n    },\n    {\n        url: \"/assets/09_Trust_And_Follow_You.mp3\",\n        title: \"Trust And Follow You\",\n        tags: [\n            \"VBS 2024\"\n        ]\n    },\n    {\n        url: \"/assets/10_What_Trust_Looks_Like.mp3\",\n        title: \"What Trust Looks Like\",\n        tags: [\n            \"VBS 2024\"\n        ]\n    }\n];\nfunction Home() {\n    _s();\n    const [isLoaded, setIsLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const promises = tracks.map((track)=>fetch(track.url).then((response)=>{\n                if (!response.ok) {\n                    throw new Error(\"Failed to load \".concat(track.title));\n                }\n            }).catch((error)=>{\n                console.error(error.message);\n            }));\n        Promise.all(promises).then(()=>{\n            setIsLoaded(true);\n        }).catch((error)=>{\n            console.error(error.message);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-10/12 flex flex-wrap justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center w-full\",\n                children: \"VBS Songs\"\n            }, void 0, false, {\n                fileName: \"/Users/kadenmiller/Desktop/Coding/GitHub/vbs_song_player/pages/index.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"player-wrapper\",\n                children: isLoaded ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_madzadev_audio_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    trackList: tracks,\n                    includeTags: false,\n                    includeSearch: false,\n                    showPlaylist: true,\n                    sortTracks: false,\n                    autoPlayNextTrack: false\n                }, void 0, false, {\n                    fileName: \"/Users/kadenmiller/Desktop/Coding/GitHub/vbs_song_player/pages/index.js\",\n                    lineNumber: 89,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"/Users/kadenmiller/Desktop/Coding/GitHub/vbs_song_player/pages/index.js\",\n                    lineNumber: 98,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kadenmiller/Desktop/Coding/GitHub/vbs_song_player/pages/index.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kadenmiller/Desktop/Coding/GitHub/vbs_song_player/pages/index.js\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"j17ntJOBCN3HAQb5OwSlcy91gsY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1A7QUFDRztBQUUvQyxNQUFNSSxTQUFTO0lBQ2I7UUFDRUMsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLE1BQU07WUFBQztTQUFXO0lBQ3BCO0lBQ0E7UUFDRUYsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLE1BQU07WUFBQztTQUFXO0lBQ3BCO0lBQ0E7UUFDRUYsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLE1BQU07WUFBQztTQUFXO0lBQ3BCO0lBQ0E7UUFDRUYsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLE1BQU07WUFBQztTQUFXO0lBQ3BCO0lBQ0E7UUFDRUYsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLE1BQU07WUFBQztTQUFXO0lBQ3BCO0lBQ0E7UUFDRUYsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLE1BQU07WUFBQztTQUFXO0lBQ3BCO0lBQ0E7UUFDRUYsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLE1BQU07WUFBQztTQUFXO0lBQ3BCO0lBQ0E7UUFDRUYsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLE1BQU07WUFBQztTQUFXO0lBQ3BCO0lBQ0E7UUFDRUYsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLE1BQU07WUFBQztTQUFXO0lBQ3BCO0lBQ0E7UUFDRUYsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLE1BQU07WUFBQztTQUFXO0lBQ3BCO0NBQ0Q7QUFFYyxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1UsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUVuQ0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNVyxXQUFXVCxPQUFPVSxHQUFHLENBQUMsQ0FBQ0MsUUFDM0JDLE1BQU1ELE1BQU1WLEdBQUcsRUFDWlksSUFBSSxDQUFDLENBQUNDO2dCQUNMLElBQUksQ0FBQ0EsU0FBU0MsRUFBRSxFQUFFO29CQUNoQixNQUFNLElBQUlDLE1BQU0sa0JBQThCLE9BQVpMLE1BQU1ULEtBQUs7Z0JBQy9DO1lBQ0YsR0FDQ2UsS0FBSyxDQUFDLENBQUNWO2dCQUNOVyxRQUFRWCxLQUFLLENBQUNBLE1BQU1ZLE9BQU87WUFDN0I7UUFHSkMsUUFBUUMsR0FBRyxDQUFDWixVQUNUSSxJQUFJLENBQUM7WUFDSlAsWUFBWTtRQUNkLEdBQ0NXLEtBQUssQ0FBQyxDQUFDVjtZQUNOVyxRQUFRWCxLQUFLLENBQUNBLE1BQU1ZLE9BQU87UUFDN0I7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFxQjs7Ozs7OzBCQUNuQyw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1psQix5QkFDQyw4REFBQ04sOERBQU1BO29CQUNMMEIsV0FBV3pCO29CQUNYMEIsYUFBYTtvQkFDYkMsZUFBZTtvQkFDZkMsY0FBYztvQkFDZEMsWUFBWTtvQkFDWkMsbUJBQW1COzs7Ozt5Q0FHckIsOERBQUNDOzhCQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtiO0dBN0N3QjNCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIkBtYWR6YWRldi9hdWRpby1wbGF5ZXJcIjtcbmltcG9ydCBcIkBtYWR6YWRldi9hdWRpby1wbGF5ZXIvZGlzdC9pbmRleC5jc3NcIjtcblxuY29uc3QgdHJhY2tzID0gW1xuICB7XG4gICAgdXJsOiBcIi9hc3NldHMvMDFfQ2FtcF9GaXJlbGlnaHQubXAzXCIsXG4gICAgdGl0bGU6IFwiQ2FtcCBGaXJlbGlnaHRcIixcbiAgICB0YWdzOiBbXCJWQlMgMjAyNFwiXSxcbiAgfSxcbiAge1xuICAgIHVybDogXCIvYXNzZXRzLzAyX0ZpcmVsaWdodF9DaGFudC5tcDNcIixcbiAgICB0aXRsZTogXCJGaXJlbGlnaHQgQ2hhbnRcIixcbiAgICB0YWdzOiBbXCJWQlMgMjAyNFwiXSxcbiAgfSxcbiAge1xuICAgIHVybDogXCIvYXNzZXRzLzAzX1RydXN0X0luX1lvdS5tcDNcIixcbiAgICB0aXRsZTogXCJUcnVzdCBJbiBZb3VcIixcbiAgICB0YWdzOiBbXCJWQlMgMjAyNFwiXSxcbiAgfSxcbiAge1xuICAgIHVybDogXCIvYXNzZXRzLzA0X0dvX0dvX0dvX1dpdGhfVXMubXAzXCIsXG4gICAgdGl0bGU6IFwiR28gR28gR28gV2l0aCBVc1wiLFxuICAgIHRhZ3M6IFtcIlZCUyAyMDI0XCJdLFxuICB9LFxuICB7XG4gICAgdXJsOiBcIi9hc3NldHMvMDVfV2hlcmVfWW91X0xlYWQubXAzXCIsXG4gICAgdGl0bGU6IFwiV2hlcmUgWW91IExlYWRcIixcbiAgICB0YWdzOiBbXCJWQlMgMjAyNFwiXSxcbiAgfSxcbiAge1xuICAgIHVybDogXCIvYXNzZXRzLzA2X1ctSS1TLUUubXAzXCIsXG4gICAgdGl0bGU6IFwiVy1JLVMtRVwiLFxuICAgIHRhZ3M6IFtcIlZCUyAyMDI0XCJdLFxuICB9LFxuICB7XG4gICAgdXJsOiBcIi9hc3NldHMvMDdfUGVhY2VfU3dlZXRfUGVhY2UubXAzXCIsXG4gICAgdGl0bGU6IFwiUGVhY2UgU3dlZXQgUGVhY2VcIixcbiAgICB0YWdzOiBbXCJWQlMgMjAyNFwiXSxcbiAgfSxcbiAge1xuICAgIHVybDogXCIvYXNzZXRzLzA4X0JlYXV0aWZ1bF9EYXkubXAzXCIsXG4gICAgdGl0bGU6IFwiQmVhdXRpZnVsIERheVwiLFxuICAgIHRhZ3M6IFtcIlZCUyAyMDI0XCJdLFxuICB9LFxuICB7XG4gICAgdXJsOiBcIi9hc3NldHMvMDlfVHJ1c3RfQW5kX0ZvbGxvd19Zb3UubXAzXCIsXG4gICAgdGl0bGU6IFwiVHJ1c3QgQW5kIEZvbGxvdyBZb3VcIixcbiAgICB0YWdzOiBbXCJWQlMgMjAyNFwiXSxcbiAgfSxcbiAge1xuICAgIHVybDogXCIvYXNzZXRzLzEwX1doYXRfVHJ1c3RfTG9va3NfTGlrZS5tcDNcIixcbiAgICB0aXRsZTogXCJXaGF0IFRydXN0IExvb2tzIExpa2VcIixcbiAgICB0YWdzOiBbXCJWQlMgMjAyNFwiXSxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcHJvbWlzZXMgPSB0cmFja3MubWFwKCh0cmFjaykgPT5cbiAgICAgIGZldGNoKHRyYWNrLnVybClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCAke3RyYWNrLnRpdGxlfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIFByb21pc2UuYWxsKHByb21pc2VzKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBzZXRJc0xvYWRlZCh0cnVlKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwLzEyIGZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdy1mdWxsXCI+VkJTIFNvbmdzPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVyLXdyYXBwZXJcIj5cbiAgICAgICAge2lzTG9hZGVkID8gKFxuICAgICAgICAgIDxQbGF5ZXJcbiAgICAgICAgICAgIHRyYWNrTGlzdD17dHJhY2tzfVxuICAgICAgICAgICAgaW5jbHVkZVRhZ3M9e2ZhbHNlfVxuICAgICAgICAgICAgaW5jbHVkZVNlYXJjaD17ZmFsc2V9XG4gICAgICAgICAgICBzaG93UGxheWxpc3Q9e3RydWV9XG4gICAgICAgICAgICBzb3J0VHJhY2tzPXtmYWxzZX1cbiAgICAgICAgICAgIGF1dG9QbGF5TmV4dFRyYWNrPXtmYWxzZX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUGxheWVyIiwidHJhY2tzIiwidXJsIiwidGl0bGUiLCJ0YWdzIiwiSG9tZSIsImlzTG9hZGVkIiwic2V0SXNMb2FkZWQiLCJlcnJvciIsInNldEVycm9yIiwicHJvbWlzZXMiLCJtYXAiLCJ0cmFjayIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsImNhdGNoIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJQcm9taXNlIiwiYWxsIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ0cmFja0xpc3QiLCJpbmNsdWRlVGFncyIsImluY2x1ZGVTZWFyY2giLCJzaG93UGxheWxpc3QiLCJzb3J0VHJhY2tzIiwiYXV0b1BsYXlOZXh0VHJhY2siLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});