function initMap() {
	console.log('map has been initialized');
	let map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 45.8336, lng: 1.2611},
		zoom: 5


	});

	
	let santiagoBernabeu = {
    lat: 40.4531,
    lng: -3.6883
	};

  let wandaMetropolitano = {
    lat: 40.4363,
    lng: -3.6003
  };

  let campNou = {
    lat: 41.3809,
    lng: 2.1228
  };

  let juventusStadium = {
    lat: 45.1096,
    lng: 7.6413
  };

  let parcDesPrinces = {
    lat: 48.8414,
    lng: 2.2530
  };

  let allianzArena = {
    lat: 48.2188,
    lng: 11.6247
  };

  let oldTrafford = {
    lat: 53.4631,
    lng: -2.2913
  };

  let etihadStadium = {
    lat: 53.4831,
    lng: -2.2004
  };

  let stamfordBridge = {
    lat: 51.4817,
    lng: -0.1910
  };

  let emiratesStadium = {
    lat: 51.5549,
    lng: -0.1084
  };

  let anfieldStadium = {
    lat: 53.4308,
    lng: -2.9608
  };

	let marker1 = new google.maps.Marker({
		position: santiagoBernabeu,
		map: map
	});
  let infowindow1 = new google.maps.InfoWindow({
    content: '<h5>Santiago Bernabeu</h5><p>Team: Real Madrid</p>'
  });
  marker1.addListener('click', function() {
    infowindow1.open(map, marker1);
  });

  let marker2 = new google.maps.Marker({
    position: wandaMetropolitano,
    map: map
  });
  let infowindow2 = new google.maps.InfoWindow({
    content: '<h5>Wanda Metropolitano</h5><p>Team: Atletico Madrid</p>'
  });
  marker2.addListener('click', function() {
    infowindow2.open(map, marker2);
  });

  let marker3 = new google.maps.Marker({
    position: campNou,
    map: map
  });
  let infowindow3 = new google.maps.InfoWindow({
    content: '<h5>Camp Nou</h5><p>Team: FC Barcelona</p>'
  });
  marker3.addListener('click', function() {
    infowindow3.open(map, marker3);
  });

  let marker4 = new google.maps.Marker({
    position: juventusStadium,
    map: map
  });
  let infowindow4 = new google.maps.InfoWindow({
    content: '<h5>Juventus Stadium</h5><p>Team: Juventus</p>'
  });
  marker4.addListener('click', function() {
    infowindow4.open(map, marker4);
  });

  let marker5 = new google.maps.Marker({
    position: parcDesPrinces,
    map: map
  });
  let infowindow5 = new google.maps.InfoWindow({
    content: '<h5>Parc des Princes</h5><p>Team: Paris Saint-Germain</p>'
  });
  marker5.addListener('click', function() {
    infowindow5.open(map, marker5);
  });

  let marker6 = new google.maps.Marker({
    position: allianzArena,
    map: map
  });
  let infowindow6 = new google.maps.InfoWindow({
    content: '<h5>Allianz Arena</h5><p>Team: Bayern Munich</p>'
  });
  marker6.addListener('click', function() {
    infowindow6.open(map, marker6);
  });

  let marker7 = new google.maps.Marker({
    position: oldTrafford,
    map: map
  });
  let infowindow7 = new google.maps.InfoWindow({
    content: '<h5>Old Trafford</h5><p>Team: Manchester United</p>'
  });
  marker7.addListener('click', function() {
    infowindow7.open(map, marker7);
  });

  let marker8 = new google.maps.Marker({
    position: etihadStadium,
    map: map
  });
  let infowindow8 = new google.maps.InfoWindow({
    content: '<h5>Etihad Stadium</h5><p>Team: Manchester City</p>'
  });
  marker8.addListener('click', function() {
    infowindow8.open(map, marker8);
  });

  let marker9 = new google.maps.Marker({
    position: stamfordBridge,
    map: map
  });
  let infowindow9 = new google.maps.InfoWindow({
    content: '<h5>Stamford Bridge</h5><p>Team: Chelsea</p>'
  });
  marker9.addListener('click', function() {
    infowindow9.open(map, marker9);
  });

  let marker10 = new google.maps.Marker({
    position: emiratesStadium,
    map: map
  });
  let infowindow10 = new google.maps.InfoWindow({
    content: '<h5>Emirates Stadium</h5><p>Team: Arsenal</p>'
  });
  marker10.addListener('click', function() {
    infowindow10.open(map, marker10);
  });

  let marker11 = new google.maps.Marker({
    position: anfieldStadium,
    map: map
  });
  let infowindow11 = new google.maps.InfoWindow({
    content: '<h5>Anfield Stadium</h5><p>Team: Liverpool/p>'
  });
  marker11.addListener('click', function() {
    infowindow11.open(map, marker11);
  });

}