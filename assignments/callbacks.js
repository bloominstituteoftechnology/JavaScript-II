const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum', "yo-yo"];

//displays callback
const displayCallback = (arr) => {
  console.log(arr);
}

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr[0]);
}

firstItem(items, displayCallback);

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, displayCallback);


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

last(items, displayCallback);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

sumNums(3, 4, displayCallback);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

multiplyNums(3, 4, displayCallback);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if(list.includes(item)){
    return cb(true);
  }else{
    return cb(false);
  }
}

contains("Gum", items, displayCallback);
contains("stick", items, displayCallback);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  let newArr = [];
  array.forEach((element) => {
    if (newArr.includes(element)){
      console.log(`Duplicate element: ${element} skipped`);
    } else {
      newArr.push(element);
    }
  });
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb(array);
}

removeDuplicates(items, displayCallback);