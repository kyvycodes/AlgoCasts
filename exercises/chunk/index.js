// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// Solution 1

// Steps
// begin at index 0 loop through the array (using while)
// slice every from index to the index plus the size
// push it to the results array
// more on to the next index, incrementing by size
function chunk(array, size) {
  let index = 0;
  let results = [];
  while (index < array.length) {
    results.push(array.slice(index, index + size));
    index += size;
  }
  return results;
}

module.exports = chunk;
