/*! @preserve
 * Copyright (c) 2019 Aquafortis
 * Licensed under MIT (https://github.com/Aquafortis/mojave-dynamic-web)
 * Image changes every 60 minutes
 * Timings won't match Mojave Dynamic Desktop exactly
 * Try changing which image number is displayed and when
 * Better still, try using your own images
 * Comment out or uncomment lines to select images to show or hide
 * Background and foreground images are displayed for demo purposes
 */
// getHours()     Get the hour (0-23)
// getMinutes()   Get the minute (0-59)
// getSeconds()   Get the second (0-59)
function timeDisplay() {

    var time = new Date().getHours();
    //var time = new Date().getMinutes();
    //var time = new Date().getSeconds();

    if (time === 0) {
        document.getElementById("image").src = "img/15.jpeg";
        document.body.style.background =
            "black url('img/15.jpeg') no-repeat fixed center center";
        document.body.style.backgroundSize = "cover";
    } else if (time === 1) {
        document.getElementById("image").src = "img/16.jpeg";
        document.body.style.background =
            "black url('img/16.jpeg') no-repeat fixed center center";
        document.body.style.backgroundSize = "cover";
    } else if (time === 2) {
        document.getElementById("image").src = "img/16.jpeg";
        document.body.style.background =
            "black url('img/16.jpeg') no-repeat fixed center center";
        document.body.style.backgroundSize = "cover";
    } else if (time === 3) {
        document.getElementById("image").src = "img/15.jpeg";
        document.body.style.background =
            "black url('img/15.jpeg') no-repeat fixed center center";
        document.body.style.backgroundSize = "cover";
    } else if (time === 4) {
        document.getElementById("image").src = "img/1.jpeg";
        document.body.style.background =
            "black url('img/1.jpeg') no-repeat fixed center center";
        document.body.style.backgroundSize = "cover";
    } else if (time === 5) {
        document.getElementById("image").src = "img/2.jpeg";
        document.body.style.background =
            "black url('img/2.jpeg') no-repeat fixed center center";
        document.body.style.backgroundSize = "cover";
    } else if (time === 6) {
        document.getElementById("image").src = "img/3.jpeg";
        document.body.style.background =
            "black url('img/3.jpeg') no-repeat fixed center center";
        document.body.style.backgroundSize = "cover";
    } else if (time === 7) {
        document.getElementById("image").src = "img/4.jpeg";
        document.body.style.background =
            "black url('img/4.jpeg') no-repeat fixed center center";
        document.body.style.backgroundSize = "cover";
    } else if (time === 8) {
        document.getElementById("image").src = "img/5.jpeg";
        document.body.style.background =
            "black url('img/5.jpeg') no-repeat fixed center center";
        document.body.style.backgroundSize = "cover";
    } else if (time === 9) {
        document.getElementById("image").src = "img/5.jpeg";
        document.body.style.background =
            "black url('img/5.jpeg') no-repeat fixed center center";
        document.body.style.backgroundSize = "cover";
    } else if (time === 10) {
        document.getElementById("image").src = "img/6.jpeg";
        document.body.style.background =
            "black url('img/6.jpeg') no-repeat fixed center center";
        document.body.style.backgroundSize = "cover";
    } else if (time === 11) {
        document.getElementById("image").src = "img/7.jpeg";
        document.body.style.background =
            "black url('img/7.jpeg') no-repeat fixed center center";
        document.body.style.backgroundSize = "cover";
    } else if (time === 12) {
        document.getElementById("image").src = "img/7.jpeg";
        document.body.style.background =
            "black url('img/7.jpeg') no-repeat fixed center center";
        document.body.style.backgroundSize = "cover";
    } else if (time === 13) {
        document.getElementById("image").src = "img/7.jpeg";
        document.body.style.background =
            "black url('img/7.jpeg') no-repeat fixed center center";
        document.body.style.backgroundSize = "cover";
    } else if (time === 14) {
        document.getElementById("image").src = "img/8.jpeg";
        document.body.style.background =
            "black url('img/8.jpeg') no-repeat fixed center center";
        document.body.style.backgroundSize = "cover";
    } else if (time === 15) {
        document.getElementById("image").src = "img/9.jpeg";
        document.body.style.background =
            "black url('img/9.jpeg') no-repeat fixed center center";
        document.body.style.backgroundSize = "cover";
    } else if (time === 16) {
        document.getElementById("image").src = "img/10.jpeg";
        document.body.style.background =
            "black url('img/10.jpeg') no-repeat fixed center center";
        document.body.style.backgroundSize = "cover";
    } else if (time === 17) {
        document.getElementById("image").src = "img/11.jpeg";
        document.body.style.background =
            "black url('img/11.jpeg') no-repeat fixed center center";
        document.body.style.backgroundSize = "cover";
    } else if (time === 18) {
        document.getElementById("image").src = "img/12.jpeg";
        document.body.style.background =
            "black url('img/12.jpeg') no-repeat fixed center center";
        document.body.style.backgroundSize = "cover";
    } else if (time === 19) {
        document.getElementById("image").src = "img/13.jpeg";
        document.body.style.background =
            "black url('img/13.jpeg') no-repeat fixed center center";
        document.body.style.backgroundSize = "cover";
    } else if (time === 20) {
        document.getElementById("image").src = "img/14.jpeg";
        document.body.style.background =
            "black url('img/14.jpeg') no-repeat fixed center center";
        document.body.style.backgroundSize = "cover";
    } else if (time === 21) {
        document.getElementById("image").src = "img/14.jpeg";
        document.body.style.background =
            "black url('img/14.jpeg') no-repeat fixed center center";
        document.body.style.backgroundSize = "cover";
    } else if (time === 22) {
        document.getElementById("image").src = "img/14.jpeg";
        document.body.style.background =
            "black url('img/14.jpeg') no-repeat fixed center center";
        document.body.style.backgroundSize = "cover";
    } else if (time === 23) {
        document.getElementById("image").src = "img/15.jpeg";
        document.body.style.background =
            "black url('img/15.jpeg') no-repeat fixed center center";
        document.body.style.backgroundSize = "cover";
    } else {
        document.getElementById("image").src = "img/16.jpeg";
        document.body.style.background =
            "black url('img/16.jpeg') no-repeat fixed center center";
        document.body.style.backgroundSize = "cover";
    }
}

window.onload = function start() {
    timeDisplay();
    setTimeout(start, 5000); // 5000 = 5 seconds
};
