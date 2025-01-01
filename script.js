"Use strict";

// Step 1: Create a function for each operators: add, subtract, multiply, divide

//+ Add
function add(a, b) {
  return a + b;
}

//+ Subtract
function subtract(a, b) {
  return a - b;
}

//+ Multiply
function multiply(a, b) {
  return a * b;
}

//+ Divide
function divide(a, b) {
  return a / b;
}

// Step 2: Create 3 variables for each part of operation
let num1;
let num2;
let operator;

// Step 3: Create a function operate that takes two numbers and an operator and calls the specific operator
function operate(num1, num2, operator) {
  return operator(num1, num2);
}
// console.log(operate(6, 3, multiply));
