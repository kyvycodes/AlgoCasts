// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// Steps
// create a variable to update the first letter (at index 0) to upper case - this is assuming that every sentence will begin this way
// loop through the remaining string starting at index 1, the following index
// if the previous element is an empty space set the current element to uppercase
// if not concat the element to the result string

function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

module.exports = capitalize;
