// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// Steps
// create a loop to iterate through the elements
// begin at 1 since we are not asked to print zero
// if the element has zero remainders for both 3 and 5 log fizbuzz
// if it has 0 remainders for 3 log fizz
// if it has 0 remainders for 5 log buzz
// log the element

function fizzBuzz(n) {

  for (let i = 1; i <= n; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    }
    else if (i % 3 === 0) {

      console.log("fizz");
    } else if (i % 5 === 0) {

      console.log("buzz");
    } else {

      console.log(i);
    }
  }
}

module.exports = fizzBuzz;
