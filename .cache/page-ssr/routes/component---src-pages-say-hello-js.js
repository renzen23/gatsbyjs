"use strict";
exports.id = "component---src-pages-say-hello-js";
exports.ids = ["component---src-pages-say-hello-js"];
exports.modules = {

/***/ "./src/components/greeting.js":
/*!************************************!*\
  !*** ./src/components/greeting.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// Defining the <Greeting> component
const Greeting = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Hi ", props.name, "!");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Greeting);

/***/ }),

/***/ "./src/pages/say-hello.js?export=default":
/*!***********************************************!*\
  !*** ./src/pages/say-hello.js?export=default ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_greeting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/greeting */ "./src/components/greeting.js");



// Rendering the <Greeting> component
const SayHello = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_greeting__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "Megan"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_greeting__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "Obinna"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_greeting__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "Generosa"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SayHello);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-say-hello-js.js.map