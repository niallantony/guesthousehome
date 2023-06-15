/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./SongMyung-Regular.ttf */ "./src/SongMyung-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./GowunBatang-Regular.ttf */ "./src/GowunBatang-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./NanumMyeongjo-Regular.ttf */ "./src/NanumMyeongjo-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./our-story1.jpg */ "./src/our-story1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./our-story2.jpg */ "./src/our-story2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./our-story3.jpg */ "./src/our-story3.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./asset-1.png */ "./src/asset-1.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: korean-body;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
    font-family: korean-title;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

@font-face {
    font-family: title;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

#content {
    display:flex;
    flex-direction: column;
    height: 100%;
    background-color: var(--light);
}

.our-story {
    display: flex;
    position: relative;
}

.sidebar {
    border-right:1px solid var(--darker);
}

.sidebar em{
    margin: 0 1rem 0 1rem;
    position:sticky;
    top:0;
    margin:0;
    font-family: title,'Times New Roman', Times, serif;
    writing-mode: vertical-lr;
    width: 3rem;
    font-size: 3rem;
    background-color: var(--light);
    text-orientation: mixed;
    color: var(--darker);
    padding:3rem 1rem 0;
    letter-spacing: .5rem;
}

:root {
    --secondary: #E5F5E5;
    --darker: #358F5E;
    --main: #def0e8;
    --accent: #CF9576;
    --second-accent: #86D9FF;
    --light: #F5F5F5
}

html, body {
    margin:0;
    height: 100%;
}

.info {
    flex:auto;
    background-color: var(--light);
    padding-top:2rem;
    height:100%;
    display: grid;
    row-gap:1rem;
    grid-template-columns: repeat(auto-fill,minmax(300px,1fr));   
    max-height: fit-content;
}
 
.info div:first-of-type {
    display:inline;
    grid-column: 1 / 3 ;
    grid-row: span 2;
    object-fit: contain;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 38rem;
    filter: grayscale(50%);
}

.info div:nth-child(5) {
    display:inline;
    grid-column: 1 / -1;
    grid-column-end: -1;
    grid-row: span 2;
    object-fit: contain;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 38rem;
    filter: grayscale(50%);
}

.info div:nth-child(8) {
    display:inline;
    grid-column: 1 / 2;
    grid-row: span 2;
    object-fit: contain;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
    background-repeat: no-repeat;
    background-size: cover;
    height: 38rem;
    filter: grayscale(50%);
}


.info div:nth-child(6) {
    grid-column: 1;
}

.info .subtitle {
    font-family: title, 'Times New Roman', Times, serif;
    color: var(--darker);
    font-size: 3rem;
    align-self: flex-end;
    grid-column-end: -1;
    border-bottom: 1px solid var(--darker);
    padding: 0 2rem 1rem 2rem;
    text-align: right;
    padding-right: 2rem;
    text-transform: uppercase;
    min-width: fit-content;
}

.info .text {
    padding: 1rem;
    color: var(--darker);
    font-size: 1.1rem;
    letter-spacing: .2rem;
    font-family: title, 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.info div:nth-child(7) {
    grid-column: 1/ -1;
}

.container {
    height: 100%;
    background-color: var(--main);
    background: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
}

.side-image {
    height: 100%;
    width: 100%;
    object-fit: cover;
    filter:contrast(50%) saturate(160%) brightness(120%);
}

.title { 
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--light);
    margin: 3rem 3rem 12rem 3rem;
}

.title em{
    font-family: title,'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    text-align: center;
    line-height: min(30vw,10rem);
    font-size: min(20vw, 6rem);
    padding: 2rem;
    border: 1px solid var(--light);
}

hr {
    border: 1px solid white;
    margin: auto;
    padding: 0;
    width: 50%;
}

.korean {
    font-family: korean-title, serif;
    white-space: nowrap;
}

.header-buttons {
    display: flex;
    justify-content: center;
    padding:0;
    margin:0;
    background-color: var(--light);
    border-bottom:1px solid var(--darker);

}

