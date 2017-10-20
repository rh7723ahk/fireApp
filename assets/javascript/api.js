var queryURL = "https://api.aerisapi.com/fires/closest?p=sacramento,ca&filter=critical&client_id=38Kg3ZDxs3eiKihJ1pDYW&client_secret=Y2dpsgFp0570JXPe7Aeeam57UYVsIt0dIpa0nIEd";

//ajax call
$.ajax({
	url: queryURL,
	method: "GET"
}).done(function(result) {
	console.log(result.response);
	// create var for all things we want represented from json dump

});