// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {};
  }
  // Register an event handler
  on(eventName, callback) {
    // this.events[eventName]; //sets the eventName as a key
    if (this.events[eventName]) {

      //if some value already exists push callback into the array
      this.events[eventName].push(callback);
    } else {

      // this event only includes the callback, create a new arr and add the cb to it
      this.events[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {

    //look at the event key in our events object and if so trigger any callbacks
    if (this.events[eventName]) {

      for (let cb of this.events[eventName]) {
        cb(); //trigger the cb
      }

    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    if (this.events[eventName]) {
      this.events[eventName].pop(eventName);
    }

    //alternative using delete keyword
    // delete this.events[eventName];
  }
}

module.exports = Events;
