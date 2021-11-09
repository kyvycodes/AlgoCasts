// Same solution with comments in place


//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]



function matrix(n) {
  let results = [];

  for (let i = 0; i < n; i++) {
    //n number of subarrays
    results.push([]);
  }
  let counter = 1; //what num we want to put into our sub arr

  //to cal end column or end row it is n minus 1
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

