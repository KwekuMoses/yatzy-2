class PlayerObject {
  constructor(letter) {
    this.letter = letter;
  }
  //a method that counts sum, bonus and total
  playerSumBonusAndTotal() {
    let outputSum = document.getElementById(`sum-player-${this.letter}`);
    let playerBonus = document.getElementById(`player-${this.letter}-bonus`);
    let playerArray = Array.from(
      document.getElementsByClassName(`player-${this.letter}`) //converts htmlcollection to array
    );
    let playerSecondArray = playerArray.map((element) => {
      return Number(element.value); //creates an array with the values as numbers from the cells
    });
    let sum = playerSecondArray.reduce((acc, currValue) => {
      return acc + currValue; //calculates the sum of the cells
    }, 0);

    if (sum <= 0) {
      outputSum.innerHTML = ""; //so it does not display zeros in sum
    } else {
      outputSum.innerHTML = sum;
    }
    if (sum >= 63) {
      playerBonus.innerHTML = 50; //so it does not display zeros in bonus
    } else {
      playerBonus.innerHTML = "";
    }

    //the rest of the code in the method is basically a copy from the code above
    //but it calculates the total of the player
    let playerArrayPostBonus = Array.from(
      document.getElementsByClassName(`player-${this.letter}-post-bonus`)
    );
    let playerSecondArrayPostBonus = playerArrayPostBonus.map((element) => {
      return Number(element.value);
    });
    let total = playerSecondArrayPostBonus.reduce((acc, currValue) => {
      return acc + currValue;
    }, 0);
    total += Number(outputSum.textContent) + Number(playerBonus.textContent);
    let playerTotal = document.getElementById(`total-player-${this.letter}`);

    if (total <= 0) {
      playerTotal.textContent = "";
    } else {
      playerTotal.textContent = total;
    }
  }
}

document.addEventListener("DOMContentLoaded", function (e) {
  let wholeForm = document.getElementById("whole-form");
  let throwButton = document.getElementById("throw-dice");

  //creates an object for each player
  playerA = new PlayerObject("a");
  playerB = new PlayerObject("b");
  playerC = new PlayerObject("c");
  playerD = new PlayerObject("d");

  //Counter for how many throws the player has left
  throwButton.addEventListener("click", counter(0));

  wholeForm.addEventListener("change", function (e) {
    //everytime something changes in the form the methods below are called
    playerA.playerSumBonusAndTotal();
    playerB.playerSumBonusAndTotal();
    playerC.playerSumBonusAndTotal();
    playerD.playerSumBonusAndTotal();
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
  if (count.values.includes(5)) {
    console.log("yatzy");
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
