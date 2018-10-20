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

getLength(items, function(length){
  console.log(length);
})

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length -1]);
}

last(items, function(last){
  console.log(last);
})

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return (cb(x + y));
}
// regular function
sumNums(2,3, function(sum){
  console.log(sum);
})
 // ES6 double arrow
sumNums(3,4, sum => console.log(sum));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return (cb(x * y));
}

multiplyNums(3,4, function(multiply){
  console.log(multiply)
})

//ES6 double Arrow
multiplyNums(5,12, multiply => console.log(multiply));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
 // contains checks if an item is present inside of the given array/list.
 // Pass true to the callback if it is, otherwise pass false.
    return (cb(item, list))
  }
  function checkList(item, list){
    if (list.includes(item)){
      return true;
    } else return false
  }
  console.log(contains("Pencil", items, checkList))
  console.log(contains("hi", items, checkList))


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb(array)
}

function removeDuplicate(array){
  let newArray = [];
  // .slice() returns a shallow copy of a portion of an arra into a new array object. original array will not be modified
  let sortedArray = array.slice().sort();
  for (i=0; i< sortedArray.length; i++){
    if (sortedArray[i] != sortedArray[i-1]){
      newArray.push(sortedArray[i])
    }
  }
  return newArray;
}

exampleArray = ['Con', 'Hi', 'Hello', 'bye', 'Hi', 'Hi']

console.log(removeDuplicates(exampleArray, removeDuplicate));
