"use strict";
exports.id = "component---src-pages-blog-blog-js";
exports.ids = ["component---src-pages-blog-blog-js"];
exports.modules = {

/***/ "./src/pages/blog/blog.js?export=default":
/*!***********************************************!*\
  !*** ./src/pages/blog/blog.js?export=default ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../components/layout'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../components/seo'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const BlogPage = ({
  data
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../components/layout'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    pageTitle: "My Blog Posts"
  }, data.allMdx.nodes.map(node => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article", {
    key: node.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, node.frontmatter.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Posted: ", node.frontmatter.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, node.excerpt))));
};
const query = "3803146764";
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../components/seo'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
  title: "My Blog Posts"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-blog-blog-js.js.map