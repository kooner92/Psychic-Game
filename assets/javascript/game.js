        

var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//  set variables for score
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];


// computer chooeses random letter
var randomLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// create functions to count guesses left and display guesses so far

function countGuessesLeft() {
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

function faruserIn() {
	document.querySelector("#soFar").innerHTML = "Your Guesses so far: " + guessesSoFar.join(' ');
}

// create restart variable and set scores to default amounts

var restart = function() {
    guessesLeft = 9;
    guessesSoFar = [];
}

// create function with checks
// runs after key press

document.onkeyup = function(event) {
	guessesLeft--;

	var userInput = String.fromCharCode(event.keyCode).toLowerCase();

// push user key into the guesses so far and update

	guessesSoFar.push(userInput);
	countGuessesLeft();
	faruserIn();

	if (userInput === randomLetter){
		wins++;
		document.querySelector("#wins").innerHTML = "Wins: " + wins;
		restart();
	} 
	else if (guessesLeft === 0) {
		losses++;
		document.querySelector("#lose").innerHTML = "Loses: " + losses;
        restart();
    }
    
// reset game when user wins or losses
// ????

};


    


  


        

    


    
    

        