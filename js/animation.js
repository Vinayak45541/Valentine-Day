const cat = document.getElementById("cat");

// CAT FOLLOW CURSOR

document.addEventListener("mousemove", (e) => {

  let x = (e.clientX / window.innerWidth - 0.5) * 30;
  let y = (e.clientY / window.innerHeight - 0.5) * 30;

  cat.style.transform = `translate(${x}px,${y}px)`;

});

// CONFETTI

function launchConfetti(){

  confetti({
    particleCount: 180,
    spread: 90,
    origin: { y: 0.6 }
  });

}

// FLOATING HEARTS

setInterval(() => {

  const heart = document.createElement("img");
  heart.src = "assets/images/heart.png";
  heart.style.position = "absolute";
  heart.style.width = "30px";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.bottom = "-50px";

  document.body.appendChild(heart);

  let rise = setInterval(() => {
    heart.style.bottom =
    parseInt(heart.style.bottom) + 4 + "px";
  }, 20);

  setTimeout(() => {
    clearInterval(rise);
    heart.remove();
  }, 4000);

}, 700);
