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
/////////////////////////////////////////////////////////////
function arrayLength (arr) {
  return arr.length;
}

let arrayLength2 = (arr) => arr.length;


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}
getLength(items, arrayLength);
getLength(items, arrayLength2);
/////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////
function lastArrayItem (arr) {
  return arr.slice(-1);
}

let lastArrayItem2 = arr => arr.slice(-1);


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}
last(items, lastArrayItem);
last(items, lastArrayItem2);
/////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////
function sum(a, b) {
  return a + b;
}

let sum2 = (a,b) => a + b;

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}
sumNums(3,5,sum);
sumNums(3,5,sum2);
//////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////
function multiply(a, b) {
  return a * b;
}

let multiply2 = (a, b) => a * b;

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x,y);
}
multiplyNums(4,7,multiply);
multiplyNums(4,6, multiply2);
//////////////////////////////////////////////////////////


////////////////////////////////////////////////////////
function isIncluded (item, list) {
  return list.includes(item);
}

let isIncluded2 = (item, list) => list.includes(item);


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, list);
}
contains('Pencil', items, isIncluded);
contains('nope', items, isIncluded);
contains('Pencil', items, isIncluded2);
contains('nope', items, isIncluded2);
////////////////////////////////////////////////////////

/* STRETCH PROBLEM */
let isIncluded3 = (item, list) => list.includes(item);
const items2 = [1, 2, 4, 'one', false, 'one', 'two', true, 2, '    two', 'three', 4, true];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let noDupsArr = [];

  array.forEach( el =>  {if(!cb(el, noDupsArr)) noDupsArr.push(el)} );

  return noDupsArr;
}

console.log(removeDuplicates(items2, isIncluded3));
