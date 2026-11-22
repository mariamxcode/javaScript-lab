const prompt = require('prompt-sync')();

let firstNumber = Number(prompt("Enter first integer: ")); 
let secondNumber = Number(prompt("Enter second integer: ")); 
let thirdNumber = Number(prompt("Enter third integer: ")); 
let fourthNumber= Number(prompt("Enter fourth integer: ")); 
let fifthNumber = Number(prompt("Enter fifth integer: ")); 
let positiveNumber = 0;
let negativeNumber = 0;
let zeroNumber = 0;

if(firstNumber < 0){
negativeNumber++;
}else if(firstNumber > 0){
positiveNumber++;
}else{
zeroNumber++;
}


if(secondNumber < 0){
negativeNumber++;
}else if(secondNumber > 0){
positiveNumber++;
}else{
zeroNumber++;
}

if(thirdNumber < 0){
negativeNumber++;
}else if(thirdNumber > 0){
positiveNumber++;
}else{
zeroNumber++;
}

if(fourthNumber < 0){
negativeNumber++;
}else if(fourthNumber > 0){
positiveNumber++;
}else{
zeroNumber++;
}


if(fifthNumber < 0){
negativeNumber++;
}else if(fifthNumber > 0){
positiveNumber++;
}else{
zeroNumber++;
}

console.log("Positive Number: "+ positiveNumber);
console.log("Negative Number: "+ negativeNumber);
console.log("Zeros: "+zeroNumber);
