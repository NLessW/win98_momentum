const reactionArea = document.getElementById("reaction-area");
const instruction = document.getElementById("instruction");
const result = document.getElementById("result");
const startButton = document.getElementById("start-test");
const username = localStorage.getItem("username");
let startTime, endTime;
let timeoutId;
let isWaiting = false;
let testCount = 0;
let totalReactionTime = 0;
const totalTests = 5;

function getRandomDelay() {
  return Math.floor(Math.random() * 3000) + 2000;
}

function startTest() {
  if (testCount === 0) {
    totalReactionTime = 0;
    result.textContent = "";
  }

  startButton.disabled = true;
  instruction.textContent = `Test ${
    testCount + 1
  }/${totalTests}: Click when the screen turns green!`;
  reactionArea.style.backgroundColor = "red";

  isWaiting = true;
  timeoutId = setTimeout(() => {
    if (isWaiting) {
      reactionArea.style.backgroundColor = "green";
      startTime = new Date().getTime();
    }
  }, getRandomDelay());
}

function endTest() {
  if (reactionArea.style.backgroundColor === "green") {
    endTime = new Date().getTime();
    const reactionTime = endTime - startTime;
    totalReactionTime += reactionTime;
    testCount++;

    if (testCount < totalTests) {
      result.textContent = `Test ${testCount}/${totalTests} : ${reactionTime}ms`;
      setTimeout(startTest, 1000);
      console.log(reactionTime);
    } else {
      const averageReactionTime = Math.round(totalReactionTime / totalTests);
      console.log(reactionTime);
      result.textContent = `${username}'s Reaction time\n${averageReactionTime}ms`;

      testCount = 0;
      startButton.disabled = false;
    }
  } else {
    result.textContent = "Don't prediction";
    testCount = 0;
    startButton.disabled = false;
  }

  isWaiting = false;
  clearTimeout(timeoutId);
  reactionArea.style.backgroundColor = "white";
}

startButton.addEventListener("click", startTest);
reactionArea.addEventListener("click", endTest);
