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

// testing 
// -- 1 --
firstItem(items, function(item) {
  console.log(item)
}); // --> Pencil

// -- 2 --
getLength(items, function(length) {
  console.log(length);
}); // --> 4

// -- 3 -- 
last(items, function(item) {
  console.log(item);
}); // --> Gum

// -- 4 --
sumNums(4, 6, function(result) {
  console.log(result);
}); // --> 10

// -- 5 --
multiplyNums(4, 6, function(result) {
  console.log(result);
}); // --> 24



/* STRETCH PROBLEM */

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item));
}

// stretch 1
contains("Pencil", items, function(present) {
  console.log(present);
});

dupArr = [1, 2, 3, 2, 2, 1, 2, 4, 5, 2, 1, 6, 7];
function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Do not mutate the original array.
  var dupFree = array.filter((item, position) => {
    /* 
      if the first instance of the current item 
      is equal to the current position then 
      return that item
    */
    return array.indexOf(item) == position;
  });
  // Pass the duplicate free array to the callback function.
  cb(dupFree);
}

// test the callback
removeDuplicates(dupArr, (result) => {
  console.log(result);
});
