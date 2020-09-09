document.addEventListener("DOMContentLoaded", function (e) {
  let countSumButton = document.getElementById("count-sum");
  let sumPlayerA = document.getElementById("sum-player-a");
  let playerABonus = document.getElementById("player-a-bonus");
  countSumButton.addEventListener("click", function (e) {
    let resultPlayerAArray = [];
    let sum = 0;
    for (let i = 0; i < 6; i++) {
      sum += Number(document.getElementById("a" + (i + 1)).value);
    }
    sumPlayerA.innerHTML = sum;
    if (sum >= 63) {
      playerABonus.innerHTML = 50;
    }
  });
});

function isFullHouse(inputArray) {
  let diceOne = [];
  let diceTwo = [];
  diceOne.push(inputArray[0]);

  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] === diceOne[0]) {
      diceOne.push(inputArray[i]);
    } else if (diceTwo.length === 0) {
      diceTwo.push(inputArray[i]);
    } else if (inputArray[i] === diceTwo[0]) {
      diceTwo.push(inputArray[i]);
    }
  }

  if (
    (diceTwo.length === 3 && diceOne.length === 2) ||
    (diceTwo.length === 2 && diceOne.length === 3)
  ) {
    return true;
  }
  return false;
}
let myArray = [];

console.log(isFullHouse(myArray));
