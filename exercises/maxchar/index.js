// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Steps

// to create a obj to map
  // create an empty object
  // loop through your data
  // if the key is not present set the value to one (!key[value] = 1)
  // else up the current count (key[value]++)

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
  let max = 0; //keep track of the value
  let maxKey = " "; //to keep track of the key

  //iterate thou the
  for (let key in chars) {

    // if the key in the chars object is greater than the max
    // replace the max
    // set the maximum character to the actual key
    if (chars[key] > max) {
      max = chars[key];
      maxKey = key;
    }
  }

  return maxKey; //that represents max value
}

module.exports = maxChar;


// notes:
// for of used to iterate thru an array or a string or any type of iterable object
// for in is used to iterate thru an actual object - a set of key value pairs
