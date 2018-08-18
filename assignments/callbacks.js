const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
const duplicateArray = ['Pencil', 'Pen', 'Eraser', 'Pencil', 'Notebook', 'yo-yo', 'Gum'];

// Written callback function for testing...
function cb(element) {
   let input = element;
   console.log(`This is the input for Cb: ${input}`);
}

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr[0]);
}
firstItem(items,cb);

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
    let length = arr.length;
   return cb(length);
}
getLength(items,cb);


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  let lastItem = arr[arr.length-1];
  return cb(lastItem);
}
last(items,cb);


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
   let sum = x + y;
   return cb(sum);
}
sumNums(2,8,cb);


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
   let multiply = x * y;
   return cb(multiply);
}
multiplyNums(3,5, cb);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if(list.indexOf(item) >= 0) {
      cb(true);
  } else {
      cb(false);
  }
}
contains("Notebook", items, cb);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let arr = []
  for(var i = 0; i < array.length; i++) {
      if(arr.indexOf(array[i]) < 0 ) {
           arr.push(array[i]);
      }
  }
  return cb(arr);
}
removeDuplicates(items,cb);
removeDuplicates(duplicateArray,cb);
