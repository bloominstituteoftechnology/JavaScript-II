const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr);
}
const firstIndex = (arr) => {
  console.log(arr[0]);
}

firstItem(items, firstIndex);

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}

const arrayLength = (arr) => {
  console.log(arr.length);
}
getLength(items, arrayLength);


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}
const lastIndex = (arr) => {
  console.log(arr[arr.length -1]);
}

last(items, lastIndex);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}
const addNums = (num1, num2) => {
  console.log(num1 + num2);
}

sumNums(3,4, addNums);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}

const multiply = (num1, num2) => {
  console.log(num1 * num2);
}

multiplyNums(3,4,multiply);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, list);
}

const checkContains = (item, list) =>{
  if(list.includes(item)){
    console.log(true);
  }else{
    console.log(false);
  }
}

contains("Gum", items, checkContains);
contains("stick", items, checkContains);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
