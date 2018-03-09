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

var database =  firebase.database();

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
    // eMonthsWorked =
    // eTotalBilled =

    console.log(eName);
    console.log(eRole);
    console.log(eStartDate);
    console.log(eRate);

    database.ref().push({
        name: eName,
        role: eRole,
        startDate: eStartDate,
        rate: eRate
    })

    $("tbody").append(
    "<tr><td scope='col'>" + eName + "</td><td scope='col'>" + eRole + "</td><td scope='col'>" + eStartDate + "</td><td scope='col'>" + "test" + "</td><td scope='col'>" + eRate + "</td><td scope='col'>" + "test" + "</td></tr>");


});