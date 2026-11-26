const reverseInteger=(number){
let sum = 0
for(digit in number){
let values = number.charAt(digit)
let value = Math.abs(Math.floor(values))
sum+=value
return Math.floor(sum)
}
}
console.log(reverseInteger(23))
