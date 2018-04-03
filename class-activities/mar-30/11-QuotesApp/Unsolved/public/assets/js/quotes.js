// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  // jQuery event handlers should go here.
  $(".delquote").on("click", function(event) {
    var id = $(this).data("quoteid");

    // Send the DELETE request.
    $.ajax("/quotes/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newquote = {
      quote: $("#createquote [name=quote]").val().trim()
    };

    // Send the POST request.
    $.ajax("/quotes", {
      type: "POST",
      data: newquote
    }).then(
      function() {
        console.log("created new quote");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#update-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var id = $("[name=id]").val().trim();

    var updatedquote = {
      quote: $("#updatequote [name=quote]").val().trim()
    };

    // Send the PUT request.
    $.ajax("/api/quotes/" + id, {
      type: "PUT",
      data: updatedquote
    }).then(
      function() {
        console.log("updated id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});

