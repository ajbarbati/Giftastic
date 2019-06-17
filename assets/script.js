// jquery stuff > 
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9"

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
  
// array of what buttons will be avalible
var topics = ['Moon', 'Star', 'Sun', 'Nebula', 'Earth', 'Mars', 'Blackhole', 'Dark Matter', 'Meteorite', 'Galaxy',]
 
//function that appends all the buttons to the page
function buttonMaker () {
    for (var i = 0; i < topics.length; i++) {
       console.log("farts1") 

       var btn = $('<button>')

       btn.addClass('buttons')
       btn.attr('data-name' + topics[i])
       btn.text(topics[i])
        
       $("#whereTheBtnsGo").append(btn)
    }
}

buttonMaker()