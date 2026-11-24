const prompt = require('prompt-sync')();

let word = prompt("Enter word: ")
let reverseWord = ""

    for(let letter = word.length;letter >= 0; letter-- ){
        reverseWord+=word.charAt(letter)
    }
if (word == reverseWord){
console.log("It's a palindrome")
}else{
console.log("It's not a palindrome")
}
