const prompt = require('prompt-sync')({sigint: true});

let number = prompt("Enter number: ");

let sum = 0

for(digit in number){
let values = number.charAt(digit)
let value = Math.abs(Math.floor(values))
sum+=value
}
//while(number != 0){
//let value = Math.floor(number % 10)
//sum+=value
//number = Math.floor(number / 10)
//}
console.log(`Sum ${Math.floor(sum)}`);
