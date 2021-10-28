// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//   let columns = n * 2 - 1;
//   let columnsMidpoint = Math.floor(columns / 2);

//   for (let row = 0; row < n; row++) {
//     let levels = "";
//     for (let col = 0; col < columns; col++) {
//       //if current spot is centered
//       if (columnsMidpoint - row <= col && columnsMidpoint + row >= col) {
//         levels += "#";
//       } else {
//         levels += " ";
//       }
//     }
//     console.log(levels);
//   }
// }

// recursive solution
function pyramid(n, row = 0, level = "") {
  if (n === row) {
    return;
  }

  //when we are at the length of the level its time to move on to the next row
  if (level.length === 2 * n - 1) {
    console.log(level); //console level
    return pyramid(n, row + 1); //move on to next row
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add; //contains char we want to add to level
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }

  pyramid(n, row, level + add);
}

module.exports = pyramid;
