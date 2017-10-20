


function mapfun() {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });

  var secondMarker = new google.maps.Marker({
    position: {lat: 30.26, lng: -97.74},
    map: map
  });

  }

