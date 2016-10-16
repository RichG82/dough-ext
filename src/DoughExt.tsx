'use strict';

declare var script: any;
declare var $: any;

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


export default class DoughExt {
    constructor(){

    }

    // public loadScript(url: any, callback: any) {
    //     var head = document.getElementsByTagName("head")[0];
    //     script = document.createElement("script");
    //     script.src = url;

    //     // Attach handlers for all browsers
    //     var done = false;
    //     script.onload = script.onreadystatechange = function () {
    //         if (!done && (!this.readyState ||
    //             this.readyState == "loaded" ||
    //             this.readyState == "complete")) {
    //             done = true;

    //             // Continue your code
    //             callback();

    //             // Handle memory leak in IE
    //             script.onload = script.onreadystatechange = null;
    //             head.removeChild(script);
    //         }
    //     };

    //     head.appendChild(script);
    // };

    public doWork() {

        $("[rel='shortcut icon']").remove();
        $(".page-sidebar").toggle();

        $(".tile-quote-symbol").css("color", "black !important");
        $(".grid-tile-down,.grid-tile-up").css("background-color", "white !important");
    }

    public setTimer() {
        setInterval(function () {
            var liq = parseInt($(".net-liq dd").text().replace("$", "").replace(",", ""));
            var stat = $(".info-list.today dd").text().replace("$", "").replace(",", "");
            if (stat.indexOf("(") != -1) {
                stat.replace("(", "-").replace(")", "");
            }
            document.title = "TDA:" + liq + ":" + stat;
            $(".portfolio-page-table-row-summary-expanded,.portfolio-page-table-row-solo").css("border-bottom", "2px solid #D4D4D4");
        }, 250);
    }
}