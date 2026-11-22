const prompt = require('prompt-sync')();

let number = Number(prompt("Enter  number: "));
while(number != 0){
let digit = Number(number % 10);
number = Number(number / 10);

console.log(digit+" \t");

}
