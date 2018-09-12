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
  return cb(arr);
}
const howLong = arr => console.log(arr.length);

getLength(items, howLong);

function last(arr, cb) {
  return cb(arr);
}

const whatLast = arr => console.log(arr[arr.length - 1]);

last(items, whatLast);

function sumNums(x, y, cb) {
  return cb(x,y);
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}

const addIt = (x,y) => console.log(x + y); 
sumNums(5,5, addIt);



function multiplyNums(x, y, cb) {
  return cb(x,y);
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

const timesIt = (x,y) => console.log(x * y); 
sumNums(5,5, timesIt);

function contains(item, list, cb) {
  return cb(item, list)
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

const banana = (item, list) => console.log(list.includes(item));

contains('rocketship', items, banana)
contains('Gum', items, banana)


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  console.log(cb(array));
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}

const dupRemove = (arr) => {
  isDup = (arr.filter((a,index) => arr.slice(index + 1).includes(a))) ;
  let filtered = [];
  for (i = 0; i < arr.length; i++){
    if (!(isDup.includes(arr[i]))){
      filtered.push(arr[i])
    }
  }
  return filtered
}

let anArr = ['horses', 'gophers', 'horses', 'penguins', 'cats', 'dogs', 'horses']
removeDuplicates(anArr, dupRemove)

console.log(anArr)