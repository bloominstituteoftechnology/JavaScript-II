const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

//First item function
function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr);
}

function first(items) {
  console.log(items[0]);
} 

firstItem(items, first);


//Length function
function getLength(arr, cb) {
    return cb(arr);
}

function arrayLength(items) {
  console.log(items.length);
} 

getLength(items, arrayLength);


//Last item function
function last(arr, cb) {
  // last passes the last item of the array into the callback.
    return cb(arr);
}

function lastItem(items) {
  console.log(items[items.length-1]);
} 

last(items, lastItem);


//Sum function
function sumNums(x,y,cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
    return cb(x,y);
}

function add(x,y) {
  console.log(x+y);
} 

sumNums(10,20,add);


//Multiply function
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}

function multiply(x,y) {
  console.log(x * y);
} 

multiplyNums(10,20,multiply);



function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
