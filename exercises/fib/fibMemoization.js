// generic memoization function (reusable)
// call's it with a slow function to return a faster function

// declare a storage area
//  place to record arguments used to call a function -> and the function results
// anonymous functions receives the arguments
//...args allows us to take in multiple unknown amount of arguments

function memoize(fn){
  const cache = {}
  return function (...args) {
    if(cache[args]) { //have we seen these arg's before ?
      return cache[args] // if so return it

    }

    // if we pass this point have never called the function before
    const result = fn.apply(this, args)

    // in the cache object at the key the 'args' store the result
    return result
  }
}



function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

// take slow function -> pass to memoize -> returns new function
// this call is referencing the recursive call of fib - the memoized version that we can, calling slowFib would defeat the purpose

const fib = memoize(slowFib)
