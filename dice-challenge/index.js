const title = document.querySelector(".title");
const diceImage1 = document.getElementById("dice1");
const diceImage2 = document.getElementById("dice2");

function randomNumberGenerator() {
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;
  const dices = [dice1, dice2];
  return dices;
}

function diceGame() {
  randomNumberGenerator();
  const [number1, number2] = randomNumberGenerator();
  diceImage1.setAttribute("src", `img/dice${number1}.png`);
  diceImage2.setAttribute("src", `img/dice${number2}.png`);

  if (number1 === number2) {
    title.textContent = "It's a Draw!";
  } else if (number1 > number2) {
    title.textContent = "Player 1 Wins!";
  } else title.textContent = "player 2 Wins!";
}

title.addEventListener("click", diceGame);
