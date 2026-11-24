const prompt = require('prompt-sync')();

let word = prompt("Enter word: ")
let vowel = "Aeiouaeiou"
let vowelCount = 0
let consonantCount = 0

    for(let letter = 0; letter<word.length; letter++){
       for(let character = 0; character<vowel.length; character++){
       if(word.charAt(letter)==vowel.charAt(character)){
       vowelCount+=1
       }
      consonantCount +=1 
    }
     
}

console.log(`Vowels: ${vowelCount}`)
console.log(`Consonants: ${consonantCount}`)

