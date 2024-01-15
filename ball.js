//Set global variable that would contain the position, velocity and the html element "ball"
var positionX = 100;
var positionY = 0;
var velocity = 100;
var reverse = false;
var ball = document.getElementById("ball");
var ball2 = document.getElementById("ball2");
var ball3 = document.getElementById("ball3");
var ball4 = document.getElementById("ball4");
var ball5 = document.getElementById("ball5");
var ball6 = document.getElementById("ball6");
var ball7 = document.getElementById("ball7");
var ball8 = document.getElementById("ball8");
var ball9 = document.getElementById("ball9");
var ball10 = document.getElementById("ball10");
const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);
//write a function that can change the position of the html element "ball"
function moveBall() {
  
  var Xmin = 0;
  var Xmax = 400;

  var Ymin = 0;
  var Ymax = 400;
//Set global variable that would contain the position, velocity and the html element "ball"
var positionX = 100;
var positionY = 0;
var velocity = 100;
var reverse = false;
var ball = document.getElementById("ball");
var ball2 = document.getElementById("ball2");
var ball3 = document.getElementById("ball3");
var ball4 = document.getElementById("ball4");
var ball5 = document.getElementById("ball5");
var ball6 = document.getElementById("ball6");
var ball7 = document.getElementById("ball7");
var ball8 = document.getElementById("ball8");
var ball9 = document.getElementById("ball9");
var ball10 = document.getElementById("ball10");
const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);
//write a function that can change the position of the html element "ball"
function moveBall() {
  
  var Xmin = 0;
  var Xmax = 400;

  var Ymin = 0;
  var Ymax = 400;
  ball8.style.left = getRandom(0, 600)+'px';
  ball8.style.top = getRandom(0, 600)+'px';
    ball9.style.left = getRandom(0, 600)+'px';
  ball9.style.top = getRandom(0, 600)+'px';
     ball10.style.left = getRandom(0, 600)+'px';
  ball10.style.top = getRandom(0, 600)+'px';
}

if (
  positionX > Xmax ||
  positionX === Xmin ||
  positionY > Ymax ||
  positionY === Ymin
) {
  reverse = !reverse;
}
}

setInterval(moveBall, 200);