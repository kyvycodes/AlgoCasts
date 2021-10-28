// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//n is the amount of levels
//there must be a space char to the left, the number will always be squared
//log each independent level
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let step = "";

//     for (let col = 0; col < n; col++) {
//       if (col <= row) {
//         step += "#";
//       } else {
//         step += " ";
//       }
//     }
//     // after we process one entire row - one console log for each row
//     console.log(step);
//   }
// }

// recursive solution
function steps(n, row = 0, stair = "") {
  //start on top row of problem

  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1); // stops the current run
  }
  // on first call stair.length is 0, less so we enter this condition - both are 0
  if (stair.length <= row) {
    stair += "#"; //enter
  } else {
    stair += " "; //second function call stair is greater, add the empty space
  }

  // then call the function again
  steps(n, row, stair);
}

// another option - turn if statement to ternary
// const add = stair.length <= row ? '#' : ' ';
// steps(n, row, stair + add);

module.exports = steps;
