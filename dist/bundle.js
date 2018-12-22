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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n//#region Creating Observables\n//\n// let allBooksObservable$ = Observable.create(subscriber => {\n//\n//     if (document.title !== 'RxBookTracker'){\n//         subscriber.error('Incorrect page title.');\n//     }\n//\n//     for (let book of allBooks){\n//         subscriber.next(book);\n//     }\n//\n//     setTimeout(()=>{\n//         subscriber.complete();\n//     },2000);\n//\n//     return () => console.log('Executing teardown code.')\n// });\n//\n// allBooksObservable$.subscribe(book => console.log(book.title));\n//\n// let source1$ = of('hello', 10, allReaders[0].name);\n//      // source1$.subscribe(value => console.log(value));\n// let source2$ = from(allBooks);\n//      // source2$.subscribe(book => console.log(book.title));\n//\n// concat(source1$, source2$).subscribe(value => console.log(value));\n// --------- second example ---------\n// let button = document.getElementById('readersButton');\n// fromEvent(button, 'click').subscribe(event => {\n//     console.log(event);\n//\n//     let readersDiv = document.getElementById('readers');\n//\n//     for (let reader of allReaders){\n//         readersDiv.innerHTML += reader.name + '<br>';\n//     }\n// });\n// --------- third example ---------\n// let button = document.getElementById('readersButton');\n// fromEvent(button, 'click')\n//     .subscribe(event => {\n//        ajax('/api/readers')\n//            .subscribe( ajaxResponde => {\n//                console.log(ajaxResponde);\n//                let readers = ajaxResponde.response;\n//\n//                let readersDiv = document.getElementById('readers');\n//\n//                for (let reader of readers) {\n//                    readersDiv.innerHTML += reader.name + '<br>';\n//                }\n//\n//\n//            });\n// });\n//#endregion\n//#region Subscribing to Observables with Observers\n// let books$ = from(allBooks);\n// let booksObserver = {\n//     next: book => console.log(`Title: ${book.title}`),\n//     error: err => console.log(`ERROR: ${err}`),\n//     complete: () => console.log(`All done!!!`)\n// };\n// --------- second example ---------\n// books$.subscribe(\n//     book => console.log(`Title: ${book.title}`),\n//     err => console.log(`ERROR: ${err}`),\n//     () => console.log(`All done!!!`)\n// );\n// --------- third example ---------\n// let currentTime$ = new Observable(subscriber => {\n//     const TimeString = new Date().toLocaleTimeString();\n//     subscriber.next(TimeString);\n//     subscriber.complete();\n// });\n//\n// currentTime$.subscribe(\n//     currentTime$ => console.log(`Observer 1: ${currentTime$}`)\n// );\n// setTimeout(() => {\n//     currentTime$.subscribe(\n//         currentTime$ => console.log(`Observer 2: ${currentTime$}`)\n//     );\n// }, 1000);\n// setTimeout(() => {\n//     currentTime$.subscribe(\n//         currentTime$ => console.log(`Observer 3  : ${currentTime$}`)\n//     );\n// }, 2000);\n//\n// let timesDiv = document.getElementById('times');\n// let button = document.getElementById('timerButton');\n//\n// let timer$ = interval(1000);\n// let timer$ = new Observable(subscriber => {\n//     let i = 0;\n//     let intervalID = setInterval(()=>{\n//         subscriber.next(i++);\n//     },1000);\n//\n//     return () =>{\n//         console.log('Executing teardown code.');\n//         clearInterval(intervalID);\n//     }\n// });\n//\n// let timerSubscripition = timer$.subscribe(\n//     value => timesDiv.innerHTML += `${ new Date().toLocaleTimeString()} (${value}) <br>`,\n//     null,\n//     ()=> console.log(`All done!!!`)\n// );\n//\n// let timeConsloeSubscription = timer$.subscribe(\n//     value => console.log(`${new Date().toLocaleTimeString()} (${value})`)\n// );\n//\n// timerSubscripition.add(timeConsloeSubscription);\n//\n//\n// fromEvent(button, `click`)\n//     .subscribe(event => timerSubscripition.unsubscribe());\n//#endregion\n//#region Using Operator\n// ajax(`/api/errors/500   `)\n//     .pipe(\n//         mergeMap(ajaxResponse => ajaxResponse.response),\n//         filter(book => book.publicationYear < 1950),\n//         tap(oldBook => console.log(`Title: ${oldBook.title}`)),\n//         //catchError(err => of({title:'Corduroy', author: 'Don Freeman'}))\n//         //catchError(((err, caught) => caught))\n//         //catchError(err => throw `Something bad happended - ${err.message}`)\n//         catchError(err => return throwError(err.message))\n//     )\n//     .subscribe(\n//     finalValue => console.log(`VALUE: ${finalValue.title}`),\n//         error => console.log(`ERROR: ${error}`)\n// );\n// let timesDiv = document.getElementById(`times`);\n// let button = document.getElementById(`timerButton`);\n//\n// let timer$ = new Observable( subscriber => {\n//     let i = 0;\n//     let intervalID = setInterval(()=>{\n//         subscriber.next(i++);\n//     }, 1000);\n//\n//     return () =>{\n//         console.log('Executinh teardown code.');\n//         clearInterval(intervalID);\n//     };\n// });\n//\n// let cancelTimer$ = fromEvent(button,'click');\n//\n//  timer$.pipe(\n//              takeUntil(cancelTimer$)\n//        )\n//        .subscribe(\n//         value => timesDiv.innerHTML += `${new Date().toLocaleTimeString()}(${value})<br>`,\n//         null,\n//         ()=> console.log(`All Done!!!`)\n//\n//     );\n//#endregion\n//#region Creating Your Own Operators\n// function grabAndLogClassics(year, log){\n//     return source$ => {\n//         return new Observable(subscriber => {\n//           return source$.subscribe(\n//                 book => {\n//                     if (book.publicationYear < year){\n//                         subscriber.next(book);\n//                         if(log){\n//                             console.log(`Classic: ${book.title}`);\n//                         }\n//                     }\n//                 },\n//                 err => subscriber.error(err),\n//                 () =>subscriber.complete()\n//             )\n//\n//         })\n//     }\n// }\n//\n// function grabClassics(year){\n//     return filter(book => book.publicationYear < year )};\n//\n//\n// function grabAndLogClassicsWithPipe(year, log){\n//     return source$ => source$.pipe(\n//         filter(book => book.publicationYear < year),\n//         tap(classicBook => log ? console.log(`Title: ${classicBook.title}`): null)\n//     )\n// }\n//\n//\n// ajax('/api/books')\n//     .pipe(\n//         flatMap(ajaxResponse => ajaxResponse.response),\n//         // filter(book => book.publicationYear < 1950),\n//         // tap(oldBook => console.log(`Title: ${oldBook.title}`))\n//         // grabAndLogClassics(1930, false)\n//         // grabClassics(1950)\n//         grabAndLogClassicsWithPipe(1930, true)\n//     )\n//     .subscribe(\n//         finalValue => console.log(`VALUE: ${finalValue.title}`),\n//         error => console.log(`ERROR: ${error}`)\n//     );\n//#endregion\n//#region Using Subjects and Multicasted Observables\n// let subject$ = new Subject();\n//\n// subject$.subscribe(\n//     value => console.log(`Observable: 1: ${value}`)\n// );\n//\n// subject$.subscribe(\n//     value => console.log(`Observable: 2: ${value}`)\n// );\n//\n// subject$.next(`Hello!`);\n//\n// let source$ = new Observable(subscriber => {\n//     subscriber.next(`Greetings!!`);\n// });\n//\n// source$.subscribe(subject$);\n//\n// let  source$ = interval(1000).pipe(\n//     take(4),\n//     // multicast(new Subject()),\n//     // publish(),\n//     // publishLast(),\n//     // publishBehavior(42),\n//     publishReplay(),\n//     refCount()\n//     // share()\n// );\n// //\n// // let subject$ = new Subject();\n// //     source$.subscribe(subject$);\n//\n// source$.subscribe(\n//     value => console.log(`Obervable 1: ${value}`)\n// );\n//\n// setTimeout(() =>{\n//     source$.subscribe(\n//     value => console.log(`Obervable 2: ${value}`)\n//     )},1000);\n//\n// setTimeout(() =>{\n//     source$.subscribe(\n//     value => console.log(`Obervable 3: ${value}`)\n//     )},2000);\n//\n// setTimeout(() =>{\n//     source$.subscribe(\n//     value => console.log(`Obervable 3: ${value}`),\n//     null,\n//     () => console.log(`Observer 4 complete`)\n// )},4500);\n//\n//source$.connect();\n//#endregion\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ })

/******/ });