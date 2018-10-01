/*! @preserve
 * Copyright (c) 2018 Aquafortis
 * Licensed under MIT (https://github.com/Aquafortis/mojave-dynamic-web)
 */
// getHours()     Get the hour (0-23)
// getMinutes()   Get the minute (0-59)
// getSeconds()   Get the second (0-59)
function mojaveDynamic() {

  var time = new Date().getHours();
  //var time = new Date().getMinutes();
  //var time = new Date().getSeconds();

  if (time === 0) {
    document.getElementById("image").src = "img/16.jpeg";
  } else if (time === 1) {
    document.getElementById("image").src = "img/16.jpeg";
  } else if (time === 2) {
    document.getElementById("image").src = "img/16.jpeg";
  } else if (time === 3) {
    document.getElementById("image").src = "img/15.jpeg";
  } else if (time === 4) {
    document.getElementById("image").src = "img/1.jpeg";
  } else if (time === 5) {
    document.getElementById("image").src = "img/2.jpeg";
  } else if (time === 6) {
    document.getElementById("image").src = "img/3.jpeg";
  } else if (time === 7) {
    document.getElementById("image").src = "img/4.jpeg";
  } else if (time === 8) {
    document.getElementById("image").src = "img/5.jpeg";
  } else if (time === 9) {
    document.getElementById("image").src = "img/5.jpeg";
  } else if (time === 10) {
    document.getElementById("image").src = "img/6.jpeg";
  } else if (time === 11) {
    document.getElementById("image").src = "img/7.jpeg";
  } else if (time === 12) {
    document.getElementById("image").src = "img/7.jpeg";
  } else if (time === 13) {
    document.getElementById("image").src = "img/7.jpeg";
  } else if (time === 14) {
    document.getElementById("image").src = "img/7.jpeg";
  } else if (time === 15) {
    document.getElementById("image").src = "img/8.jpeg";
  } else if (time === 16) {
    document.getElementById("image").src = "img/8.jpeg";
  } else if (time === 17) {
    document.getElementById("image").src = "img/9.jpeg";
  } else if (time === 18) {
    document.getElementById("image").src = "img/10.jpeg";
  } else if (time === 19) {
    document.getElementById("image").src = "img/11.jpeg";
  } else if (time === 20) {
    document.getElementById("image").src = "img/12.jpeg";
  } else if (time === 21) {
    document.getElementById("image").src = "img/13.jpeg";
  } else if (time === 22) {
    document.getElementById("image").src = "img/14.jpeg";
  } else if (time === 23) {
    document.getElementById("image").src = "img/15.jpeg";
  } else {
    document.getElementById("image").src = "img/7.jpeg";
  }
}

window.onload = function start() {
  mojaveDynamic();
  setTimeout(start, 5000); // 5000 = 5 seconds - 60000 = 1 minute
};
