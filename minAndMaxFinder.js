const prompt = require('prompt-sync')();

let firstNumber = Number(prompt("Enter first integer: ")); 
let secondNumber = Number(prompt("Enter second integer: ")); 
let thirdNumber = Number(prompt("Enter third integer: ")); 
let fourthNumber= Number(prompt("Enter fourth integer: ")); 
let fifthNumber = Number(prompt("Enter fifth integer: ")); 
let min = firstNumber;
let max = firstNumber;




if(min >secondNumber){
min = secondNumber;
}if(min > thirdNumber){
min = thirdNumber;
}if(min > fourthNumber){
min = fourthNumber;
}if(min > fifthNumber){
min = fifthNumber;
}

if(max < secondNumber){
max = secondNumber;
}if(max < thirdNumber){ 
max = thirdNumber;
} if(max < fourthNumber){ 
max = fourthNumber;
} if(max < fifthNumber){ 
max = fifthNumber;
} 
console.log("Minimum Value: "+min);
console.log("Maximum Value: "+max);
