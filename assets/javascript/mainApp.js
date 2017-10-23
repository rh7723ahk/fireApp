//Initialize Firebase
var config = {
    apiKey: "AIzaSyBWu3-eZXIiXEsalI1MrYLha2IwBvWpw4I",
    authDomain: "fireapp-1508430756843.firebaseapp.com",
    databaseURL: "https://fireapp-1508430756843.firebaseio.com",
    projectId: "fireapp-1508430756843",
    storageBucket: "fireapp-1508430756843.appspot.com",
    messagingSenderId: "78846809015"
  };
  
  firebase.initializeApp(config);
  //Initialize Firebase=====================================

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

  //set variable for place and state
    var userPlace = $("#userInput").val().trim();
    var userState = $("#selectState").val().trim();

  //if user input is not a number
  if(isNaN(userPlace)) {
    var place = userPlace.toLowerCase().replace(/ /g, "+") + "," + userState.toLowerCase();
    console.log(place);
    alert("its not a number")
  }
  //if user input is a number
  else
  {
    var place = userPlace;
    console.log(place);
    alert("its a number")
  }


  	
  	fireApi(place);




  });