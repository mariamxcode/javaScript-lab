const hammingWeigth= function(number){
let result = " ";
while(number > 0){
if(number % 2 != 0){
result+=1;
}
number = Math.floor(number / 2)
}
}

console.log(hammingWeigth(3))
