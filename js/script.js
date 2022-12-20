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
  var frySizePrice = parseFloat(document.getElementById("fry-size").value)
  var drinkTypePrice = parseFloat(document.getElementById("drink-type").value)
  var subCost = burgerTypePrice + frySizePrice + drinkTypePrice
  var finalCost = subCost + 0.13 * subCost
  var finalCostDiscount = subCost + 0.13 * subCost - 0.50 * subCost

  if (subCost <= 19.75) {
    document.getElementById(
    "order-for-customer"
  ).innerHTML = `Burger Price: $${burgerTypePrice.toFixed(
    2
    )}</br>Fry Price: $${frySizePrice.toFixed(
      2
    )}</br>Drink Price: $${drinkTypePrice.toFixed(
      2
    )}</br>Your Total Is: $${subCost.toFixed(
    2
    )} <= (below $19.75)</br>Your Total With Discount Is: $${finalCostDiscount.toFixed(
    2
  )}`
} else {
  document.getElementById(
    "order-for-customer"
  ).innerHTML = `Burger Price: $${burgerTypePrice.toFixed(
    2
    )}</br>Fry Price: $${frySizePrice.toFixed(
      2
    )}</br>Drink Price: $${drinkTypePrice.toFixed(
      2
    )}</br>Your Total Is: $${subCost.toFixed(
    2
    )} <= (above $19.75)</br>Your Total With Tax (HST: 13%) Is: $${finalCost.toFixed(
    2
  )}`
 }
}