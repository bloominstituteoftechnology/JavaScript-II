// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

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


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
}

function getLength(arr, cb) {
  return cb(arr.length);
}

getLength(items, function(howLong){
  console.log(howLong)
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
}

function lastitem(arr, cb) {
  return cb(arr[3]);
}

lastitem(items, function(last) {
  console.log(last)
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  console.log(cb(x, y))
}

function add(num1, num2) {
  return num1 + num2;
}

sumNums(2, 4, add)

// function sumNums(x, y, cb) {
//   let someArray = [x + y];
//   return cb(total);
// }

// sumNums(someArray, function(sum){
//   console.log(sum)
// });

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  console.log(cb(x, y))
}

function multiply(num1, num2) {
  return num1 * num2;
}

multiplyNums(2, 4, multiply);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  // console.log(cb(item, list))
  console.log(cb(list.includes('Notebook')))
}



// function check(item, list) {
//   if (item === list) {
//     return true
//   } else {
//     return false
//   }
// }

// contains('Pencil', list, check)

contains('Notebook', items, function(itemPresent) {
  return itemPresent;
})

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
