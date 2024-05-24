/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let countVow = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let i=0;i<str.length;i++){
      let toLow = str[i].toLowerCase();
      let vowelPresent = vowels.find(item => item === toLow);
      if(vowelPresent){
        countVow+=1;
      }
    }
    return countVow;
}

module.exports = countVowels;