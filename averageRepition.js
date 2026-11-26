const prompt = require('prompt-sync')();

let sum = 0
let counter = 1
let number = 0
while(number !=-1){
number = Number(prompt("Enter a number: "))
sum+=number
let average = sum / counter
console.log(`Average ${average}`)
counter+=1
}
