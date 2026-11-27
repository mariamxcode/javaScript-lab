const isHappy = function (number){
let sum = 0
while(number != 0){
let digit = number % 10;
number = number / 10
sum+= digit* digit
}
if sum == number :
    return true
else:
    return false

}
