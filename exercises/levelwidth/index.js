// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]


// Goal - find the widths of each tree

// Steps
// create a width array to return, set the initial value to zero
// create an arr initialized with the root of the tree and followed by a stopper value to let us know when a level has ended - in this case it will be 's'
// while the array value has a length
  //  take the next working element from the tree and store it in a variable using .shift()
  // once s is hit we know we are at the end of each row - we can move the s to the next row

  // if the variable has moved to s push 0 onto the widths array to inform counters that we are going to be processing a new row
  // move the s to the end of the next row

  // if we are not at the last row - aka not === 's'
  // copy the children into the array and increase the last element in results array by one (to add to the count of the number of elements per row)


function levelWidth(root) {
  let widths = [0];
  let arr = [root, 's'];

  while(arr.length > 1){
    const node = arr.shift()

    if (node === 's'){
        widths.push(0)
        arr.push('s')
    } else {
      arr.push(...node.children);
      widths[widths.length-1]++
    }

  }
  return widths
}

module.exports = levelWidth;
