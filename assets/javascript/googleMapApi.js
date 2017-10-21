


function googleMapApi(mapCenter, fireArray) {
  $ ("#map").empty();
  $ ("#map").attr("style", "height: 500px; width: 100%;")

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: mapCenter
  });


  for(var i = 0; i < fireArray.length; i++) {
    var marker = new google.maps.Marker({
    position: fireArray[i],
    map: map
  });
  }


  // var marker = new google.maps.Marker({
  //   position: mapCenter,
  //   map: map
  // });

  // var secondMarker = new google.maps.Marker({
  //   position: {lat: 30.26, lng: -97.74},
  //   map: map
  // });

  console.log("google map function has run: ");
  console.log(mapCenter);

  }

