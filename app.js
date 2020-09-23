class Player {
  constructor(number) {
    this.number = number;
  }
  //a method that counts sum, bonus and total
  playerSumBonusAndTotal() {
    let outputSum = document.getElementById(`sum-player-${this.number}`);
    let playerBonus = document.getElementById(`player-${this.number}-bonus`);
    let playerArray = Array.from(
      document.getElementsByClassName(`player-${this.number}`) //converts htmlcollection to array
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
      document.getElementsByClassName(`player-${this.number}-post-bonus`)
    );
    let playerSecondArrayPostBonus = playerArrayPostBonus.map((element) => {
      return Number(element.value);
    });
    let total = playerSecondArrayPostBonus.reduce((acc, currValue) => {
      return acc + currValue;
    }, 0);
    total += Number(outputSum.textContent) + Number(playerBonus.textContent);
    let playerTotal = document.getElementById(`total-player-${this.number}`);

    if (total <= 0) {
      playerTotal.textContent = "";
    } else {
      playerTotal.textContent = total;
    }
  }
}

//Counter of how many throws are left for the current player
function counter(count) {
  let i = 0;
  count = 0;
  let button = document.getElementById("throw-dice");
  let playerName = document.querySelectorAll(".playerName");

  button.addEventListener("click", function (e) {
    playerName[i].style.backgroundColor = "orange";
    count += 1;
    button.innerHTML = 3 - count + " kast kvar";
    if (count === 3) {
      button.innerHTML = "Nästa spelare: kasta tärningarna (3 kast kvar)";
      count = 0;
      i++;
      playerName[i - 1].style.backgroundColor = "rgb(209, 205, 205)";
      if (i > 3) {
        i = 0;
      }
    }
  });
}
// A function to controll the amount of players and where in the form they're located
function amountOfPlayers() {
  let players = document.getElementsByClassName("playerName");
  let playersArray = Array.from(players);
  let playersArrayStrings = playersArray.map((element) => {
    return String(element.value);
  });
  let outputArray = [];
  for (let i = 0; i < playersArrayStrings.length; i++) {
    if (playersArrayStrings[i] != "") {
      outputArray.push(i);
    }
  }

  console.log(outputArray);
  return outputArray;
}
// a function that creates the needed amount of player objects
function createPlayers(inputArray) {
  let amount = inputArray.length;

  switch (amount) {
    case 1:
      playerOne = new Player(inputArray[0]);
      enableCells(inputArray);
      break;
    case 2:
      playerOne = new Player(inputArray[0]);
      playerTwo = new Player(inputArray[1]);
      enableCells(inputArray);
      break;
    case 3:
      playerOne = new Player(inputArray[0]);
      playerTwo = new Player(inputArray[1]);
      playerThree = new Player(inputArray[2]);
      enableCells(inputArray);
      break;
    case 4:
      playerOne = new Player(inputArray[0]);
      playerTwo = new Player(inputArray[1]);
      playerThree = new Player(inputArray[2]);
      playerFour = new Player(inputArray[3]);
      enableCells(inputArray);
      break;
  }
}

function disableCells() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 6; j++) {
      let temp = document.getElementsByClassName(`player-${i}`);
      temp[j].disabled = true;
    }
    for (let k = 0; k < 9; k++) {
      let temp = document.getElementsByClassName(`player-${i}-post-bonus`);
      temp[k].disabled = true;
    }
  }
}

function enableCells(inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < 6; j++) {
      let temp = document.getElementsByClassName(`player-${inputArray[i]}`);
      temp[j].disabled = false;
    }
    for (let k = 0; k < 9; k++) {
      let temp = document.getElementsByClassName(`player-${inputArray[i]}-post-bonus`);
      temp[k].disabled = false;
    }
  }
}

function outPutCalcSum(players) {
  switch (players) {
    case 1:
      playerOne.playerSumBonusAndTotal();
      break;
    case 2:
      playerOne.playerSumBonusAndTotal();
      playerTwo.playerSumBonusAndTotal();
      break;
    case 3:
      playerOne.playerSumBonusAndTotal();
      playerTwo.playerSumBonusAndTotal();
      playerThree.playerSumBonusAndTotal();
      break;
    case 4:
      playerOne.playerSumBonusAndTotal();
      playerTwo.playerSumBonusAndTotal();
      playerThree.playerSumBonusAndTotal();
      playerFour.playerSumBonusAndTotal();
      break;
    default:
      break;
  }
}

document.addEventListener("DOMContentLoaded", function (e) {
  let start = document.getElementById("start-button");
  let dices = new Dice();
  let wholeForm = document.getElementById("whole-form");
  disableCells();

  start.addEventListener("click", function (e) {
    createPlayers(amountOfPlayers()); //creating an object for each player
  });

  wholeForm.addEventListener("change", function (e) {
    outPutCalcSum(amountOfPlayers().length);
  });

  let throwButton = document.getElementById("throw-dice");

  //Skapar eventlyssnare som kollar knapptryck för kast
  throwButton.addEventListener("click", function (e) {
    counter(0);
    dices.userThrow();
  });

  //Chatinput
  document.querySelector("#chat-btn").addEventListener("click", function (e) {
    let chatbox = document.querySelector(".text-mock");
    let nameInputSpan = document.createElement("span");
    let chatSpan = document.createElement("span");

    let chatInput = document.getElementById("chat_input");
    let chatInputName = document.getElementById("chat_name_input");

    nameInputSpan.innerHTML = "<br>" + chatInputName.value + ": ";
    chatSpan.innerHTML = chatInput.value;
    nameInputSpan.setAttribute("class", "user");

    chatbox.appendChild(nameInputSpan);
    chatbox.appendChild(chatSpan);
  });
});
