// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   let chunked = [];

//   for (let element of array) {
//     const last = chunked[chunked.length - 1]; //set the last el to the sub array
//     console.log("last", last);
//     if (!last || last.length === size) {
//       chunked.push([element]);
//       console.log("chunked", chunked);
//     } else {
//       last.push(element);
//     }
//   }
//   return chunked;
// }

//slice approach - slice makes a copy, takes from the first index up to the second element
function chunk(array, size) {
  let index = 0;
  let chunked = [];
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

module.exports = chunk;
