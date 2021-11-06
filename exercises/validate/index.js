// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) { // set default values at null

  // for the root node both if statements are skipped

  // left side

  //if max is not null and the data in that node is greater than max
  if(max !== null && node.data > max) {
    return false
  }
  // right side
  if(min !== null && node.data < min) {
    return false
  }

  // if there is no node on the left this statement is not entered

  //min is null for the initial traversal
  if(node.left && !validate(node.left, min, node.data)) {
    return false
  }

  if(node.right && !validate(node.right, node.data, max)) {
    return false
  }

//if you make it past all if statements return true
return true


}

// alternative solution (might not handle all edge cases in future problems )
// function validate(node, min = null, max = null) {
//   if (min && node.data < min || max && node.data > max) return false;
//   if (node.left) return validate(node.left, min, node.data);
//   if (node.right) return validate(node.right, node.data, max);
//   return true
// }
module.exports = validate;
