
//   vowels('Hi There!') --> 3

// steps

// create a vowels array with the elements that we need to cross check
// set a count variable to 0 to keep track of the amount of vowels found
// loop through the string at a lowercase
// if the vowels array includes an chosen character increase the count


function vowels(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
