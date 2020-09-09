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
