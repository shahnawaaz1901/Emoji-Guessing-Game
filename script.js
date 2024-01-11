//* Emoji JSON
const emojiJSON = [
  { description: "Smiling Face with Smiling Eyes", emoji: "😊" },
  { description: "Face Holding Back Tears", emoji: "🥹" },
  { description: "Smiling Face with Tear", emoji: "🥲" },
  { description: "Smiling Face with Hearts", emoji: "🥰" },
  { description: "Grinning Face", emoji: "😀" },
];

//* Fetch the HTML using DOM API
const description = document.getElementById("description");
const inputForm = document.getElementById("guess-input");
const score = document.getElementById("score");
const result = document.getElementById("result");

//* For Traverse on emojiJSON array
let index = 0;
let numScore = 0;

//* For Displaying the Emoji on the Screen
function displayEmoji() {
  const currentEmoji = emojiJSON[index];
  description.textContent = currentEmoji.emoji;
}

inputForm.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    const inputValue = inputForm.value.trim().toLowerCase();
    inputForm.value = "";
    const currentEmojiDescription = emojiJSON[index].description
      .trim()
      .toLowerCase();
    if (inputValue == currentEmojiDescription) {
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
    displayEmoji();
  }
});

//* Call the Display Emoji function when page is loaded
document.addEventListener("DOMContentLoaded", () => {
  displayEmoji();
});
