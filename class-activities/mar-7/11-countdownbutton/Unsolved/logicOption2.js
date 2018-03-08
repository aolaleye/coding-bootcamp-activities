// Initialize Firebase (YOUR OWN APP)
var config = {
  apiKey: "AIzaSyAbZUJtsVqAU0o6648DaF8o4evLDtsMcjI",
  authDomain: "clickbutton-55b0c.firebaseapp.com",
  databaseURL: "https://clickbutton-55b0c.firebaseio.com",
  projectId: "clickbutton-55b0c",
  storageBucket: "clickbutton-55b0c.appspot.com",
  messagingSenderId: "941233784805"
};
firebase.initializeApp(config);

// Set Initial Counter
var initialValue = 100;

var clickCounter = initialValue;

var database = firebase.database();

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
database.ref().on("value", function(snapshot) {
  console.log(snapshot.val());
  clickCounter = snapshot.val().clickCount;
  console.log(clickCounter);
  $("#click-value").text(snapshot.val().clickCount);
}, function(error) {
  console.log("failed to read" + error.code);
});

// Print the initial data to the console.


// Change the html to reflect the initial value.


// Change the clickCounter to match the data in the database


// Log the value of the clickCounter


// Change the HTML Value


// If any errors are experienced, log them to console.

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--;

  // Alert User and reset the counter
  // initialValue = 100;
  if (clickCounter === 0) {
    alert("let's reset");
    clickCounter = initialValue;
  }

  // Save new value to Firebase
  database.ref().set({
    clickCount: clickCounter
  });

  // Log the value of clickCounter
  console.log(clickCounter);

  $("#click-value").text(clickCounter);
});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue;

  // Save new value to Firebase
  database.ref().set({
    clickCount: clickCounter
  });

  // Log the value of clickCounter
  console.log(clickCounter);

  // Change the HTML Values
  $("#click-value").text(clickCounter);
});
