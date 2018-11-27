// Create a callback function and invoke the function to test your work. 
// You have been provided an example of a problem and a solution to see how this works with our items array.  
// Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function getLength(arr, cb) {
  cb(arr.length);
}

getLength(items, function(length) {
  console.log(`The length of the array is ${length}.`);
});

function last(arr, cb) {
  cb(arr[arr.length - 1]);
}

last(items, function(last) {
  console.log(`The last item in the array is '${last}'.`);
});

function sumNums(x, y, cb) {
  cb(x + y);
}

sumNums(items.length, items.length, function(sum) {
  console.log(`The sum of the array's length and itself is ${sum}.`);
});

function multiplyNums(x, y, cb) {
  cb(x * y);
}

multiplyNums(items.length, items.length, function(product) {
  console.log(`The square of the array's length is ${product}.`);
});

function contains(item, list, cb) {
  cb(list.filter(listItem => listItem === item).length > 0);
}

function logContains(item, list) {
  contains(item, list, function(hasItem) {
    console.log(hasItem 
      ? `The array contains the item '${item}'.`
      : `The array does not contain the item '${item}'.`);
  });
}

logContains(`Gum`, items);
logContains(`You`, items);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
