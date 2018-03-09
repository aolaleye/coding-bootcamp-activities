//moment() returns the time now
//i.e. moment().format("DD/MM/YY h:mm a")

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAbZUJtsVqAU0o6648DaF8o4evLDtsMcjI",
    authDomain: "clickbutton-55b0c.firebaseapp.com",
    databaseURL: "https://clickbutton-55b0c.firebaseio.com",
    projectId: "clickbutton-55b0c",
    storageBucket: "clickbutton-55b0c.appspot.com",
    messagingSenderId: "941233784805"
  };
  firebase.initializeApp(config);

var database = firebase.database();

var eName = "";
var eRole = "";
var eStartDate = "";
var eRate = "";
// var eMonthsWorked =
// var eTotalBilled =


$(".submit").on("click", function() {
    event.preventDefault();    
    eName = $(".name").val().trim();
    eRole = $(".role").val().trim();
    eStartDate = $(".start-date").val().trim();
    eRate = $(".monthly-rate").val().trim();
    
    console.log(eName);
    console.log(eRole);
    console.log(eStartDate);
    console.log(eRate);

    database.ref().push({
        name: eName,
        role: eRole,
        startDate: eStartDate,
        rate: eRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    $(".form-group input").val(null);

});

//gives just the added value versus the all the values
database.ref().on("child_added", function(childSnapshot){

    var snap = childSnapshot.val();

    var monthsWorked = moment().diff(snap.startDate, "months");
    var totalBilled = (monthsWorked * snap.rate);

    $("tbody").append(
        "<tr><td scope='col'>" + snap.name + "</td><td scope='col'>" + snap.role + "</td><td scope='col'>" + snap.startDate + "</td><td scope='col'>" + monthsWorked + "</td><td scope='col'>" + snap.rate + "</td><td scope='col'>" + totalBilled + "</td></tr>");

},  function(errorObject) {
    console.log("The read failed: " + errorObject.code);
});

// dataRef.ref().orderByChild("dateAdded").limitToLast(1).on('child_added', function(snapshot) {

//     var snap = snapshot.val();

//     //change HTML to reflect
//     $('#name-display').text(snap.name);

// });