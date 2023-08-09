/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/louis-hansel-Pizzeria.jpg */ \"./src/img/louis-hansel-Pizzeria.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/restaurantLogo.png */ \"./src/img/restaurantLogo.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html,\nbody {\n    width: 100vw;\n    height: 100vh;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n#content {\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-rows: 100px 1fr 50px;\n    row-gap: 10px;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-attachment: fixed;\n    background-size: cover;\n}\n\n* {\n    box-sizing: border-box;\n    padding: 0px;\n    margin: 0px;\n    box-sizing: border-box;\n}\n\na {\n    text-decoration: none;\n    color: black;\n}\n\n.restaurant-logo {\n    width: 70px;\n    height: auto;\n}\n\n.left-header {\n    display: flex;\n    align-items: center;\n}\n\n#header {\n    position: sticky;\n    display: grid;\n    grid-template-columns: 350px 1fr;\n    align-items: center;\n    -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);\n    -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);\n    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);\n    background-color: #fff;\n    padding: 0px 10px;\n    opacity: 0.9;\n}\n#header ul{\n    display: flex;\n    flex-wrap:wrap-reverse;\n    flex-direction: minmax(column, row);\n    justify-content: end;\n    gap: 2vw;\n    list-style: none;\n}\n\n#header button {\n    padding: 8px 10px;\n    width: 10vw;\n    min-width: 60px;\n    background-color: red;\n    color: white;\n    border: 1px solid black;\n    border-radius: 10px;\n    display: flex;\n    position: relative;\n    justify-content: center;\n    text-align: center;\n    transition: all 0.25s linear;\n}\n\n#header button:hover {\n    cursor: pointer;\n    border: 1px solid black;\n    scale: 1.1;\n}\n#header #active, \n#header #active:hover {\n    background-color: lightslategray;\n    margin-top: 5px;\n    scale: 1;\n    cursor: auto;\n}\n\n.center-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    overflow: scroll;\n}\n\n#footer {\n    display: flex;\n    justify-content: center;\n    height: 50px;\n    padding-top: 5px;\n    border-top: 3px solid red;\n    background-color: white;\n    opacity: 0.9;\n    font-size: 18px;\n}\n\n.card {\n    position: relative;\n    height: 200px;\n    width: 80vw;\n    min-width: 355px;\n    background: white;\n    display: grid;\n    grid-template-rows: 1fr 3fr;\n    grid-template-columns: 1fr 2fr;\n    border: 2px solid lightslategray;\n    border-radius: 10px;\n    column-gap: 10px;\n    padding: 0px 5px;\n    -webkit-box-shadow: 3px 4px 5px 0px rgba(0, 0, 0, 0.75);\n    -moz-box-shadow: 3px 4px 5px 0px rgba(0, 0, 0, 0.75);\n    box-shadow: 3px 4px 5px 0px rgba(0, 0, 0, 0.75);\n    overflow: auto;\n    transition: scale 0.3s 0.1s;\n    opacity: 0.95;\n}\n\n.card:hover  {\n    scale: 1.02;\n    transition-duration: 0.3s 0.1s;\n}\n\n.card-img {\n    position: relative;\n    grid-row: 1 / -1;\n    grid-column: 1 / 2;\n\n    width: 200px;\n    align-self: center;\n    justify-self: center;\n    border: 1px dotted lightslategray;\n}\n\n.card-title {\n    align-self: end;\n}\n\n.card-description {\n    overflow-y: scroll;\n    justify-self: center;\n    align-self: start;\n}\n\n\n.home-page {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n    background-position: center;\n    background-size: cover;\n    grid-template-columns: 1fr;\n    grid-template-rows: minmax(100px, 1fr) 2fr;\n    row-gap: 30px;\n}\n\n#home-name {\n    text-align: center;\n    align-self: end;\n    opacity: .9;\n}\n#home-name, #home-description {\n    opacity: 0.9;\n    background-color: #fff;\n    border: 2px solid lightslategray ;\n    border-radius: 10px;\n}\n#home-description {\n    align-self: start;\n    grid-area: 2 / 1;\n    padding: 20px 15px;\n}\n\n.home-page:hover, #contact-page:hover {\n    scale: 1.01;\n}\n\n.home-page, #contact-page {\n    margin-top: 20px;\n    padding: 10px;\n    background-color: white;\n    border: 2px solid lightslategray;\n    border-radius: 15px;\n    opacity: 0.97;\n    width: 80vw;\n    height: 90%;\n    display: grid;\n    transition: scale 0.5s 0.1s;\n}\n\n#contact-page {\n    text-align: center;\n    grid-template-rows: 80px 1fr 80px;\n}\n\n#pizza-boy {\n    width: 100%;\n    opacity: 1;\n    justify-self: center;\n    max-width: 550px;\n    height: auto;\n}\n\n.contact-greet {\n    align-self: end;\n    margin-bottom: 20px;\n    color: red;\n}\n\n.contact-phone {\n    margin-top: 20px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _js_makeBasicPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/makeBasicPage */ \"./src/js/makeBasicPage.js\");\n/* harmony import */ var _js_homePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/homePage */ \"./src/js/homePage.js\");\n/* harmony import */ var _js_addButtonEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/addButtonEvents */ \"./src/js/addButtonEvents.js\");\n\n\n\n\n\n(0,_js_makeBasicPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_js_homePage__WEBPACK_IMPORTED_MODULE_2__.homePage)()\n;(0,_js_addButtonEvents__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/js/addButtonEvents.js":
/*!***********************************!*\
  !*** ./src/js/addButtonEvents.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ \"./src/js/homePage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage */ \"./src/js/menuPage.js\");\n/* harmony import */ var _makeContact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeContact */ \"./src/js/makeContact.js\");\n\n\n\n\nconst makeEvent = function (buttonID, makingFx) {\n    const centerContent = document.querySelector('.center-content')\n    const button = document.querySelector(`#${buttonID}`)\n    button.onclick = function () {\n        centerContent.innerHTML = ''\n        const getRidActive = (function () {\n            const listButton = document.querySelectorAll('.header-button')\n            listButton.forEach(x => x.id = '')\n            return\n        })()\n        this.id = 'active'\n        makingFx()\n\n    }\n    return\n}\nconst addActive = function () {\n    const activeHome = document.querySelector('#home')\n    return activeHome.id = 'active'\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    makeEvent('menu', _menuPage__WEBPACK_IMPORTED_MODULE_1__.addMenuCards)\n    makeEvent('home', _homePage__WEBPACK_IMPORTED_MODULE_0__.homePage)\n    makeEvent('contact', _makeContact__WEBPACK_IMPORTED_MODULE_2__.makeContact)\n    addActive()\n    return\n}\n\n//# sourceURL=webpack://restaurant-page/./src/js/addButtonEvents.js?");

