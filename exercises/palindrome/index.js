// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//my solution
// function palindrome(str) {
//   let reversed = str.split("").reverse().join("");

//   return reversed === str ? true : false;
// }

// alternative solution
function palindrome(str) {
  //boolean check on every element in the array as soon as it is false the array returns false
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1]; //increments thru every step of the loop starting from the back
  });
}

module.exports = palindrome;
