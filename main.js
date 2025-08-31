const display = document.getElementById("display");
const num1 = 0;
const num2 = 0;
const operator = "";

function appendToDisplay(input) {
  display.textContent += input;
}

function clearDisplay() {
  // const num1 = 0;
  // const num2 = 0;
  // const operator = "";
  display.textContent = "";
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