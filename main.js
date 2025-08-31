const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
const current = document.querySelector(".current");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const dot = document.querySelector(".dot");
const backspace = document.querySelector(".backspace");

current.textContent = " ";

function operate(num1, num2, operator) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (operator === "+") {
    return addition(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else {
    return divide(num1, num2);
  }
}

function addition(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "Error";
  }
  return num1 / num2;
}

let storedNumber = "";
let clickedOperator = "";
let firstNumber = "";
let result = "";
current.textContent = 0;

numberButton.forEach((number) => {
  number.addEventListener("click", function () {
    storedNumber += number.textContent; // Use textContent instead of value
    if (clickedOperator && firstNumber) {
      // If an operator and first number exist, show the full expression
      current.textContent = `${firstNumber} ${clickedOperator} ${storedNumber}`;
    } else {
      // Otherwise, just show the current number being typed
      current.textContent = storedNumber;
    }
  });
});

operatorButton.forEach((operator) => {
  operator.addEventListener("click", function () {
    if (firstNumber && storedNumber && clickedOperator) {
      result = operate(firstNumber, storedNumber, clickedOperator);
      current.textContent = result;
      firstNumber = result;
      storedNumber = "";
    } else {
      firstNumber = storedNumber;
      storedNumber = "";
    }
    clickedOperator = operator.textContent;
    current.textContent = firstNumber + " " + clickedOperator;
  });
});

equals.addEventListener("click", function () {
  if (firstNumber && storedNumber && clickedOperator) {
    result = operate(firstNumber, storedNumber, clickedOperator);
    current.textContent = result;
    firstNumber = result;
    storedNumber = "";
    clickedOperator = "";
  }
});

clear.addEventListener("click", function () {
  storedNumber = "";
  firstNumber = "";
  clickedOperator = "";
  result = "";
  current.textContent = "0";
});

dot.addEventListener("click", function () {
  if (!storedNumber.includes(".")) {
    storedNumber += storedNumber ? "." : "0.";
    if (clickedOperator && firstNumber) {
      current.textContent = `${firstNumber} ${clickedOperator} ${storedNumber}`;
    } else {
      current.textContent = storedNumber;
    }
  }
});

backspace.addEventListener("click", function () {
  storedNumber = storedNumber.slice(0, -1);
  if (storedNumber === "" && !clickedOperator) {
    current.textContent = "0";
  } else if (clickedOperator && firstNumber) {
    current.textContent = `${firstNumber} ${clickedOperator} ${storedNumber || ""}`;
  } else {
    current.textContent = storedNumber || "0";
  }
});
