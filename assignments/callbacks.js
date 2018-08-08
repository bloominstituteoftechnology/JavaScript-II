const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

// firstItem
function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr[0]);
}

function TestFunction1(PassedArgument) {
  console.log(PassedArgument);
}

firstItem(items, TestFunction1);

//---- getLength ----
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, function(length) {
  console.log(length);
});

//---- last ----
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

last(items, function(lastWord) {
  console.log(lastWord);
});

//---- sumNums ----
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let sum = x + y;
  return cb(sum);
}

sumNums(2, 3, TestFunction1);

//---- multiplyNums ----
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

multiplyNums(2, 3, TestFunction1);

//---- contains ----
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  
  // list.forEach(function(element) {
  //   if (element === item) {
  //     return cb(true);
  //   }
  //   return cb(false);
  // });
  for (i = 0; i < list.length; i++) {
    if (item === list[i]) {
      return cb(true);
    }
    return cb(false);
  }
}

contains('Pencil', items, TestFunction1);
contains('hello', items, TestFunction1);


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
