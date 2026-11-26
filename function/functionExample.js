function thank(name){
 console.log("Dear "+name+" thank you!")

}

thank("Ada")
console.log(typeof thank)



function greet(name,mark){
console.log("Hello, "+ name + mark)
}
greet("Mariam","?")
greet("Ak",":")

function area(w,h){
    console.log(w*h)
}
const total = area(4,5)+ area(2,3)

console.log(total)

function area2(w,h){
    return w * h;
}
const totals = area2(4,5)+ area2(2,3)

console.log(totals)


function addPrint(a,b){console.log(a+b)}
function add(a,b){return a+b}
const x = addPrint(2,3)
const y = add(2,3)
console.log(x,y)



function showTotal(n){
console.log("Total: "+ n)
}
function double(n){
return n * 2
}
showTotal(double(21))


function min(a,b){
let minValue = a;
if(a > b){
minValue = b;
}
return minValue
}
console.log(min(0,10))
console.log(min(0,-10))
//function isEven(n){
//if(n % 2 == 0){
//return true
//}
//return false
//}
function isEven(n){
return n % 2 === 0
}
console.log(isEven(50))
console.log(isEven(75))
function areaOfRectangle(width,height){

return width * height
}
console.log(areaOfRectangle(4,5))
//declaration
function add(a,b){return a + b}
//expression
const add2 = function(a,b){
return a + b;
}
//Arrow functon
const add3 = (a,b) =>a + b
console.log(add(1,2),add2(1,2),add3(1,2))
console.log(typeof add,typeof add2,typeof add3)

