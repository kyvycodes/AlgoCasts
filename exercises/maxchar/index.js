// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {};

  //map crating
  for (let ch of str) {
    if (!chars[ch]) {
      chars[ch] = 1;
    } else {
      chars[ch]++;
    }
  }

  // iterate thru object
  let max = 0; //to keep track of the value
  let maxChar = " "; //to keep track of the key

  for (let ch in chars) {
    //ch is the key of the obj not the values
    if (chars[ch] > max) {
      max = chars[ch];
      maxChar = ch;
    }
  }
  return maxChar;
}

//for of used to iterate thru an array or a string or any type of iterable object
//for in is used to iterate thru an actual object - a set of key value pairs

module.exports = maxChar;
