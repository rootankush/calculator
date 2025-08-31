const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const display = document.querySelectorAll("display");
const current = document.querySelectorAll(".current");
const num1 = 0;
const num2 = 0;
const operator = "";

current.textContent = ' ';

function appendToDisplay(input) {
  display.textContent += input;
}

function clearDisplay() {
  current.textContent = ' ';
}

function operate(num1, num2, operator) {
  if(operator === '+') {
    addition();
  }
  else if(operator === '-') {
    subtract();
  }
  else if(operator === '*') {
    multiply();
  }
  else {
    divide();
  }
}

function addition(num1 , num2){
  return num1 + num2;
}

function subtract(num1 , num2){
  return num1 - num2;
}

function multiply(num1 , num2){
  return num1 * num2;
}

function divide(num1 , num2){
  if(num2 === 0){
    return 0;
  }
  return num1 / num2;
}

let storedNumber = '';
let clickedOperator = '';
let firstNumber = '';
let result = '';
current.textContent = 0;

numberButton.forEach((number) => {
  number.addEventListener('click', function(){
    storedNumber += number.value;
    calculate();
  })
})

operatorButton.forEach((operator) => {
  operator.addEventListener('click', function(){
    firstNumber = storedNumber;

    clickedOperator = operator.textContent;
  })
})

const calculate = () => {
  const result = operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator);

  current.textContent = result;
  }