// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) { //FROM the last (0 spaces from the last would be the last)
let slow = list.head
let fastAtN = list.head

//step 1: advance the pointer thru n elements
while(n > 0){
  fastAtN = fastAtN.next
  n--
}

//step: 2 advance both element by one, exit while loop when fast is pointing at the last element
while(fastAtN.next){
  slow = slow.next
  fastAtN = fastAtN.next
}

//slow will be pointing n elements behind it
  return slow
}

module.exports = fromLast;