.header-buttons button {
    background-color: var(--light);
    width:100%;
    border: none;
    padding: 1.2rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    height:100%;
    color:var(--darker);
    white-space: nowrap;
    font-family: title,'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

button:hover {
    background-color: var(--secondary);
}

button:active {
    filter:brightness(95%);
}

li {
    list-style-type: none;
    flex: 1;
    width:100%;
}

@media screen and (max-width: 830px) {
    .header-buttons {
        flex-direction: column;
        align-items: center;
    }
}

@media screen and (max-width:640px) {
    .info div {
        grid-column: 1/2;
    }
}

@media screen and (min-width:1200px) {
    .info div:nth-child(9) {
        grid-column:2 / -1;
        text-align: left;
    }

}

@media screen and (min-width:1680px) {
    .info div:nth-child(5) {
        grid-column: span 4;
        grid-column-end: -1;
    }
    .info div:nth-child(6) {
        grid-row: 4/span 2;
    }
}
@media screen and (min-width:1800px) {
    .info div {
        grid-column: span 2;
    }

}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: korean-body;\n    src: url(./SongMyung-Regular.ttf);\n}\n\n@font-face {\n    font-family: korean-title;\n    src: url(./GowunBatang-Regular.ttf);\n}\n\n@font-face {\n    font-family: title;\n    src: url(./NanumMyeongjo-Regular.ttf);\n}\n\n#content {\n    display:flex;\n    flex-direction: column;\n    height: 100%;\n    background-color: var(--light);\n}\n\n.our-story {\n    display: flex;\n    position: relative;\n}\n\n.sidebar {\n    border-right:1px solid var(--darker);\n}\n\n.sidebar em{\n    margin: 0 1rem 0 1rem;\n    position:sticky;\n    top:0;\n    margin:0;\n    font-family: title,'Times New Roman', Times, serif;\n    writing-mode: vertical-lr;\n    width: 3rem;\n    font-size: 3rem;\n    background-color: var(--light);\n    text-orientation: mixed;\n    color: var(--darker);\n    padding:3rem 1rem 0;\n    letter-spacing: .5rem;\n}\n\n:root {\n    --secondary: #E5F5E5;\n    --darker: #358F5E;\n    --main: #def0e8;\n    --accent: #CF9576;\n    --second-accent: #86D9FF;\n    --light: #F5F5F5\n}\n\nhtml, body {\n    margin:0;\n    height: 100%;\n}\n\n.info {\n    flex:auto;\n    background-color: var(--light);\n    padding-top:2rem;\n    height:100%;\n    display: grid;\n    row-gap:1rem;\n    grid-template-columns: repeat(auto-fill,minmax(300px,1fr));   \n    max-height: fit-content;\n}\n \n.info div:first-of-type {\n    display:inline;\n    grid-column: 1 / 3 ;\n    grid-row: span 2;\n    object-fit: contain;\n    background: url('./our-story1.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    height: 38rem;\n    filter: grayscale(50%);\n}\n\n.info div:nth-child(5) {\n    display:inline;\n    grid-column: 1 / -1;\n    grid-column-end: -1;\n    grid-row: span 2;\n    object-fit: contain;\n    background: url('./our-story2.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    height: 38rem;\n    filter: grayscale(50%);\n}\n\n.info div:nth-child(8) {\n    display:inline;\n    grid-column: 1 / 2;\n    grid-row: span 2;\n    object-fit: contain;\n    background: url('./our-story3.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    height: 38rem;\n    filter: grayscale(50%);\n}\n\n\n.info div:nth-child(6) {\n    grid-column: 1;\n}\n\n.info .subtitle {\n    font-family: title, 'Times New Roman', Times, serif;\n    color: var(--darker);\n    font-size: 3rem;\n    align-self: flex-end;\n    grid-column-end: -1;\n    border-bottom: 1px solid var(--darker);\n    padding: 0 2rem 1rem 2rem;\n    text-align: right;\n    padding-right: 2rem;\n    text-transform: uppercase;\n    min-width: fit-content;\n}\n\n.info .text {\n    padding: 1rem;\n    color: var(--darker);\n    font-size: 1.1rem;\n    letter-spacing: .2rem;\n    font-family: title, 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\n.info div:nth-child(7) {\n    grid-column: 1/ -1;\n}\n\n.container {\n    height: 100%;\n    background-color: var(--main);\n    background: url(./asset-1.png);\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: flex;\n    justify-content: center;\n}\n\n.side-image {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n    filter:contrast(50%) saturate(160%) brightness(120%);\n}\n\n.title { \n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    color: var(--light);\n    margin: 3rem 3rem 12rem 3rem;\n}\n\n.title em{\n    font-family: title,'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n    text-align: center;\n    line-height: min(30vw,10rem);\n    font-size: min(20vw, 6rem);\n    padding: 2rem;\n    border: 1px solid var(--light);\n}\n\nhr {\n    border: 1px solid white;\n    margin: auto;\n    padding: 0;\n    width: 50%;\n}\n\n.korean {\n    font-family: korean-title, serif;\n    white-space: nowrap;\n}\n\n.header-buttons {\n    display: flex;\n    justify-content: center;\n    padding:0;\n    margin:0;\n    background-color: var(--light);\n    border-bottom:1px solid var(--darker);\n\n}\n\n.header-buttons button {\n    background-color: var(--light);\n    width:100%;\n    border: none;\n    padding: 1.2rem;\n    font-size: 1.2rem;\n    text-transform: uppercase;\n    height:100%;\n    color:var(--darker);\n    white-space: nowrap;\n    font-family: title,'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\nbutton:hover {\n    background-color: var(--secondary);\n}\n\nbutton:active {\n    filter:brightness(95%);\n}\n\nli {\n    list-style-type: none;\n    flex: 1;\n    width:100%;\n}\n\n@media screen and (max-width: 830px) {\n    .header-buttons {\n        flex-direction: column;\n        align-items: center;\n    }\n}\n\n@media screen and (max-width:640px) {\n    .info div {\n        grid-column: 1/2;\n    }\n}\n\n@media screen and (min-width:1200px) {\n    .info div:nth-child(9) {\n        grid-column:2 / -1;\n        text-align: left;\n    }\n\n}\n\n@media screen and (min-width:1680px) {\n    .info div:nth-child(5) {\n        grid-column: span 4;\n        grid-column-end: -1;\n    }\n    .info div:nth-child(6) {\n        grid-row: 4/span 2;\n    }\n}\n@media screen and (min-width:1800px) {\n    .info div {\n        grid-column: span 2;\n    }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeHeader: () => (/* binding */ makeHeader)
/* harmony export */ });
/* harmony import */ var _ourstory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ourstory.js */ "./src/ourstory.js");


