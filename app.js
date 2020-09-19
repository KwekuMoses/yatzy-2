class PlayerObject {
  constructor(letter) {
    this.letter = letter;
  }
  playerSumBonusAndTotal() {
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

    if (sum <= 0) {
      outputSum.innerHTML = "";
    } else {
      outputSum.innerHTML = sum;
    }
    if (sum >= 63) {
      playerBonus.innerHTML = 50;
    } else {
      playerBonus.innerHTML = "";
    }

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

  playerA = new PlayerObject("a");
  playerB = new PlayerObject("b");
  playerC = new PlayerObject("c");
  playerD = new PlayerObject("d");

  //Counter for how many throws the player has left
  throwButton.addEventListener("click", counter(0));

  wholeForm.addEventListener("change", function (e) {
    playerA.playerSumBonusAndTotal();
    playerB.playerSumBonusAndTotal();
    playerC.playerSumBonusAndTotal();
    playerD.playerSumBonusAndTotal();
  });
  
  let randomDice; 
  let diceArray = []

  //Funktion som kanstar tärning och returnerar des värde
  function throwDices(i) {
    randomDice = Math.floor(Math.random() * (7 - 1) + 1);
    //hämtar bilder på tärningskast med hjälp av randomDice
    document.querySelectorAll(".diceArray")[i].setAttribute("src", "dices/dice" + randomDice + ".webp");
    return randomDice
  }     

  //Skapar eventlyssbare som kollar knapptryck för kast
  document.getElementById("throw-dice").addEventListener("click", function (e) {
    //Skapar variabel som har checkbox som referens
    let checkBox = document.getElementsByClassName("checkBox");
    //Loopar igenom varje box och kollar true or false, vid false kastas en ny tärning och sätts in i diceArray.
    for (let i = 0; i < 5; ++i) {
      if (!checkBox[i].checked) {
        throwDices(i);
        diceArray[i] = randomDice
      }     
    }     
    //console.log(diceArray)
    isFullHous(diceArray);
  });

  let isFullHous = (myArray) => {
    let countValues = [0, 0, 0, 0, 0, 0, 0];
    
    for (currentNumber of myArray) {
      countValues[currentNumber]++;  
    }

    if(countValues.includes(2) && countValues.includes(3) ){
      console.log("KÅK!")
      for(let i = 1; i < countValues.length; ++i){
        let par;
        let triss; 
        if(countValues[i]==2){
          par =i
        }
        if(countValues[i]==3){
          triss = i
        }
      }

    }

    else if(countValues.includes(3)){
      console.log("Triss!") 
      for(let i = 1; i < countValues.length; ++i){
        let par;
        if(countValues[i]==3){
          par =i
        }
      }
    } 

    else if(countValues.includes(2)){
      console.log("Par!") 
      for(let i = 1; i < countValues.length; ++i){
        let par;
        if(countValues[i]==2){
          par =i
        }
      }
    } 
    
    
  };


  

});


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



document.querySelector("#chat-btn").addEventListener("click", function(e){
  let chatbox = document.querySelector(".text-mock")
  let nameInputSpan = document.createElement("span")
  let chatSpan = document.createElement("span")

  let chatInput = document.getElementById("chat_input");
  let chatInputName = document.getElementById("chat_name_input")

  nameInputSpan.innerHTML ="<br>" + chatInputName.value + ": "
  chatSpan.innerHTML = chatInput.value 
  nameInputSpan.setAttribute("class", "user")

  chatbox.appendChild(nameInputSpan)
  chatbox.appendChild(chatSpan)

})