// Copyright (c) 2022 Sam Corbett All rights reserved
//
// Created by: Sam Corbett
// Created on: Dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-04-JS/sw.js", {
    scope: "/ICS2O-Assignment-04-JS/",
  })
}

/**
 * This function displays an alert.
 */
function myOrderSubmitted() {
  var burgerTypePrice = parseFloat(document.getElementById("burger-type").value)
  var frySizePrice = parseFloat(document.getElementById("fry-type").value)
  var drinkTypePrice = parseFloat(document.getElementById("drink-type").value)
  var subtotal = coffeeSizePrice + extrasPrice
  var finalPriceDiscount = subtotal + 0.13 * subtotal - 0.25 * subtotal
  var finalPrice = subtotal + 0.13 * subtotal
}
