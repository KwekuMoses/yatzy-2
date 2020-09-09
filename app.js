document.addEventListener("DOMContentLoaded", function (e) {
  let countSumButton = document.getElementById("count-sum");
  let sumPlayerA = document.getElementById("sum-player-a").innerHTML;

  countSumButton.addEventListener("click", function (e) {
    /*let resultPlayerAOnes = document.getElementById("a1").value;
    let resultPlayerATwos = document.getElementById("a2").value;
    let resultPlayerAThrees = document.getElementById("a3").value;
    let resultPlayerAFours = document.getElementById("a4").value;
    let resultPlayerAFives = document.getElementById("a5").value;
    let resultPlayerASixes = document.getElementById("a6").value;
    let resultSum =
      Number(resultPlayerAOnes) +
      Number(resultPlayerATwos) +
      Number(resultPlayerAThrees) +
      Number(resultPlayerAFours) +
      Number(resultPlayerAFives) +
      Number(resultPlayerASixes);*/
    let resultPlayerAArray = [];

    for (let i = 0; i < 6; i++) {
      resultPlayerAArray.push(document.getElementById("a" + (i + 1)).value);
    }
    console.log(resultPlayerAArray);
  });
});
