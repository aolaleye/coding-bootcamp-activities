// Initialize Firebase
// var config = {
//     apiKey: "AIzaSyAbZUJtsVqAU0o6648DaF8o4evLDtsMcjI",
//     authDomain: "clickbutton-55b0c.firebaseapp.com",
//     databaseURL: "https://clickbutton-55b0c.firebaseio.com",
//     projectId: "clickbutton-55b0c",
//     storageBucket: "clickbutton-55b0c.appspot.com",
//     messagingSenderId: "941233784805"
//   };
//   firebase.initializeApp(config);
  
// Assign the reference to the database to a variable named 'database'
// var database = ...
var database = firebase.database();

var connectionsRef = database.ref("/connections");
var connectedRef = database.ref(".info/connected");

connectedRef.on("value", function(snapshot) {

    // If they are connected..
    if (snapshot.val()) {
  
      // Add user to the connections list.
      var con = connectionsRef.push(true);
  
      // Remove user from the connection list when they disconnect.
      con.onDisconnect().remove();
    }
});
  
// When first loaded or when the connections list changes...
connectionsRef.on("value", function(snapshot) {
  
    // Display the viewer count in the html.
    // The number of online users is the number of children in the connections list.
    $("#connected-viewers").text(snapshot.numChildren());
});

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder; 
var currentBidderName = "";
var currentBidderPrice = "";


$("#submit-bid").on("click", function(event) {
    // Prevent form from submitting
    event.preventDefault();
  
    currentBidderName = $("#bidder-name").val().trim();
    currentBidderPrice = $("#bidder-price").val().trim();

    console.log(currentBidderName);
    console.log("$" + currentBidderPrice);

  
    // Log the Bidder and Price (Even if not the highest)
    if (currentBidderPrice > highPrice) {
  
        // Alert
        alert("You are now the highest bidder.");
    
        // Save the new price in Firebase
        highBidder = currentBidderName; 
        highPrice = currentBidderPrice;

        database.ref().set({
            highBidder: currentBidderName,
            highPrice: currentBidderPrice
        });
  
        // Log the new High Price
        console.log(highBidder);
        console.log("$" + highPrice);
  
  
      // Store the new high price and bidder name as a local variable
  
  
      // Change the HTML to reflect the new high price and bidder
      $("#highest-bidder").text(highBidder);
      $("#highest-price").text("$" + highPrice);
    }
  
    else {
      // Alert
      alert("Sorry that bid is too low. Try again.");
    }
  
});

database.ref().on("value", function(snapshot){
    var newVal = snapshot.val();

    console.log(newVal);

    $("#highest-bidder").text(newVal.highBidder);
    $("#highest-price").text("$" + newVal.highPrice);

}, function(errorObject){
    console.log("The read failed: " + errorObject.code);

});
  
  