/***/ }),

/***/ "./src/js/addPreload.js":
/*!******************************!*\
  !*** ./src/js/addPreload.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_cheeseSticks_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/cheeseSticks.jpg */ \"./src/img/cheeseSticks.jpg\");\n/* harmony import */ var _img_louis_hansel_Pizzeria_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/louis-hansel-Pizzeria.jpg */ \"./src/img/louis-hansel-Pizzeria.jpg\");\n/* harmony import */ var _img_pasta_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/pasta.png */ \"./src/img/pasta.png\");\n/* harmony import */ var _img_pizza_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/pizza.png */ \"./src/img/pizza.png\");\n/* harmony import */ var _img_pizzaboy_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/pizzaboy.jpeg */ \"./src/img/pizzaboy.jpeg\");\n/* harmony import */ var _img_restaurantLogo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/restaurantLogo.png */ \"./src/img/restaurantLogo.png\");\n\n\n\n\n\n\n\nconst makeFetch = function (path) {\n    const preload = document.createElement('link')\n    preload.rel = 'prefetch'\n    preload.href = path\n\n    document.head.appendChild(preload)\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    makeFetch(_img_restaurantLogo_png__WEBPACK_IMPORTED_MODULE_5__)\n    makeFetch(_img_pizzaboy_jpeg__WEBPACK_IMPORTED_MODULE_4__)\n    makeFetch(_img_pizza_png__WEBPACK_IMPORTED_MODULE_3__)\n    makeFetch(_img_pasta_png__WEBPACK_IMPORTED_MODULE_2__)\n    makeFetch(_img_louis_hansel_Pizzeria_jpg__WEBPACK_IMPORTED_MODULE_1__)\n    makeFetch(_img_cheeseSticks_jpg__WEBPACK_IMPORTED_MODULE_0__)\n}\n\n//# sourceURL=webpack://restaurant-page/./src/js/addPreload.js?");

