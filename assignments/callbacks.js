const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
     cb(arr[0]);
}

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
     cb(arr.length);
}

function last(arr, cb) {
  // last passes the last item of the array into the callback.
     cb(arr[arr.length - 1]);
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
     cb(x + y);
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
     cb(x * y);
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
      cb(list.includes(item));
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
     return cb(array);
}

function callbackDuplicates(array) {
  let noDups = [];
  array.filter((element) => {
    if (!noDups.includes(element)) {
      noDups.push(element);
    }
  })
  return noDups;
}

let dups = ["Bird", "Monkey", "Pistol", "Bird", "Pistol", "Toy"];
let noDups = removeDuplicates(dups, callbackDuplicates);
console.log(dups); // [ 'Bird', 'Monkey', 'Pistol', 'Bird', 'Pistol', 'Toy' ]
console.log(noDups); // [ 'Bird', 'Monkey', 'Pistol', 'Toy' ]

let callBackTest = (item) => {
  console.log(item);
}

firstItem(items, callBackTest); // Pencil
getLength(items, callBackTest); // 4
last(items, callBackTest); // Gum
sumNums(3, 4, callBackTest); // 7
multiplyNums(3, 4, callBackTest); // 12
contains("Gum", items, callBackTest); // true
contains("Not In Array", items, callBackTest); // false