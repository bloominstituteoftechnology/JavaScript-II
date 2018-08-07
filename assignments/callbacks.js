const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr);
}

firstItem(items, function(first) {
  console.log(first[0]);
});








function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}

getLength(items, function(length) {
  console.log(items.length);
});










function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}

last(items, function(last) {
  console.log(items[3]);
})










function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x,y);
}

function addNumbers(x,y) {
  console.log(x + y);
  return x + y;
}

sumNums(3,4,addNumbers);












function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x,y);
}

function multiplyNumbers (x,y) {
  console.log(x * y);
  return x * y;
}

multiplyNums(3,4,multiplyNumbers);













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
