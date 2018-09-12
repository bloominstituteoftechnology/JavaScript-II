// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/

// Callback #1
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

// ES5
getLength(items, function(length) {
  console.log(`There are ${length} items.`);
});

// Arrow Function
getLength(items, length => console.log(`There are ${length} items.`));

// Callback #2
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

// ES5
last(items, function(lastItem) {
  console.log(lastItem);
});

// Arrow Function
last(items, lastItem => console.log(lastItem));

// Callback #3
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}
// ES5
sumNums(10, 4, function(sum) {
  console.log(sum);
});

// Arrow Function
sumNums(5, 6, sum => console.log(sum));

// Callback #4
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

//ES5
multiplyNums(30, 2, function(product) {
  console.log(product);
});

// Arrow Function
multiplyNums(10, 6, product => console.log(product));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  console.log(cb(item, list));
}

//ES5
contains('Pencil', items, function(item, list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return true;
    }
  }
  return false;
});

// Arrow Function
contains('Pencil', items, (item, list) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return true;
    }
  }
  return false;
});

/* STRETCH PROBLEM */

const itemsWithDuplicates = [
  'Pencil',
  'Notebook',
  'yo-yo',
  'Gum',
  'Gum',
  'Gum',
  'Notebook',
  'Gum',
  'Pencil',
  'Fencing Mask',
  'Binder',
  'Binder'
];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const noDoubles = array.filter((item, index) => array.indexOf(item) >= index);
  return cb(noDoubles);
}

removeDuplicates(itemsWithDuplicates, items => console.log(items));
