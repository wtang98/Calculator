const outputScreen = document.querySelector(".output");
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
        outputScreen.innerHTML += e.target.value;
    });
});

addButton.addEventListener("click", () =>{ 
    outputScreen.innerHTML += "+" ;
    operator = "+";
})

minusButton.addEventListener("click", () =>{ 
    outputScreen.innerHTML += "-" ;
    operator ="-";
})

divideButton.addEventListener("click", () =>{ 
    outputScreen.innerHTML += "÷" ;
    operator ="÷"
    })

timesButton.addEventListener("click", () =>{ 
        outputScreen.innerHTML += "×" ;
        operator ="×"
    })

equalsButton.addEventListener("click", () => {
    if(outputScreen.innerHTML.split("").includes("+") === true){
        const numArr = outputScreen.innerHTML.split("+")
        const first = parseFloat(numArr[0])
        const second = parseFloat(numArr[1])
        outputScreen.innerHTML = first + second;
    }
    if(outputScreen.innerHTML.split("").includes("-") === true){
        const numArr = outputScreen.innerHTML.split("-")
        const third = parseFloat(numArr[0])
        const fourth = parseFloat(numArr[1])
        outputScreen.innerHTML = third - fourth;
    }
    if(outputScreen.innerHTML.split("").includes("÷") === true){
        const numArr = outputScreen.innerHTML.split("÷")
        const fifth = parseFloat(numArr[0])
        const sixth = parseFloat(numArr[1])
        outputScreen.innerHTML = fifth / sixth;
    }
    if(outputScreen.innerHTML.split("").includes("×") === true){
        const numArr = outputScreen.innerHTML.split("×")
        const sevenths = parseFloat(numArr[0])
        const eighth = parseFloat(numArr[1])
        outputScreen.innerHTML = sevenths * eighth;
    }
})

clearButton.addEventListener("click", ()=> {
    outputScreen.innerHTML = " ";
})
deleteButton.addEventListener("click", () =>{ 
    outputScreen.innerHTML = outputScreen.innerText.slice(0, -1);
})



