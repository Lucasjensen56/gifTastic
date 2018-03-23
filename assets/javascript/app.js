
// empty gif array 
var gifsArray = [];

var topics = ["voldemort", "harry Potter", "ron", "star wars"]

function displayInitialButtons() {

  for (var i = 0; i < topics.length; i++) {
    
    
  var topicsDiv = $("<button>");
  var topicsBtnName = topicsDiv.text(topics[i]);
     
    
  //var topicsVal = topics[i];
    
    //var topicsVal = $(this).topics[i];
  
   $("#initial-buttons").append(topicsDiv)
    
    
  
    
    
    $("button").on("click", function() {
      //console.log($(this).val())
       displayGifs($("#topicsDiv").val())  
      
    });
    
   
   
  }

}




 

function displayGifs(gifSearch) {
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifSearch +    "&api_key=PjsJJF5igGmYhSxudBVlGWyciIlt43Qz&limit=10"

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    console.log(response.data);

    var results = response.data

    for (var i = 0; i < results.length; i++) {
      var gifDiv = $("<div>");

      var rating = $("<p>").text("Rating: " + results[i].rating) 

     // console.log(results[i].rating)

      var gifImage = $("<img>");

      // gifImage.attr("src", results[i].images.fixed_height.url);
      
      gifImage.attr("src", results[i].images.fixed_height_still.url);
      
      gifImage.attr("data-still",results[i].images.fixed_height_still.url);
      
      gifImage.attr("data-animate", results[i].images.fixed_height.url);
            
      gifImage.addClass("gif");

      gifDiv.append(rating);
      
      gifDiv.append(gifImage)

      //gifImage.append(gifDiv);


      // $("#gifsDisplay").empty();

        $("#gifsDisplay").prepend(gifDiv);
      //$("#gifsDisplay").prepend(gifImage);
      
      $(".gif").on("click", function() {
          console.log("i cliked on the gif")
         
  
            var state = $(this).attr("data-state");
            if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }

       

    });
 

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
  
  

  
    $("button").on("click", function() {
      
      displayGifs(addedGifs)
      
    })




// commented this out to stop displays from generating every time I just click the search button. We need the buttons to

//displayGifs(addedGifs)




});


}
displayInitialButtons()

$(document).on("click", createButtons())
// createButtons()

