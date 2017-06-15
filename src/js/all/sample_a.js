/**
 * gnavi-grunt-boiler-assemble
 * all.js - sample_a.js
 * Author: sekiya
 * ---------------------------------------------------------------------- */

// sample A module
var sampleA = {
  init: function init() {
    PROJECTNAMESPACE.Utility.console('A')
  }
}

// sample function
function sampleFunction1() {
  var hoge = '1'
  var huga = '2'
  return hoge + huga
}

// run
$(function run() {
  sampleA.init()
  sampleFunction1()
})
