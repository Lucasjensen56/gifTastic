



// empty gif array 

var gifsArray = [];




 // var gifSearch;

function displayGifs(gifSearch) {




	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifSearch + "&api_key=PjsJJF5igGmYhSxudBVlGWyciIlt43Qz&limit=5"

// var queryURL = "https://api.giphy.com/v1/gifs/search?q=Harry+Potter&api_key=PjsJJF5igGmYhSxudBVlGWyciIlt43Qz&limit=5"



$.ajax({
	url: queryURL,
	method: "GET"
}).then(function(response) {

	console.log(response.data);


	var results = response.data

	for (var i = 0; i < results.length; i++) {
	var gifDiv = $("<div>");
	var gifImage = $("<img>");
	gifImage.attr("src", results[i].images.fixed_height.url);
	gifImage.attr("gif");
	

	gifImage.append(gifDiv);

	// $("#gifsDisplay").empty();
	$("#gifsDisplay").append(gifImage);



	};
}) 


}


function createButtons() {


$("gifsButtons").empty();


$("#gifSearch-input").on("click", function (event) {


	    event.preventDefault();
 
	var addedGifs = $("#gifSearch").val().trim();

	gifsArray.push(addedGifs)
	var addedGifsButton = $("<button>");
	addedGifsButton.append(addedGifs);
	$("#gifsButtons").prepend(addedGifsButton)

	addedGifsButton.addClass("gif")




// commented this out to stop displays from generating every time I just click the search button. We need the buttons to

displayGifs(addedGifs)




});


}


$(document).on("click", createButtons())
// createButtons()
















// // empty gif array 

// var gifsArray = [];




//  var gifSearch;

// function displayGifs() {


// 	 // var gifSearch = $(this).attr("data-results");

// 	 // var gifSearch = "Harry Potter"

// 	 // var gifSearch;


// 	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifSearch + "&api_key=PjsJJF5igGmYhSxudBVlGWyciIlt43Qz&limit=5"

// // var queryURL = "https://api.giphy.com/v1/gifs/search?q=Harry+Potter&api_key=PjsJJF5igGmYhSxudBVlGWyciIlt43Qz&limit=5"



// $.ajax({
// 	url: queryURL,
// 	method: "GET"
// }).then(function(response) {

// 	// console.log(response.data);


// 	var results = response.data

// 	for (var i = 0; i < results.length; i++) {


// 	var gifDiv = $("<div>");

// 	// var test = $("<p>").text(JSON.stringify(response))

// 	var gifImage = $("<img>");

// 	gifImage.attr("src", results[i].images.fixed_height.url);



// 	gifImage.append(gifDiv);


// 	$("#gifsDisplay").prepend(gifImage);

// };


// }) 


// }


// function createButtons() {

// 	$("gifsButtons").empty();



// // grabbing input from user
// 	$("#gifSearch-input").on("click", function(event) {
// 		 event.preventDefault();

// 		var addedGifs = $("#gifSearch").val().trim();


	



// 		gifsArray.push(addedGifs)

// 		var addedGifsButton = $("<button>");
// 		addedGifsButton.attr("data-results")
// 		addedGifsButton


// 		addedGifsButton.append(addedGifs);

// 		$("#gifsButtons").prepend(addedGifsButton)
// 	})

// }

// $(document).on("click", "button",displayGifs)



// createButtons()
