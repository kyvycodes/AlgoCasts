// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

//take a stack FILO to a queue FIFO
class Queue {
// need two stacks two work with
constructor(){
  this.first = new Stack()
  this.second = new Stack()
}

add(element){
  this.first.push(element)
}

remove(){
  while(this.first.peek()){ //as long as there is still a value to operate on
    this.second.push(this.first.pop())
  }
  //when this is done all the elements have been moved over to second stack
  let element = this.second.pop()


  //then return the other values back to the original stack
  while(this.second.peek()){
    this.first.push(this.second.pop())
   }
   return element
  }

  peek(){
    while(this.first.peek()){ //as long as there is still a value to operate on
      this.second.push(this.first.pop())
    }

    //just store what the last element is, without removing it
    let element = this.second.peek()


    //then return the other values back to the original stack
    while(this.second.peek()){
      this.first.push(this.second.pop())
     }
     return element
    }


}

module.exports = Queue;
