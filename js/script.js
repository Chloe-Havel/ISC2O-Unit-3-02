// Copyright (c) 2020 Chloe Havel All rights reserved
//
// Created by: Chloe Havel
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ISC2O-Unit-3-02/sw.js", {
    scope: "/ISC2O-Unit-3-02/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  document.getElementById("hello-world").innerHTML = "<p>Hello, World!</p>"
}
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate() {
  // input
  const length = parseInt(document.getElementById("length-of-pyramid").value)
  const width = parseInt(document.getElementById("width-of-pyramid").value)
  const height = parseInt(document.getElementById("height-of-pyramid").value)
  // process
  const pyramid = (length * width * height) / 3

  // output
  document.getElementById("Volume").innerHTML = "Volume: " + pyramid + " mm² "
}
