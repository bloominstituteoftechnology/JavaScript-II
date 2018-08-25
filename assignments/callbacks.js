const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[0]) {
      cb(arr[0])
    }
  }
}

function logFirstItem (item) {
  console.log(`${item} is the first item in the array!`);
}

firstItem(items, logFirstItem)

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}

function lengthOfArr(len) {
  console.log(`The length of the array is ${len}!`);
}

getLength(items, lengthOfArr)

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length - 1]);
}

function lastItem(item) {
  console.log(`${item} is the last item of the array!`);
}

last(items, lastItem)

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
   cb(x,y);
}

function sum(a, b) {
  console.log(a + b);
}

sumNums(3,4,sum)

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x,y);
}

function multiply (a,b) {
  console.log(a * b);
}

multiplyNums(3,4, multiply)

/// the following array is an array I created for function below to test function
let schoolSupplies = ['Pencil', 'Notebook', 'Eraser', 'Binder', 'Pen'];

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let presentItems = [];
  for (i = 0; i < list.length; i++) {
    if(list[i] === item) {
      presentItems.push(cb(list[i]));
    }
  }
  if (presentItems.length === 0) {
    console.log(`${item} is not on your list!`);
  }
  return presentItems;
}

  function isOnTheList (item) {
  console.log( `${item} is on the list this year!`);
}

contains('Bubblegum', schoolSupplies, isOnTheList)
contains('Pencil', schoolSupplies, isOnTheList)

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
