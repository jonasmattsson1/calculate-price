/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/calculatorHelpers.js":
/*!**********************************!*\
  !*** ./src/calculatorHelpers.js ***!
  \**********************************/
/*! exports provided: isToday, getProductFee, getTodayRebate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isToday\", function() { return isToday; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProductFee\", function() { return getProductFee; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTodayRebate\", function() { return getTodayRebate; });\n/**\n * Checks if the passed date object match today\n * @param {Object} date \n * @returns {boolean}\n */\nvar isToday = function isToday(date) {\n  return new Date(date).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0);\n};\n/**\n * Takes an feeConfig object and an productType id, and return the fee\n * \n * @param {Object} feeConfig - Fee config object\n * @param {number} productTypeId - ProductType id\n * @return {number} - Fee amount\n */\n\nvar getProductFee = function getProductFee(feeConfig) {\n  var productTypeId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  return feeConfig.find(function (fee) {\n    return fee.id === productTypeId;\n  });\n};\n/**\n * Get the rebate of the day.\n * \n * @param {Date} date - Date object\n * @param {number} rebate - \n */\n\nvar getTodayRebate = function getTodayRebate(date, rebate) {\n  return isToday(date) ? rebate : 0;\n};\n\n//# sourceURL=webpack:///./src/calculatorHelpers.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: productFees, newRebate, userTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productFees\", function() { return productFees; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newRebate\", function() { return newRebate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userTypes\", function() { return userTypes; });\nvar productFees = [{\n  id: 0,\n  name: 'new',\n  amount: 25\n}, {\n  id: 1,\n  name: 'old',\n  amount: 35\n}];\nvar newRebate = 10;\nvar userTypes = [{\n  type: 'normal',\n  id: 0\n}, {\n  type: 'customer',\n  id: 1,\n  rebate: 5\n}];\n\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: calculatePrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculatePrice\", function() { return calculatePrice; });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n/* harmony import */ var _calculatorHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculatorHelpers.js */ \"./src/calculatorHelpers.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n/**\n * \n * @param {number} userType - Id of the userType\n * @param {*} productType - Id of the productType\n * @param {*} price - Product price\n * @param {*} publishedDate - Date object\n */\n\nvar calculatePrice = function calculatePrice(userType, productType, price, publishedDate) {\n  var calculatedPrice = 0;\n  _config_js__WEBPACK_IMPORTED_MODULE_0__[\"userTypes\"].map(function (user) {\n    var _user = _objectSpread({}, user),\n        id = _user.id,\n        _user$rebate = _user.rebate,\n        rebate = _user$rebate === void 0 ? 0 : _user$rebate; // Only handle right userType\n\n\n    if (id !== userType) {\n      return;\n    }\n\n    var productFee = Object(_calculatorHelpers_js__WEBPACK_IMPORTED_MODULE_1__[\"getProductFee\"])(_config_js__WEBPACK_IMPORTED_MODULE_0__[\"productFees\"], productType);\n    var todayRebate = productFee.name === \"new\" ? Object(_calculatorHelpers_js__WEBPACK_IMPORTED_MODULE_1__[\"getTodayRebate\"])(publishedDate, _config_js__WEBPACK_IMPORTED_MODULE_0__[\"newRebate\"]) : 0;\n    var rebates = rebate + todayRebate;\n    calculatedPrice = price + productFee.amount - rebates;\n  });\n  return calculatedPrice;\n}; // Expose calculatePrice to the global scope\n\nglobal.calculatePrice = calculatePrice;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });