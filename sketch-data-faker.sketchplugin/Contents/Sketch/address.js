var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/commands/address.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/commands/address.js":
/*!*********************************!*\
  !*** ./src/commands/address.js ***!
  \*********************************/
/*! exports provided: onChangeLayerName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onChangeLayerName", function() { return onChangeLayerName; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");
var sketch = __webpack_require__(/*! sketch */ "sketch");

var DataSupplier = sketch.DataSupplier;

var util = __webpack_require__(/*! util */ "util");

var UI = __webpack_require__(/*! sketch/ui */ "sketch/ui");



var debugMode = _config__WEBPACK_IMPORTED_MODULE_0__["default"].debug;
function onChangeLayerName() {
  console.log('identifier', String(__command.identifier())); //console.log('identifier', __command);
  //console.log('process', process);

  var identifier = String(__command.identifier());
  console.log('identifier', identifier);

  switch (identifier) {
    case 'fullName':
      if (!debugMode) Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["googleAnalytics"])(context, 'Get Data', 'Faker', 'Full Name');
      break;

    default:
      break;
  }
}

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var config = {
  debug: false
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/*! exports provided: googleAnalytics */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nTypeError: /Users/paintedbicycle/Sites/sketch-data-faker/src/utilities.js: Duplicate declaration \"googleAnalytics\"\n\u001b[0m \u001b[90m 56 | \u001b[39m}\u001b[0m\n\u001b[0m \u001b[90m 57 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 58 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mfunction\u001b[39m googleAnalytics(context\u001b[33m,\u001b[39m category\u001b[33m,\u001b[39m action\u001b[33m,\u001b[39m label\u001b[33m,\u001b[39m value) {\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 59 | \u001b[39m  let trackingID \u001b[33m=\u001b[39m \u001b[32m'UA-129789160-1'\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 60 | \u001b[39m    uuidKey \u001b[33m=\u001b[39m \u001b[32m'google.analytics.uuid'\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 61 | \u001b[39m    uuid \u001b[33m=\u001b[39m \u001b[33mNSUserDefaults\u001b[39m\u001b[33m.\u001b[39mstandardUserDefaults()\u001b[33m.\u001b[39mobjectForKey(uuidKey)\u001b[33m;\u001b[39m\u001b[0m\n    at File.buildCodeFrameError (/Users/paintedbicycle/Sites/sketch-data-faker/node_modules/@babel/core/lib/transformation/file/file.js:261:12)\n    at Scope.checkBlockScopedCollisions (/Users/paintedbicycle/Sites/sketch-data-faker/node_modules/@babel/traverse/lib/scope/index.js:347:22)\n    at Scope.registerBinding (/Users/paintedbicycle/Sites/sketch-data-faker/node_modules/@babel/traverse/lib/scope/index.js:504:16)\n    at Scope.registerDeclaration (/Users/paintedbicycle/Sites/sketch-data-faker/node_modules/@babel/traverse/lib/scope/index.js:439:12)\n    at Object.BlockScoped (/Users/paintedbicycle/Sites/sketch-data-faker/node_modules/@babel/traverse/lib/scope/index.js:189:28)\n    at Object.newFn (/Users/paintedbicycle/Sites/sketch-data-faker/node_modules/@babel/traverse/lib/visitors.js:230:17)\n    at NodePath._call (/Users/paintedbicycle/Sites/sketch-data-faker/node_modules/@babel/traverse/lib/path/context.js:53:20)\n    at NodePath.call (/Users/paintedbicycle/Sites/sketch-data-faker/node_modules/@babel/traverse/lib/path/context.js:36:14)\n    at NodePath.visit (/Users/paintedbicycle/Sites/sketch-data-faker/node_modules/@babel/traverse/lib/path/context.js:88:12)\n    at TraversalContext.visitQueue (/Users/paintedbicycle/Sites/sketch-data-faker/node_modules/@babel/traverse/lib/context.js:118:16)\n    at TraversalContext.visitSingle (/Users/paintedbicycle/Sites/sketch-data-faker/node_modules/@babel/traverse/lib/context.js:90:19)\n    at TraversalContext.visit (/Users/paintedbicycle/Sites/sketch-data-faker/node_modules/@babel/traverse/lib/context.js:146:19)\n    at Function.traverse.node (/Users/paintedbicycle/Sites/sketch-data-faker/node_modules/@babel/traverse/lib/index.js:94:17)\n    at NodePath.visit (/Users/paintedbicycle/Sites/sketch-data-faker/node_modules/@babel/traverse/lib/path/context.js:95:18)\n    at TraversalContext.visitQueue (/Users/paintedbicycle/Sites/sketch-data-faker/node_modules/@babel/traverse/lib/context.js:118:16)\n    at TraversalContext.visitMultiple (/Users/paintedbicycle/Sites/sketch-data-faker/node_modules/@babel/traverse/lib/context.js:85:17)");

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ }),

/***/ "sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/ui");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onChangeLayerName'] = __skpm_run.bind(this, 'onChangeLayerName');
that['onRun'] = __skpm_run.bind(this, 'default');
that['onChangeLayerName'] = __skpm_run.bind(this, 'onChangeLayerName')

//# sourceMappingURL=address.js.map