


 // var searchInput = something //something goes here 


// testing a few things
 var gifSearch = $(this).attr("data-gifSearch");

// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifSearch + "&api_key=PjsJJF5igGmYhSxudBVlGWyciIlt43Qz"

var queryURL = "https://api.giphy.com/v1/gifs/search?q=harry+potter&api_key=PjsJJF5igGmYhSxudBVlGWyciIlt43Qz"




$.ajax({
	url: queryURL,
	method: "GET"
}).then(function(response) {
	console.log(response);
}) 


