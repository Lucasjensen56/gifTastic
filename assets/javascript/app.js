




//var queryURL = "https://api.giphy.com/v1/gifs/search?q=harry+potter&api_key=PjsJJF5igGmYhSxudBVlGWyciIlt43Qz"



function displayGifs() {


// var gifSearch = $(this).attr("data")
// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifSearch + "&api_key=PjsJJF5igGmYhSxudBVlGWyciIlt43Qz"

var queryURL = "https://api.giphy.com/v1/gifs/search?q=Harry+Potter&api_key=PjsJJF5igGmYhSxudBVlGWyciIlt43Qz"



$.ajax({
	url: queryURL,
	method: "GET"
}).then(function(response) {

	console.log(response.data);


	var results = response.data

	for (var i = 0; i < results.length; i++) {



	var gifDiv = $("<div>");

	// var test = $("<p>").text(JSON.stringify(response))

	var gifImage = $("<img>");

	gifImage.attr("src", results[i].images.fixed_height.url);



	gifImage.append(gifDiv);


	$("#gifsDisplay").prepend(gifImage);

};


}) 


	 // var gifSearch = $(this).attr("data-gifSearch");
}


function createButtons() {


	// adds saved gif button
	$("#gifsButtons").on("click", function(event) {

		var addedGifs = $("#gifSearch").val().trim();

		 // need to create and push to an arry where we will store the gif buttons

	})


}

displayGifs() 




