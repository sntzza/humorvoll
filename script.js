document.addEventListener("DOMContentLoaded", () => {
  const enterButton = document.getElementById("enter-button");
  const startScreen = document.getElementById("start-screen");
  const scaryVideo = document.getElementById("scary-video");
  const body = document.body;

  enterButton.addEventListener("click", () => {
    // Hide the start screen
    startScreen.style.display = "none";

    // Stop blinking background
    body.classList.add("active");

    // Show the video
    scaryVideo.classList.remove("hidden");
    scaryVideo.muted = false;
  });
});