/***/ }),

/***/ "./src/js/easyFx.js":
/*!**************************!*\
  !*** ./src/js/easyFx.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeElementWithClass: () => (/* binding */ makeElementWithClass),\n/* harmony export */   makeElementWithID: () => (/* binding */ makeElementWithID)\n/* harmony export */ });\n\nconst makeElementWithClass = function (element, selectedClass) {\n    const newElement = document.createElement(element);\n    newElement.classList.add(selectedClass)\n    return newElement\n}\n\nconst makeElementWithID = function(element, pickID){\n    const newElement = document.createElement(element)\n    newElement.id = pickID\n    return newElement\n}\n\n//# sourceURL=webpack://restaurant-page/./src/js/easyFx.js?");

/***/ }),

/***/ "./src/js/homePage.js":
/*!****************************!*\
  !*** ./src/js/homePage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homePage: () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _easyFx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./easyFx */ \"./src/js/easyFx.js\");\n\n\n\nconst homePage = function () {\n    const centerContent = document.querySelector('.center-content')\n\n    const homeContent = (0,_easyFx__WEBPACK_IMPORTED_MODULE_0__.makeElementWithClass)('div', 'home-page')\n    const homeName = document.createElement('div')\n    homeName.id = 'home-name'\n\n    const welcome = document.createElement('h1')\n    welcome.textContent = `Welcome to Derogatory Danny's`\n    homeContent.appendChild(homeName)\n    homeName.appendChild(welcome)\n    \n    const description = document.createElement('h3')\n    description.textContent =  `Here at Danny's, we provide you the best service through our business practices. You will love all of our food.`\n    const newline = document.createElement('br')\n    const seperateDescription = document.createElement('h3')\n    seperateDescription.textContent = 'We have been in business since 1602. There is a reason why we have stayed around for so long.'\n\n    const descriptionBox = (0,_easyFx__WEBPACK_IMPORTED_MODULE_0__.makeElementWithID)('div', 'home-description')\n    descriptionBox.appendChild(description)\n    descriptionBox.appendChild(newline)\n    descriptionBox.appendChild(seperateDescription)\n    homeContent.appendChild(descriptionBox)\n\n    centerContent.appendChild(homeContent)\n    return\n}\n\n//# sourceURL=webpack://restaurant-page/./src/js/homePage.js?");

/***/ }),

