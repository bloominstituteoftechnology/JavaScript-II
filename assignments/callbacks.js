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
  return(cb(arr.length));
  // getLength passes the length of the array into the callback.
}

getLength(items,count => {console.log(count)})


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1])
}
last(items,element => {console.log(element)})

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x+y)
}
sumNums(2,3,function(element){console.log(element)});

function multiplyNums(x, y, cb) {
  return cb(x*y);
  // multiplyNums multiplies two numbers and passes the result to the callback.
}
multiplyNums(2,3,function(element){console.log(element)})

function contains(item, list, cb) {
  cb(list.includes(item))
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}
contains("Gum",items,function(element){console.log(element)})
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
let reducedArray = []
array.reduce(function(acc,currentValue){
    if(!reducedArray.includes(currentValue)){
        reducedArray.push(currentValue)
    }
  },'')

  cb(reducedArray)
}

removeDuplicates(items,function(array){console.log(array)})