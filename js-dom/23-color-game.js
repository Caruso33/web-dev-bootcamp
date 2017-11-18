<<<<<<< HEAD

var colors = genColors(6);
var goalColor = pickColor();
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var hardButton = document.querySelector('#hard');
var easyButton = document.querySelector('#easy');

resetButton.addEventListener('click', () => {
  if(hardButton.classList.value === 'selected'){
    newGame(6);
  } else {
    newGame(3);
  }
});
hardButton.addEventListener('click', () => {
  hardButton.classList.add('selected');
  easyButton.classList.remove('selected');
  newGame(6);
});

easyButton.addEventListener('click', () => {
  easyButton.classList.add('selected');
  hardButton.classList.remove('selected');
  newGame(3);
});

colorDisplay.textContent = goalColor;
colors.forEach((color, ind) => {
  //initial colors of squares
  squares[ind].style.backgroundColor = color;

  //clickListeners to squares
  squares[ind].addEventListener('click', function () {

    //grab color of clicked squares
    //compare color to goalColor
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === goalColor){
      changeColors(goalColor);
      h1.style.backgroundColor = goalColor;
      resetButton.textContent = 'Play Again?';
      messageDisplay.textContent = 'Correct!';
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = 'Try again!';
    }
  })
})

var changeColors = (color) => {
  squares.forEach((sq, i) => {
    sq.style.backgroundColor = color;
  });
};

function genColors (num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr[i] = randColor();
  }
  return arr;
};

function randColor () {
  var red = Math.floor(Math.random() * 255 + 1 );
  var green = Math.floor(Math.random() * 255 + 1 );
  var blue = Math.floor(Math.random() * 255 + 1 );
  return `rgb(${red}, ${green}, ${blue})`;
};

function pickColor () {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

function newGame(num) {
  colors = genColors(num);
  goalColor = pickColor();
  colorDisplay.textContent = goalColor;
  colors.forEach((color, ind) => {
    //initial colors of squares
    squares[ind].style.backgroundColor = color;
  });
  resetButton.textContent = 'New Colors';
  h1.style.backgroundColor = 'steelblue';
  messageDisplay.textContent = '';
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block';
    } else {
      squares[i].style.display = 'none';
    }
  }
}
=======

var colors = genColors(6);
var goalColor = pickColor();
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var hardButton = document.querySelector('#hard');
var easyButton = document.querySelector('#easy');

resetButton.addEventListener('click', () => {
  if(hardButton.classList.value === 'selected'){
    newGame(6);
  } else {
    newGame(3);
  }
});
hardButton.addEventListener('click', () => {
  hardButton.classList.add('selected');
  easyButton.classList.remove('selected');
  newGame(6);
});

easyButton.addEventListener('click', () => {
  easyButton.classList.add('selected');
  hardButton.classList.remove('selected');
  newGame(3);
});

colorDisplay.textContent = goalColor;
colors.forEach((color, ind) => {
  //initial colors of squares
  squares[ind].style.backgroundColor = color;

  //clickListeners to squares
  squares[ind].addEventListener('click', function () {

    //grab color of clicked squares
    //compare color to goalColor
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === goalColor){
      changeColors(goalColor);
      h1.style.backgroundColor = goalColor;
      resetButton.textContent = 'Play Again?';
      messageDisplay.textContent = 'Correct!';
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = 'Try again!';
    }
  })
})

var changeColors = (color) => {
  squares.forEach((sq, i) => {
    sq.style.backgroundColor = color;
  });
};

function genColors (num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr[i] = randColor();
  }
  return arr;
};

function randColor () {
  var red = Math.floor(Math.random() * 255 + 1 );
  var green = Math.floor(Math.random() * 255 + 1 );
  var blue = Math.floor(Math.random() * 255 + 1 );
  return `rgb(${red}, ${green}, ${blue})`;
};

function pickColor () {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

function newGame(num) {
  colors = genColors(num);
  goalColor = pickColor();
  colorDisplay.textContent = goalColor;
  colors.forEach((color, ind) => {
    //initial colors of squares
    squares[ind].style.backgroundColor = color;
  });
  resetButton.textContent = 'New Colors';
  h1.style.backgroundColor = 'steelblue';
  messageDisplay.textContent = '';
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block';
    } else {
      squares[i].style.display = 'none';
    }
  }
}
>>>>>>> 6ee86262ae2e9e022f3e44aef72190ae5602a6f4
