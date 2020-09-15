document.addEventListener("DOMContentLoaded", function (e) {
  let wholeForm = document.getElementById("whole-form");
  let throwButton = document.getElementById("throw-dice");
  class PlayerObject {
    constructor(letter) {
      this.letter = letter;
    }
    playerSumAndBonus() {
      let outputSum = document.getElementById(`sum-player-${this.letter}`);
      let playerBonus = document.getElementById(`player-${this.letter}-bonus`);
      let playerArray = Array.from(
        document.getElementsByClassName(`player-${this.letter}`)
      );
      let playerSecondArray = playerArray.map((element) => {
        return Number(element.value);
      });
      let sum = playerSecondArray.reduce((acc, currValue) => {
        return acc + currValue;
      }, 0);
      outputSum.innerHTML = sum;
      if (sum >= 63) {
        playerBonus.innerHTML = 50;
      } else {
        playerBonus.innerHTML = 0;
      }
    }
  }

  playerA = new PlayerObject("a");
  playerB = new PlayerObject("b");
  playerC = new PlayerObject("c");
  playerD = new PlayerObject("d");

  throwButton.addEventListener("click", function (e) {});

  //Counter for how many throws the player has left
  throwButton.addEventListener("click", counter(0));

  wholeForm.addEventListener("change", function (e) {
    playerA.playerSumAndBonus();
    playerB.playerSumAndBonus();
    playerC.playerSumAndBonus();
    playerD.playerSumAndBonus();
  });

  //Skapar variabel som har checkbox som referens
  let checkBox = document.getElementsByClassName("checkBox");
  //Skapar eventlyssbare som kollar knapptryck för kast
  document.getElementById("throw-dice").addEventListener("click", function (e) {
    //Loopar igenom varje box och kollar true or false, vid false slumpas det fram en ny tärning.
    for (let i = 0; i < 5; ++i) {
      if (!checkBox[i].checked) {
        let RandomDice = Math.floor(Math.random() * (7 - 1) + 1);
        //hämtar bilder på tärningskast med hjälp
        document
          .querySelectorAll(".diceArray")
          [i].setAttribute("src", "dices/dice" + RandomDice + ".webp");
      }
    }
  });
});

let isFullHous = (myArray) => {
  let countValues = [0, 0, 0, 0, 0, 0, 0];
  for (currentNumber of myArray) {
    countValues[currentNumber]++;
  }

  if (countValues.includes(2 && 3)) {
    console.log("fullt hus");
  } else {
    console.log(false);
  }
};

isFullHous([0, 1, 1, 2, 2]);

//Counter of how many throws are left for the current player
function counter(count) {
  let button = document.getElementById("throw-dice");
  button.onclick = function () {
    count += 1;
    button.innerHTML = 3 - count + " kast kvar";
    if (count === 3) {
      button.innerHTML = "Nästa spelare: kasta tärningarna (3 kast kvar)";
      count = 0;
    }
  };
}
