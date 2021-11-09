// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]


// Steps
// the input is the number of inner arrays
// loop through n, push an empty result into the results array to later fill with elements
// our matrix begins with one so set the counter to increase with an initial value of one.
// our starting row and starting column begin at 0;
// to calculate our end column or end row it's n minus 1

// create a while loop, as long as the starting column is less than or equal too the end column AND the starting row is less than or equal too the ending row
// we assemble that row ex.
    // assemble top row
    // for (let i = startCol; i <= endCol; i++) {
    //   results[startRow][i] = counter;
    //   counter++;
    // }
// increment the counter
// then outside of the for loop:
  // increment the start's (if applicable) or decrement the end's
// the first loop should initialize the top row -> then the right hand side -> bottom row -> left hand side
// continue until the requirements for the while loop is met
// return the result array.



function matrix(n) {
  let results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;


  let startCol = 0;
  let endCol = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  //as long as
  while (startCol <= endCol && startRow <= endRow) {
    // assemble top row
    for (let i = startCol; i <= endCol; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++; //move to next row

    // assemble right hand side
    for (let i = startRow; i <= endRow; i++) {
      results[i][endCol] = counter;
      counter++;
    }
    endCol--;

    // assemble bottom row
    for (let i = endCol; i >= startCol; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // assemble left hand side
    for (let i = endRow; i >= startRow; i--) {
      results[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }
  return results;
}

module.exports = matrix;
