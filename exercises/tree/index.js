// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  //node carries references to every child node
  constructor (data){ //agr that gets assigned to the data property
    this.data = data;
    this.children = [] //empty array for storing children - every single need node will have the ability to add a child node
  }

  add(data){
    const node = new Node(data)//create a new node and push it to the childrens array
    this.children.push(node) // or this.children.push(new Node())
  }

  remove(data){ // checks the data against children nodes and removes the node that houses that value
    this.children = this.children.filter((node) => {
      return node.data !== data;
    })
  }
}

class Tree {
  constructor(){
    this.root = null;
  }

  traverseBF(fn){
    //take empty array
    //place root node
    //while arr has elements
    //remove first element - retrieve all of that nodes children and place them in the end of the array //repeat
    let arr = [this.root] //gives us an element to iterate over

    while(arr.length) {
      const node = arr.shift();

      arr.push(...node.children)
      // or
      // for (let child of node.children){
      //  arr.push(child)
      // }

      fn(node)
    }
  }

  traverseDF(fn){
    let arr = [this.root]

    while(arr.length) {
      const node = arr.shift()

      arr.unshift(...node.children); //moves element to the

      fn(node)
    }

  }


}

module.exports = { Tree, Node };
