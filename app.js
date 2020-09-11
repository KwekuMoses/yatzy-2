document.addEventListener("DOMContentLoaded", function (e) {
  class PlayerObject {
    constructor(letter) {
      this.letter = letter;
    }

    playerSumAndBonus() {
      let sum = 0;
      let outputSum = document.getElementById(`sum-player-${this.letter}`);

      //counts the sum of this players points
      for (let i = 0; i < 6; i++) {
        let currentCell = Number(document.getElementById(this.letter + (i + 1)).value); //counts the sum of this players points
        sum += currentCell;
      }

      outputSum.innerHTML = sum; //outputs the sum of this players points

      if (sum >= 63) {
        document.getElementById(`player-${this.letter}-bonus`).innerHTML = 50; //checks if bonus is deserved
      }
    }
  }

  let countSumButton = document.getElementById("count-sum");

  countSumButton.addEventListener("click", function (e) {
    //making an object for each player
    let playerAObject = new PlayerObject("a");
    let playerBObject = new PlayerObject("b");
    let playerCObject = new PlayerObject("c");
    let playerDObject = new PlayerObject("d");
    playerAObject.playerSumAndBonus();
    playerBObject.playerSumAndBonus();
    playerCObject.playerSumAndBonus();
    playerDObject.playerSumAndBonus();
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

let myArray = [1];

console.log(isFullHouse(myArray));
