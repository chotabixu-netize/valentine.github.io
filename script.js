// Heart Rain
function createHearts(){
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random()*100 + "vw";
  heart.style.animationDuration = (Math.random()*3+2) + "s";
  document.body.appendChild(heart);

  setTimeout(()=>{
    heart.remove();
  },5000);
}

setInterval(createHearts,300);

// Running NO button
function moveButton(){
  const btn = document.getElementById("noBtn");
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  btn.style.left = x + "px";
  btn.style.top = y + "px";
}


// Glitter Cursor Effect
document.addEventListener("mousemove", function(e){
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");

  const emojis = ["✨","💖","💕","🌸"];
  sparkle.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

  sparkle.style.left = e.clientX + "px";
  sparkle.style.top = e.clientY + "px";

  document.body.appendChild(sparkle);

  setTimeout(()=>{
    sparkle.remove();
  },800);
});
