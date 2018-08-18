const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function display(item) {
  console.log(item);
}

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr[0]);
}
firstItem(items, display);

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
getLength(items, display);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}
last(arr, display);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(`${x} + ${y} =`, x+y);
}
sumNums(5,2,display);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(`${x} * ${y} =`, x*y);
}
multiplyNums(20,3,display);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

  return cb(`${item} found in array:`, list.includes(item));
}
contains('gum', items, display);

/* STRETCH PROBLEM */

const stretchArray = [1,5,23,5,7,2,0];

const removeDuplicates = (array, cb) => {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const newArr = [];

  for( let i = 0; i < array.length; i++ )
  {
    if( newArr.includes(array[i]) === false ){
      newArr.push(array[i]);
    }
  }
  return cb("Filtered Array: " + newArr);
}

removeDuplicates(stretchArray, display);