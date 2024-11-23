document.addEventListener("DOMContentLoaded", () => {
    const enterButton = document.getElementById("enter-button");
    const startScreen = document.getElementById("start-screen");
    const video = document.getElementById("scary-video");
    const leftImage = document.getElementById("left-image");
    const rightImage = document.getElementById("right-image");
    const topText = document.getElementById("top-text");
  
    // When the "ENTER" button is clicked
    enterButton.addEventListener("click", () => {
      startScreen.remove(); // Remove the start screen and button from the DOM
      video.classList.remove("hidden"); // Show the video
      leftImage.classList.remove("hidden"); // Show the left image
      rightImage.classList.remove("hidden"); // Show the right image
      topText.classList.remove("hidden"); // Show the top text
      video.play(); // Start playing the video
      video.muted = false; // Ensure the video plays with sound
    });
  });
  