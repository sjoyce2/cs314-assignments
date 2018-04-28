'use strict';

$(document).ready(function() {
	$.ajax({
		url: "https://jsonplaceholder.typicode.com/users",
		type: "GET",
		success: function(response) {
			var userTable = document.getElementById("apiInfo");
			for (var i = 0; i < response.length; i++) {
				// need it to add row, then add name, email, and company to it
				var tr = document.createElement("tr");
				var td1 = document.createElement("td");
				td1.appendChild(document.createTextNode(response[i].name));
				var td2 = document.createElement("td");
				td2.appendChild(document.createTextNode(response[i].email));
				var td3 = document.createElement("td");
				td3.appendChild(document.createTextNode(response[i].company.name));


				var td4 = document.createElement("td");
				var showTodo = document.createElement("button");
				showTodo.appendChild(document.createTextNode("Show Todos"));
				showTodo.clickedOnce = false;
				showTodo.clickedEven = false;
				showTodo.addEventListener("click", todoClickedFirst); // don't want this to run on page load
				showTodo.myCell = td4;
				showTodo.userId = response[i].id;
				td4.appendChild(showTodo);

				var td5 = document.createElement("td");
				var showAlbums = document.createElement("button");
				showAlbums.appendChild(document.createTextNode("Show Albums"));
				showAlbums.clickedOnce = false;
				showAlbums.clickedEven = false;
				showAlbums.addEventListener("click", albumsClicked); // again, don't show on page load
				showAlbums.myCell = td5;
				showAlbums.userId = response[i].id;
				td5.appendChild(showAlbums);

				tr.appendChild(td1);
				tr.appendChild(td2);
				tr.appendChild(td3);
				tr.appendChild(td4);
				tr.appendChild(td5);

				userTable.appendChild(tr);
			}
		},
		error: function(response) {
			console.log("Error");
		}

	})

	function todoClickedFirst() {
		var _this = this;
		if (_this.clickedOnce && _this.clickedEven) {
			_this.table.style.display = "block";
			_this.clickedEven = false;
		} else if (_this.clickedOnce) {
			_this.table.style.display = "none";
			_this.clickedEven = true;
		} else {
			$.ajax({
				url: "https://jsonplaceholder.typicode.com/todos",
				type: "GET",
				data: {userId: _this.userId},
				success: function(response) {
					var todoTable = document.createElement("table");
					_this.table = todoTable;
					var tHeadRow = document.createElement("tr");
					tHeadRow.appendChild(document.createElement("th").appendChild(document.createTextNode("Title")));
					tHeadRow.appendChild(document.createElement("th").appendChild(document.createTextNode("Completed?")));
					for (var j = 0; j < response.length; j++) {
						var dataRow = document.createElement("tr");
						var title = document.createElement("td");
						title.appendChild(document.createTextNode(response[j].title));
						var completed = document.createElement("td");
						completed.appendChild(document.createTextNode(response[j].completed));
						dataRow.appendChild(title);
						dataRow.appendChild(completed);
						todoTable.appendChild(dataRow);
					}
					_this.myCell.appendChild(todoTable);
				}
			})
			_this.clickedOnce = true;
		}
	}

	function albumsClicked() {
		var _this = this;
		if (_this.clickedOnce && _this.clickedEven) {
			_this.table.style.display = "block";
			_this.clickedEven = false;
		} else if (_this.clickedOnce) {
			_this.table.style.display = "none";
			_this.clickedEven = true;
		} else {
			$.ajax({
				url: "https://jsonplaceholder.typicode.com/albums",
				type: "GET",
				data: {userId: _this.userId},
				success: function(response) {
					var albumTable = document.createElement("table");
					_this.table = albumTable;
					var tHeadRow = document.createElement("tr");
					tHeadRow.appendChild(document.createElement("th").appendChild(document.createTextNode("Title")));
					tHeadRow.appendChild(document.createElement("th").appendChild(document.createTextNode("Completed?")));
					for (var j = 0; j < response.length; j++) {
						var dataRow = document.createElement("tr");
						var title = document.createElement("td");
						title.appendChild(document.createTextNode(response[j].title));
						var completed = document.createElement("td");
						completed.appendChild(document.createTextNode(response[j].completed));
						dataRow.appendChild(title);
						dataRow.appendChild(completed);
						albumTable.appendChild(dataRow);
					}
					_this.myCell.appendChild(albumTable);
				}
			})
			_this.clickedOnce = true;
		}
	}
})