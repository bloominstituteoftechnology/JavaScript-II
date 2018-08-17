const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr[0]);
}

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if(list.includes(item)){
    cb(true);
  }
  else{
    cb(false);
  }
}

// Testing functions
const testCB = function(item){
  console.log(item);
}

firstItem(items, testCB);
getLength(items, testCB);
last(items, testCB);
sumNums(2, 4, testCB);
multiplyNums(2, 4, testCB);
contains('Notebook', items, testCB);
contains('Nothing', items, testCB);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb(array);
}

const testStretchCB = (array) => {
  return array.filter((element, index, arr) => {
    for(let i = index + 1; i < arr.length; i++){
      if(element === arr[i]){
        return false;
      }
    }
    return true;
  });
}

console.log(removeDuplicates(items, testStretchCB));
console.log(items);
const itemsWithDups = ['Pencil', 'Notebook', 'yo-yo', 'Notebook', 'yo-yo', 'Gum'];
console.log(removeDuplicates(itemsWithDups, testStretchCB));
console.log(itemsWithDups);
