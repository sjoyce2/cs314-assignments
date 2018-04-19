//selection div
let divOne = document.querySelector('#one');
let divTwo = document.querySelector('#two');
let divThree = document.querySelector('#three');
let divFour = document.querySelector('#four');
let divFive = document.querySelector('#five');

document.querySelector('#scroll1').addEventListener('click', () => divOne.scrollIntoView(true));
document.querySelector('#scroll2').addEventListener('click', () => divTwo.scrollIntoView(true));
document.querySelector('#scroll3').addEventListener('click', () => divThree.scrollIntoView(true));
document.querySelector('#scroll4').addEventListener('click', () => divFour.scrollIntoView(true));
document.querySelector('#scroll5').addEventListener('click', () => divFive.scrollIntoView(true));



//div 1
let blueButton = document.querySelector('#blue');
let greenButton = document.querySelector('#green');

blueButton.addEventListener('click', () => one.style.backgroundColor = "blue");
greenButton.addEventListener('click', () => one.style.backgroundColor = "green");


//div 2
let toggleButton = document.querySelector('#togglePinkOrange');

function toggle() {
	if (divTwo.style.backgroundColor != "pink") {
		divTwo.style.backgroundColor = "pink";
		toggleButton.textContent = "Click for orange!";
	} else {
		divTwo.style.backgroundColor = "orange";
		toggleButton.textContent = "Click for pink!";
	}
}

toggleButton.addEventListener('click', toggle);


//div 3
let textBox = document.querySelector('#addToList');
let submitAddition = document.querySelector('#submitAddition');

function addElement() {
	let ul = document.querySelector('#listToAdd');
	let li = document.createElement('li');
	li.appendChild(document.createTextNode(textBox.value));
	ul.appendChild(li);
}

submitAddition.addEventListener('click', addElement);


//div 4
let removeList = document.querySelectorAll('.removable');

function removeElement() {
	this.style.display = 'none';
}

for (i = 0; i < removeList.length; i++) {
	removeList[i].addEventListener('click', removeElement);
}


//div 5
let highLightList = document.querySelectorAll('.highlight');
console.log(highLightList);

function highlightElement() {
	for (i = 0; i < highLightList.length; i++) {
		highLightList[i].style.backgroundColor = "";
	}
	this.style.backgroundColor = 'yellow';
}

for (i = 0; i < highLightList.length; i++) {
	highLightList[i].addEventListener('click', highlightElement);
}