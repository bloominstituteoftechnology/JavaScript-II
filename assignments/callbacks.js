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
  return cb(arr.length);
} 
 const length1 = getLength(items, length => {
  return length;
});
console.log(length1);



function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length -1]);
}
const lastItems = last(items, function(last) {
  return last;
});
console.log(lastItems);



function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
return cb(x, y)
}
const sumOfNums = sumNums(12, 8, function(x, y) {
  return x + y;
});

console.log(sumOfNums);



function multiplyNums(num1, num2, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(num1, num2)
}
  const timesNums = multiplyNums (5, 6, function(num1, num2) {
    return num1 * num2
  });

  console.log(timesNums);



function contains(items, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if(list.includes(items)) {
    return true;
  }
  else return false;
}
contains('yo-yo', items, function(result) {
  return result;
});
console.log(items);


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb(array);
}

removeDuplicates(items, function(array) {
  return[...new Set(array)];
});
console.log(...items);
// help from whiteboard team meeting