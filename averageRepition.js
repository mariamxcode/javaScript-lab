const prompt = require('prompt-sync')();

let sum = 0
let counter = 1
while(counter !=-1){
let number = Number(prompt("Enter a number: "))
sum+=number
let average = sum / counter
console.log(`Average ${average}`)
counter+=1
}
