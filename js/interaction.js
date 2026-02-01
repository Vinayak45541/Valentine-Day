const noBtn = document.getElementById("noBtn");

function moveNoBtn() {
  if (!noBtn) return;
  const padding = 100;
  const x = Math.random() * (window.innerWidth - padding);
  const y = Math.random() * (window.innerHeight - padding);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
  noBtn.style.zIndex = 1000;
}

if (noBtn) {
  noBtn.addEventListener("pointerenter", moveNoBtn);
  noBtn.addEventListener("mouseenter", moveNoBtn); // fallback for old browsers
  noBtn.addEventListener(
    "touchstart",
    function (e) {
      e.preventDefault();
      moveNoBtn();
    },
    { passive: false },
  );
}
