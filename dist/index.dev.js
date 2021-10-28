"use strict";

var outputScreen = document.querySelector(".output");
var oldInput = document.querySelector(".oldInput");
var inputScreen = document.querySelector(".input");
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
    oldInput.innerHTML = "";
    inputScreen.innerHTML += e.target.value;
  });
});
addButton.addEventListener("click", function () {
  inputScreen.innerHTML += "+";
  operator = "+";
});
minusButton.addEventListener("click", function () {
  inputScreen.innerHTML += "-";
  operator = "-";
});
divideButton.addEventListener("click", function () {
  inputScreen.innerHTML += "÷";
  operator = "÷";
});
timesButton.addEventListener("click", function () {
  inputScreen.innerHTML += "×";
  operator = "×";
});
equalsButton.addEventListener("click", function () {
  oldInput.innerHTML = inputScreen.innerHTML + "=";

  if (inputScreen.innerHTML.split("").includes("+") === true) {
    var numArr = inputScreen.innerHTML.split("+");
    var first = parseFloat(numArr[0]);
    var second = parseFloat(numArr[1]);
    outputScreen.innerHTML = first + second;
  }

  if (inputScreen.innerHTML.split("").includes("-") === true) {
    var _numArr = inputScreen.innerHTML.split("-");

    var third = parseFloat(_numArr[0]);
    var fourth = parseFloat(_numArr[1]);
    outputScreen.innerHTML = third - fourth;
  }

  if (inputScreen.innerHTML.split("").includes("÷") === true) {
    var _numArr2 = inputScreen.innerHTML.split("÷");

    var fifth = parseFloat(_numArr2[0]);
    var sixth = parseFloat(_numArr2[1]);
    outputScreen.innerHTML = fifth / sixth;
  }

  if (inputScreen.innerHTML.split("").includes("×") === true) {
    var _numArr3 = inputScreen.innerHTML.split("×");

    var sevenths = parseFloat(_numArr3[0]);
    var eighth = parseFloat(_numArr3[1]);
    outputScreen.innerHTML = sevenths * eighth;
  }

  inputScreen.innerHTML = "";
});
clearButton.addEventListener("click", function () {
  outputScreen.innerHTML = "";
  inputScreen.innerHTML = "";
  oldInput.innerHTML = "";
});
deleteButton.addEventListener("click", function () {
  inputScreen.innerHTML = inputScreen.innerText.slice(0, -1);
});