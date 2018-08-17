const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
return cb(arr[0]);
}
firstItem(items, function(f) {
  console.log(f); 
})
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.

return cb(arr.length);
}
getLength(items, function(l) {
  console.log(l);
})
function last(arr, cb) {
  // last passes the last item of the array into the callback.

return cb(arr[arr.length -1]);
}
last(items, function(last) {
  console.log(last);
})
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
return cb(x+y);
}
sumNums(9,8, function(add) {
  console.log(add);
})
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
return cb(x * y);
}
multiplyNums(72,89, function(mult) {
  console.log(mult);
})

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

return cb(list.include(item));
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
