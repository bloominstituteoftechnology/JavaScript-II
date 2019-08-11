// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

// const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/
const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}
getLength(items, (length) => {
  console.log(length);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr.slice(-1)[0])
}
last(items, (last) => {
  console.log(last);
})

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let total = x + y;
  cb(total);
}
sumNums(5, 4, (total) => {
  console.log(total);
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let result = x * y;
  cb(result);
}
const MultiplyFeeder = (result) => {
  console.log('The result is ' + result);
}

multiplyNums(5, 4, MultiplyFeeder);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  cb((list.includes(item)));
  // if (list.includes(item)) {
  //   cb(true)
  // } 
  // else
  //   cb(false);
  // Pass true to the callback if it is, otherwise pass false.
}
contains('yo-yo', items, (answer) => {
  console.log(answer);
});
/* STRETCH PROBLEM */
// Do not mutate the original array.

const duplicates = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Pencil'];

function removeDuplicates(array, cb) {
  let results = []
  let sorted = array.slice().sort();

  // removeDuplicates removes all duplicate values from the given array.
  for (let i = 0; i < sorted.length - 1; i++) {
    // compares values
    if (sorted[i + 1] === sorted[i]) {
      // remove duplicate from sorted array
      sorted.splice(i, 1);

    }
  }
  console.log(sorted);
  // Pass the duplicate free array to the callback function.
  cb(sorted);
  
}
removeDuplicates(duplicates, (array) => {
  console.log("No more duplicates: " + array)
});

// Check mutation
console.log(duplicates);
