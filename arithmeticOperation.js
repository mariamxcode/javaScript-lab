const prompt = require('prompt-sync')();

let firstNumber = Number(prompt("Enter the first number: "));

let secondNumber = Number(prompt("Enter the second number: "));

let firstNumberSquare = firstNumber*firstNumber;

let secondNumberSquare = secondNumber*secondNumber;

let sumOfSquare = firstNumberSquare  + secondNumberSquare;

let differenceOfSquare = firstNumberSquare  - secondNumberSquare;

console.log("Square of "+firstNumber+"= "+firstNumberSquare);
console.log("Square of "+secondNumber+"= "+secondNumberSquare);
console.log("Sum of Square = "+sumOfSquare);
console.log("Difference of Square = "+differenceOfSquare);

