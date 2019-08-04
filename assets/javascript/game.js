// var for each element, counter
// show a random a word with blank spaces

// starts the game

// var startGame = document.getElementById("start")

// create an array with words selection
var words = [
  "zelda",
  "link",
  "mario",
  "starfox",
  "donkey kong",
  "pikmin",
  "captain falcon",
  "pikachu",
  "ness",
  "marth",
  "luigi",
  "ganondorf",
  "yoshi",
  "kid icarus",
  "kirby",
  "megaman",
  "fire emblem"
];


// pick a random word from the words array
var choosenWord = words[Math.floor(Math.random() * words.length)];

// guessedletters
var rightLetters = [];

// wrong letters array
var wrongLetters = [];
// sets up the answerArray to show how many letters there are in the words using underscores
var underScore = [];
var letterGuessed = [];
var winCounter = [0];
var lostCounter = [0];
var guessesLeft = [0];

//testing
console.log(choosenWord);

// create underscores based on the length of the word
var generateUnderscore = () => {
  var currentWordElement = document.getElementById("currentWord");
  for (var i = 0; i < choosenWord.length; i++) {
    // create and append element
    var spanElement = document.createElement("span");
    spanElement.textContent = " _";
    // append element to the container
    currentWordElement.appendChild(spanElement);
  }
};

console.log(generateUnderscore());

// get users guesses
document.addEventListener("keypress", event => {
  var keyword = String.fromCharCode(event.keyCode);

  // if user guess is right
  if (choosenWord.indexOf(keyword) > -1) {
    // add to right words array
    rightLetters.push(keyword);
    //   replace underscore with right letter
    underScore[choosenWord.indexOf(keyword)] = keyword;
    //checks to see if user word matches guesses
    if (underScore.join("") == choosenWord) {
      winCounter++;
      console.log(winCounter);
    }
    //   add to the wrong words array
    else wrongLetters.push(keyword);
    {
      wrongLetters.join("") == letterGuessed;
      lostCounter--;
    }
    console.log(wrongLetters);
  }
});

// creat a var telling us how many letters are left to be guessed