/***/ "./src/js/makeBasicPage.js":
/*!*********************************!*\
  !*** ./src/js/makeBasicPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _easyFx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./easyFx */ \"./src/js/easyFx.js\");\n/* harmony import */ var _addPreload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addPreload */ \"./src/js/addPreload.js\");\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homePage */ \"./src/js/homePage.js\");\n/* harmony import */ var _img_restaurantLogo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/restaurantLogo.png */ \"./src/img/restaurantLogo.png\");\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n    (0,_addPreload__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n    const makeHeader = (function () {\n\n        const header = (0,_easyFx__WEBPACK_IMPORTED_MODULE_0__.makeElementWithID)('div', 'header')\n        content.append(header)\n\n        const leftHeader = (0,_easyFx__WEBPACK_IMPORTED_MODULE_0__.makeElementWithClass)('div', 'left-header')\n        header.appendChild(leftHeader)\n\n        const restaurantLogo = new Image()\n        restaurantLogo.src = _img_restaurantLogo_png__WEBPACK_IMPORTED_MODULE_3__\n        restaurantLogo.classList.add('restaurant-logo')\n        leftHeader.appendChild(restaurantLogo)\n\n        const restaurantName = document.createElement('h1')\n        restaurantName.textContent = 'Derogatory Danny'\n        leftHeader.appendChild(restaurantName)\n\n        const headerList = document.createElement('ul')\n\n        const makeLi = function (name) {\n            const listItem = document.createElement('li')\n            const listButton = (0,_easyFx__WEBPACK_IMPORTED_MODULE_0__.makeElementWithID)('button', name.toLowerCase())\n            listButton.classList.add('header-button')\n            listButton.textContent = name[0].toUpperCase() + name.substr(1).toLowerCase()\n            listItem.appendChild(listButton)\n            headerList.appendChild(listItem)\n        }\n        makeLi('Home')\n        makeLi('Menu')\n        makeLi('Contact')\n        header.appendChild(headerList)\n    })()\n\n    const centerContent = (0,_easyFx__WEBPACK_IMPORTED_MODULE_0__.makeElementWithClass)('div', 'center-content')\n    content.appendChild(centerContent)\n\n    const makeFooter = (function () {\n        const footer = (0,_easyFx__WEBPACK_IMPORTED_MODULE_0__.makeElementWithID)('div', 'footer')\n        const linkFooter = document.createElement('a')\n        linkFooter.href = 'https://www.youtube.com/watch?v=hxGOiiR9ZKg&ab_channel=CodeAesthetic'\n        linkFooter.textContent = 'Pierce Strutt | Github Repo'\n        content.appendChild(footer)\n        footer.appendChild(linkFooter)\n    })();\n});\n\n//# sourceURL=webpack://restaurant-page/./src/js/makeBasicPage.js?");

/***/ }),

/***/ "./src/js/makeContact.js":
/*!*******************************!*\
  !*** ./src/js/makeContact.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeContact: () => (/* binding */ makeContact)\n/* harmony export */ });\n/* harmony import */ var _easyFx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./easyFx */ \"./src/js/easyFx.js\");\n/* harmony import */ var _img_pizzaboy_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/pizzaboy.jpeg */ \"./src/img/pizzaboy.jpeg\");\n\n\n\n\nconst pizzaboy = new Image()\npizzaboy.src = _img_pizzaboy_jpeg__WEBPACK_IMPORTED_MODULE_1__\npizzaboy.id = 'pizza-boy'\n\nconst makeContact =  function () {\n    const centerContent = document.querySelector('.center-content')\n    const contactBox = (0,_easyFx__WEBPACK_IMPORTED_MODULE_0__.makeElementWithID)('div', 'contact-page')\n\n    const contactUs = (0,_easyFx__WEBPACK_IMPORTED_MODULE_0__.makeElementWithClass)('h1', 'contact-greet')\n    contactUs.textContent = 'Contact us now!'\n    const phoneNumber = (0,_easyFx__WEBPACK_IMPORTED_MODULE_0__.makeElementWithClass)('h2', 'contact-phone')\n    phoneNumber.textContent = '+1 123-999-9999'\n\n    contactBox.appendChild(contactUs)\n    contactBox.appendChild(pizzaboy)\n    contactBox.appendChild(phoneNumber)\n\n\n    centerContent.appendChild(contactBox)\n    return\n}\n\n//# sourceURL=webpack://restaurant-page/./src/js/makeContact.js?");

/***/ }),

