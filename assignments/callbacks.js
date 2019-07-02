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
  cb(arr.length);
}

getLength(items, (totalLength) => {
  console.log(totalLength)
})

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[3]);
}

last(items, (lastItem) => {
  console.log(lastItem);
})

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let addition = x + y;
  cb(addition);
}

sumNums(10, 2, (addition) => {
console.log(addition);
}) 


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let multiply = x * y;
  cb(multiply);
}

multiplyNums(15, 2, (multiply) => {
  console.log(multiply);
})

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let checkArray = () => {
    for(let i = 0; i < list.length; i++);
      return list[0] === item ? true:false;
  }
  return cb(checkArray());
}
contains('Pencil', items, (lis) => {
  console.log(lis)
})

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const uniqueSet = new Set(items);
  Array.from(new Set(items));

  return cb(uniqueSet);

}

removeDuplicates(items, (uniqueSet) => {
  console.log(uniqueSet);
})