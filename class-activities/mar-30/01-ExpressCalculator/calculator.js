var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

app.get("/:operation/:first/:second", function(req,res){
  var operation = parseInt(req.params.operation);
  var first = parseInt(req.params.first);
  var second = parseInt(req.params.second);

  console.log(operation);
  console.log(first);
  console.log(second);

  var result;

  switch (operation) {
    case "add":
      result = first + second;
      break;

    case "subtract":
      result = first - second;
      break;

    case "multiply":
      result = first * second;
      break;  

    case "divide":
      result = first / second;
      break;  

    default:
      result = "Invalid operation, please try again.";  
  }

  res.end(result.toString());
});

server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});