const makeHeader = () => {

    const makeButton = (buttonId) => {
        const listItem = document.createElement('li');
        header.appendChild(listItem);
        const buttonItem = document.createElement('button');
        buttonItem.id = buttonId;
        listItem.appendChild(buttonItem);
        return buttonItem;
    }

    const header = document.createElement('ul');
    header.classList.add('header-buttons');
    const ourStory = makeButton('ourStory');
    const enjoyStay = makeButton('enjoyStay');
    const exploreArea = makeButton('exploreArea');
    ourStory.textContent = 'Our Story';
    enjoyStay.textContent = 'Enjoy your Stay';
    exploreArea.textContent = 'Explore the Area';

    ourStory.addEventListener('click', _ourstory_js__WEBPACK_IMPORTED_MODULE_0__.ourStoryLoad );

    return {header};
}



/***/ }),

/***/ "./src/initial.js":
/*!************************!*\
  !*** ./src/initial.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialLoad: () => (/* binding */ initialLoad)
/* harmony export */ });
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/header.js");


const initialLoad = () => {


const content = document.getElementById('content');


// ourStory.addEventListener('click', );
// enjoyStay.addEventListener('click', );
// exploreArea.addEventListener('click', );
const header = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeHeader)();
const container = document.createElement('div');
container.classList.add('container');
const title = document.createElement('div');
title.classList.add('title');
title.innerHTML = '<em>ilhyeon cottage <hr><span class="korean">일현가옥</span></em>';
container.appendChild(title);

content.appendChild(header.header);
content.appendChild(container);
}



/***/ }),

/***/ "./src/ourstory.js":
/*!*************************!*\
  !*** ./src/ourstory.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ourStoryLoad: () => (/* binding */ ourStoryLoad)
/* harmony export */ });
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/header.js");


const ourStoryLoad = () => {
    const content = document.getElementById('content');
    content.innerHTML = '';
    const header = (0,_header_js__WEBPACK_IMPORTED_MODULE_0__.makeHeader)();
    content.appendChild(header.header);
    const ourStory = document.createElement('div');
    ourStory.classList.add('our-story');
    content.appendChild(ourStory);

    const sideBar = document.createElement('div');
    sideBar.classList.add('sidebar');
    sideBar.innerHTML = '<em>Ilhyun Cottage</em>';

    const info = document.createElement('div');
    info.classList.add('info');
    const divOrder = [
        {
            type: 'image',
            text: ''
        },
        {
            type: 'subtitle',
            text: 'What is Ilhyun Cottage?'
        },
        {
            type: 'text',
            text: 'Ilhyun Cottage is the work of Niall Craven and Seohyeon Kim. In 2022 they purchased a 70 year old Hanok house in a small village called Gugil-li near the historical Silla capital of Korea, Gyeongju. With a deep respect for the natural surroundings and the history of the house they worked to make a place where they could leave their own imprint in an area already so full of character.'
        },
        {
            type: 'text',
            text: 'Ilhyun Cottage is a place where we hope to share the things that we enjoy. We hope that visitors will be able to take pleasure in country life, surrounded by the sounds, sights and smells of a truly beautiful neighbourhood.'
        },
        {
            type: 'image',
            text: ''
        },
        {
            type: 'subtitle',
            text: 'A Work in Progress'
        },
        {
            type: 'text',
            text: "We don't believe that the renovation of Ilhyun Cottage is something that has a definitive end. In fact we believe that the process is ongoing, not only in the sense that an old structure such as this needs constant care and attention, but also in the sense that we hope the history of this building is something that will continue to be added to, both by us and our visitors. We very much see Ilhyun Cottage as an organic place, surrounded with life and possessing a life of its own, and we will continue to respect it as such."
        },
        {
            type: 'image',
            text: ''
        },
        {
            type: 'subtitle',
            text: 'Our Beliefs'
        },
        {
            type: 'text',
            text: 'We believe that Ilhyun Cottage can be a place for anybody to come and experience the recharging atmosphere of the countryside. We believe in living slowly, taking time to appreciate the joys of small day-to-day tasks which we usually take for advantage. While we tried to fit Ilhyun Cottage with enough conveniences to make anyone at home, we hope that visitors will try to get a taste of life in the countryside.'
        },
        {
            type: 'text',
            text: 'We do believe that the main purpose of Ilhyun Cottage is to provide a healing environment for guests to unwind, and have tried to accommodate for this as much as possible. We hope that visitors can escape their busy lives and slow down with fresh country air and natural surroundings.'
        }
    ]

    divOrder.forEach((div) => {
        const newDiv = document.createElement('div');
        newDiv.classList.add(div.type);
        newDiv.textContent = div.text;
        info.appendChild(newDiv);
    })

    ourStory.appendChild(sideBar);
    ourStory.appendChild(info);
}



/***/ }),

/***/ "./src/GowunBatang-Regular.ttf":
/*!*************************************!*\
  !*** ./src/GowunBatang-Regular.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5bb8c474edafaa216ee7.ttf";

/***/ }),

/***/ "./src/NanumMyeongjo-Regular.ttf":
/*!***************************************!*\
  !*** ./src/NanumMyeongjo-Regular.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "01893c39cd1a403ef0a5.ttf";

/***/ }),

