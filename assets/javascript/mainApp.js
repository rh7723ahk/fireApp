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

//function form fireApi.js
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
  $("#add-fire-btn").on("click", function(event){
  	event.preventDefault();

  //set variable for place(city/zip) and state
    var userPlace = $("#searchInput").val().trim();
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
    console.log(urlPlace);
    //alert("its a number")
  }

 	

  // body...
    // grabs user input
    var comm = $("#commInput").val().trim();
    // creates local "temporary" object for holding fire data
    var newFire ={
      fire: urlPlace,
      comment: comm
    };
    

    //uploads fire zip/city to the database
    database.ref().push(newFire);
    
    //logs fire to console
    console.log(newFire.fire);
  
    fireApi(urlPlace);
    // clears the search field
    $("#searchInput").val("");
    $("#commInput").val("");
  });

// create firebase event for adding comments to database and a row in the html
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  // var newFire = childSnapshot.val().fire;
  // console.log("newfire before comment: " + newFire);
  var newFire = childSnapshot.val().comment;
  console.log("new fire: " + newFire);
  

  // Employee Info
  console.log(newFire);

if(newFire !== ""){
  // Add each train's data into the table
  $("#comments > tbody").append("<tr><td>" + newFire + "</td></tr>");
}

});


