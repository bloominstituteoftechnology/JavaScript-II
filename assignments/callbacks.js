const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr)
  
  
}

let getItem = function(arr) {
  let firstOne = arr[0];
  console.log(firstOne);
}

firstItem(items, getItem);

//----------------------------------------------------------------------------------

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr);
}
let lengthArray = function(arr) {
  let lengthOne = arr.length;
  console.log(lengthOne);
}

getLength(items, lengthArray);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr);
}

function getLastItem (arr){
  let getitemlast = arr[arr.length-1];
  console.log(getitemlast);
}

last(items, getLastItem);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x, y);
}
function addition(x, y) {
  console.log(x + y);
}

sumNums(5, 7, addition);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x, y);
}
function multiply(x, y) {
  console.log(x * y);
}

sumNums(5, 7, multiply);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb(item, list)
}
function checkifTrue(item, list){
  i=0;
  let thisItem = item;
  for(let i = 0; i < list.length; i++);
  if (thisItem === list[i]){
    console.log(true);
  }
  else if (thisItem !== list[i]){
    console.log(false);
  }
}
  

contains('Pencil', items, checkifTrue);
  


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
