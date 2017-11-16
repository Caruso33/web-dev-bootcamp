var bestOfLimit = 5;
var score1 = 0;
var score2 = 0;

var score = document.querySelector('#score');
var bestOf = document.querySelector('#bestOf');

var bestOfText = document.querySelector('#bestOfText');
var p1button = document.querySelector('#p1button');
var p2button = document.querySelector('#p2button');
var resetButton = document.querySelector('#resetButton');

p1button.addEventListener('click', (e) => {
  if (checkWin() !== true){
    score1 += 1;
    printScore(score1, score2);
    if (checkWin() === true){
      document.getElementById('one').style.color = 'green';
    }
  }
});
p2button.addEventListener('click', (e) => {
  if (checkWin() !== true){
    score2 += 1;
    printScore(score1, score2);
    if (checkWin() === true){
      document.getElementById('two').style.color = 'green';
    }
  }
});
resetButton.addEventListener('click', (e) => {
  score1 = 0, score2 = 0;
  printScore(0, 0);
});

bestOfText.addEventListener('input', function(e) {
  bestOfLimit = Number(bestOfText.value);
  bestOf.innerHTML = `Playing to ${bestOfLimit}`;
});

var printScore = (s1, s2) => {
  score.innerHTML = `<span id="one">${s1}</span>
  to <span id="two">${s2}</span>`;
};

var checkWin = () => {
  if (score1 === bestOfLimit || score2 === bestOfLimit) {
    return true;
  }
  return false;
};
