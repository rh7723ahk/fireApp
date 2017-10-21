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



  $("#findFire").on("click", function(event){
  	event.preventDefault();

  	var place = $("#userInput").val().trim();
  	
  	fireApi(place);


  });