function addNum (num1, num2) {
    return num1 + num2;
}

function subNum (num1, num2) {
    return num1 - num2;  
}

function multNum (num1, num2) {
    return num1 * num2;
}

function divNum (num1, num2) {
    return num1 / num2;
}

let num1 = "";
let num2 = "";
let operator = "";
const display = document.querySelector(".display");


function operate () {
    if (operator === "+") {
        return addNum;
    }

    if (operator === "-") {
        return subNum;
    }

    if (operator === "+") {
        return divNum;
    }

    if (operator === "*") {
        return multNum;
    }
}

const buttons = document.querySelectorAll(".num-btn");

for (let button of buttons) {
    button.addEventListener("click", function(event) {
        if (operator == "") {
            display.innerText = display.innerText + event.target.innerText;
            num1 = event.target.innerText;
        } else {
            num2 = event.target.innerText;
        }
    })
}

const operateBtns = document.querySelectorAll(".operate-btn");

for (let button of operateBtns) {
    button.addEventListener("click", function(event) {
        operator = event.target.innerText;
    })
}

const displayTarget = document.querySelector(".display");

function clearDisplay () {
    displayTarget.innerText = "";
}

document.querySelector(".clear-btn").addEventListener("click", clearDisplay);
