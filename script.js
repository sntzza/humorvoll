document.addEventListener("DOMContentLoaded", () => {
  const enterButton = document.getElementById("enter-button");
  const startScreen = document.getElementById("start-screen");
  const scaryVideo = document.getElementById("scary-video");

  // Start the video and unmute on "ENTER" button click
  enterButton.addEventListener("click", () => {
    // Hide the start screen
    startScreen.style.display = "none";

    // Ensure video plays with sound
    scaryVideo.muted = false;
    scaryVideo.play();
  });

  // Optional: Ensure the video starts on any left click
  document.addEventListener("click", () => {
    if (scaryVideo.paused) {
      scaryVideo.muted = false;
      scaryVideo.play();
    }
  });
});
