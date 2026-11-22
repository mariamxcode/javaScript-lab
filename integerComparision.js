const prompt = require('prompt-sync')();

let number = Number(prompt("Enter an integer: ")); 

if(number > 100 && number*number > 100){
console.log("number and it's square are greater than 100")
}else if(number == 100 && number*number == 100){
console.log("number and it's square are equals to 100")
}else if(number != 100 && number*number != 100){
console.log("number and it's square are not equal to  100")
}else if(number < 100 && number*number < 100){
console.log("number and it's square are less than 100")
}
