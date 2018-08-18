const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function UCase (arr) {
  return arr.toUpperCase;
}
function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb (arr[0]);
}


function users(num) {
  console.log (`There are ${num} users`)
}
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

function double (item) {
  return item + item;
}

function last(arr, cb) {
  return cb (arr[arr.length-1]);
}

function score(num) {
  console.log (`You got ${num}%`)}
  
  function sumNums(x, y, cb) {
   return cb(x+y);
  }

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y);

}

function Verdict(a) {

  if (a === true) {return 'Guilty';}
  if (a === false) {return 'Innocent'}
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb (list.includes(item))
}

contains ('ball',items, Verdict)

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const numbers = [1,1,3,9,9,9,8,4,6,6,3,3,2,9,0,1];


function double(array) {return array.map(function (x) {return x*2;})}

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let newArray = [];
  
  for (let i = 0;i<array.length;i++) {
    newArray.push(array[i]);
  }

  nSet = new Set (newArray);

  newArray = [...nSet];

  return cb(newArray);
}
}

removeDuplicates(numbers, double)
