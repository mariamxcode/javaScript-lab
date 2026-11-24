const prompt = require('prompt-sync')();

let word = prompt("Enter word: ")
let sortedWord = " "

    for(let letter = 0; letter<word.length; letter++){
     if(letter % 2 == 0){
     sortedWord +=word.charAt(letter)
     }
}

console.log(`New Word: ${sortedWord}`)

