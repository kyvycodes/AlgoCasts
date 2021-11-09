// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


// regex notes
// g means do not stop at the first match
// i means case insensitive

// The match() method retrieves the result of matching a string against a regular expression - ( changes data type to an array )

// solution - condensed
// Steps
// create an variable that checks the matches of the string against provided characters inside the bracket
//if matches is a truthy value return the length of that array if it is falsy or null return 0 there are no matches

function vowels(str) {
  let matches = str.match(/[aeiuo]/gi);

  return matches ? matches.length : 0;
}



module.exports = vowels;
