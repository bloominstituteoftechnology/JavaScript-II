/* PEER REVIEW NOTE: I cannot for the life of me follow the logic on the solution
for the stretch goal. I've placed it at the bottom commented out for your convenience. */


const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* Problem 1
firstItem passes the first item of the given array to the callback function. */

function firstItem(arr, cb) {
  console.log(cb(arr))
}
let first = function(items) {
  return items[0];
}
firstItem(items, first)


/* Problem #2
getLength passes the length of the array into the callback. */

function getLength(arr, cb) {
  console.log(cb(arr));
}
let arrayLength = function(arr) {
  return arr.length;
}
getLength(items, arrayLength);


/* Problem #3
last passes the last item of the array into the callback. */

function last(arr, cb) {
  console.log(cb(arr));
}
let lastItem = function(items) {
  return items[items.length - 1];
}
last(items, lastItem);


/* Problem #4
sumNums adds two numbers (x, y) and passes the result to the callback. */

function sumNums(x, y, cb) {
  console.log(cb(x, y));
}
let sum = function(x, y) {
  return x + y;
}
sumNums(3, 5, sum);



/* Problem #5
multiplyNums multiplies two numbers and passes the result to the callback. */

function multiplyNums(x, y, cb) {
  console.log(cb(x, y));
}

let multiply = function (x, y) {
  return x * y;
}
multiplyNums(3, 3, multiply);


/* Problem #6
contains checks if an item is present inside of the given array/list.
Pass true to the callback if it is, otherwise pass false. */

function contains(item, list, cb) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return cb(true);
    }
  }
  return cb(false);
}
contains('yo-yo', items, function(flag) {
  console.log(flag); // should be false
});

contains('great beans', items, function(flag) {
  console.log(flag); // should be true
});


/* STRETCH PROBLEM
removeDuplicates() removes all duplicate values from the given array.
Pass the duplicate free array to the callback function.
Do not mutate the original array. */

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  const output = [];
  for (i = 0; i < array.length; i++) {
    if (!output.includes(array[i])) {output.push(array[i])};
  }
  return cb(output); //console.log(output);
}

items.push('Notebook', 'yo-yo', 'Pencil');

removeDuplicates(items, function(output) {console.log(output)})