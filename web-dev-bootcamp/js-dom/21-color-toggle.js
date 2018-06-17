// var isPurple = false;
var button = document.addEventListener("click", () => {
  var body = document.querySelector('Body');

  // if (isPurple === false){
  //    body.style.background = 'purple';
  //  } else {
  //    body.style.background = 'white';
  // }
  // isPurple = !isPurple;
  body.classList.toggle('purple');
});
