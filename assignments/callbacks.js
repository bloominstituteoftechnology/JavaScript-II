// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = [
  'Pencil',
  'Notebook',
  'Notebook',
  'Notebook',
  'yo-yo',
  'Gum',
  'Gum'
];

//Given this problem:

// function firstItem(arr, cb) {
//   // firstItem passes the first item of the given array to the callback function.
// }

// Potential Solution:
function firstItem(arr, cb) {
  return cb(arr[0]);
}

firstItem(items, first => {
  console.log(first);
});

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, length => {
  console.log(length);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.

  return cb(arr[3]);
}

last(items, last => {
  console.log(last);
});

function sumNums(x, y, cb) {
  return cb(x + y); // sumNums adds two numbers (x, y) and passes the result to the callback.
}

sumNums(2, 2, add => {
  console.log(add);
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}
multiplyNums(3, 4, times => {
  console.log(times);
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.	  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.	  // Pass true to the callback if it is, otherwise pass false.
  cb(list.includes(item));
}

contains('Pencil', items, Inarr => {
  console.log(Inarr);
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

  let filtredArr = [];

  array.forEach(element => {
    if (filtredArr.indexOf(element) === -1) {
      filtredArr.push(element);
    }
    return cb(filtredArr);
  });
}

removeDuplicates(items, dups => {
  console.log(dups);
});
