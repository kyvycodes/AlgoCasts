// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null; //lets us know that this node does not have any children
    this.right = null;
  }

  insert(data){
    //look at value of root node,
    //look at value that is coming into the function
    //if the value on the left is less, we should pass it down
    //check if this is the last node
    if(data < this.data && this.left){
      this.left.insert(data)
    }
     //if incoming data value is less than this.data and there is already something assigned to the left property than I want to delegate the insertion of the new data to the left node
     else if(data < this.data){
      this.left = new Node(data)
    } //if there is no left node, create a new node assign the data to that new created last node
    else if(data > this.data && this.right){
      this.right.insert(data)
    }
     else if(data > this.data){
      this.right = new Node(data)
    }

  }

  contains(data){
    if (data === this.data) {
      return this //returns entire node
    }
    if(this.data < data  && this.right) { //if current node has a value less than the data more to the right %% verify that there IS a node
      return this.right.contains(data) //if this call returns a value the overall statement must return it as well. DO NOT forget to return that value
    } else if (this.data > data  && this.left) {
      return this.left.contains(data)
    }
    //if the data arg does not exist
    return null
  }
}

module.exports = Node;
