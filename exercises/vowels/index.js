// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// alternate solution - condensed
// matches eiter returned the matches in an array or it returns null
function vowels(str) {
  let matches = str.match(/[aeiuo]/gi); //if this str contains any character inside of our brackets

  return matches ? matches.length : 0; //if matches is a truthy value return the length of that array if it is falsy or null return 0 there are no matches
}
// regex
// g means do not stop at the first match
// i means case insenstive

module.exports = vowels;