/***/ "./src/js/menuPage.js":
/*!****************************!*\
  !*** ./src/js/menuPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addMenuCards: () => (/* binding */ addMenuCards)\n/* harmony export */ });\n/* harmony import */ var _easyFx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./easyFx */ \"./src/js/easyFx.js\");\n/* harmony import */ var _img_pizza_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/pizza.png */ \"./src/img/pizza.png\");\n/* harmony import */ var _img_pasta_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/pasta.png */ \"./src/img/pasta.png\");\n/* harmony import */ var _img_cheeseSticks_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/cheeseSticks.jpg */ \"./src/img/cheeseSticks.jpg\");\n\n\n\n\n\nconst makeCard = function (img, name, description) {\n    const newCard = (0,_easyFx__WEBPACK_IMPORTED_MODULE_0__.makeElementWithClass)('div', 'card')\n\n    const newImg = new Image()\n    newImg.src = img\n    newImg.classList.add('card-img')\n\n    const title = document.createElement('h2')\n    title.textContent = name\n    title.classList.add('card-title')\n\n    const newDescription = document.createElement('p')\n    newDescription.textContent = description\n    newDescription.classList.add('card-description')\n\n    newCard.appendChild(newImg)\n    newCard.appendChild(title)\n    newCard.appendChild(newDescription)\n\n    return newCard\n}\n\nconst addMenuCards = function () {\n    const centerContent = document.querySelector('.center-content')\n\n    const pizzaDescr = 'This is a famous dish equivalent to that of lorem ipsum. Everybody loves pizza. Including your mother. You would think my dick was made out of pizza. you stupid hoe.'\n    const pizzaCard = makeCard(_img_pizza_png__WEBPACK_IMPORTED_MODULE_1__, 'Italian Pizza', pizzaDescr)\n    const pastaDescr = 'Pasta is a versatile and beloved staple of Italian cuisine, consisting of dough made from wheat flour, water, and sometimes eggs. It comes in various shapes and sizes, each tailored to complement different sauces and dishes.'\n    const pastaCard = makeCard(_img_pasta_png__WEBPACK_IMPORTED_MODULE_2__, 'Pasta', pastaDescr)\n    const stickDescr = 'The cheese stick is typically seasoned with a blend of herbs and spices before being coated in a breadcrumb mixture, then fried or baked to achieve a satisfyingly crunchy exterior. When bitten into, the cheese stick reveals a delightful contrast between its crunchy outer layer and the gooey, melted cheese center. With its irresistible combination of textures and flavors, the cheese stick is a popular and indulgent treat enjoyed by people of all ages.'\n    const stickCard = makeCard(_img_cheeseSticks_jpg__WEBPACK_IMPORTED_MODULE_3__, 'Cheese Stick', stickDescr)\n\n\n    centerContent.appendChild(pizzaCard);\n    centerContent.appendChild(pastaCard);\n    centerContent.appendChild(stickCard)\n    return\n}\n\n//# sourceURL=webpack://restaurant-page/./src/js/menuPage.js?");

/***/ }),

/***/ "./src/img/cheeseSticks.jpg":
/*!**********************************!*\
  !*** ./src/img/cheeseSticks.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0fd39c3a971a977590b2.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/cheeseSticks.jpg?");

/***/ }),

/***/ "./src/img/louis-hansel-Pizzeria.jpg":
/*!*******************************************!*\
  !*** ./src/img/louis-hansel-Pizzeria.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bb7d7f5236b67993a485.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/louis-hansel-Pizzeria.jpg?");

/***/ }),

/***/ "./src/img/pasta.png":
/*!***************************!*\
  !*** ./src/img/pasta.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cba4ac44d770a357418f.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/pasta.png?");

/***/ }),

/***/ "./src/img/pizza.png":
/*!***************************!*\
  !*** ./src/img/pizza.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0b4104420e519447dfb7.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/pizza.png?");

/***/ }),

/***/ "./src/img/pizzaboy.jpeg":
/*!*******************************!*\
  !*** ./src/img/pizzaboy.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3fb1719c685dbb297ae4.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/pizzaboy.jpeg?");

/***/ }),

/***/ "./src/img/restaurantLogo.png":
/*!************************************!*\
  !*** ./src/img/restaurantLogo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"64c6dfd8bf530e5d2cba.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/restaurantLogo.png?");

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
/******/ 			"main": 0
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;