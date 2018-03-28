// Dependencies
var http = require("http");

var PORT = 8080;
var server = http.createServer(handleRequest);


$(".submit").on("click", function() {

    event.preventDefault();    

    var userName = $(".user-name").val().trim();
    var userEmail = $(".user-email").val().trim();
    var userMessage = $(".user-message").val().trim();

    //if any fields are null, the submit button won't work and a warning message appears
    if ($(".form-group input").val() === '') {
        $(".warning").fadeIn(1000).fadeOut(2000);
        $(".submit").preventDefault();
    }

    //clears all inputs after submitting
    $(".form-group input").val(null);

});

function handleRequest(req, res) {

  // Saving the request data as a variable
  var requestData = "";

  // When the server receives data...
  req.on("data", function(data) {

    // Add it to requestData.
    requestData += data;
  });

  // When the request has ended...
  req.on("end", function() {

    // Log (server-side) the request method, as well as the data received!
    console.log("You did a", req.method, "with the data:\n", requestData);
    res.end();
  });

}

// Start our server
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