/***/ "./src/SongMyung-Regular.ttf":
/*!***********************************!*\
  !*** ./src/SongMyung-Regular.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1bfcd536436055354fb6.ttf";

/***/ }),

/***/ "./src/asset-1.png":
/*!*************************!*\
  !*** ./src/asset-1.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4fadb71aeba7318531e3.png";

/***/ }),

/***/ "./src/our-story1.jpg":
/*!****************************!*\
  !*** ./src/our-story1.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b3cc6aa8692635bbeda.jpg";

/***/ }),

/***/ "./src/our-story2.jpg":
/*!****************************!*\
  !*** ./src/our-story2.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8cbabe427ac8f1ff81a9.jpg";

/***/ }),

/***/ "./src/our-story3.jpg":
/*!****************************!*\
  !*** ./src/our-story3.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d95a5b4f458eb3e597e.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial */ "./src/initial.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



function createContent() {
    const content = document.createElement('div');
    content.id = 'content';

    return content
}

document.body.appendChild(createContent());

(0,_initial__WEBPACK_IMPORTED_MODULE_0__.initialLoad)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFFBQVEsS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtB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VyIsInNvdXJjZXMiOlsid2VicGFjazovL2d1ZXN0aG91c2Vob21lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9ndWVzdGhvdXNlaG9tZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZ3Vlc3Rob3VzZWhvbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2d1ZXN0aG91c2Vob21lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZ3Vlc3Rob3VzZWhvbWUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZ3Vlc3Rob3VzZWhvbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZ3Vlc3Rob3VzZWhvbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2d1ZXN0aG91c2Vob21lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2d1ZXN0aG91c2Vob21lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2d1ZXN0aG91c2Vob21lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZ3Vlc3Rob3VzZWhvbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ndWVzdGhvdXNlaG9tZS8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZ3Vlc3Rob3VzZWhvbWUvLi9zcmMvaW5pdGlhbC5qcyIsIndlYnBhY2s6Ly9ndWVzdGhvdXNlaG9tZS8uL3NyYy9vdXJzdG9yeS5qcyIsIndlYnBhY2s6Ly9ndWVzdGhvdXNlaG9tZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ndWVzdGhvdXNlaG9tZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ndWVzdGhvdXNlaG9tZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ3Vlc3Rob3VzZWhvbWUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ndWVzdGhvdXNlaG9tZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2d1ZXN0aG91c2Vob21lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ3Vlc3Rob3VzZWhvbWUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZ3Vlc3Rob3VzZWhvbWUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZ3Vlc3Rob3VzZWhvbWUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2d1ZXN0aG91c2Vob21lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1NvbmdNeXVuZy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vR293dW5CYXRhbmctUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL05hbnVtTXllb25nam8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL291ci1zdG9yeTEuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9vdXItc3RvcnkyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4vb3VyLXN0b3J5My5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0LTEucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseToga29yZWFuLWJvZHk7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBrb3JlYW4tdGl0bGU7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiB0aXRsZTtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cblxuI2NvbnRlbnQge1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XG59XG5cbi5vdXItc3Rvcnkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2lkZWJhciB7XG4gICAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCB2YXIoLS1kYXJrZXIpO1xufVxuXG4uc2lkZWJhciBlbXtcbiAgICBtYXJnaW46IDAgMXJlbSAwIDFyZW07XG4gICAgcG9zaXRpb246c3RpY2t5O1xuICAgIHRvcDowO1xuICAgIG1hcmdpbjowO1xuICAgIGZvbnQtZmFtaWx5OiB0aXRsZSwnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG4gICAgd2lkdGg6IDNyZW07XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcbiAgICB0ZXh0LW9yaWVudGF0aW9uOiBtaXhlZDtcbiAgICBjb2xvcjogdmFyKC0tZGFya2VyKTtcbiAgICBwYWRkaW5nOjNyZW0gMXJlbSAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAuNXJlbTtcbn1cblxuOnJvb3Qge1xuICAgIC0tc2Vjb25kYXJ5OiAjRTVGNUU1O1xuICAgIC0tZGFya2VyOiAjMzU4RjVFO1xuICAgIC0tbWFpbjogI2RlZjBlODtcbiAgICAtLWFjY2VudDogI0NGOTU3NjtcbiAgICAtLXNlY29uZC1hY2NlbnQ6ICM4NkQ5RkY7XG4gICAgLS1saWdodDogI0Y1RjVGNVxufVxuXG5odG1sLCBib2R5IHtcbiAgICBtYXJnaW46MDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pbmZvIHtcbiAgICBmbGV4OmF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xuICAgIHBhZGRpbmctdG9wOjJyZW07XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICByb3ctZ2FwOjFyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLG1pbm1heCgzMDBweCwxZnIpKTsgICBcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cbiBcbi5pbmZvIGRpdjpmaXJzdC1vZi10eXBlIHtcbiAgICBkaXNwbGF5OmlubGluZTtcbiAgICBncmlkLWNvbHVtbjogMSAvIDMgO1xuICAgIGdyaWQtcm93OiBzcGFuIDI7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDM4cmVtO1xuICAgIGZpbHRlcjogZ3JheXNjYWxlKDUwJSk7XG59XG5cbi5pbmZvIGRpdjpudGgtY2hpbGQoNSkge1xuICAgIGRpc3BsYXk6aW5saW5lO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAtMTtcbiAgICBncmlkLXJvdzogc3BhbiAyO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzOHJlbTtcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSg1MCUpO1xufVxuXG4uaW5mbyBkaXY6bnRoLWNoaWxkKDgpIHtcbiAgICBkaXNwbGF5OmlubGluZTtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgZ3JpZC1yb3c6IHNwYW4gMjtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiAzOHJlbTtcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSg1MCUpO1xufVxuXG5cbi5pbmZvIGRpdjpudGgtY2hpbGQoNikge1xuICAgIGdyaWQtY29sdW1uOiAxO1xufVxuXG4uaW5mbyAuc3VidGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiB0aXRsZSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBjb2xvcjogdmFyKC0tZGFya2VyKTtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAtMTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFya2VyKTtcbiAgICBwYWRkaW5nOiAwIDJyZW0gMXJlbSAycmVtO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uaW5mbyAudGV4dCB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBjb2xvcjogdmFyKC0tZGFya2VyKTtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogLjJyZW07XG4gICAgZm9udC1mYW1pbHk6IHRpdGxlLCAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG4uaW5mbyBkaXY6bnRoLWNoaWxkKDcpIHtcbiAgICBncmlkLWNvbHVtbjogMS8gLTE7XG59XG5cbi5jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19ffSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zaWRlLWltYWdlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgZmlsdGVyOmNvbnRyYXN0KDUwJSkgc2F0dXJhdGUoMTYwJSkgYnJpZ2h0bmVzcygxMjAlKTtcbn1cblxuLnRpdGxlIHsgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodCk7XG4gICAgbWFyZ2luOiAzcmVtIDNyZW0gMTJyZW0gM3JlbTtcbn1cblxuLnRpdGxlIGVte1xuICAgIGZvbnQtZmFtaWx5OiB0aXRsZSwnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogbWluKDMwdncsMTByZW0pO1xuICAgIGZvbnQtc2l6ZTogbWluKDIwdncsIDZyZW0pO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQpO1xufVxuXG5ociB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLmtvcmVhbiB7XG4gICAgZm9udC1mYW1pbHk6IGtvcmVhbi10aXRsZSwgc2VyaWY7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmhlYWRlci1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6MDtcbiAgICBtYXJnaW46MDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0tZGFya2VyKTtcblxufVxuXG4uaGVhZGVyLWJ1dHRvbnMgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMS4ycmVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgY29sb3I6dmFyKC0tZGFya2VyKTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGZvbnQtZmFtaWx5OiB0aXRsZSwnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG59XG5cbmJ1dHRvbjphY3RpdmUge1xuICAgIGZpbHRlcjpicmlnaHRuZXNzKDk1JSk7XG59XG5cbmxpIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgZmxleDogMTtcbiAgICB3aWR0aDoxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MzBweCkge1xuICAgIC5oZWFkZXItYnV0dG9ucyB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjY0MHB4KSB7XG4gICAgLmluZm8gZGl2IHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTIwMHB4KSB7XG4gICAgLmluZm8gZGl2Om50aC1jaGlsZCg5KSB7XG4gICAgICAgIGdyaWQtY29sdW1uOjIgLyAtMTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNjgwcHgpIHtcbiAgICAuaW5mbyBkaXY6bnRoLWNoaWxkKDUpIHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IHNwYW4gNDtcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAtMTtcbiAgICB9XG4gICAgLmluZm8gZGl2Om50aC1jaGlsZCg2KSB7XG4gICAgICAgIGdyaWQtcm93OiA0L3NwYW4gMjtcbiAgICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjE4MDBweCkge1xuICAgIC5pbmZvIGRpdiB7XG4gICAgICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XG4gICAgfVxuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9z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O0FBRXpDOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsMkdBQTJHO0FBQy9HOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLE9BQU87SUFDUCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7O0FBRUo7O0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtRQUNuQixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKO0FBQ0E7SUFDSTtRQUNJLG1CQUFtQjtJQUN2Qjs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IGtvcmVhbi1ib2R5O1xcbiAgICBzcmM6IHVybCguL1NvbmdNeXVuZy1SZWd1bGFyLnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseToga29yZWFuLXRpdGxlO1xcbiAgICBzcmM6IHVybCguL0dvd3VuQmF0YW5nLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiB0aXRsZTtcXG4gICAgc3JjOiB1cmwoLi9OYW51bU15ZW9uZ2pvLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcbn1cXG5cXG4ub3VyLXN0b3J5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGJvcmRlci1yaWdodDoxcHggc29saWQgdmFyKC0tZGFya2VyKTtcXG59XFxuXFxuLnNpZGViYXIgZW17XFxuICAgIG1hcmdpbjogMCAxcmVtIDAgMXJlbTtcXG4gICAgcG9zaXRpb246c3RpY2t5O1xcbiAgICB0b3A6MDtcXG4gICAgbWFyZ2luOjA7XFxuICAgIGZvbnQtZmFtaWx5OiB0aXRsZSwnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbiAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XFxuICAgIHRleHQtb3JpZW50YXRpb246IG1peGVkO1xcbiAgICBjb2xvcjogdmFyKC0tZGFya2VyKTtcXG4gICAgcGFkZGluZzozcmVtIDFyZW0gMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cmVtO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tc2Vjb25kYXJ5OiAjRTVGNUU1O1xcbiAgICAtLWRhcmtlcjogIzM1OEY1RTtcXG4gICAgLS1tYWluOiAjZGVmMGU4O1xcbiAgICAtLWFjY2VudDogI0NGOTU3NjtcXG4gICAgLS1zZWNvbmQtYWNjZW50OiAjODZEOUZGO1xcbiAgICAtLWxpZ2h0OiAjRjVGNUY1XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBtYXJnaW46MDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uaW5mbyB7XFxuICAgIGZsZXg6YXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgICBwYWRkaW5nLXRvcDoycmVtO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcm93LWdhcDoxcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsbWlubWF4KDMwMHB4LDFmcikpOyAgIFxcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuIFxcbi5pbmZvIGRpdjpmaXJzdC1vZi10eXBlIHtcXG4gICAgZGlzcGxheTppbmxpbmU7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMyA7XFxuICAgIGdyaWQtcm93OiBzcGFuIDI7XFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9vdXItc3RvcnkxLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMzhyZW07XFxuICAgIGZpbHRlcjogZ3JheXNjYWxlKDUwJSk7XFxufVxcblxcbi5pbmZvIGRpdjpudGgtY2hpbGQoNSkge1xcbiAgICBkaXNwbGF5OmlubGluZTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAtMTtcXG4gICAgZ3JpZC1yb3c6IHNwYW4gMjtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuL291ci1zdG9yeTIuanBnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzOHJlbTtcXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoNTAlKTtcXG59XFxuXFxuLmluZm8gZGl2Om50aC1jaGlsZCg4KSB7XFxuICAgIGRpc3BsYXk6aW5saW5lO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiBzcGFuIDI7XFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9vdXItc3RvcnkzLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBoZWlnaHQ6IDM4cmVtO1xcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSg1MCUpO1xcbn1cXG5cXG5cXG4uaW5mbyBkaXY6bnRoLWNoaWxkKDYpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxufVxcblxcbi5pbmZvIC5zdWJ0aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiB0aXRsZSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLWRhcmtlcik7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogLTE7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrZXIpO1xcbiAgICBwYWRkaW5nOiAwIDJyZW0gMXJlbSAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLmluZm8gLnRleHQge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZGFya2VyKTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAuMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6IHRpdGxlLCAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uaW5mbyBkaXY6bnRoLWNoaWxkKDcpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvIC0xO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vYXNzZXQtMS5wbmcpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNpZGUtaW1hZ2Uge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgZmlsdGVyOmNvbnRyYXN0KDUwJSkgc2F0dXJhdGUoMTYwJSkgYnJpZ2h0bmVzcygxMjAlKTtcXG59XFxuXFxuLnRpdGxlIHsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgICBtYXJnaW46IDNyZW0gM3JlbSAxMnJlbSAzcmVtO1xcbn1cXG5cXG4udGl0bGUgZW17XFxuICAgIGZvbnQtZmFtaWx5OiB0aXRsZSwnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiBtaW4oMzB2dywxMHJlbSk7XFxuICAgIGZvbnQtc2l6ZTogbWluKDIwdncsIDZyZW0pO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodCk7XFxufVxcblxcbmhyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmtvcmVhbiB7XFxuICAgIGZvbnQtZmFtaWx5OiBrb3JlYW4tdGl0bGUsIHNlcmlmO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzowO1xcbiAgICBtYXJnaW46MDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCB2YXIoLS1kYXJrZXIpO1xcblxcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEuMnJlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGhlaWdodDoxMDAlO1xcbiAgICBjb2xvcjp2YXIoLS1kYXJrZXIpO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBmb250LWZhbWlseTogdGl0bGUsJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGZpbHRlcjpicmlnaHRuZXNzKDk1JSk7XFxufVxcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBmbGV4OiAxO1xcbiAgICB3aWR0aDoxMDAlO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MzBweCkge1xcbiAgICAuaGVhZGVyLWJ1dHRvbnMge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NDBweCkge1xcbiAgICAuaW5mbyBkaXYge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMDBweCkge1xcbiAgICAuaW5mbyBkaXY6bnRoLWNoaWxkKDkpIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOjIgLyAtMTtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIH1cXG5cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNjgwcHgpIHtcXG4gICAgLmluZm8gZGl2Om50aC1jaGlsZCg1KSB7XFxuICAgICAgICBncmlkLWNvbHVtbjogc3BhbiA0O1xcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAtMTtcXG4gICAgfVxcbiAgICAuaW5mbyBkaXY6bnRoLWNoaWxkKDYpIHtcXG4gICAgICAgIGdyaWQtcm93OiA0L3NwYW4gMjtcXG4gICAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjE4MDBweCkge1xcbiAgICAuaW5mbyBkaXYge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gICAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IG91clN0b3J5TG9hZCB9IGZyb20gXCIuL291cnN0b3J5LmpzXCI7XG5cbmNvbnN0IG1ha2VIZWFkZXIgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBtYWtlQnV0dG9uID0gKGJ1dHRvbklkKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICAgICAgY29uc3QgYnV0dG9uSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b25JdGVtLmlkID0gYnV0dG9uSWQ7XG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGJ1dHRvbkl0ZW0pO1xuICAgICAgICByZXR1cm4gYnV0dG9uSXRlbTtcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItYnV0dG9ucycpO1xuICAgIGNvbnN0IG91clN0b3J5ID0gbWFrZUJ1dHRvbignb3VyU3RvcnknKTtcbiAgICBjb25zdCBlbmpveVN0YXkgPSBtYWtlQnV0dG9uKCdlbmpveVN0YXknKTtcbiAgICBjb25zdCBleHBsb3JlQXJlYSA9IG1ha2VCdXR0b24oJ2V4cGxvcmVBcmVhJyk7XG4gICAgb3VyU3RvcnkudGV4dENvbnRlbnQgPSAnT3VyIFN0b3J5JztcbiAgICBlbmpveVN0YXkudGV4dENvbnRlbnQgPSAnRW5qb3kgeW91ciBTdGF5JztcbiAgICBleHBsb3JlQXJlYS50ZXh0Q29udGVudCA9ICdFeHBsb3JlIHRoZSBBcmVhJztcblxuICAgIG91clN0b3J5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3VyU3RvcnlMb2FkICk7XG5cbiAgICByZXR1cm4ge2hlYWRlcn07XG59XG5cbmV4cG9ydCB7bWFrZUhlYWRlcn07IiwiaW1wb3J0IHttYWtlSGVhZGVyfSBmcm9tICcuL2hlYWRlci5qcyc7XG5cbmNvbnN0IGluaXRpYWxMb2FkID0gKCkgPT4ge1xuXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5cbi8vIG91clN0b3J5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKTtcbi8vIGVuam95U3RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICk7XG4vLyBleHBsb3JlQXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICk7XG5jb25zdCBoZWFkZXIgPSBtYWtlSGVhZGVyKCk7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xudGl0bGUuaW5uZXJIVE1MID0gJzxlbT5pbGh5ZW9uIGNvdHRhZ2UgPGhyPjxzcGFuIGNsYXNzPVwia29yZWFuXCI+7J287ZiE6rCA7JilPC9zcGFuPjwvZW0+JztcbmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyLmhlYWRlcik7XG5jb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59XG5cbmV4cG9ydCB7aW5pdGlhbExvYWR9OyIsImltcG9ydCB7bWFrZUhlYWRlcn0gZnJvbSAnLi9oZWFkZXIuanMnO1xuXG5jb25zdCBvdXJTdG9yeUxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBoZWFkZXIgPSBtYWtlSGVhZGVyKCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIuaGVhZGVyKTtcbiAgICBjb25zdCBvdXJTdG9yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG91clN0b3J5LmNsYXNzTGlzdC5hZGQoJ291ci1zdG9yeScpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQob3VyU3RvcnkpO1xuXG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGVCYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuICAgIHNpZGVCYXIuaW5uZXJIVE1MID0gJzxlbT5JbGh5dW4gQ290dGFnZTwvZW0+JztcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcbiAgICBjb25zdCBkaXZPcmRlciA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICAgIHRleHQ6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdzdWJ0aXRsZScsXG4gICAgICAgICAgICB0ZXh0OiAnV2hhdCBpcyBJbGh5dW4gQ290dGFnZT8nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIHRleHQ6ICdJbGh5dW4gQ290dGFnZSBpcyB0aGUgd29yayBvZiBOaWFsbCBDcmF2ZW4gYW5kIFNlb2h5ZW9uIEtpbS4gSW4gMjAyMiB0aGV5IHB1cmNoYXNlZCBhIDcwIHllYXIgb2xkIEhhbm9rIGhvdXNlIGluIGEgc21hbGwgdmlsbGFnZSBjYWxsZWQgR3VnaWwtbGkgbmVhciB0aGUgaGlzdG9yaWNhbCBTaWxsYSBjYXBpdGFsIG9mIEtvcmVhLCBHeWVvbmdqdS4gV2l0aCBhIGRlZXAgcmVzcGVjdCBmb3IgdGhlIG5hdHVyYWwgc3Vycm91bmRpbmdzIGFuZCB0aGUgaGlzdG9yeSBvZiB0aGUgaG91c2UgdGhleSB3b3JrZWQgdG8gbWFrZSBhIHBsYWNlIHdoZXJlIHRoZXkgY291bGQgbGVhdmUgdGhlaXIgb3duIGltcHJpbnQgaW4gYW4gYXJlYSBhbHJlYWR5IHNvIGZ1bGwgb2YgY2hhcmFjdGVyLidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgdGV4dDogJ0lsaHl1biBDb3R0YWdlIGlzIGEgcGxhY2Ugd2hlcmUgd2UgaG9wZSB0byBzaGFyZSB0aGUgdGhpbmdzIHRoYXQgd2UgZW5qb3kuIFdlIGhvcGUgdGhhdCB2aXNpdG9ycyB3aWxsIGJlIGFibGUgdG8gdGFrZSBwbGVhc3VyZSBpbiBjb3VudHJ5IGxpZmUsIHN1cnJvdW5kZWQgYnkgdGhlIHNvdW5kcywgc2lnaHRzIGFuZCBzbWVsbHMgb2YgYSB0cnVseSBiZWF1dGlmdWwgbmVpZ2hib3VyaG9vZC4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICB0ZXh0OiAnJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnc3VidGl0bGUnLFxuICAgICAgICAgICAgdGV4dDogJ0EgV29yayBpbiBQcm9ncmVzcydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgdGV4dDogXCJXZSBkb24ndCBiZWxpZXZlIHRoYXQgdGhlIHJlbm92YXRpb24gb2YgSWxoeXVuIENvdHRhZ2UgaXMgc29tZXRoaW5nIHRoYXQgaGFzIGEgZGVmaW5pdGl2ZSBlbmQuIEluIGZhY3Qgd2UgYmVsaWV2ZSB0aGF0IHRoZSBwcm9jZXNzIGlzIG9uZ29pbmcsIG5vdCBvbmx5IGluIHRoZSBzZW5zZSB0aGF0IGFuIG9sZCBzdHJ1Y3R1cmUgc3VjaCBhcyB0aGlzIG5lZWRzIGNvbnN0YW50IGNhcmUgYW5kIGF0dGVudGlvbiwgYnV0IGFsc28gaW4gdGhlIHNlbnNlIHRoYXQgd2UgaG9wZSB0aGUgaGlzdG9yeSBvZiB0aGlzIGJ1aWxkaW5nIGlzIHNvbWV0aGluZyB0aGF0IHdpbGwgY29udGludWUgdG8gYmUgYWRkZWQgdG8sIGJvdGggYnkgdXMgYW5kIG91ciB2aXNpdG9ycy4gV2UgdmVyeSBtdWNoIHNlZSBJbGh5dW4gQ290dGFnZSBhcyBhbiBvcmdhbmljIHBsYWNlLCBzdXJyb3VuZGVkIHdpdGggbGlmZSBhbmQgcG9zc2Vzc2luZyBhIGxpZmUgb2YgaXRzIG93biwgYW5kIHdlIHdpbGwgY29udGludWUgdG8gcmVzcGVjdCBpdCBhcyBzdWNoLlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICB0ZXh0OiAnJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAnc3VidGl0bGUnLFxuICAgICAgICAgICAgdGV4dDogJ091ciBCZWxpZWZzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICB0ZXh0OiAnV2UgYmVsaWV2ZSB0aGF0IElsaHl1biBDb3R0YWdlIGNhbiBiZSBhIHBsYWNlIGZvciBhbnlib2R5IHRvIGNvbWUgYW5kIGV4cGVyaWVuY2UgdGhlIHJlY2hhcmdpbmcgYXRtb3NwaGVyZSBvZiB0aGUgY291bnRyeXNpZGUuIFdlIGJlbGlldmUgaW4gbGl2aW5nIHNsb3dseSwgdGFraW5nIHRpbWUgdG8gYXBwcmVjaWF0ZSB0aGUgam95cyBvZiBzbWFsbCBkYXktdG8tZGF5IHRhc2tzIHdoaWNoIHdlIHVzdWFsbHkgdGFrZSBmb3IgYWR2YW50YWdlLiBXaGlsZSB3ZSB0cmllZCB0byBmaXQgSWxoeXVuIENvdHRhZ2Ugd2l0aCBlbm91Z2ggY29udmVuaWVuY2VzIHRvIG1ha2UgYW55b25lIGF0IGhvbWUsIHdlIGhvcGUgdGhhdCB2aXNpdG9ycyB3aWxsIHRyeSB0byBnZXQgYSB0YXN0ZSBvZiBsaWZlIGluIHRoZSBjb3VudHJ5c2lkZS4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIHRleHQ6ICdXZSBkbyBiZWxpZXZlIHRoYXQgdGhlIG1haW4gcHVycG9zZSBvZiBJbGh5dW4gQ290dGFnZSBpcyB0byBwcm92aWRlIGEgaGVhbGluZyBlbnZpcm9ubWVudCBmb3IgZ3Vlc3RzIHRvIHVud2luZCwgYW5kIGhhdmUgdHJpZWQgdG8gYWNjb21tb2RhdGUgZm9yIHRoaXMgYXMgbXVjaCBhcyBwb3NzaWJsZS4gV2UgaG9wZSB0aGF0IHZpc2l0b3JzIGNhbiBlc2NhcGUgdGhlaXIgYnVzeSBsaXZlcyBhbmQgc2xvdyBkb3duIHdpdGggZnJlc2ggY291bnRyeSBhaXIgYW5kIG5hdHVyYWwgc3Vycm91bmRpbmdzLidcbiAgICAgICAgfVxuICAgIF1cblxuICAgIGRpdk9yZGVyLmZvckVhY2goKGRpdikgPT4ge1xuICAgICAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoZGl2LnR5cGUpO1xuICAgICAgICBuZXdEaXYudGV4dENvbnRlbnQgPSBkaXYudGV4dDtcbiAgICAgICAgaW5mby5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgIH0pXG5cbiAgICBvdXJTdG9yeS5hcHBlbmRDaGlsZChzaWRlQmFyKTtcbiAgICBvdXJTdG9yeS5hcHBlbmRDaGlsZChpbmZvKTtcbn1cblxuZXhwb3J0IHtvdXJTdG9yeUxvYWR9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgaW5pdGlhbExvYWQgfSBmcm9tIFwiLi9pbml0aWFsXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZnVuY3Rpb24gY3JlYXRlQ29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5pZCA9ICdjb250ZW50JztcblxuICAgIHJldHVybiBjb250ZW50XG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGVudCgpKTtcblxuaW5pdGlhbExvYWQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==