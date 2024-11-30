document.addEventListener("DOMContentLoaded", () => {
  const enterButton = document.getElementById("enter-button");
  const startScreen = document.getElementById("start-screen");
  const scaryVideo = document.getElementById("scary-video");

  // Start the video and unmute on "ENTER" button click
  enterButton.addEventListener("click", () => {
    // Hide the start screen
    startScreen.style.display = "none";

    // Show the video by removing the 'hidden' class
    scaryVideo.classList.remove("hidden");

    // Ensure video plays with sound (workaround for iPads)
    scaryVideo.muted = false;
    scaryVideo.play().catch(error => {
      console.error("Autoplay failed, attempting to play with user interaction", error);
    });

    // Remove background animation (optional)
    document.body.classList.add("active");
  });

  // Optional: Play video on any click if paused
  document.addEventListener("click", () => {
    if (scaryVideo.paused) {
      scaryVideo.muted = false;
      scaryVideo.play();
    }
  });
});
