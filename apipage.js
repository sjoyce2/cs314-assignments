'use strict';

$(document).ready(function() {
	$.ajax({
		url: "https://api.punkapi.com/v2/beers",
		type: "GET",
		success: function(response) {
			let table = document.getElementById("beers");
			for (let i = 0; i < 10; i++) {
				let tr = document.createElement("tr");
				let td1 = document.createElement("td");
				td1.appendChild(document.createTextNode(response[i].name));
				let td2 = document.createElement("td");
				td2.appendChild(document.createTextNode(response[i].tagline));
				let td3 = document.createElement("td");
				td3.appendChild(document.createTextNode(response[i].first_brewed));
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				table.appendChild(tr);
			}
		},
		error: function(response) {
			console.log("Error");
		}
	});
})

function loadRest() {
	$.ajax({
		url: "https://api.punkapi.com/v2/beers",
		type: "GET",
		success: function(response) {
			let button = document.getElementById("showAll");
			button.style.visibility = "hidden";
			let table = document.getElementById("beers");
			for (let i = 10; i < response.length; i++) {
				let tr = document.createElement("tr");
				let td1 = document.createElement("td");
				td1.appendChild(document.createTextNode(response[i].name));
				let td2 = document.createElement("td");
				td2.appendChild(document.createTextNode(response[i].tagline));
				let td3 = document.createElement("td");
				td3.appendChild(document.createTextNode(response[i].first_brewed));
				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				table.appendChild(tr);
			}
		},
		error: function(response) {
			console.log("Error");
		}
	})
}