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

function levelWidth(root) {
  let widths = [0];
  let arr = [root, 's']; //queue //s represents a stopper value - 's' is a char not a node


  while(arr.length > 1){
    const node = arr.shift() //next working element
    //once we hit 's' we are at the end of that row
    //move s to the end of the next row
    if (node === 's'){
        widths.push(0) //inform counters that we are going to be processing a new row
        arr.push('s')
    } else {
      arr.push(...node.children);
      widths[widths.length-1]++
    }

  }
  return widths
}

module.exports = levelWidth;
