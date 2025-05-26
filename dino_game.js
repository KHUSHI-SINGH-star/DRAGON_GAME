let dino = document.querySelector(".dino");
let gameover = document.querySelector("#gameover");
let dragon = document.querySelector(".dragon");
let score = 0;
let cross = true;
let count = document.querySelector(".count");
let restartBtn = document.querySelector("#restartBtn"); 

document.onkeydown = function (e) {
  console.log("key code is: ", e.keyCode);
  if (e.keyCode == 38) {
    dino.classList.add("animatedino");
    setTimeout(() => {
      dino.classList.remove("animatedino");
    }, 700);
  }

  else if (e.keyCode == 39) {
    let dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
    dino.style.left = dinox + 112 + "px";
  }
  else if (e.keyCode == 37) {
    let dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
    dino.style.left = (dinox - 112) + "px";
  }

}

setInterval(() => {
  let dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
  let dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));

  let ox = parseInt(window.getComputedStyle(dragon, null).getPropertyValue("left"));
  let oy = parseInt(window.getComputedStyle(dragon, null).getPropertyValue("top"));

  let offsetx = Math.abs(dx-ox);
  let offsety = Math.abs(dy-oy);
  console.log(offsetx, offsety);

   if (offsetx < 44 && offsety < 62) {
    let gameover=document.querySelector("#gameover");
     gameover.style.visibility = "visible";
      dragon.classList.remove("dragonAni");
     restartBtn.style.visibility = "visible"; 
   }
   else if (offsetx < 96 && cross) {
    score += 1;
    cross = false;
    updateScore(score);
    setTimeout(() => {
      cross = true;
    }, 1000);
  }
  setTimeout(()=>{
let aniDur = parseFloat(window.getComputedStyle(dragon).getPropertyValue("animation-duration"));
        if (aniDur > 1.5) { 
            aniDur -= 0.1;
            dragon.style.animationDuration = aniDur + 's';
        }
    }
  );
},50);


restartBtn.onclick = () => { 
    location.reload();
};

function updateScore(score) {
  count.innerHTML = "Your Score:" + score;
}


