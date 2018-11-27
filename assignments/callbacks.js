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


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(items.length);
}
getLength(items, (length) => {
  console.log(length);
});

// function foo(length) {
//   console.log(length);
// }
// getLength(items, foo);


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(items[items.length-1]);
};
last(items, lastItem => {
  console.log(`The last item is ${lastItem}.`);
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x + y);
};
sumNums(2, 5, sum => {
  console.log(`The sum is ${sum}.`);
});


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x * y);
};
multiplyNums(3, 7, product => {
  console.log(`The product is ${product}.`);
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  const isPresent = () => {
    for (let i = 0; i < items.length; i++) {
      if (items[i] === list) {
        return true;
      }
    } return false;
  };
  cb(isPresent());
};
contains(items, 'chum', result => {
  console.log(result ? 'This is present in the array' : 'This is not present in the array');
});


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
