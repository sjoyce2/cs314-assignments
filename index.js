"use strict";

// # 1, Char Swap
function charSwap() {
	let input = prompt("Enter a string");
	while (input == null || input.length < 1) {
		input = prompt("That string is a little short to be a stormtrooper, enter a new string.");
	}
	let inArr = input.split("");
	inArr.splice(inArr.length, 0, inArr[0]);
	inArr.splice(0, 1, inArr[inArr.length - 2]);
	inArr.splice(inArr.length - 2, 1);
	return inArr.join("");
}

// # 2, Hi String
function hiString() {
	let input = prompt("What is your name?");
	if (input == "Hello there") {
		alert("General Kenobi!");
	}
	while (input == null || input.length < 1) {
		input = prompt("That string is a little short to be a stormtrooper, enter a new string.")
	}
	let inArr = input.split("");
	if (inArr[0] == "H" && inArr[1] == "i") {
		return inArr.join("");
	} else {
		return `Hi ${inArr.join("")}`;
	}
}

// # 3, Three Chars to front
function threeCharsFront() {
	let input = prompt("Enter a string");
	while (input == null || input.length < 3) {
		input = prompt("That string is a little short to be a stormtrooper, enter a new string.")
	}
	let inArr = input.split("");
	inArr.splice(0, 0, inArr[inArr.length - 3], inArr[inArr.length - 2], inArr[inArr.length - 1])
	inArr.splice(inArr.length - 3, 3);
	return inArr.join("");
}

// # 4, Strings to sentence
function stringsToSent() {
	let input = prompt("Enter a list of 3 strings, separated by commas (each followed by a space)");
	while (input == null || !input.includes(", ")) {
		input = prompt("Enter a list of 3 strings, separated by commas (each followed by a space)");
	}
	let inArr = input.split(", ");
	if (inArr.length != 3) {
		stringsToSent();
	}
	alert(`I enjoy ${inArr[0]}. I also like ${inArr[1]} and ${inArr[2]}.`);
}

// # 5, Upper or Lower
function upperLower() {
	let input = prompt("Enter a string");
	while (input == null || input.length < 1) {
		input = prompt("That string is a little short to be a stormtrooper, enter a new string.")
	}
	if (input.length < 3) {
		input = input.toUpperCase();
		return input;
	} else {
		let inArr = input.split("");
		inArr.splice(0, 3, inArr[0].toLowerCase(), inArr[1].toLowerCase(), inArr[2].toLowerCase())
		return inArr.join("");
	}
}

// #6, Integer Swap
function intSwap() {
	let input = prompt("Enter a list of integers, separated by commas (each followed by a space)");
	while (input == null || input.length < 1) {
		input = prompt("That string is a little short to be a stormtrooper, enter a new string.")
	}
	let inArr = input.split(", ");
	let isInts = true;
	for (let i = 0; i < inArr.length; i++) {
		if (isNaN(parseInt(inArr[i]))) {
			isInts = false;
			break;
		}
	}
	if (!isInts) {
		intSwap();
	}
	inArr.splice(inArr.length, 0, inArr[0]);
	inArr.splice(0, 1, inArr[inArr.length - 2]);
	inArr.splice(inArr.length - 2, 1);
	alert(inArr);
}

// #7, Longest String
function longestString() {
	let input = prompt("Enter a list of strings, separated by commas (each followed by a space)");
	while (input == null || input.length < 1) {
		input = prompt("That string is a little short to be a stormtrooper, enter a new string.")
	}
	let inArr = input.split(", ");
	let longest = 0;
	for (let i = 0; i < inArr.length; i++) {
		if (inArr[i].length > longest) {
			longest = inArr[i].length;
		}
	}
	for (let i = 0; i < inArr.length; i++) {
		if (inArr[i].length == longest) {
			alert(`Longest string: ${inArr[i]}`);
		}
	}
}

// #8, Largest Even Number
function largestEven() {
	let input = prompt("Enter a list of integers, separated by commas (each followed by a space)");
	while (input == null || input.length < 1) {
		input = prompt("That string is a little short to be a stormtrooper, enter a new string.")
	}
	let inArr = input.split(", ");
	let isInts = true;
	let largestEven = -1;
	for (let i = 0; i < inArr.length; i++) {
		inArr[i] = parseInt(inArr[i]);
		if (isNaN(inArr[i])) {
			isInts = false;
			break;
		} else {
			if (inArr[i] > largestEven && inArr[i] % 2 == 0) {
				largestEven = inArr[i];
			}
		}
	}
	if (!isInts) {
		largestEven();
	} else {
		if (largestEven == -1) {
			alert("There were no even numbers in the list");
		} else {
			alert(largestEven);
		}
	}
}

// #9, current day time
function currDayTime() {
	let currDate = new Date();
	let currDayNum = currDate.getDay();
	let currDay = "Sunday";
	if (currDayNum == 1) {
		currDay = "Monday";
	} else if (currDayNum == 2) {
		currDay = "Tuesday";
	} else if (currDayNum == 3) {
		currDay = "Wednesday";
	} else if (currDayNum == 4) {
		currDay = "Thursday";
	} else if (currDayNum == 5) {
		currDay = "Friday";
	} else if (currDayNum == 6) {
		currDay = "Saturday";
	}
	let currHour = currDate.getHours();
	let afternoon = false;
	if (currHour > 12) {
		currHour = currHour - 12;
		afternoon = true;
	}
	let currMin = currDate.getMinutes();
	let minString = "" + currMin;
	if (currMin < 10) {
		minString = "0" + minString;
	}
	let currTime = "";
	if (afternoon) {
		currTime = `${currHour}:${minString}PM`;
	} else {
		currTime = `${currHour}:${minString}AM`;
	}
	alert(`Today is ${currDay}.
	It is ${currTime}.`);
}

// #10, unlimited function
function unlimitedPower(...args) {
	alert(args.join(""));
}

console.log(hiString());
console.log(threeCharsFront());
stringsToSent();
console.log(upperLower());
intSwap();
longestString();
largestEven();
currDayTime();
unlimitedPower(1, 2, 3, 4, 5, 6);