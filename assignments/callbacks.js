const items = ['Pencil', 'Notebook', 'yo-yo', 'Notebook', 'Gum'];

function log(data) {
  console.log(data);
}

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[0]);
}
firstItem(items, log);

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}
getLength(items, log);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length-1]);
}
last(items, log);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x+y);
}
sumNums(3, 4, log);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x*y);
}
multiplyNums(3, 4, log);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) cb(true);
    else cb(false);
  }
}
contains('Gum', items, log);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const newArray = [];
  const sorted = array;
  sorted.sort();
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] != sorted[i+1]) {
      newArray.push(sorted[i]);
    }
  }
  cb(newArray);
}
removeDuplicates(items, log);
