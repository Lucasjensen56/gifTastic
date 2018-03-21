




// empty gif array 

var gifsArray = [];






function displayGifs() {


	 var gifSearch = $(this).attr("data-results[i].images.fixed_height.url");


	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifSearch + "&api_key=PjsJJF5igGmYhSxudBVlGWyciIlt43Qz"

// var queryURL = "https://api.giphy.com/v1/gifs/search?q=Harry+Potter&api_key=PjsJJF5igGmYhSxudBVlGWyciIlt43Qz"



$.ajax({
	url: queryURL,
	method: "GET"
}).then(function(response) {

	// console.log(response.data);


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


}


function createButtons() {

	$("gifsButtons").empty();



// grabbing input from user
	$("#gifSearch-input").on("click", function(event) {
		 event.preventDefault();

		var addedGifs = $("#gifSearch").val().trim();


		gifsArray.push(addedGifs)

		var addedGifsButton = $("<button>");
		addedGifsButton.attr("data-results")

		addedGifsButton.append(addedGifs);

		$("#gifsButtons").prepend(addedGifsButton)
	})

}

$(document).on("click", "button",displayGifs)



// displayGifs() 
createButtons()
