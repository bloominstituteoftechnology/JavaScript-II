// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

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
  cb(arr.length);
}

getLength(items, function(item) {
  console.log(item);
});

function last(arr, cb) {
  cb(arr[arr.length - 1]);
}

last(items, function(item) {
  console.log(item);
});

function sumNums(x, y, cb) {
  cb(x + y);
}

sumNums(1, 3, function(cb) {
  console.log(cb);
});

function multiplyNums(x, y, cb) {
  cb(x * y);
}

multiplyNums(1, 3, function(cb) {
  console.log(cb);
});

function contains(item, list, cb) {
  cb(list.includes(item));
}

contains("Gum", items, function(cb) {
  console.log(cb);
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  cb(
    array.filter((item, i) => {
      return array.indexOf(item) === i;
    })
  );
}

removeDuplicates(items, function(cb) {
  console.log(cb);
});
