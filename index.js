const outputScreen = document.querySelector(".output");
const oldInput = document.querySelector(".oldInput");
const inputScreen = document.querySelector(".input");
const numberButtons = document.querySelectorAll(".number");
const equalsButton = document.querySelector("#equals");
const deleteButton = document.querySelector("#delete");
const clearButton = document.querySelector("#clear");
const minusButton = document.querySelector("#minus");
const divideButton = document.querySelector("#divide");
const addButton = document.querySelector("#plus");
const percentButton = document.querySelector("#percent");
const timesButton = document.querySelector("#times");

numberButtons.forEach(function (button) {
    button.addEventListener("click", (e) => {
        oldInput.innerHTML = "";
        inputScreen.innerHTML += e.target.value;
    });
});

addButton.addEventListener("click", () =>{ 
    inputScreen.innerHTML += "+" ;
    operator = "+";
})

minusButton.addEventListener("click", () =>{ 
    inputScreen.innerHTML += "-" ;
    operator ="-";
})

divideButton.addEventListener("click", () =>{ 
    inputScreen.innerHTML += "÷" ;
    operator ="÷"
    })

timesButton.addEventListener("click", () =>{ 
    inputScreen.innerHTML += "×" ;
        operator ="×"
    })

equalsButton.addEventListener("click", () => {
    oldInput.innerHTML = inputScreen.innerHTML + "=";
    if(inputScreen.innerHTML.split("").includes("+") === true){
        const numArr = inputScreen.innerHTML.split("+")
        const first = parseFloat(numArr[0])
        const second = parseFloat(numArr[1])
        outputScreen.innerHTML = first + second;
    }
    if(inputScreen.innerHTML.split("").includes("-") === true){
        const numArr = inputScreen.innerHTML.split("-")
        const third = parseFloat(numArr[0])
        const fourth = parseFloat(numArr[1])
        outputScreen.innerHTML = third - fourth;
    }
    if(inputScreen.innerHTML.split("").includes("÷") === true){
        const numArr = inputScreen.innerHTML.split("÷")
        const fifth = parseFloat(numArr[0])
        const sixth = parseFloat(numArr[1])
        outputScreen.innerHTML = fifth / sixth;
    }
    if(inputScreen.innerHTML.split("").includes("×") === true){
        const numArr = inputScreen.innerHTML.split("×")
        const sevenths = parseFloat(numArr[0])
        const eighth = parseFloat(numArr[1])
        outputScreen.innerHTML = sevenths * eighth;
    }
    inputScreen.innerHTML = "";
})

clearButton.addEventListener("click", ()=> {
    outputScreen.innerHTML = "";
    inputScreen.innerHTML = "";
    oldInput.innerHTML = "";
})

deleteButton.addEventListener("click", () =>{ 
    inputScreen.innerHTML = inputScreen.innerText.slice(0, -1);
})



