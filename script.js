let randomInt = (max) => Math.floor(Math.random() * max);

let loop = (size) => {
  let target = document.getElementById("target");
  setTimeout(() => {
    target.style.setProperty("--imgScale", size);
    size -= 0.1;

    if (size > 0) {
      loop(size);
    } else {
      console.log("kokote");
    }
  }, 100);
};

window.onload = () => {
  const playButton = document.createElement("button");
  playButton.className = "playButton";
  playButton.textContent = "play";
  document.body.appendChild(playButton);
  playButton.onclick = () => {
    // window.requestAnimationFrame(gameLoop);
    playButton.remove();
    const currentScore = document.createElement("h1");
    const highScoreDisplay = document.createElement("h1");
    const target = document.createElement("img");
    target.id = "target";
    var score = 0;
    var highScore = 0;
    currentScore.textContent = `score: ${score}`;
    highScoreDisplay.textContent = `high score: ${highScore}`;
    target.src = "assets/target.png";
    currentScore.className = "currentScore";
    highScoreDisplay.className = "highScore";
    document.body.appendChild(currentScore);
    document.body.appendChild(highScoreDisplay);
    document.body.appendChild(target);
    target.style.top = 15 + randomInt(65) + "%";
    target.style.left = randomInt(80) + "%";

    target.onclick = () => {
      score++;
      target.style.top = 15 + randomInt(65) + "%";
      target.style.left = randomInt(80) + "%";
      currentScore.textContent = `score: ${score}`;
      loop(1.5);
    };
  };
};

// function gameLoop() {
//   window.requestAnimationFrame(gameLoop);
// }
