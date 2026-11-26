const prompt = require('prompt-sync')({sigint: true});

let number = 10;
let sum = 0
while(number > 0){
number = Number(prompt("Enter number: "))
}
while(number != 0){
let value = Math.floor(number % 10)
sum+=value
number = Math.abs(number / 10)
}
console.log(`Sum ${Math.floor(sum)}`);
