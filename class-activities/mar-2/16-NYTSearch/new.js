
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var term;
var beginDate;
var endDate;
var number;

function checkNumber() {
   if ($("#1").hasFocus()) {
       number = 1;
   } else if ($("#5").hasFocus()) {
    number = 5;
    }
}

$(".searchButton").on("click", function() {
    event.preventDefault();
    term = $("#search-input").val().trim();
    beginDate = $(".beginDate").val();
    endDate = $(".endDate").val();
    console.log(term);  
    console.log(beginDate);
    console.log(endDate);

    queryURL += '?' + $.param({
        'api-key': "a9ea1d5f72904b7c892eaf09b18ba659",
        'q': term,
        'begin_date': beginDate,
        'end_date': endDate
        });
        
        $.ajax({
          url: queryURL,
          method: 'GET',
        }).then(function(result) {
          console.log(result);
          for(i = 0; i < result.response.docs.length; i++) {
          $(".print").append("<h5>" + result.response.docs[i].headline.print_headline + "</h5>");
          $(".print").append("<p>" + result.response.docs[i].byline.original + "</p>");
          }
        })

})

$(".clearButton").on("click", function() {
    $(".print").empty();
    term.empty();
    beginDate.empty();
    endDate.empty();
})




