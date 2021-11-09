//   palindrome("abba") === true

// Steps

// split the string into an array
// use .every to boolean check on every element in the array as soon as it is false the array returns false
// check every element starting from the back
// decrement the index

function palindrome(str) {

  return str.split("").every((char, i) => {

    return char === str[str.length - i - 1];

  });

}
