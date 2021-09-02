"use strict";

var outputScreen = document.querySelector(".output");
var numberButtons = document.querySelectorAll(".number");
var equalsButton = document.querySelector("#equals");
var deleteButton = document.querySelector("#delete");
var clearButton = document.querySelector("#clear");
var minusButton = document.querySelector("#minus");
var divideButton = document.querySelector("#divide");
var addButton = document.querySelector("#plus");
var percentButton = document.querySelector("#percent");
var timesButton = document.querySelector("#times");
var operand = document.querySelector(".operator");
numberButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    outputScreen.innerHTML += e.target.value;
  });
});
addButton.addEventListener("click", function () {
  firstNumber = parseFloat(outputScreen.innerHTML);
  outputScreen.innerHTML += "+";
  operator = "+";
});
minusButton.addEventListener("click", function () {
  firstNumberm = parseFloat(outputScreen.innerHTML);
  outputScreen.innerHTML += "-";
  operator = "-";
});
divideButton.addEventListener("click", function () {
  firstNumberd = parseFloat(outputScreen.innerHTML);
  outputScreen.innerHTML += "÷";
  operator = "÷";
});
timesButton.addEventListener("click", function () {
  firstNumbert = parseFloat(outputScreen.innerHTML);
  outputScreen.innerHTML += "×";
  operator = "×";
}); // const operatorM = ["×","-","÷","+"];

equalsButton.addEventListener("click", function () {
  secondNumber = parseFloat(outputScreen.innerHTML);

  if (operator === "+") {
    outputScreen.innerHTML = firstNumber + secondNumber;
  } else if (operator === "-") {
    outputScreen.innerHTML = firstNumberm - secondNumber;
  } else if (operator === "÷") {
    outputScreen.innerHTML = firstNumberd / secondNumber;
  } else if (operator === "×") {
    outputScreen.innerHTML = firstNumbert * secondNumber;
  } // else if (operator[i] < 1){}

});
clearButton.addEventListener("click", function () {
  outputScreen.innerHTML = " ";
});
deleteButton.addEventListener("click", function () {
  outputScreen.innerHTML = outputScreen.innerText.slice(0, -1);
});