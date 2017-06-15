/**
 * gnavi-grunt-boiler-assemble
 * all.js - sample_b.js
 * Author: sekiya
 * ---------------------------------------------------------------------- */

// sample B module
var sampleB = {
  init: function init() {
    PROJECTNAMESPACE.Utility.console('B')
  }
}

// sample function
function sampleFunction2() {
  var hoge = '1'
  var huga = '2'
  return hoge + huga
}

// run
$(function run() {
  sampleB.init()
  sampleFunction2()
})
