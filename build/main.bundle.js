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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * a function that resolves after 2 seconds
 * @param message
 */
const waitFunction = message => new Promise(resolve => {
    setTimeout(() => {
        resolve(message);
    }, 2000);
});

/* harmony default export */ __webpack_exports__["a"] = (waitFunction);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nestedPromises__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__asyncAwait__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asyncAwaitWithErrorHandler__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__promiseAll__ = __webpack_require__(6);





// this is better than callback hell but can get confusing as more promises are nested
Object(__WEBPACK_IMPORTED_MODULE_0__nestedPromises__["a" /* default */])();

// async await cleans it up and makes it much more readable
Object(__WEBPACK_IMPORTED_MODULE_1__asyncAwait__["a" /* default */])();

// promise all can be use to run multiple promises at the same time. However, the try/catch will be the same.
Object(__WEBPACK_IMPORTED_MODULE_3__promiseAll__["a" /* default */])();

// a helper higher order function can be used to catch errors instead of a try catch as above
Object(__WEBPACK_IMPORTED_MODULE_2__asyncAwaitWithErrorHandler__["a" /* default */])();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_waitFunction__ = __webpack_require__(0);


/**
 * these are nested promises. They get very messy the more you have.
 */
const nestedPromises = () => {
    Object(__WEBPACK_IMPORTED_MODULE_0__common_waitFunction__["a" /* default */])("hello").then(result => {
        Object(__WEBPACK_IMPORTED_MODULE_0__common_waitFunction__["a" /* default */])("world").then(result2 => {
            console.log(result + " " + result2);
        })
    })
};

/* harmony default export */ __webpack_exports__["a"] = (nestedPromises);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_waitFunction__ = __webpack_require__(0);


/**
 * an example of async await
 * @returns {Promise.<void>}
 */
const asyncAwait = async () => {

    // assigns value resolved to const
    try {
        const messageOne = await Object(__WEBPACK_IMPORTED_MODULE_0__common_waitFunction__["a" /* default */])("hello");
        const messageTwo = await Object(__WEBPACK_IMPORTED_MODULE_0__common_waitFunction__["a" /* default */])("world");

        // prints out hello world
        console.log(messageOne + " " + messageTwo);
    } catch (error) {
        console.log("error1", error);
    }

};

/* harmony default export */ __webpack_exports__["a"] = (asyncAwait);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_errorHandler__ = __webpack_require__(5);


/**
 * throws an error
 */
const throwError = () => new Promise((resolve, reject) => reject("Error thrown in throwError"));

/**
 * a higher order function errorHandler can be used to remove the need for try catch statements
 * @returns {Promise.<void>}
 */
const asyncAwaitWithErrorHandler = async () => {

    // assigns value resolved to const
    const [error, data] = await Object(__WEBPACK_IMPORTED_MODULE_0__common_errorHandler__["a" /* default */])(throwError());

    if(error){
        console.log(error);
    }
};

/* harmony default export */ __webpack_exports__["a"] = (asyncAwaitWithErrorHandler);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * handles errors in async functions
 * @param promise
 * returns an array. first item is an error second is the result
 */
const errorHandler = promise => promise.then(data =>  [null, data]).catch(err => [err]);

/* harmony default export */ __webpack_exports__["a"] = (errorHandler);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_waitFunction__ = __webpack_require__(0);


/**
 * an example of using promise.all with async await
 * @returns {Promise.<void>}
 */
const promiseAll = async () => {
    const [a, b] = await Promise.all([
        Object(__WEBPACK_IMPORTED_MODULE_0__common_waitFunction__["a" /* default */])("promise"),
        Object(__WEBPACK_IMPORTED_MODULE_0__common_waitFunction__["a" /* default */])("all")
    ]).catch(error => {
        console.log("promiseAll error", error);
    });

    console.log("promiseAll a: ", a);
    console.log("promiseAll b: ", b);
};

/* harmony default export */ __webpack_exports__["a"] = (promiseAll);

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map