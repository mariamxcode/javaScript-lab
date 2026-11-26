const prompt = require('prompt-sync')({sigint: true));

let number = prompt("Enter a number: ");
factorial = 1;

for(let factor = 1 ; factor <= number; factor++){
factorial*=factor
}

console.log(factorial)
