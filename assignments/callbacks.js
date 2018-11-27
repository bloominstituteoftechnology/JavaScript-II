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
function consoleLoggerHandler(result) {
  console.log(result);
}


function getLength(arr, cb) {
  cb(`Length of array is: ${arr.length}`);
}
getLength(items, consoleLoggerHandler)



function last(arr, cb) {
  cb(`Last item in array is: ${arr[arr.length - 1]}`);
}
last(items, consoleLoggerHandler);



function sumNums(x, y, cb) {
  const sum = x + y;
  cb(`The sum is: ${sum}`);
}
sumNums(10,4, consoleLoggerHandler)



function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const product = x * y;
  cb(`The product is: ${product}`);
}
multiplyNums(5, 5, consoleLoggerHandler)



function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let found = false;
  for (let index = 0; index < list.length; index++) {
    if(list[index] === item) {
      found = true;
    }
  }
  cb(`It is ${found} that ${item} is in our list`);
}
contains('Notebook', items, consoleLoggerHandler);




/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let noDuplicates = [];
  array.forEach(item => {
    if (!noDuplicates.includes(item)) {
      noDuplicates.push(item);
    }
  })
}
