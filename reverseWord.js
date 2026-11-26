const prompt = require('prompt-sync')();

let word = prompt("Enter word: ")
let reverseWord = ""

    for(let letter = word.length;letter >= 0; letter-- ){
        reverseWord+=word.charAt(letter)
    }
    console.log(reverseWord)
    

