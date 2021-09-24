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
numberButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    outputScreen.innerHTML += e.target.value;
  });
});
addButton.addEventListener("click", function () {
  outputScreen.innerHTML += "+";
  operator = "+";
});
minusButton.addEventListener("click", function () {
  outputScreen.innerHTML += "-";
  operator = "-";
});
divideButton.addEventListener("click", function () {
  outputScreen.innerHTML += "÷";
  operator = "÷";
});
timesButton.addEventListener("click", function () {
  outputScreen.innerHTML += "×";
  operator = "×";
});
equalsButton.addEventListener("click", function () {
  if (outputScreen.innerHTML.split("").includes("+") === true) {
    var numArr = outputScreen.innerHTML.split("+");
    var first = parseFloat(numArr[0]);
    var second = parseFloat(numArr[1]);
    outputScreen.innerHTML = first + second;
  }

  if (outputScreen.innerHTML.split("").includes("-") === true) {
    var _numArr = outputScreen.innerHTML.split("-");

    var third = parseFloat(_numArr[0]);
    var fourth = parseFloat(_numArr[1]);
    outputScreen.innerHTML = third - fourth;
  }

  if (outputScreen.innerHTML.split("").includes("÷") === true) {
    var _numArr2 = outputScreen.innerHTML.split("÷");

    var fifth = parseFloat(_numArr2[0]);
    var sixth = parseFloat(_numArr2[1]);
    outputScreen.innerHTML = fifth / sixth;
  }

  if (outputScreen.innerHTML.split("").includes("×") === true) {
    var _numArr3 = outputScreen.innerHTML.split("×");

    var sevenths = parseFloat(_numArr3[0]);
    var eighth = parseFloat(_numArr3[1]);
    outputScreen.innerHTML = sevenths * eighth;
  }
});
clearButton.addEventListener("click", function () {
  outputScreen.innerHTML = " ";
});
deleteButton.addEventListener("click", function () {
  outputScreen.innerHTML = outputScreen.innerText.slice(0, -1);
});