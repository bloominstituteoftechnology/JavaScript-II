// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
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


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
getLength(items, function(length) {
 console.log(length)
});


function lastitem(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[3]);
}
lastitem(items, function(last) {
  console.log(last)
});

//---------------------------------------------------------------//
//https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced//

function sumNums(x, y, callback){
  // sumNums adds two numbers (x, y) and passes the result to the callback.
   let adding = x + y;
  callback(adding);
}

sumNums(2658 + 562629.32625, function(total) {
  console.log(total);
});

//---------------------------------------------------------------//

function multiplyNums(x, y, callback) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
 let multiple = x * y;
 callback(multiple); 
}
multiplyNums(function(MultiplyTotal) {
  console.log(MultiplyTotal)
});

//--------------------------------------------------------------//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes 

function contains(item, list, callback) {
  // contains checks if an item is present inside of the given array/list (instead of saying items (to detailed, want to reuse for another array.))
  // Pass true to the callback if it is, otherwise pass false.
 callback(list.includes(item))
}
contains('Pencil', items, console.log)

//calling on the function contains, and using specific key phrases from array above. 

//---------------------------------------------------------------//

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
