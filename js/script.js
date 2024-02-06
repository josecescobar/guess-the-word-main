// Select elements 
const guessedLettersList = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress"); 
const remainingGuessesParagraph = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const messageParagraph = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

// Set word
let word = "magnolia";

// Add placeholders
function addLetterPlaceholders() {
  let placeholders = "";
  for (let i = 0; i < word.length; i++) {
    placeholders += "●";
  }
  wordInProgress.innerText = placeholders;
}

addLetterPlaceholders();

// Handle guess 
guessButton.addEventListener("click", function(e) {
  e.preventDefault();
  
  const guess = letterInput.value;
  console.log(guess);
  letterInput.value = "";
  
});