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
        let currentCell = Number(
          document.getElementById(this.letter + (i + 1)).value
        ); //counts the sum of this players points
        sum += currentCell;
      }

      outputSum.innerHTML = sum; //outputs the sum of this players points

      if (sum >= 63) {
        document.getElementById(`player-${this.letter}-bonus`).innerHTML = 50; //checks if bonus is deserved
      } else {
        document.getElementById(`player-${this.letter}-bonus`).innerHTML = 0;
      }
    }
  }



  //making an object for each player
  let playerAObject = new PlayerObject("a");
  let playerBObject = new PlayerObject("b");
  let playerCObject = new PlayerObject("c");
  let playerDObject = new PlayerObject("d");
  let wholeForm = document.getElementById("whole-form");
  let throwButton = document.getElementById("throw-dice");

  throwButton.addEventListener("click", function (e) {});

  //Counter for how many throws the player has left
  throwButton.addEventListener("click", counter(0));

  wholeForm.addEventListener("change", function (e) {
    playerAObject.playerSumAndBonus();
    playerBObject.playerSumAndBonus();
    playerCObject.playerSumAndBonus();
    playerDObject.playerSumAndBonus();
  });

});

//skapar variablar som refererar till "tärningarna" och deras inputs"
// Har gett dem alla samma classnamn då de sparas i en array och blir då mindre kod
let dice = document.getElementsByClassName("diceOutput");
let checkBox = document.getElementsByClassName("checkBox");
//skapar en eventlyssnare som refererar till tärningskast knappen
document.getElementById("throw-dice").addEventListener("click", function (e) {
  //skapar funktionen rollDice som tar dicenum.innerHTML som argument (den aktuella tärningen) och ger den ett slumpat tal
  function rollDice(dicenum) {
    let randomDice = Math.floor(Math.random() * (7 - 1) + 1);
    dicenum.innerHTML = randomDice;
  }

  //Skapar loop som går igenom alla checkboxar och kollar ifall dem e ifyllda eller inte,
  //är de inte ifyllda körs funktionen rollDice
  for (let i = 0; i < 5; ++i) {
    if (checkBox[i].checked == false) {
      rollDice(dice[i]);
    }
  }
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




//Counter of how many throws are left for the current player
function counter(count) {
  let button = document.getElementById("throw-dice");
  button.onclick = function () {
    count += 1;
    button.innerHTML = (3 - count) + " kast kvar";
    if (count === 3) {
      button.innerHTML = "Nästa spelare: kasta tärningarna (3 kast kvar)"
      count = 0;
    }
  }
};