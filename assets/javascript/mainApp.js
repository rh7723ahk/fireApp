//Initialize Firebase
// kyles firebase key.
  var config = {
    apiKey: "AIzaSyB6TuSuV_VHAaujH6Ky3gzDrPqw8n0XTZQ",
    authDomain: "group-project-7edd9.firebaseapp.com",
    databaseURL: "https://group-project-7edd9.firebaseio.com",
    projectId: "group-project-7edd9",
    storageBucket: "",
    messagingSenderId: "636060649795"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  //Initialize Firebase=====================================

//function form fireApp.js
var nearbyFiresArray = [];
  
  var userInputLocation = {
    lat: 0,
    lng: 0
  };


//Dropdown menu
var select = document.getElementById("selectState");
var stateAbbrev = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CA', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

  for (var i = 0; i < stateAbbrev.length; i++){
    //console.log(stateAbbrev[i])
    var options = stateAbbrev[i];
    var el = document.createElement("option");
    el.textContent = options;
    el.value = options;
    select.appendChild(el);
}

//On search button click
  $("#findFire").on("click", function(event){
  	event.preventDefault();

  //set variable for place(city/zip) and state
    var userPlace = $("#userInput").val().trim();
    var userState = $("#selectState").val().trim();

  //if user input is not a number
  if(isNaN(userPlace)) {
    var urlPlace = userPlace.toLowerCase().replace(/ /g, "+") + "," + userState.toLowerCase();
    console.log(urlPlace);
    //alert("its not a number")
  }
  //if user input is a number
  else
  {
    var urlPlace = userPlace;
    console.log(place);
    //alert("its a number")
  }


      //   if(result.success = true && result.response === []){
      //   alert("No Fires!")
      // }
      // else if (result.success = false){
      //   alert("invald input!")
      // }
      // else{


  	
  	fireApi(urlPlace);
// prevents refresh of page
$(".inputButton").on("click", function(event){
    event.preventDefault();

    // grabs user input
    var place = $("#userInput").val().trim();

    // creates local "temporary" object for holding fire data
    var newFire ={
      fire: place
    };

    //uploads fire zip/city to the database
    database.ref().push(newFire);


    //logs fire to console
    console.log(newFire.fire);


    fireApi(place);
    // clears the search field
    $("#userInput").val("");
  });
});
