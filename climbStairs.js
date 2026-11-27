const climbStairs= function (totalStairs){
let stair = 1
let previous = 1
for(let number = 2; number <= totalStairs; number++){
let next = previous + stair
previous = stair
stair= next

}
return stair
}

console.log(climbStairs(5))
