// Solution 2


// Steps
// set the value of each returned helper function to a variable
// compare the length of each string OR look at the number of keys in each object to compare the length;
// iterate over the one map, visiting every element and compare it to the second map
// checking how many times the element has been used inside of one map if has not be used the same amount of times in the second it is false

function anagrams(stringA, stringB) {
  const aCharMap = buildMap(stringA);
  const bCharMap = buildMap(stringB);

  //returns object as an the array of all keys
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }
  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
}


// Helper function steps
// take each char in the string, replace any invalid items with '' turn the string to lower case

// To build a map
// assign a key for the current element
// increment the value at that element
// if it has not be assigned yet set the value to 1


function buildMap(str) {
  let charMap = {};
   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
     if (!charMap[char]) {
       charMap[char] = charMap[char] + 1 || 1;
     }
   }
  return charMap;
}



