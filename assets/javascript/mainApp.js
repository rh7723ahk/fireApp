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

// prevents refresh of page

$(".userInput").on("click", function(event) {
    event.preventDefault();

  // body...



    // grabs user input
    var place = $("#searchInput").val().trim();
    var comm = $("#commInput").val().trim();
    // creates local "temporary" object for holding fire data
    var newFire ={
      fire: place,
      comment: comm
    };
    

    //uploads fire zip/city to the database
    database.ref().push(newFire);
    
    //logs fire to console
    console.log(newFire.fire);
  
    fireApi(place);
    // clears the search field
    $("#searchInput").val("");
    $("#commInput").val("");
  });

// create firebase event for adding comments to database and a row in the html
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var newFire = childSnapshot.val().fire;
  var newFire = childSnapshot.val().comment;
  

  // Employee Info
  console.log(newFire);

  // Add each train's data into the table
  $("#comments > tbody").append("<tr><td>" + newFire + "</td></tr>");
});


















