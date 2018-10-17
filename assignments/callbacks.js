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



  // getLength passes the length of the array into the callback.


function getLength(arr, cb) {
  return cb(arr.length);
}
getLength(items, function(length){
  console.log(length)
});

 // last passes the last item of the array into the callback.
function last(arr, cb) {
    return cb(arr[3]);
  }

  last(items, function(last) {
    console.log(last)
  });


// sumNums adds two numbers (x, y) and passes the result to the callback.
function addNums(x, y, cb) {

}


// multiplyNums multiplies two numbers and passes the result to the callback.
function multiplyNums(x, y, cb) {
};


  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
function contains(item, list, cb) {
let check = false;

for(let i = 0; i < list.length; i++) {
  if(list[i] === item){
    check = true;

  }
}
return cb(check);
}
contains('Gum', items, function(result){
  console.log(result);
});


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {}
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.