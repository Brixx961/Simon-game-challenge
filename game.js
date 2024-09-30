var buttonSequence = [ "red", "blue", "green", "yellow" ];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0

$(document).keypress( function() { 
   if (!started){
    $("#level-title").text("Level" + level)
    nextSequence();
    started = true;
}
});



$(".btn").click(function () {
    
    var userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor);
    // $('#GFG_DOWN').text("ID = " + t);

    playSound(userChosenColor);
    animatePress(userChosenColor)
    checkAnswer(userClickedPattern.length-1);

});


function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
            
        }

    } else {

        console.log("wrong");
        playSound("wrong");

        $("body").addClass("game-over")
          window.setTimeout(function(){
            $("body").removeClass("game-over")
          }, 200)

         $("#level-title").text("Game over, Press any key to restart")
    
    }

} 

function nextSequence() {

    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

   var randomNumber = Math.floor(Math.random() * 4);
   var randomChoosenColor = buttonSequence[randomNumber];  
   gamePattern.push(randomChoosenColor);

   $("#" + randomChoosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

   playSound(randomChoosenColor);
} 


// randomChoosenColor.addEventListener("click", function () {
//     var audio = new Audio('sounds./' + randomChoosenColor + '.mp3');
//     audio.play();
// })




function playSound(name) {

    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
    
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    window.setTimeout( function(){
        $("#" + currentColor).removeClass("pressed")},
        100
    );
}
 



// the logic is that we are checking the user game against the system game in
//  the same order so we are adding the last index of every system game to form 
// a new array that checks against the order in which the user play?

 


