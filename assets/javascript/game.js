//link the html elements to javascript

var winsJava    = document.getElementById("wins");
var lossesJava  = document.getElementById("losses");
var leftJava    = document.getElementById("left");
var gsJava      = document.getElementById("gs");

//function that iniatilize letter and guesses left
function initialize() {
    
    //create array with all the letters in the alphabet
     var letters = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
     //select letter to be guessed
    var letter = letters[Math.floor(Math.random()*letters.length)];

    return letter;
}

//initial values of wins and losses
winsJava = 0;
lossesJava = 0;
leftJava = 9 ;
letter = initialize();
console.log("this is the letter the program chose " + letter); 


//function to be run when user types a letter

document.onkeyup = function(event){
    // gsJava.textContent = event.key ;
    console.log("this is the letter the user chose " + event.key);

    //if letter is guessed wins adds one to existing value and initialize letter, left guesses
    if (letter == event.key){
        winsJava = winsJava + 1;
        letter = initialize();
        leftJava = 9;
        document.getElementById("wins").textContent = winsJava;
        document.getElementById("losses").textContent = lossesJava;
        document.getElementById("left").textContent = leftJava;
        document.getElementById("gs").textContent = event.key;
        console.log("this is the number of wins " + winsJava);
        console.log("this is the number of losses " + lossesJava);
        console.log("this is letter the program chose " + letter);
        console.log("this is the numer of guesses left " + leftJava);
    }
    //if letter is not guessed leftJava is substracted one to existing value
    else {
        leftJava = leftJava - 1;
        document.getElementById("wins").textContent = winsJava;
        document.getElementById("losses").textContent = lossesJava;
        document.getElementById("left").textContent = leftJava;
        document.getElementById("gs").textContent = document.getElementById("gs").textContent + " " + event.key;
        console.log("this is the number of wins " + winsJava);
        console.log("this is the number of losses " + lossesJava);
        console.log("this is letter the program chose " + letter);
        console.log("this is the numer of guesses left " + leftJava);
        
    }
    //if left equals zero losses adds on to existing value and resets game
    if (leftJava == 0){
        lossesJava = lossesJava + 1;
        lossesJava.textContent = lossesJava ;
        letter = initialize();
        leftJava = 9;
        document.getElementById("wins").textContent = winsJava;
        document.getElementById("losses").textContent = lossesJava;
        document.getElementById("left").textContent = leftJava;
        document.getElementById("gs").textContent = event.key;
        console.log("this is the number of wins " + winsJava);
        console.log("this is the number of losses " + lossesJava);
        console.log("this is letter the program chose " + letter);
        console.log("this is the numer of guesses left " + leftJava);
    }

}