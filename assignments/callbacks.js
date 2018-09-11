const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function callBack(arr) {
  console.log(arr[0]);
}
function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr);
}

firstItem(items, callBack);


function cbLength(arr) {
  console.log(arr.length);
}

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}

getLength(items, cbLength);



function cbLast(arr) {
  console.log(arr[arr.length -1]);
}

function last(arr, cb) {
  return cb(arr);
  // last passes the last item of the array into the callback.
}

last(items, cbLast);


function cbReturn(num) {
  console.log('your numbers added: ', num);
}

function sumNums(x, y, cb) {
  return cb(x + y);
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}

sumNums(3, 2, cbReturn);

function cbMultiply(num) {
  console.log('these are you numbers mulitplied', num);
}
function multiplyNums(x, y, cb) {
   cb(x * y);
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

multiplyNums(2, 3, cbMultiply);

function cbTrueFalse(item) {
  console.log('this is: ', item);
}

function contains(item, list, cb) {
  for(let i=0; i<items.length; i++) {
    if(list[i] === item) {
      cb(true);
    } else {
      cb(false);
    }
  }

  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

contains('Pencil', items, cbTrueFalse);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
