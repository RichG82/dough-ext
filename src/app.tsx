'use strict';

declare var script: any;
declare var $: any;
require("./app.less")
require("expose?DoughExt!DoughExt");
import DoughExt from "./DoughExt";

$(document).ready(function () {
    debugger;
    var ext: DoughExt = new DoughExt();
    ext.doWork();
    ext.setTimer();
})
