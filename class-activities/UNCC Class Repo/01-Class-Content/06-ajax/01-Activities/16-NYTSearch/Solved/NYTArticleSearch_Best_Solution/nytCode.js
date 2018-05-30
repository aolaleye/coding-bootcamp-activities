/**
 * pulls information from the form and build the query URL
 * @returns {string} URL for NYT API based on form inputs
 */
function buildQueryURL() {
  // queryURL is the url we'll use to query the API
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

  // add the api key parameter (the one we received when we registered)
  queryURL += "?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

  // grab text the user typed into the search input, add as parameter to url
  var searchTerm = $("#search-term").val().trim();
  queryURL += "&q=" + searchTerm;

  // if the user provides a startYear, include it in the queryURL
  var startYear = $("#start-year").val().trim();

  if (parseInt(startYear)) {
    queryURL += "&begin_date=" + startYear + "0101";
  }

  // if the user provides an endYear, include it in the queryURL
  var endYear = $("#end-year").val().trim();

  if (parseInt(endYear)) {
    queryURL += "&end_date=" + endYear + "0101";
  }

  // Logging the URL so we have access to it for troubleshooting
  console.log("---------------\nURL: " + queryURL + "\n---------------");

  return queryURL;
}

/**
 * takes API data (JSON/object) and turns it into elements on the page
 * @param {object} NYTData - object containing NYT API data
 */
function updatePage(NYTData) {
  // get from the form the number of results to display
  // api doesn't have a "limit" parameter, so we have to do this ourselves
  var numArticles = $("#article-count").val();

  // log the NYTData to console, where it will show up as an object
  console.log(NYTData);
  console.log("------------------------------------");

  // loop through and build elements for the defined number of articles
  for (var i = 0; i < numArticles; i++) {

    // get specific article info for current index
    var article = NYTData.response.docs[i];

    // increase the articleCount (track article # - starting at 1)
    var articleCount = i + 1;

    // create the HTML well (section) and add the article content for each
    var $articleWell = $("<article>");
    $articleWell.addClass("well");
    $articleWell.attr("id", "article-well-" + articleCount);

    // add the newly created element to the DOM
    $("#well-section").append($articleWell);

    // if the article has a headline, log and append to $articleWell
    var headline = article.headline;

    if (headline && headline.main) {
      console.log(headline.main);

      $articleWell.append(
        "<h3 class='articleHeadline'>" +
        "<span class='label label-primary'>" + articleCount + "</span>" +
        "<strong> " + headline.main + "</strong></h3>"
      );
    }

    // if the article has a byline, log and append to $articleWell
    var byline = article.byline;

    if (byline && byline.original) {
      console.log(byline.original);

      $articleWell.append("<h5>" + byline.original + "</h5>");
    }

    // log section, and append to document if exists
    var section = article.section_name;
    console.log(article.section_name);
    if (section) {
      $articleWell.append("<h5>Section: " + section + "</h5>");
    }

    // log published date, and append to document if exists
    var pubDate = article.pub_date;
    console.log(article.pub_date);
    if (pubDate) {
      $articleWell.append("<h5>" + article.pub_date + "</h5>");
    }

    // append and log url
    $articleWell.append(
      "<a href='" + article.web_url + "'>" + article.web_url + "</a>"
    );
    console.log(article.web_url);
  }
}

// function to empty out the articles
function clear() {
  $("#well-section").empty();
}

// CLICK HANDLERS
// ==========================================================

// .on("click") function associated with the Search Button
$("#run-search").on("click", function(event) {
  // This line allows us to take advantage of the HTML "submit" property
  // This way we can hit enter on the keyboard and it registers the search
  // (in addition to clicks). Prevents the page from reloading on form submit.
  event.preventDefault();

  // empty the region associated with the articles
  clear();

  // build the query URL for the ajax request to the NYT API
  var queryURL = buildQueryURL();

  // make the AJAX request to the API - GETs the JSON data at the queryURL.
  // the data then gets passed as an argument to the updatePage function
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(updatePage);
});

//  .on("click") function associated with the clear button
$("#clear-all").on("click", clear);
