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

  // add decorative hearts overlay and floating animation
  (function createHearts() {
    if (!videoContainer) return;
    // avoid duplicate hearts container
    if (videoContainer.querySelector(".hearts")) return;

    const hearts = document.createElement("div");
    hearts.className = "hearts";
    const count = 12;
    for (let i = 0; i < count; i++) {
      const s = document.createElement("span");
      s.textContent = ["💖", "💕", "💘", "❤️"][Math.floor(Math.random() * 4)];
      const left = Math.random() * 100; // vw
      const duration = 4 + Math.random() * 4; // seconds
      const delay = Math.random() * 1.5; // stagger
      s.style.left = left + "vw";
      s.style.animationDuration = duration + "s";
      s.style.animationDelay = delay + "s";
      s.style.opacity = 0;
      hearts.appendChild(s);
    }
    videoContainer.appendChild(hearts);
  })();

  // add large celebratory caption overlay
  (function createBigCaption() {
    if (!videoContainer) return;
    if (videoContainer.querySelector(".big-caption")) return;

    const cap = document.createElement("div");
    cap.className = "big-caption";

    const wrapper = document.createElement("div");
    wrapper.className = "lines";

    const line1 = document.createElement("div");
    line1.className = "line1";
    line1.textContent = "YAAAYYYY!!! 🥳";

    const line2 = document.createElement("div");
    line2.className = "line2";
    line2.textContent = "YOU SAID YESSSS 😭❤️🔥";

    wrapper.appendChild(line1);
    wrapper.appendChild(line2);
    cap.appendChild(wrapper);
    // insert caption above the video element so it sits visually above
    if (video && videoContainer.contains(video)) {
      videoContainer.insertBefore(cap, video);
    } else {
      videoContainer.appendChild(cap);
    }

    // remove caption when video ends
    const removeCaption = () => {
      const c = videoContainer.querySelector(".big-caption");
      if (c) c.remove();
    };
    video.addEventListener("ended", removeCaption, { once: true });
  })();
});

// RESTART BUTTON
restartBtn.addEventListener("click", () => {
  // remove hearts overlay if present
  const hearts = videoContainer.querySelector(".hearts");
  if (hearts) hearts.remove();
  // remove big caption if present
  const big = videoContainer.querySelector(".big-caption");
  if (big) big.remove();
  location.reload();
});
