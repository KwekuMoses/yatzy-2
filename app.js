class Player {
  constructor(number) {
    this.number = number;
  }
  //a method that counts sum, bonus and total
  playerSumBonusAndTotal() {
    let outputSum = document.getElementById(`sum-player-${this.number}`);
    let playerTotal = document.getElementById(`total-player-${this.number}`);
    let playerBonus = document.getElementById(`player-${this.number}-bonus`);
    let playerArray = Array.from(
      document.getElementsByClassName(`player-${this.number}`) //converts htmlcollection to array
    );
    let playerSecondArray = playerArray.map((element) => {
      return Number(element.value); //creates an array with the values as numbers from the cells
    });
    let total = playerSecondArray.reduce((acc, currValue) => {
      return acc + currValue; //calculates the sum of the cells
    }, 0);

    let sum = 0;

    for (let i = 0; i < 6; i++) {
      sum += playerSecondArray[i];
    }

    let bonus = sum >= 63 ? 50 : "";

    outputSum.innerHTML = sum <= 0 ? "" : sum;
    playerBonus.innerHTML = bonus;
    playerTotal.textContent = total <= 0 ? "" : total + bonus;
  }
}

//Counter of how many throws are left for the current player
function counter(count, playerCounter, inputArray) {
  let button = document.getElementById("throw-dice");
  let playerName = document.querySelectorAll(".playerName");
  let currentPlayerNumber = inputArray[playerCounter].number;

  playerName[currentPlayerNumber].parentElement.style.backgroundColor = "orange";
  if (count === 0) {
    button.innerHTML = "Nästa spelare: kasta tärningarna (3 kast kvar)";
    playerName[currentPlayerNumber].parentElement.style.backgroundColor =
      "rgb(209, 205, 205)";
  } else {
    button.innerHTML = count + " kast kvar";
  }
}
// a function to controll the amount of players and where in the form they're located
function amountOfPlayers() {
  let players = Array.from(document.getElementsByClassName("playerName"));
  //let playersArray = Array.from(players);
  let playersArrayStrings = players.map((element) => {
    return String(element.value);
  });
  let outputArray = [];
  for (let i = 0; i < playersArrayStrings.length; i++) {
    if (playersArrayStrings[i] != "") {
      outputArray.push(i);
    }
  }
  return outputArray;
}
// a function that creates the needed amount of player objects
function createPlayers(inputArray) {
  //let amount = inputArray.length;
  let createdPlayersArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    createdPlayersArray.push(new Player(inputArray[i]));
  }
  enableCells(inputArray);
  console.log(createdPlayersArray);
  return createdPlayersArray;
}
// a function that disables all cells
function disableCells() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 15; j++) {
      let playerCells = document.getElementsByClassName(`player-${i}`);

      playerCells[j].disabled = true;
      playerCells[j].parentElement.classList.add("black-cells");
    }
  }
}
// a function that enables all cells
function enableCells(inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < 15; j++) {
      let playerCells = document.getElementsByClassName(`player-${inputArray[i]}`);
      playerCells[j].disabled = false;
      playerCells[j].parentElement.classList.remove("black-cells");
    }
  }
}
// a function to call the method playerSumBonusAndTotal for all players
function outPutCalcSum(players) {
  for (let i = 0; i < players.length; i++) {
    players[i].playerSumBonusAndTotal();
  }
}

document.addEventListener("DOMContentLoaded", function (e) {
  let reloadStart = document.getElementById("reload-start");
  let start = document.getElementById("start-button");
  let dices = new Dice();
  let wholeForm = document.getElementById("whole-form");
  let activePlayers = [];
  let throwButton = document.getElementById("throw-dice");
  let count = 2;
  let playerCounter = 0;

  disableCells();

  start.addEventListener("click", function (e) {
    start.remove();

    let reload = document.createElement("input");
    reload.setAttribute("type", "button");
    reload.setAttribute("value", "Börja om");
    reloadStart.appendChild(reload);
    document.getElementById("start-reload-label").innerHTML = "Ny runda?";

    reload.addEventListener("click", function (e) {
      location.reload();
    });

    activePlayers = createPlayers(amountOfPlayers()); //creating an object for each player
    throwButton.addEventListener("click", function (e) {
      counter(count, playerCounter, activePlayers);
      dices.userThrow();
      if (count === 0) {
        count = 3;
        playerCounter++;
        if (playerCounter === activePlayers.length) {
          playerCounter = 0;
        }
      }
      count--;
    });
  });

  wholeForm.addEventListener("change", function (e) {
    outPutCalcSum(activePlayers);
  });

  //Skapar eventlyssnare som kollar knapptryck för kast

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
