function playGame(playerChoice) {
  const choices = ["scissors", "rock", "paper"];
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomIndex];

  // 컴퓨터와 사용자의 선택 결과를 보여줄 이미지를 변경합니다.
  const playerImg = document.getElementById("playerImg");
  const computerImg = document.getElementById("computerImg");
  playerImg.src = `/images/${playerChoice}.png`;
  computerImg.src = `/images/${computerChoice}.png`;

  // 승패 결정 로직을 구현합니다.
  let resultText = "";
  if (playerChoice === computerChoice) {
    resultText = "비겼습니다!";
  } else if (
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    resultText = "승리했습니다!";
  } else {
    resultText = "패배했습니다!";
  }

  // 결과를 화면에 표시합니다.
  const resultElement = document.getElementById("result");
  resultElement.innerText = resultText;
}
