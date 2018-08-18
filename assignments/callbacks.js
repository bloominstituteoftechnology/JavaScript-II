const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb = arr[0];
}

// firstItem callback

const firstItemCb = (firstArrItem) => {

  console.log(firstArrItem[0]);
};

firstItem(items, firstItemCb);


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.

  return cb = arr.length;
}

//getLength Callback 

const arrLength = (arrayLength) => {

  console.log(arrayLength);
};

getLength(items, arrLength);


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb = arr[arr.length - 1];
}

// Last item Callback 

const lastOne = (lastItem) => {
  console.log(lastItem);
}

last(items, lastOne);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb = x + y;
}

//sumNums Callback;

const sumUp = (addEmUp) => {

  console.log(addEmUp);
}

sumNums(3, 6, sumUp);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb = x * y;
}

//multiplyNums Callback

const rabbits = (rabbitsMultiply) => {
  console.log(rabbitsMultiply);
}

multiplyNums(5, 2, rabbits);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

  for (let i = 0; i <= list.length; i++) {
    if (item === list[i]) {
      return cb = true;
    }
  }
}

//contains Callback 

const trueFalse = (whereIsIt) => {

  console.log(whereIsIt);
};

contains('Gum', items, trueFalse);

// /* STRETCH PROBLEM */

// function removeDuplicates(array, cb) {
//   // removeDuplicates removes all duplicate values from the given array.
//   // Pass the duplicate free array to the callback function.
//   // Do not mutate the original array.
// }
