const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum']

function firstItem(arr, cb) {
 
  console.log(cb(arr));
}

let first = function (items) {
  return items[0];
}

firstItem(items, first);
  

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  console.log(cb(arr));
 }
 let arrayLength = function(items){
   return items.length;
 }
getLength(items, arrayLength);



function last(arr, cb) {
  cb(arr [arr.length-1]);
  // last passes the last item of the array into the callback.
}

last(items, function(lastItem){
  console.log(lastItem);
});


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x+y);
}
sumNums(10, 15, function (total) {
  console.log(total);
});


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y);
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return cb(true);
    }
  }
  return cb(false);
}

contains('Bats', items, function (flag) {
  console.log(flag); // should be false
});

contains('Notebook', items, function (flag) {
  console.log(flag); // should be true
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
 
}
