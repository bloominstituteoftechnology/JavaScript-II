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

getLength(items, (arrLength) => console.log(`Length of array: ${arrLength}`));
getLength(items, (arrLength) => console.log(`Length of array: ${arrLength/2} + ${arrLength/2}`));

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}

last(items, (lastElement) => console.log(`Last element: ${lastElement}`));
last(items, (lastElement) => console.log(`${lastElement} ${lastElement} for Dum Dum.`));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

sumNums(5, 5, (sum) => console.log(`The sum is ${sum}`));
sumNums(5, 1, (sum) => {
  for(let x = 0; x < sum; x++){
    console.log(`${sum} - ${x} = ${sum-x}`)
  }
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

const eleven = 11;
multiplyNums(eleven, eleven, (product) => console.log(`The product of ${eleven} and ${eleven} is ${product}.`));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(!!(list.find((arrayItem) => arrayItem === item)));
};

//const testItem1 = 'Pencil';
const testItem1 = 'Banana';
contains(testItem1, items, (boolValue) => {
  if(boolValue){
    console.log(`${testItem1} is in the array!`);
  } else {
    return console.log(`${testItem1} is NOT in the array!`);
  }
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
