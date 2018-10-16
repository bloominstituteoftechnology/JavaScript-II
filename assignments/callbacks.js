// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/
let array = ['joe', 'will', 'jake']

let arrayLength = (item) => {
  return item.length;
}
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}

console.log(getLength(items, arrayLength));

// last passes the last item of the array into the callback.
let lastitem = (param) => {
  return param[param.length - 1];
  // you could also use param.pop but it also removes the item from the array
}
function last(arr, cb) {
  return cb(arr)
}

console.log(last(items, lastitem))
console.log(items.length)


// sumNums adds two numbers (x, y) and passes the result to the callback.
let sum = (x, y) => {
  return x + y;
}

function sumNums(x, y, cb) {
  console.log(`${x} plus ${y} equals ${cb(x, y)}... I think`);  
}

sumNums(25, 2, sum)


// multiplyNums multiplies two numbers and passes the result to the callback.

let multi = (x, y) => {
  return x * y;
}

function multiplyNums(x, y, cb) {
  return `${x} multiplied by ${y} equals ${cb(x,y)}.....right?`
}

console.log(multiplyNums(4,3,multi))

// contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

let uther = (item, list) => {
  if(list.includes(item)) {
    return true;
  } else {
    return false;
  }
}

function contains(item, list, cb) {
  return cb(item,list)
  
}

console.log(contains('Gum', items , uther))

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
