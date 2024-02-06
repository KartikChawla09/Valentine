window.onload = function () {
  var x = document.getElementById("myAudio");
  x.autoplay = true;
  x.load();
};

let clickCountButton1 = 0;
let clickCountButton2 = 0;

function increaseButtonSize(buttonId) {
  var button = document.getElementById(buttonId);
  var currentSize = parseInt(window.getComputedStyle(button).fontSize);
  var newSize = currentSize + 40;

  button.style.fontSize = newSize + "px";
  var nob = document.getElementById("no");
  if (buttonId === "yes") {
    clickCountButton1++;
    if (clickCountButton1 === 1) {
      nob.textContent = "Are you sure!";
    }
    if (clickCountButton1 === 2) {
      nob.textContent = "Think Again!";
    }
    if (clickCountButton1 === 3) {
      nob.textContent = "Really ?";
    }
    if (clickCountButton1 === 4) {
      nob.textContent = "Give it another thought!";
    }
    if (clickCountButton1 === 5) {
      nob.textContent = "Last chance!";
    } else if (clickCountButton1 == 6) {
      nob.textContent = "You are breaking my heart!";
    }
  }
}

function hideButtonsAndShowText() {
  var noButton = document.getElementById("no");
  var yesButton = document.getElementById("yes");
  var val = document.getElementById("main-text");
  var displayText = document.getElementById("displayText");

  noButton.style.display = "none";
  yesButton.style.display = "none";
  val.style.display = "none";
  displayText.style.display = "block"; // Make the h1 visible
}
