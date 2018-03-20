


 // var searchInput = something //something goes here 

<<<<<<< HEAD

// testing a few things
 var gifSearch = $(this).attr("data-gifSearch");
=======
 var gifSearch = $(this).attr('data');
>>>>>>> f1af2fe1450447b2d5e71eedab6b7cce4f81c0a6


//var queryURL = "https://api.giphy.com/v1/gifs/search?q=harry+potter&api_key=PjsJJF5igGmYhSxudBVlGWyciIlt43Qz"

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifSearch + "&api_key=PjsJJF5igGmYhSxudBVlGWyciIlt43Qz"




$.ajax({
	url: queryURL,
	method: "GET"
}).then(function(response) {
	console.log(response);
}) 
<<<<<<< HEAD


=======
>>>>>>> f1af2fe1450447b2d5e71eedab6b7cce4f81c0a6
