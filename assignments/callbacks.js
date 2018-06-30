const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

const firstItem = (arr, cb) => cb(arr[0]);

const getLength = (arr, cb) => cb(arr.length);

const last = (arr, cb) => cb(arr.length - 1);

const sumNums = (x, y, cb) => cb(x + y);

const multiplyNums = (x, y, cb) => cb(x * y);

const contains = (item, list, cb) => {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb(list.includes(item));
}

/* STRETCH PROBLEM */

const removeDuplicates = (array, cb) => {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const duplicateFree = [];
  const uniqueKeys = {};

  for (let item of array) {
    uniqueKeys[item] = 0;
  }

  for (let unique in uniqueKeys) {
    duplicateFree.push(unique);
  }
  
  return duplicateFree;
}
