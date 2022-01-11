let startGame = () => {
  const mainField = document.getElementById("main");
  const playButton = document.getElementById("playButton");
  const currentScoreContainer = document.getElementById("currentScore");

  currentScoreContainer.innerHTML = 0;
  mainField.removeChild(playButton);
};

let newTarget = (top, left) => {
  const target = document.createElement(div);
};
