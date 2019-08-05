//---------------------------------------
// Used to record how many times a letter can be pressed
var doubleWord = ["a","b","c",
				  "d","e","f",
				  "g","h","i",
				  "j","k","l",
				  "m","n","o",
				  "p","q","r",
				  "s","t","u",
				  "v","w","x",
				  "y","z"];
//Holds the all the words
var wordBank =["zelda",
  "link",
  "mario",
  "starfox",
  "donkeykong",
  "pikmin",
  "captainfalcon",
  "pikachu",
  "ness",
  "marth",
  "luigi",
  "ganondorf",
  "yoshi",
  "kidicarus",
  "kirby",
  "megaman",
  "fireemblem"];
//Holds choosenWord
var choosenWord = "";
//Holds letters in word
var lettersInWord = [];
//Holds number of blanks in word
var numBlanks = 0;
//Holds Blanks and successful guesses
var blanksAndSuccesses =[];
//Holds Wrong guesses
var wrongLetters = [];
//Counters
var winCount = 0;
var loseCount = 0;
var guessesLeft = 10;
var rightGuessCounter = 0;

// create an array of images
// var imageArray = ["../images/zelda.png", "../images/link.png", "../images/mario.png",  
// "../images/starfox.png", "../images/donkeykong.png", "../images/pikmin.png", "../images/captainfalcon.png", 
// "../images/pikachu.png", "../images/ness.png", "../images/marth.png", 
// "../images/luigi.png", "../images/ganondorf.png", "../images/yoshi.png", "../images/kidicarus.png", 
// "../images/kirby.png", "../images/megaman.png", "../images/fireemblem.png"];

//FUNCTIONS
//----------------------------------------
function reset()
{
	//Chooses word randombly from the wordBank
	choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	//Splits the choosen word into individual letters
	lettersInWord = choosenWord.split("");
	//Get the number of blanks
	numBlanks = lettersInWord.length;
	
	//RESET
	//===========================================================
	letterGuessed = 0;
	rightGuessCounter = 0;
	guessesLeft = 10;
	wrongLetters =[];
	blanksAndSuccesses =[];
	doubleWord = ["a","b","c",
                "d","e","f",
                "g","h","i",
                "j","k","l",
                "m","n","o",
                "p","q","r",
                "s","t","u",
                "v","w","x",
                "y","z"];
	test=false;
	startGame();
}
function startGame()
{
	//Chooses word randombly from the wordBank
	choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	//Splits the choosen word into individual letters
	lettersInWord = choosenWord.split("");
	//Get the number of blanks
	numBlanks = lettersInWord.length;
	
	//RESET
	//===========================================================
	rightGuessCounter = 0;
	guessesLeft = 10;
	wrongLetters =[];
	blanksAndSuccesses =[];
	doubleWord = ["a","b","c",
                "d","e","f",
                "g","h","i",
                "j","k","l",
                "m","n","o",
                "p","q","r",
                "s","t","u",
                "v","w","x",
                "y","z"];

	//Populate blanks
	for(var i = 0; i< numBlanks; i++)
	{
		blanksAndSuccesses.push("_");
		document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses;
	}

	//Changes HTML 
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("winCounter").innerHTML = winCount;
	document.getElementById("lossCounter").innerHTML = loseCount;
	document.getElementById("wrongGuesses").innerHTML = wrongLetters;
	// Testing
	console.log(choosenWord);
	console.log(lettersInWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);
}

function compareLetters(userKey)
{
				console.log("WORKING");
				//If user key exist in choosen word then perform this function 
				if(choosenWord.indexOf(userKey) > -1)
				{
					//Loops depending on the amount of blanks 
					for(var i = 0; i < numBlanks; i++)
					{
						//Fills in right index with user key
						if(lettersInWord[i] === userKey)
						{
							rightGuessCounter++;
							blanksAndSuccesses[i] = userKey;
							document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(' ');
						}	
					}
					//Test / Debug
					console.log(blanksAndSuccesses);
				}
				//Wrong Keys
				else
				{
					wrongLetters.push(userKey);
					guessesLeft--;
					//Changes HTML
					document.getElementById("numGuesses").innerHTML = guessesLeft;
					document.getElementById("wrongGuesses").innerHTML = wrongLetters;
					//Test
					console.log("Wrong Letters = " + wrongLetters);
					console.log("Guesses left are " + guessesLeft);
				}
			
			
		
}
function winLose()
{
	// When number blanks if filled with right words then you win
	if(rightGuessCounter === numBlanks)
	{
		winCount++;
		document.getElementById("winCounter").innerHTML = winCount;
		reset();
	}
	// When number of Guesses reaches 0 then You lose
	else if(guessesLeft === 0)
	{
		loseCount++;
		document.getElementById("lossCounter").innerHTML = loseCount;
		reset();
  }
  
  
  // create a function to add images after win
//   function showImage() {
//     var img = document.getElementById("imgGenerator");
//     img.src = imageArray; 
// showImage();


}




//MAIN PROCCESS
//--------------------------------------------------------------------------
startGame();

document.onkeyup = function(event)
{
	test = true;
	var letterGuessed = event.key;
	for(var i = 0; i < doubleWord.length; i++)
	{	
		if(letterGuessed === doubleWord[i] && test === true)
		{
			var spliceDword = doubleWord.splice(i,1);
			//Test
			console.log("Double word is = " + doubleWord[i])
			console.log("Spliced Word is = " + spliceDword);

			compareLetters(letterGuessed);
			winLose();
		}
	}		
}