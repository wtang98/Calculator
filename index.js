
const outputScreen = document.querySelector(".output");
const numberButtons = document.querySelectorAll(".number");
const equalsButton = document.querySelector("#equals");
const deleteButton = document.querySelector("#delete");
const clearButton = document.querySelector("#clear");
const minusButton = document.querySelector("#minus");
const divideButton = document.querySelector("#divide");
const addButton = document.querySelector("#plus");
const percentButton = document.querySelector("#percent");
const decimalButton = document.querySelector("#decimal");
const timesButton = document.querySelector("#times")

let firstNumber = "" //outputScreen.innerHTML
let secondNumber = "" //outputScreen.innerHTML

numberButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        outputScreen.innerHTML += e.target.value;
        // e.target.value = firstNumber;
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

percentButton.addEventListener("click", () =>{ 
    firstNumberp = parseFloat(outputScreen.innerHTML);
        outputScreen.innerHTML = "" ;
        operator ="%"
    })

equalsButton.addEventListener("click", button => {
    secondNumber = parseFloat(outputScreen.innerHTML);
    if(operator === "+"){
        outputScreen.innerHTML = firstNumber + secondNumber
    }else if (operator === "-"){
        outputScreen.innerHTML = firstNumberm - secondNumber
    }else if (operator === "÷"){
        outputScreen.innerHTML = firstNumberd / secondNumber
    }else if(operator === "×"){
        outputScreen.innerHTML = firstNumbert * secondNumber
    }else if(operator=== "%");{
        outputScreen.innerHTML = ((firstNumberp/secondNumber))*100
    };
})


clearButton.addEventListener("click", ()=> {
    outputScreen.innerHTML = " ";
})



    // deleteButton.addEventListener("click", () =>{ 
    //     outputScreen.innerHTML--
    // })



