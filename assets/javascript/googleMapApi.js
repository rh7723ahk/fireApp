


function googleMapApi(mapCenter, fireArray) {
  $ ("#map").empty();
  $ ("#map").attr("style", "height: 500px; width: 100%;")

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: mapCenter
  });


  for(var i = 0; i < fireArray.length; i++) {
    
    var infowindow = new google.maps.InfoWindow({
      content: "<p>" + fireArray[i].name + "<br />" +"Square Miles:" + fireArray[i].miles + "<p>"
    });

    var marker = new google.maps.Marker({
    position: fireArray[i],
    map: map
  });

    
    marker.infowindow = infowindow;

    marker.addListener('click', function() {
      return this.infowindow.open(map, this);
  });

  }


  

  }

  
