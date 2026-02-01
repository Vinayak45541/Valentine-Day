const yesBtn = document.getElementById("yesBtn");
const video = document.getElementById("loveVideo");
const main = document.querySelector(".main");
const text = document.getElementById("text");

let name = prompt("Enter pookie name 💖");

if(name){
  text.innerText = `Hey ${name}... Do you love me? 🥺`;
}

// YES BUTTON CLICK

yesBtn.addEventListener("click", () => {

  launchConfetti();

  main.style.display = "none";
  video.style.display = "block";

  video.play();
});
