document.addEventListener("DOMContentLoaded", function (e) {
  let countSumButton = document.getElementById("count-sum");
  let sumPlayerA = document.getElementById("sum-player-a").innerHTML;

  countSumButton.addEventListener("click", function (e) {
    let resultPlayerAArray = [];

    for (let i = 0; i < 6; i++) {
      resultPlayerAArray.push(document.getElementById("a" + (i + 1)).value);
    }
    console.log(resultPlayerAArray);
  });
});
