function fireApi(inputLocation){

	

	var queryURL = "https://api.aerisapi.com/fires/within?p=" + inputLocation + "&radius=100mi&limit=10&filter=critical&client_id=38Kg3ZDxs3eiKihJ1pDYW&client_secret=Y2dpsgFp0570JXPe7Aeeam57UYVsIt0dIpa0nIEd";


	function fireInfoObject (lat, lng) {
		this.lat = lat;
		this.lng = lng;
	}



	//ajax call
	$.ajax({
	url: queryURL,
	method: "GET"
	}).done(function(result) {
		console.log("success: " + result.success);
		console.log(result);
		// console.log("error code: " + result.error.code);
		
		//if any errors
		if(result.error) {
			//if success, but no fires found
			if(result.success == true){
				console.log("first condition fired");
				document.getElementById("searchAFire").innerHTML = "No Fires Nearby";
			}
			//if invalid input
			else if (result.success == false){
				console.log("second condition fired");
				document.getElementById("searchAFire").innerHTML = "Invalid Input";
			}
		}
		
		//if successful and fires found
		else if (result.success == true){
			console.log("third condition fired");

			for(var i = 0; i < result.response.length; i++){

				userInputLocation.lat = result.response[i].relativeTo.lat
				userInputLocation.lng = result.response[i].relativeTo.long
				console.log("user input location: " + userInputLocation);

				var fireInfo = new fireInfoObject(result.response[i].loc.lat, result.response[i].loc.long);

				nearbyFiresArray.push(fireInfo);

			// console.log("fire info");
			// console.log(fireInfo);

			// console.log("fire latitude: " + result.response[i].loc.lat + "<br>");
			// console.log("fire longitude: " + result.response[i].loc.long + "<br><br>");
			// console.log(result.response[i].place);
			// console.log(result.response[i].report.name); 
			// console.log(result.response[i].place.name + " " + result.response[i].place.state + " " + result.response[i].place.country + "<br>");
			// console.log("area: " + result.response[i].report.areaMI + " square miles" + "<br>");
			// console.log("Date and Time: " + result.response[i].report.dateTimeISO + "<br>");
			// console.log("cause: " + result.response[i].report.cause + "<br>");
			// console.log(result.response[i].relativeTo.distanceMI + " mile(s) away from zip" + "<br>");
			// console.log("relative latitude: " + result.response[i].relativeTo.lat + "<br>");
			// console.log("relative longitude: " + result.response[i].relativeTo.long + "<br>");
			
		}
		console.log("testing");
	}

		googleMapApi(userInputLocation, nearbyFiresArray);
		console.log(nearbyFiresArray);

	// create var for all things we want represented from json dump
	});

}




