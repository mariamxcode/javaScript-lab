const prompt = require('prompt-sync')();

let firstNumber = Number(prompt("Enter first integer: ")); 
let secondNumber = Number(prompt("Enter second integer: ")); 
let thirdNumber = Number(prompt("Enter third integer: ")); 
let min = firstNumber;
let max = firstNumber

if(min >secondNumber){
min = secondNumber;
}if(min > thirdNumber){
min = thirdNumber;
}

if(max < secondNumber){
max = secondNumber;
}if(max < thirdNumber){ 
max = thirdNumber;
} 

let sum = firstNumber + secondNumber + thirdNumber;
let average = sum / 3;
let product = firstNumber * secondNumber *  thirdNumber;

console.log("Sum: "+sum);
console.log("Average: "+average);
console.log("Product: "+product);
console.log("Minimum Value: "+min);
console.log("Maximum Value: "+max);

