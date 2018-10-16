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
  return cb(arr.length)
}

getLength(items, function(leng) {
  console.log(len);
});

function last(arr, cb) {
  return cb(arr[3])
}

last(items, function(end){
  console.log(end)
})

function sumNums(x, y, cb) {
  return cb(x + y)
}
sumNums(67, 90, function(add){
  console.log(add)
})

function multiplyNums(x, y, cb) {
  return cb(x * y)// multiplyNums multiplies two numbers and passes the result to the callback.
}

multiplyNums(39, 5, function(multiply){
  console.log(multiply);
})


function contains(item, list, cb) {
  return cb(item === list)
}
contains('Pencil', items, function (x){
  console.log(x)
} )
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.


/* STRETCH PROBLEM */



