        
// creat an array that computer can choose from

    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
        'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
 // create variables to count score

    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var letters = [];

// Create variables that refer to HTML code.

    var winsText = document.getElementById("wins");
    var lossesText = document.getElementById("losses");
    var guessesText = document.getElementById("guesses");   
    var qlettersText = document.getElementById("letters");
    var qUserinputText = document.getElementById("userInput");       
    
// determine if user pressed a key and find out which one
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice);


    document.onkeyup = function(event) {

        var userInput = event.key;
        console.log(event.key);

      

        if (userInput === computerChoice) {
            wins++;
        }
        else {
            guesses--;
        }
        if (guesses = 0) {
            losses++;
        }
    }


  


        

    


    
    

        