// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// regex (used to manipulate strings)
// /[^\w]/g - anything that is not a number or a character

// Solution 1 - more straight forward
// call the helper function on both strings - if the results are equal return true
// Goal - see if the string has the same quantity of each character
function anagrams(stringA, stringB) {
  if (cleanString(stringA) === cleanString(stringB)) return true;
  return false;
}

// Steps of helper
// replaces any items that are not a # or character with an empty space
// change all characters to lowercase
// sort it
// return it joined
function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

module.exports = anagrams;

