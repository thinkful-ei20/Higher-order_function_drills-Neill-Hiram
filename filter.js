'use strict';

// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
  // This is a "predicate function" - it's a function that only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// TASK: DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn) {
  let newArray = [];
  for (const item of arr) {
    if (fn(item)) newArray.push(item);
  }
  return newArray;
}

console.log(filter(myNames, function(name) {
  return name[0] === 'R';
}));

// Bonus Credit
console.log(filter(myNames, (name) => name[0] === 'R'));