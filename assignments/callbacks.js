const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

// -----------------------------------
function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  console.log(cb(arr));
}

let first = function(arr){
  return arr[0];
}

firstItem(items, first);
// ----------------------------------- end of section first

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  console.log(cb(arr));
}

let length = function(arr){
  return arr.length;
}

getLength(items, length);
// ----------------------------------- end of section getLength


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  console.log(cb(arr));
}

let getLast = function(arr){
  return arr[arr.length - 1];
}

last(items, getLast);
// ----------------------------------- end of section getLast


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  console.log(cb(x, y));
}

let addNums = function(a, b){
  return a + b;
}

sumNums(2, 2, addNums);
// ----------------------------------- end of section addNums


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  console.log(cb(x, y));
}

let timesNums = function(x, y){
  return x * y;
}

multiplyNums(3, 3, timesNums);
// ----------------------------------- end of section timesNums



function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  console.log(cb(item, list));
}

let checkItem = function(item, list){
  if (list.indexOf(item) !== -1){
    return true;
  } else {
    return false;
  }
}

contains("Notebook", items, checkItem); //true
contains("frog", items, checkItem); //false
// ----------------------------------- end of section checkItem


/* STRETCH PROBLEM */
const items2 = ['wood', 'straw', 'brick', 'wood', 'leaves', 'leaves', 'wood'];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb(array);
}

let removeDups = function(arr){
  arr1 = arr.sort();
  let arr2 = [];
  for (let i = 0; i < arr.length; i++){
    if (arr1[i] !== arr1[i + 1]){
      arr2.push(arr[i])
    }
  }
  return arr2;
}
removeDuplicates(items2,removeDups);
