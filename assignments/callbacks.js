// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum','Gum'];

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

getLength(items,function(x){
console.log(x)
});


function last(arr, cb) {
  return cb(arr[arr.length-1])
  // last passes the last item of the array into the callback.
}
last(items,function(x){
  console.log(x);
})

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x+y)
}
sumNums(10,10,function(x){
  console.log(x)
})
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y)
}
multiplyNums(10,10, function(x){
  console.log(x)
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  items.forEach(element => {
    return cb(element === item);
  });
}
contains('Gum',items, check =>
  console.log(check));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const duplicateFree = array.filter((x,i,arr) => {
    return !(i === arr.indexOf(x))
  });
  cb(duplicateFree);
}

removeDuplicates(items,(array) => {
  console.log(array)
})