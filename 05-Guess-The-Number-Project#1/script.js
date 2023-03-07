"use strict";

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
//document.querySelector('.number').textContent = secretNum;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const fCheck = function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess || guess < 1 || guess > 20) {
    displayMessage("Not in range!");
  }
  //when the guess is right
  else if (guess === secretNum) {
    displayMessage("Correct Number!");
    document.querySelector(".number").textContent = secretNum;
    document.querySelector("body").style.backgroundColor = "rgb(7, 199, 7)";
    document.querySelector(".number").style.width = "30rem";
    //setTimeout(function () {
    //  document.querySelector('body').style.backgroundColor = '#222';
    //}, 500);
    if (score > Number(document.querySelector(".highscore").textContent)) {
      document.querySelector(".highscore").textContent = score;
    }
  } else {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector("body").style.backgroundColor = "rgb(189, 0, 0)";
      setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "#222";
      }, 750);
      if (guess < secretNum) {
        if (secretNum - guess < 3) {
          displayMessage("Low!");
        } else {
          displayMessage("Too low!");
        }
      } else if (guess > secretNum) {
        if (guess - secretNum < 3) {
          displayMessage("High!");
        } else {
          document.querySelector(".message").textContent = "Too high!";
          displayMessage("Too high!");
        }
      }
    } else {
      displayMessage("You lost the game!");
    }
  }
};

document.querySelector(".check").addEventListener("click", function () {
  fCheck();
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  score = 20;
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  secretNum = Math.trunc(Math.random() * 20 + 1);
});

document.addEventListener("keydown", function (e) {
  //console.log("A key was pressed");
  if (e.key === "Enter") {
    fCheck();
  }
});

document.querySelector(".howto").addEventListener("click", function () {
  alert(
    "HOW TO PLAY?\nGuess a number between 1 and 20.\nIf it is not true make a guess according to the message that appears.\nContinue making guesses until you find THE NUMBER.\nPress again button if you want to play again.\nGLHF :)"
  );
});
