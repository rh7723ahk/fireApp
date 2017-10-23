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

// prevents refresh of page
$("#findFire").on("click", function(event){
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

  



  