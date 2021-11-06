// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  let slow = list.head
  let fast = list.head

  while(fast.next && fast.next.next){
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}

// strategy:

// use slow and fast
// slow = first node
// fast = first node
// slow gets advanced by one node at a time
// fast gets advanced by two nodes at a time

// ask - are there two elements after fast defined?
  // if yes continue
  // if no we are at end of LL

// slow moves HALF as fast

module.exports = midpoint;
