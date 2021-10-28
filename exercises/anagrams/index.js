// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   const aCharMap = buildMap(stringA);
//   const bCharMap = buildMap(stringB);

//   //returns object as an the array of all keys
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// function buildMap(str) {
//   let charMap = {};

//   // regex - used to manipulate strings
//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     if (!charMap[char]) {
//       charMap[char] = charMap[char] + 1 || 1;
//     }
//   }
//   return charMap;
// }

// 2nd solution - more straight forward
function anagrams(stringA, stringB) {
  if (cleanStr(stringA) === cleanStr(stringB)) return true;

  return false;
}

function cleanStr(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

module.exports = anagrams;
