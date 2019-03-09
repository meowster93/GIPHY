/*eslint-env browser*/
/*global $*/
$(document).ready(function () {

    //Event listener for button elements
    $("button").on("click", function () {
        // the "this" refers to the button that was clicked
        var topics = $(this).attr("data-search");
        // Constructing a URL to search Giphy for the name of the anime your searching for
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=jWL1Z34W3Q5t4uM0IV3Z5K4TTp0O1yTR&limit=10";
        // Performing our AJAX GET request
        $.ajax({
            url: queryURL,
            method: "GET"
        })
    // After the data comes back from the API
            .then(function (response) {
    //Storing an array of results in the results variable
            var results = response.data;
    //looping over every result item

            for (var i = 0; i < results.length; i++) {

    // Only taking action if the photo has an appropriate rating

            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

    //creating a div for the gif

            var gifDiv = $("<div>");

    //Storing the result of the item's rating

            var rating = results[i].rating;

    //creating a paragraph tag with result items ratings
            var p = $("<p>").text("Rating: " + rating);

    //creating an image tag

            var animeImage = $("<img>");

    // Giving the image tag an src attribute of a proprty pulled off the result item

            animeImage.attr("src", results[i].images.fixed_height.url);

    //appending the paragraph the animeImage we created to the "gifDiv" div we created

            gifDiv.append(p);

            gifDiv.append(animeImage);

    //prepending the gifDiv to the #gifs-appear-here" div in the HTML

                        $("#gifArea").prepend(gifDiv);
                    }
                }
            });




    });//end of button on click on function


});// end of document.ready function