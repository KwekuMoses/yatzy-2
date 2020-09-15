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

document.addEventListener("DOMContentLoaded", function (e) {
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

let isFullHous = (myArray) =>{
  let countValues = [0,0,0,0,0,0,0]
  for(currentNumber of myArray){
      countValues[currentNumber]++; 
  }

  if(countValues.includes(2) && countValues.includes(3)){
      console.log("fullt hus")
  } 
  else {
       console.log(false)
      }
}

isFullHous([0,1,1,2,2])


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
