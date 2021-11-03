// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  // initialize and assign
  constructor() {
    this.dataList = []
  }

  add(dataPiece) {
    this.dataList.unshift(dataPiece)
  }

  remove(){
    return this.dataList.pop()
  }
}

module.exports = Queue;
