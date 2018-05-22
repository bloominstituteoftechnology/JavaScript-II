const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

let cb = () => "";
cb = (x) => x;

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr[0]);
}
console.log(firstItem(items, cb));

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
console.log(getLength(items, cb));

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}
console.log(last(items, cb));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
    return cb(x+y);
  }
console.log(sumNums(2, 3, cb));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
    return cb(x * y);
  }
console.log(multiplyNums(2, 3, cb));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
 return cb(list.includes(item));
}
console.log(contains('Gum', items, cb));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
const noDupe = [];
  for (let value of array) {
    noDupe.includes(value) ? "" : noDupe.push(value);
}
return cb(noDupe);
}
console.log(removeDuplicates([2,4,4,8], cb));