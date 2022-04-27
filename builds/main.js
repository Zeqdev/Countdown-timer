"use strict";
let dayElement = document.querySelector('#days');
let hourElement = document.querySelector('#hours');
let minElement = document.querySelector('#minutes');
let secElement = document.querySelector('#seconds');
const newYear = '1 Jan 2023';
function countdown() {
    const newYearDate = +new Date(newYear);
    const currentDate = +new Date();
    const totalSeconds = (newYearDate - currentDate) / 1000;
    const seconds = Math.floor(totalSeconds) % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor(totalSeconds / 3600 / 24);
    dayElement.innerHTML = days.toString();
    hourElement.innerHTML = hours.toString();
    minElement.innerHTML = minutes.toString();
    secElement.innerHTML = seconds.toString();
}
countdown();
setInterval(countdown, 1000);
