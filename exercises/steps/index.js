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


// recursive solution
// initialize default parameters one for the rows starting at zero (the top row) and one for the stairs ''
// base case - if n is the size of the row return the problem
// if n is the step length log the step and stop the current run
//
function steps(n, row = 0, step = "") {

  if (n === row) {
    return;
  }

  if (n === step.length) {
    console.log(step);
    return steps(n, row + 1); // stops the current run
  }
  // on first call stair.length is 0, less so we enter this condition - both are 0
  if (step.length <= row) {
    step += "#"; //enter
  } else {
    step += " "; //second function call stair is greater, add the empty space
  }

  // then call the function again
  steps(n, row, stair);
}


module.exports = steps;


// another option - turn if statement to ternary
  // const add = stair.length <= row ? '#' : ' ';
  // steps(n, row, stair + add);
