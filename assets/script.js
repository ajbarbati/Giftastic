// array of what buttons will be avalible
const topics = ['Moon', 'Star', 'Sun', 'Nebula', 'Earth', 'Mars', 'Blackhole', 'Dark Matter', 'Meteorite', 'Galaxy',]
 
//function that appends all the buttons to the page
function buttonMaker () {
    for (let i = 0; i > topicsArray.length; i++) {
        $("#whereTheBtnsGo").append("<button value='Moon'>" + topics[i] + "</button")
        console.log("farts" + i)
    }
}

