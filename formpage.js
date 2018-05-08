$("#submitButton").submit(function(e) {
	displayInput();
	e.preventDefault();
})

function displayInput() {
	player = document.getElementById("player");
	team = document.getElementById("team");
	league = document.getElementById("league");
	table = document.getElementById("formTable");
	var tr = document.createElement("tr");
	var td1 = document.createElement("td");
	td1.appendChild(document.createTextNode(player.value))
	var td2 = document.createElement("td");
	td2.appendChild(document.createTextNode(team.value))
	var td3 = document.createElement("td");
	td3.appendChild(document.createTextNode(league.value))
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	table.appendChild(tr);
}