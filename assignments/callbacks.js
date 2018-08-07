const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr);
}
function first(items){
 return (items[0]);
}
firstItem(items,first);


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr)
}
function lookingFor(arr){
  return (arr.length)
}
getLength(items,lookingFor);


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr)
}
function lookingFor(arr){
  return (items[arr.length - 1])
}
getLength(items,lookingFor);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x,y);
  }
  function add(x,y){
    return x + y;
  }
console.log(sumNums(2,2,add));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x,y);
}
function multiply(x,y){
  return x * y;
}
console.log(multiplyNums(2,2,multiply));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
