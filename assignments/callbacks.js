const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  cb = arr[0];
  return cb;
}

function getLength(arr, cb) {
  cb = items.length;
  return cb;
}

function last(arr, cb) {
  cb = items[items.length -1];
  return cb;
}

function sumNums(x, y, cb) {
  cb = x + y;
  return cb;
}

function multiplyNums(x, y, cb) {
  cb = x * y;
  return cb;
}

function contains(item, list, cb) {
  
  cb = items.includes(item);

  return cb;
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
