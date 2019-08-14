// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];



function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr);
}

const first = (item) => {
  console.log(item[0]);
}

firstItem(items, first)

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}

const length = (item) => {
  console.log(item.length);
}

getLength(items, length)

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}

const lastItem = (item) => {
  console.log(item[item.length - 1]);
}

last(items, lastItem)

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}

const add = (a, b) => {
  console.log(a + b)
}

sumNums(41312312, 652325, add)

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}

const multiply = (a, b) => {
  console.log(a * b);
}

multiplyNums(9, 9, multiply)

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, list)
}

const containsItem = (item, list) => {
  if (list.includes(item)) {
    console.log(true);
  } else {
    console.log(false)
  }
}

contains('John', items, containsItem)

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb(array)
}

const duplicate = (array) => {
  let newArray = [];

  
}