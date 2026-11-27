const countPrime= function (upperlimit){

for(let number = 1; number < upperlimit; number++){
for(let theNumber = 1; theNumber < number; theNumber++){
if(number % 1 == 0 && number % number == 0 && number % theNumber !=0 ){
return number
}
}
}

}

console.log(countPrime(4))

