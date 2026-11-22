const prompt = require('prompt-sync')();

let size = prompt("Enter your desired size: "); 
for(let line = 1; line<=size; line++ ){
if(line % 2 == 0){
console.log(" #".repeat(size));
}else{
console.log("# ".repeat(size));
}
}
