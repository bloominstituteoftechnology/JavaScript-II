// Create a callback function and invoke the function to test your work. 
// You have been provided an example of a problem and a solution to see how this works with our items array.
// Study both the problem and the solution to figure out the rest of the problems.

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
// function firstItem(arr){
// return arr[0];
// }


function getLength(arr, cb) {
  return cb(arr.length);
  // getLength passes the length of the array into the callback.
}
getLength(items,console.log);

function last(arr, cb) {
  return cb(arr[arr.length-1]);
  // last passes the last item of the array into the callback.
}
last(items,function(lastItem){console.log(lastItem)});

function sumNums(x, y, cb) {
  return cb(x+y);
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}
sumNums(2,3,function(sum){console.log(sum)});
function multiplyNums(x, y, cb) {
  return cb(x*y);
  // multiplyNums multiplies two numbers and passes the result to the callback.
}
multiplyNums(1,2,function(product){
  console.log(product);
});
function contains(item, list, cb) {
  let onButton = true;
  for(let i=0; i<list.length;i++){
    if (item === list[i]){
      onButton = true;
    }else{
      onButton = false;
    }
  }
  return cb(onButton);
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}
contains('yo-yo',items,function(a){return a});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {

  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
