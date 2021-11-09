// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


// To reverse an integer
  // Turn it into a string, reserve the string
  // if n is less than zero
  // parse the integer and multiply it by -1

  // else parse the integer

function reverseInt(n) {
  let reversed = n.toString().split("").reverse().join("");

  if (n < 0) {
    return parseInt(reversed) * -1;
  }

  return parseInt(reversed); //or Math.sign(n) without the if statement
}

module.exports = reverseInt;
