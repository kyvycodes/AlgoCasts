// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]

// Steps
// an empty array to store the results of sub arrays
// loop through the current array
// set the last element to the results array
// if the last is empty (which will happen the first run) or the last is is the length of the size
// push that element into the results array
// else add it to last (to get closer to last.length)
// continue until the length of the last array is the === size


function chunk(array, size) {
  let results = [];

  for (let element of array) {

    const last = results[results.length - 1];

    if (!last || last.length === size) {
      //last element is not defined during first run
      // - adds first element

      //pushes element into the chunk array when the criteria is met
      results.push([element]);
    } else {
      last.push(element);
    }
  }
  return results;
}
