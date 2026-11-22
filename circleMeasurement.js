const prompt = require('prompt-sync')();

let radius = Number(prompt("Enter radius: "));

console.log("Diameter: "+2*radius);
console.log("Circumference: "+2*(3.14159 * radius));
console.log("Area: "+(3.14159*(radius*radius)));

