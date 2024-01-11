//* Emoji JSON
const emojiJSON = [
  { description: "Smiling Face with Smiling Eyes", emoji: "😊" },
  { description: "Face Holding Back Tears", emoji: "🥹" },
  { description: "Smiling Face with Tear", emoji: "🥲" },
  { description: "Smiling Face with Hearts", emoji: "🥰" },
  { description: "Grinning Face", emoji: "😀" },
  { description: "Smiling Face with Halo", emoji: "😇" },
  { description: "Winking Face", emoji: "😉" },
  { description: "Face with Tears of Joy", emoji: "😂" },
  { description: "Grinning Face with Sweat", emoji: "😅" },
];

//* Fetch the HTML using DOM API
const description = document.getElementById("description");
const inputForm = document.getElementById("guess-input");
const score = document.getElementById("score");
const result = document.getElementById("result");
const timer = document.getElementById("timer");

//* For Traverse on emojiJSON array
let index = 0;
let numScore = 0;

//* For Timer
let seconds = 5;
let timerInterval;

//* For Displaying the Emoji on the Screen
function displayEmoji() {
  const currentEmoji = emojiJSON[index];
  description.textContent = currentEmoji.emoji;
  timer.textContent = `Time : ${seconds}s`;
}

//* Check User Guess is Correct or Not
function checkGuess(guessValue) {
  const currentEmojiDescription = emojiJSON[index].description
    .trim()
    .toLowerCase();
  if (guessValue == currentEmojiDescription) {
    numScore++;
    result.textContent = "Correct !";
    score.textContent = `Score : ${numScore}`;
  } else {
    result.textContent = "Wrong !";
  }
  index++;
  if (index == emojiJSON.length) {
    index = 0;
  }
}

//* Event Listener on Input Guess Form
inputForm.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    const inputValue = inputForm.value.trim().toLowerCase();
    checkGuess(inputValue);
    inputForm.value = "";
    displayEmoji();
  }
});

//* Call the Display Emoji function when page is loaded
document.addEventListener("DOMContentLoaded", () => {
  displayEmoji();
  startTimer();
});

//* For Timer
function startTimer() {
  timerInterval = setInterval(() => {
    if (seconds <= 0) {
      endGame();
      return;
    }
    seconds--;
    timer.textContent = `Time : ${seconds}s`;
  }, 1000);
}

function endGame() {
  clearInterval(timerInterval);
  //   inputForm.setAttribute("disabled", true);
  inputForm.disabled = true;
  inputForm.value = "";
  timer.textContent = "";
}
