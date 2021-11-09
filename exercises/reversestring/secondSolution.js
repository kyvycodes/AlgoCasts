// reverse('hello') === 'olleh'

// second solution to manual

  // create an empty string
  // loop through the parameter
  // concat the character to the reversed string (while assigning)
function reverse(str) {
  let reversed = "";

  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}
