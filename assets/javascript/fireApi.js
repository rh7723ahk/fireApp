$("#findFire").on("click", function(event){
	event.preventDefault();

	var place = $("#userInput").val().trim();

	var queryURL = "https://api.aerisapi.com/fires/within?p=" + place + "&radius=50mi&limit=10&filter=critical&client_id=38Kg3ZDxs3eiKihJ1pDYW&client_secret=Y2dpsgFp0570JXPe7Aeeam57UYVsIt0dIpa0nIEd";

	//ajax call
	$.ajax({
	url: queryURL,
	method: "GET"
	}).done(function(result) {
		for(var i = 0; i < result.response.length; i++){
			console.log(result.response[i].place);
			$("#nameTag").append(result.response[i].report.name + "<br>"); 
			$("#nameTag").append(result.response[i].place.name + " " + result.response[i].place.state + " " + result.response[i].place.country + "<br>");
			$("#nameTag").append("area: " + result.response[i].report.areaMI + " square miles" + "<br>");
			$("#nameTag").append("Date and Time: " + result.response[i].report.dateTimeISO + "<br>");
			$("#nameTag").append("cause: " + result.response[i].report.cause + "<br>");
			$("#nameTag").append(result.response[i].relativeTo.distanceMI + " mile(s) away from zip" + "<br>");
			$("#nameTag").append("relative latitude: " + result.response[i].relativeTo.lat + "<br>");
			$("#nameTag").append("relative longitude: " + result.response[i].relativeTo.long + "<br>");
			$("#nameTag").append("fire latitude: " + result.response[i].loc.lat + "<br>");
			$("#nameTag").append("fire longitude: " + result.response[i].loc.long + "<br><br>");


		}
	// create var for all things we want represented from json dump
	});
})

