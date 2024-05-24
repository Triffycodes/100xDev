/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/\s+/g, '');
  str = str.replace(/[^a-zA-Z0-9]/g, '');
  strReverse = str.split("").reverse().join("");
  if(str.toLowerCase() == strReverse.toLowerCase())return true;
  else return false;
}

module.exports = isPalindrome;
