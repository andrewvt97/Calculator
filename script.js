let firstNum = 0;
let secondNum = 0;
let operator = "";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
    if (b == 0) {
        return "Error: Cannot divide by 0";
    }
    return a / b;
    }

    function operate(a, b, operator) {
        switch (operator) {
            case "+":
                return add(a, b);
            case "-":
                return subtract(a, b);
            case "*":
                return multiply(a, b);
            case "/":
                return divide(a, b);
        }
    }
    
    console.log(operate(10, 3, '/'));