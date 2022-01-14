let randomInt = (max) => Math.floor(Math.random() * max);

let startGame = () => {
  const playButton = document.getElementById("playButton");
  const mainField = document.getElementById("main");

  mainField.removeChild(playButton);
};

// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// var currentScore = 0;

// let newTarget = () => {
//   const currentScoreContainer = document.getElementById("currentScore");
//   const target = document.createElement("div");
//   target.className = "target";
//   target.style.top += randomInt(90) + "%";
//   target.style.left += randomInt(90) + "%";
//   const mainField = document.getElementById("main");
//   target.addEventListener("click", () => {
//     currentScore++;
//     fetch("https://api.countapi.xyz/update/Super_Stranka/ZULUL/?amount=1");
//     currentScoreContainer.innerHTML = currentScore;
//     newTarget();
//     mainField.removeChild(target);
//   });
//   setTimeout(() => {
//     target.style.transform = "scale(0)";
//   }, 700);

//

//

// function newTarget() {
//   const currentScoreContainer = document.getElementById("currentScore");
//   let continuePlaying = false;
//   const target = document.createElement("div");
//   target.className = "target";
//   target.style.top += randomInt(90) + "%";
//   target.style.left += randomInt(90) + "%";
//   const mainField = document.getElementById("main");
//   mainField.appendChild(target);
//   target.addEventListener("click", () => {
//     currentScore++;
//     continuePlaying = true;
//     currentScoreContainer.innerHTML = currentScore;
//     fetch("https://api.countapi.xyz/update/Super_Stranka/ZULUL/?amount=1");
//     newTarget();
//     mainField.removeChild(target);
//   });
//   return continuePlaying;
// }

// function gameOver() {
//   if (x == false) {
//     console.log("game over");
//   }
// }
