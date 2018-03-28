"use strict";

function trueFalse() {
	if (confirm("Are you ok?")) {
		alert("You are ok!");
	} else {
		alert("You are not ok!");
	}
}

function trueFalseTern() {
	confirm("Are you ok?") ? alert("You are ok!"): alert("You are not ok!");
}

function numberPrompt() {
	let x = prompt("Enter a number");
	if (x === null) {
		alert("Cancelling is not allowed!")
	} else if (x === "") {
		alert("You didn't enter anything!");
	} else if (isNaN(x)) {
		alert("You didn't enter a number!");
	} else {
		let newString = "You entered " + x + "!";
		alert(newString);
	}
}

function Match(team1, team2, stadium, start) {
	this.homeTeam = team1;
	this.awayTeam = team2;
	this.location = stadium;
	this.startTime = start;
	this.endTime = function() {return this.startTime + 130};
}

function copy(object) {
	let newObj = Object.assign({}, object);
	let x = prompt("Enter a value for 'cheer' (cancel to skip)");
	if (x !== null) {
		newObj.cheer = x;
	}
	return newObj;
}

// function newFunc(name, dob, ssn = "123121234") {
//   return "Name: " + name.toString() + ", DOB: " + dob.toString() + ", SSN: " + ssn.toString();
// }

//let newFunc = function (name, dob, ssn = "123121234") { return "Name: " + name.toString() + ", DOB: " +dob.toString() + ", SSN: " + ssn.toString();};

let newFunc = (name, dob, ssn = "123121234") => {return "Name: " + name.toString() + ", DOB: " +dob.toString() + ", SSN: " + ssn.toString();};



trueFalseTern();
numberPrompt();
let rmdvsbar = new Match("Real Madrid", "Barcelona", "Santiago Bernabeu", 1800);
console.log("El Clasico", rmdvsbar);
console.log("Home Team: ", rmdvsbar.homeTeam);
let rmdvsatm = copy(rmdvsbar);
console.log("El Derby madrileno", rmdvsatm);
console.log("Stadium", rmdvsatm.location);
newFunc("Name", "13/32/2019");
