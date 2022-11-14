var trueAns;
var ans1;
var ans2;
var shuffle;

function start() {

  document.getElementById("btnstart").setAttribute("class", "btnstart inactivestart");
  document.getElementById("btnstart").disabled = true;
  document.getElementById("btnstop").disabled = false;
  document.getElementById("btnstop").setAttribute("class", "btnstop activestop");
  document.getElementById("square1").disabled = false;
  document.getElementById("square2").disabled = false;
  document.getElementById("square3").disabled = false;

  quiz();
}

function stop() {
  document.getElementById("list").innerHTML += "<li>Your score is</li>" + document.getElementById("score").innerHTML;

  document.getElementById("btnstop").setAttribute("class", "btnstop inactivestop");
  document.getElementById("btnstop").disabled = true;
  document.getElementById("btnstart").setAttribute("class", "btnstart activestart");
  document.getElementById("btnstart").disabled = false;

  document.getElementById("quiz").innerHTML = "";
  document.getElementById("square1").innerHTML = "";
  document.getElementById("square2").innerHTML = "";
  document.getElementById("square3").innerHTML = "";

  document.getElementById("square1").disabled = true;
  document.getElementById("square2").disabled = true;
  document.getElementById("square3").disabled = true;

  document.getElementById("time").innerHTML = "";
  document.getElementById("score").innerHTML = "";
}


function quiz() {
  var num1 = Math.floor(Math.random() * 100 + 1);
  var num2 = Math.floor(Math.random() * 100 + 1);
  trueAns = num1 + num2;
  document.getElementById("quiz").innerHTML = num1 + "+" + num2 + "=";

  //Ans_position
  shuffle = Math.floor(Math.random() * 3 + 1);
  console.log(shuffle);
  //Quiz in the Squares
  var ans1 = Math.floor(Math.random() * 200 + 1);
  var ans2 = Math.floor(Math.random() * 200 + 1);

  if (shuffle == 1) {
    document.getElementById("square1").innerHTML = trueAns;
    document.getElementById("square2").innerHTML = ans1;
    document.getElementById("square3").innerHTML = ans2;
  }
  else if (shuffle == 2) {
    document.getElementById("square1").innerHTML = ans1;
    document.getElementById("square2").innerHTML = trueAns;
    document.getElementById("square3").innerHTML = ans2;
  }
  else if (shuffle == 3) {
    document.getElementById("square1").innerHTML = ans1;
    document.getElementById("square2").innerHTML = ans2;
    document.getElementById("square3").innerHTML = trueAns;
  }


}


function checksquare1() {
  var btnValue = document.getElementById("square1").innerHTML;
  check(btnValue);
}
function checksquare2() {
  var btnValue = document.getElementById("square2").innerHTML;
  check(btnValue);
}
function checksquare3() {
  var btnValue = document.getElementById("square3").innerHTML;
  check(btnValue);
}

function check(valuebtn) {
  var score = document.getElementById("score").innerHTML;
  var time = document.getElementById("time").innerHTML;

  if (valuebtn == trueAns) {
    document.getElementById("score").innerHTML = Number(score) + 10;
  } else {
    document.getElementById("score").innerHTML = Number(score) - 10;
  }
  document.getElementById("time").innerHTML = Number(time) + 1;

  quiz();
}