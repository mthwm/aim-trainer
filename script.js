let randomInt = (max) => Math.floor(Math.random() * max);

window.onload = function () {
  const playButton = document.createElement("button");
  playButton.className = "playButton";
  playButton.textContent = "play";
  document.body.appendChild(playButton);
  playButton.onclick = () => {
    playButton.remove();
    const currentScore = document.createElement("h1");
    const highScoreDisplay = document.createElement("h1");
    var score = 0;
    var highScore = 0;
    currentScore.textContent = `score: ${score}`;
    highScoreDisplay.textContent = `high score: ${highScore}`;
    currentScore.className = "currentScore";
    highScoreDisplay.className = "highScore";
    document.body.appendChild(currentScore);
    document.body.appendChild(highScoreDisplay);
    window.requestAnimationFrame(gameLoop);
  };
};

function gameLoop() {
  window.requestAnimationFrame(gameLoop);
}
