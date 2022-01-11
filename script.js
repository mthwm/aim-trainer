let randomInt = (max) => Math.floor(Math.random() * max);

var currentScore = 0;

let startGame = () => {
  const mainField = document.getElementById("main");
  const playButton = document.getElementById("playButton");
  const currentScoreContainer = document.getElementById("currentScore");
  currentScoreContainer.innerHTML = currentScore;
  mainField.removeChild(playButton);
  newTarget();
};

let newTarget = () => {
  const currentScoreContainer = document.getElementById("currentScore");
  const target = document.createElement("div");
  target.className = "target";
  target.style.top += randomInt(90) + "%";
  target.style.left += randomInt(90) + "%";
  const mainField = document.getElementById("main");
  target.addEventListener("click", () => {
    currentScore++;
    currentScoreContainer.innerHTML = currentScore;
    newTarget();
    mainField.removeChild(target);
  });
  setTimeout(() => {
    target.style.transform = "scale(0)";
  }, 700);

  mainField.appendChild(target);
};
