// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split("").reverse().join("");
// }

//second solution to manually
// function reverse(str) {
//   let reversed = "";

//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// third solution helper
function reverse(str) {
  return str.split("").reduce((reversed, char) => {
    return char + reversed;
  }, "");
}

module.exports = reverse;
