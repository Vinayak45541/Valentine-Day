const startBtn = document.getElementById("startBtn");
const startPage = document.getElementById("startPage");

const yesBtn = document.getElementById("yesBtn");
const video = document.getElementById("loveVideo");
const videoContainer = document.querySelector(".video-container");
const main = document.querySelector(".main");
const text = document.getElementById("text");
const startAudio = document.getElementById("startAudio");
const endAudio = document.getElementById("endAudio");
const restartBtn = document.getElementById("restartBtn");

// START BUTTON - Show main content and play audio
startBtn.addEventListener("click", () => {
  startPage.classList.add("hidden");
  main.style.display = "flex";

  startAudio.volume = 0.5;
  startAudio.play().catch((err) => console.log("Audio error:", err));
});

// YES BUTTON CLICK
yesBtn.addEventListener("click", () => {
  startAudio.pause();
  startAudio.currentTime = 0;

  endAudio.volume = 0.5;
  endAudio.play();

  confetti({
    particleCount: 200,
    spread: 80,
    origin: { y: 0.6 },
  });

  main.style.display = "none";
  videoContainer.classList.add("active");

  video.muted = false;
  video.play();
});

// RESTART BUTTON
restartBtn.addEventListener("click", () => {
  location.reload();
});
