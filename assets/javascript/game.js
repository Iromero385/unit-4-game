var redColorValue = 0;
var blueColorValue  = 0;
var greenColorValue  = 0;
var yellowColorValue  = 0;
var randomNumber = 0;
var numberOfWins = 0;
var numberOfLosses = 0;
var totalScore = 0;


initializeNewGame();

function initializeNewGame(){

    redColorValue = Math.floor(Math.random()*100 +1);
    blueColorValue = Math.floor(Math.random()*100 +1);
    greenColorValue = Math.floor(Math.random()*100 +1);
    yellowColorValue = Math.floor(Math.random()*100 +1);
    randomNumber = Math.floor(Math.random()*500 +50);
    totalScore = 0;
    $("#randNumber").text(randomNumber);
}
// may not be implemented just wanted to practice .empty, .css and .html
function endGame(){
   $(".container").empty();
   $(".container").html("<h1>" + "GameOver"+"</h1>")
   $(".container").css("color", "red");
   $(".container").css("text-align", "center");
}
function statusOfGame(){
    if(randomNumber === totalScore){
        numberOfWins++;
        updateScreen();
        initializeNewGame();
        // code to end game play
        // return true;
    }
    else if(totalScore < randomNumber){
        // code to end game play
        // return 1;
    }
    else{
        numberOfLosses++;
        console.log(numberOfLosses);
        updateScreen();
        initializeNewGame();
        // code to end game play
        // return false;
    };
}
function updateScreen(){
    $("#numberOfWins").text("Wins: " + numberOfWins);
    $("#numberOfLosses").text("Losses: " + numberOfLosses);
    $("#totalScore").text(totalScore);

}
function scoring (crystalColor){
    switch(crystalColor){
        case "red":
             totalScore= totalScore + redColorValue;
             break;
        case "blue":
             totalScore= totalScore + blueColorValue;
             break;
        case "green":
             totalScore= totalScore + greenColorValue;
             break;
        case "yellow":
             totalScore= totalScore + yellowColorValue;
             break;
    }
}
$(".crystalImage").on("click",function(event){
    // storing the image that was clicked on
   var crystalColor = $(this).attr("data-color");
   scoring(crystalColor);
   statusOfGame();
   updateScreen();
});

