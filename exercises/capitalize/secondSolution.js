//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Solution 2
// turn the string into an array to use array methods
// need a variable to push the updated string
// loop through the original array
// take each first letter of an element, turn it to Upper case and attach the remaining letters starting at index 1
// push the updated word into an array
// return that array joined (back to a string )

function capitalize(str) {
  let arr = str.split(" ");
  let upper = [];

  for (let word of arr) {
    upper.push(word[0].toUpperCase() + word.slice(1));
  }

  return upper.join(" ");
}
