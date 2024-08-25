document.addEventListener("DOMContentLoaded", function () {
  const images = ["win98.jpg", "win98_2.jpg", "win98_3.png", "winxp.jpg"];

  const chosenImage = images[Math.floor(Math.random() * images.length)];
  const screenElement = document.querySelector(".screen");

  if (screenElement) {
    screenElement.style.backgroundImage = `url('img/${chosenImage}')`;
    screenElement.style.backgroundSize = "cover";
    screenElement.style.backgroundPosition = "center";
  }
});
