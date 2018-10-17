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


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
getLength(items, function(arr) {
  console.log(arr);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}
last(items, function(arr){
  console.log(arr);
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

sumNums(1, 5, function(cb){
  console.log(cb);
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

multiplyNums(2, 5, function(cb){
  console.log(cb);
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb( list.includes(item) ? true : false);
}

contains("yo-yo", items, function(cb){
  console.log(cb);
});

/* STRETCH PROBLEM */
const items2 = ['Notebook', 'yo-yo', 'Gum', 'Gum', 'Notebook'];


function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // let unique = [...new Set(array)];
  // console.log(unique)
  let unique = []
  return cb(unique = console.log([...new Set(array)]))
  }


  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.



removeDuplicates(items2, function(cb){
  cb; 
});


// let greeting;

// (function yellGreeting(greeting){
//   greeting = "hello there";
//   return console.log(greeting.toUpperCase());
//   ;
// })();


(function(greeting){
  greeting = "hello world";
    return console.log(greeting.toUpperCase());
})();



