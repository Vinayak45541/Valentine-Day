const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseenter", () => {

  const padding = 100;

  const x = Math.random() * (window.innerWidth - padding);
  const y = Math.random() * (window.innerHeight - padding);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

});
