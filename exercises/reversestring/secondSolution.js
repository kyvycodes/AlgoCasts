//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// important facts:
// n is the amount of levels
// log each independent level
// the number will always be squared

// Steps
// loop through the row up to n
// inside of that loop create a step variable initialized with an empty str
// loop through the columns up to row n
// if the column is less than or equal to the row add a step '#'
// else add an empty space
// after we process one entire row log the result of that step inside that initialize for loop.

function steps(n) {

  for (let row = 0; row < n; row++) {
    let step = "";

    for (let col = 0; col < n; col++) {
      if (col <= row) {
        step += "#";
      } else {
        step += " ";
      }
    }
    console.log(step);
  }
}
