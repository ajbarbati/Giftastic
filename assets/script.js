// jquery stuff > 
// var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9"

// $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//     console.log(response);
//   });

// array of what buttons will be avalible
$(document).ready(function () {

var topics = ['Moon', 'Star', 'Sun', 'Nebula', 'Earth', 'Mars', 'Blackhole', 'Dark Matter', 'Meteorite', 'Galaxy',]
 
//function that appends all the buttons to the page
function buttonMaker() {
    
    for (var i = 0; i < topics.length; i++) {
        
            var $btn = $('<input type="button" value="' + topics[i] + '" />').attr({'data-name': topics[i]})
            $btn.appendTo($('#btns'))
    }

    $($btn).on('click', function(){
        
        $('#gifs').empty()

		var thisTopic = $(this).data('data-name')
        
        var giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + thisTopic + "&limit=10&api_key=anyHsKhH5D2riRQBMncMV5DVInUAtbnc"
        console.log('farts')
		$.ajax({
            url: giphyURL, 
            method: 'GET',
        }).done( function (response) {
            
        })
        
        //api.giphy.com/v1/gifs/search?q=" + $('#srcCriteria').val() +  "&api_key=dc6zaTOxFJmzC
	});
}
})
