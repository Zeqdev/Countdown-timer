let dayElement: HTMLParagraphElement = document.querySelector('#days');
let hourElement: HTMLParagraphElement = document.querySelector('#hours');
let minElement: HTMLParagraphElement = document.querySelector('#minutes');
let secElement: HTMLParagraphElement = document.querySelector('#seconds');

const newYear: string = '1 Jan 2023';

function countdown() {
	const newYearDate = +new Date(newYear);
	const currentDate = +new Date();

	const totalSeconds: number = (newYearDate - currentDate) / 1000;

	const seconds: number = Math.floor(totalSeconds) % 60;
	const minutes: number = Math.floor(totalSeconds / 60) % 60;
	const hours: number = Math.floor(totalSeconds / 3600) % 24;
	const days: number = Math.floor(totalSeconds / 3600 / 24);

	dayElement.innerHTML = days.toString();
	hourElement.innerHTML = hours.toString();
	minElement.innerHTML = minutes.toString();
	secElement.innerHTML = seconds.toString();
}

countdown();

setInterval(countdown, 1000);
