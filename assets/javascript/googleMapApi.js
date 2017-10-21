


function googleMapApi(mapCenter) {
  $ ("#map").empty();

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: mapCenter
  });
  var marker = new google.maps.Marker({
    position: mapCenter,
    map: map
  });

  var secondMarker = new google.maps.Marker({
    position: {lat: 30.26, lng: -97.74},
    map: map
  });

  console.log("google map function has run: ");
  console.log(mapCenter);

  }

