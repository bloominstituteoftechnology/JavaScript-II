// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/
// function showResult(result) {
//   console.log("result:", result);
// }

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}
const length = item => {
  console.log(item.length);
};
getLength(items, length);
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}
const lastItem = item => {
  console.log(item[item.length - 1]);
};
last(items, lastItem);
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}
const add = function(x, y) {
  return x + y;
};
console.log(sumNums(5, 19, add));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}
const mult = function(x, y) {
  return x * y;
};
console.log(multiplyNums(6, 6, mult));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  // Use if to specify a block of code to be executed, if a specified condition is true
  // Use else to specify a block of code to be executed, if the same condition is false
  arr.forEach(function(currentValue) {
    if (currentValue === item) {
      return cb(true);
    } else {
      return cb(false);
    }
  });
}
console.log(currentValue);
// Type converting equality (==) means automatically it will covert the variable to value irrespective of data type; either it is a string or a number. This means "2" will be equal to 2 ("2" == 2 it will return true).
// var array1 = ['a', 'b', 'c'];

// array1.forEach(function(element) {
//   console.log(element);
// });

// expected output: "a"
// expected output: "b"
// expected output: "c"

// const items = ['item1', 'item2', 'item3'];
// const copy = [];

// // before
// for (let i=0; i<items.length; i++) {
//   copy.push(items[i]);
// }

// // after
// items.forEach(function(item){
//   copy.push(item);
// });

//contains('rosie', items, showsResult)
/* STRETCH PROBLEM */

// function removeDuplicates(array, cb) {
//   // removeDuplicates removes all duplicate values from the given array.
//   // Pass the duplicate free array to the callback function.
//   // Do not mutate the original array.
// }
