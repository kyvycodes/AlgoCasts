// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] // fib(4) output 3

// recursive
// if n is less than 2, n will be either 0 or 1 so it is okay to return n
// add the return values of fibonacci of the previous number and the number before that one

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}
// time complexity: exponential
