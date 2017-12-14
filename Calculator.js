var firstNumber = "";
var secondNumber = "";
var result = "";
var currentOperator = "";
var operatorOn = false;
var fullScreen = false;

var screen = document.getElementById("screen");

//calculate the firstNumber and secondNumber variables. 
var calculate = function () {
    if (secondNumber == "") {

    } else if (currentOperator == "+") {
        result = operations.add(parseFloat(firstNumber), parseFloat(secondNumber));
        screen.innerHTML = result;
        operatorOn = false;
        currentOperator = "";
        fullScreen = true;
        firstNumber = "";
        secondNumber = "";
    } else if (currentOperator == "-") {
        result = operations.subtract(
            parseFloat(firstNumber),
            parseFloat(secondNumber)
        );
        operatorOn = false;
        currentOperator = "";
        fullScreen = true;
        firstNumber = "";
        secondNumber = "";
        screen.innerHTML = result;
    } else if (currentOperator == "*") {
        result = operations.multiply(
            parseFloat(firstNumber),
            parseFloat(secondNumber)
        );
        operatorOn = false;
        currentOperator = "";
        fullScreen = true;
        firstNumber = "";
        secondNumber = "";
        screen.innerHTML = result;
    } else if (currentOperator == "/") {
        result = operations.divide(
            parseFloat(firstNumber),
            parseFloat(secondNumber)
        );
        operatorOn = false;
        currentOperator = "";
        fullScreen = true;
        firstNumber = "";
        secondNumber = "";
        screen.innerHTML = result;

    }

};

//initializes equals button on calculator, assigns onclick event handler to the calculate function
const equals = document.getElementById("calc");
equals.addEventListener("click", calculate);




//add,subtract, yadda yadda 
const operations = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y
};


// get the number keys and the operators 
const buttons = document.getElementsByClassName("num");
const operators = document.getElementsByClassName("operator");

// const clickHandler = evt => console.log(evt.currentTarget.dataset.num);

//handler for the number keys 
const clickHandler = function (number) {
    if (fullScreen == true) {
        screen.innerHTML = "";
        fullScreen = false;
    }

    if (!operatorOn) {
        firstNumber += number.currentTarget.dataset.num;
        screen.innerHTML = firstNumber;


    } else {
        secondNumber += number.currentTarget.dataset.num;
        screen.innerHTML = secondNumber;
    }
}
//go through number keys and assign a handler to each one 
for (let i = 0, len = buttons.length; i < len; ++i) {
    const button = buttons[i];
    button.addEventListener("click", clickHandler);
}

//operator (+,-,*,/)  handler
const operatorClickHandler = function (op) {
    if (currentOperator.length == 1) {
        currentOperator = op.currentTarget.dataset.ops
    } else {
        currentOperator += op.currentTarget.dataset.ops;
    }

    operatorOn = true;
}

//loop through operators and assign each a handler
for (let i = 0, len = operators.length; i < len; ++i) {
    const operator = operators[i];
    operator.addEventListener("click", operatorClickHandler);
}




function test() {
    console.log(firstNumber + " " + currentOperator + " " + secondNumber);
}