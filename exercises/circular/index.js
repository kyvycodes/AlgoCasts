// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true


//last nod points to an earlier list
function circular(list) {
  let slow = list.head
  let fast = list.head


  while(fast.next && fast.next.next){
    slow = slow.next
    fast = fast.next.next

    if(slow === fast) {// if it is the same object in memory, the identical node not the data (it is possible for the list to have a duplicate data values)
      return true
   }
  }
  return false //we do not have a circular list
}


module.exports = circular;
