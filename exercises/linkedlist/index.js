// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node { //initialization  of a node
  constructor(data, next = null){
    this.data = data;
    this.next = next; //sets the next node along the chain
  }
}

class LinkedList {
  constructor(){ //initialize linked list - only reference to the head
    this.head = null
  }
  // beginning the list ex.
  // let list = new LinkedList()
  // list.head = new Node(10)


  // ___________________________________
  insertFirst(data){ //remember inserting not overwriting
    const node = new Node(data, this.head) //second node will become next property based on our node constructor
    this.head = node;

    //alternative
    // this.head = new Node(data, this.head)
  }

  // ___________________________________
  size(){
    let counter = 0;
    let node = this.head

    while(node) {
      counter++;
      node = node.next
    }
    return counter
  }

  // ___________________________________
  getFirst() {
    return this.head
  }

  // ___________________________________
  getLast() {
    // alternative check
    if(!this.head) return null

    let node = this.head

    while (node.next !== null){
        node = node.next
    }
    return node
  }
  // ___________________________________
   clear(){
    this.head = null
  }

  // ___________________________________
  removeFirst(){
    if (!this.head) return
    this.head = this.head.next
  }

  // ___________________________________
  removeLast(){
    // if list is empty
    if (!this.head){
      return
    }

    if(!this.head.next){ //if there is only one node
      this.head = null //removes the only node
      return
    }

    let previous = this.head //first node
    let node = this.head.next //second node

    while(node.next){ //while there is an additional element ot iterate thru
      previous = node //set previous to look at the next node
      node = node.next // set the next node to look at the following
    }

    //exiting the while loop means:
      // node.next does not exist
      // node is the last node
      // setting previous.next to null deletes that final node (breaks the chain)
    previous.next = null
  }

  // ___________________________________
  insertLast(data){
    const last = this.getLast()

    if(last){
      //there are existing nodes
      last.next = new Node(data);
    } else {
      // chain is empty
      this.head = new Node(data);
    }
  }

// ___________________________________
  getAt(integer){ //index
    let node = this.head;
    let counter = 0;

    if(!this.head){
      return null
    }

    while(node){
      if(integer === counter){
        return node
      }
        node = node.next;
        counter++
    }

    return null //couldnt find the index while running the while loop
  } //returns entire node at that index

  // ___________________________________
  removeAt(index){ //skip the node at that index
    if(!this.head) return

    // manually remove the first element in the chain
    if(index === 0){
      this.head = this.head.next
      return //to confirm we aren't continuing with any other logic
    }

    //stores the node right before the node we are looking to remove
    const previous = this.getAt(index - 1)

    //if remove at is greater than the index we have in our nodes return - previous is calling getAt()
    //or if previous does not have a next node (when previous.next.next is undefined)
    if(!previous || !previous.next) return

    //next node should be pointer at the currents next, next
    previous.next = previous.next.next
  }

 // ___________________________________
  insertAt(data, index){
    if(!this.head){
      this.head = new Node(data)
    }

    if(index === 0){
      this.head = new Node(data, this.head); // the second arg is the current head (updating the head)
    }

    const previous = this.getAt(index - 1) || this.getLast(); //if index is out of bounds add to the end

    // set both nodes to point to the  same next nodes
    const node = new Node(data, previous.next);

    //set the connection between the previous and the inserted node
    previous.next = node
  }

// ___________________________________
  forEach(fn){
    let node = this.head;

    while(node){
      fn(node);
      node = node.next;
    }

  }

}

module.exports = { Node, LinkedList };
