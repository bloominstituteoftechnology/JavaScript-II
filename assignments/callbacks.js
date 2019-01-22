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
getLength(items, length => console.log(length)); 


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}
last(items, lastItem => console.log(lastItem));


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x, y);
}
const addFunc = (a, b) => console.log(a + b);
sumNums(1, 7, addFunc);


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb  (x, y);
}
const multiplyFunc = (a, b) => console.log(a * b);
multiplyNums(2, 4, multiplyFunc);


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (let i = 0; i < list.length; i++) {
    if(list[i] === item) {
      cb();
    } else {
      return false;
    }
  }
}
const answerForContains = str => console.log(true);
// contains('Pencil', items, answerForContains);
contains('Smart Phone', items, answerForContains);

/* STRETCH PROBLEM */

const arrayOfDuplicates = ['Onion', 'Garlic', 'Bell Pepper', 'Garlic', 'Ginger', 'Onion', 'Garlic'];


function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (!newArr.includes(array[i])) {
      newArr.push(array[i]);
    }
  }
  cb(newArr);
}
const joiningFunc = anArr => console.log(anArr.join('--'));
removeDuplicates(arrayOfDuplicates, joiningFunc)

