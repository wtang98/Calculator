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

let firstNumber = " "; 
let secondNumber = " "; 

numberButtons.forEach(function (button) {
    button.addEventListener("click", (e) => {
        outputScreen.innerHTML += e.target.value;
    });
});

addButton.addEventListener("click", () =>{ 
    firstNumber = parseFloat(outputScreen.innerHTML);
    outputScreen.innerHTML = "" ;
    operator = "+";
})

minusButton.addEventListener("click", () =>{ 
    firstNumberm = parseFloat(outputScreen.innerHTML);
    outputScreen.innerHTML = "" ;
    operator ="-";
})

divideButton.addEventListener("click", () =>{ 
    firstNumberd = parseFloat(outputScreen.innerHTML);
    outputScreen.innerHTML = "" ;
    operator ="÷"
    })

timesButton.addEventListener("click", () =>{ 
    firstNumbert = parseFloat(outputScreen.innerHTML);
        outputScreen.innerHTML = "" ;
        operator ="×"
    })

equalsButton.addEventListener("click", () => {
    secondNumber = parseFloat(outputScreen.innerHTML);
    if(operator === "+"){
        outputScreen.innerHTML = firstNumber + secondNumber;
    }else if (operator === "-"){
        outputScreen.innerHTML = firstNumberm - secondNumber;
    }else if (operator === "÷"){
        outputScreen.innerHTML = firstNumberd / secondNumber;
    }else if(operator === "×"){
        outputScreen.innerHTML = firstNumbert * secondNumber;
    }
})

clearButton.addEventListener("click", ()=> {
    outputScreen.innerHTML = " ";
})
deleteButton.addEventListener("click", () =>{ 
    outputScreen.innerHTML = outputScreen.innerText.slice(0, -1);
})



