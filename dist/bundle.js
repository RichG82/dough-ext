/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	// ==UserScript==
	// @name         Dough Redo
	// @namespace    http://tampermonkey.net/
	// @version      0.1
	// @description  try to take over the world!
	// @author       You
	// @match        https://trade.dough.com/**
	// @grant        none
	// @require http://code.jquery.com/jquery-latest.js
	/*jshint multistr: true */
	// ==/UserScript==
	//import "./app.less";
	// export default class DoughExt {
	//     public loadScript (url: any, callback: any) {
	//         var head = document.getElementsByTagName("head")[0];
	//         script = document.createElement("script");
	//         script.src = url;
	//         // Attach handlers for all browsers
	//         var done = false;
	//         script.onload = script.onreadystatechange = function () {
	//             if (!done && (!this.readyState ||
	//                 this.readyState == "loaded" ||
	//                 this.readyState == "complete")) {
	//                 done = true;
	//                 // Continue your code
	//                 callback();
	//                 // Handle memory leak in IE
	//                 script.onload = script.onreadystatechange = null;
	//                 head.removeChild(script);
	//             }
	//         };
	//         head.appendChild(script);
	//     };
	//     $("[rel='shortcut icon']").remove();
	//     $(".page-sidebar").toggle();
	// var interval = setInterval(function () {
	//     var liq = parseInt($(".net-liq dd").text().replace("$", "").replace(",", ""));
	//     var stat = $(".info-list.today dd").text().replace("$", "").replace(",", "");
	//     if (stat.indexOf("(") != -1) {
	//         stat.replace("(", "-").replace(")", "");
	//     }
	//     document.title = "TDA:" + liq + ":" + stat;
	//     $(".portfolio-page-table-row-summary-expanded,.portfolio-page-table-row-solo").css("border-bottom", "2px solid #D4D4D4");
	// }, 250);
	// $(".tile-quote-symbol").css("color", "black !important");
	// $(".grid-tile-down,.grid-tile-up").css("background-color", "white !important");
	// }


/***/ }
/******/ ]);