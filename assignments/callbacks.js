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
  return cb(arr.length);
}

getLength(items, function(length) {
  console.log(length);
})
// ------------------

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

last(items, function(end) {
  console.log(end);
})
// -------------------

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y)
}

sumNums(3, 2, function(sum) {
  console.log(sum);
})
//---------------------


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

multiplyNums(4,7, function(multiple) {
  console.log(multiple);
})
// --------------------


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  list.forEach(function(element) {
    if (element == item) {
      return cb(true);
    } else {
      return cb(false)
    }
  });
}

contains('yo-yo', items, function(contained) {
  if (contained === true) {
    console.log('Totes in there!');
  }
})

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let results = array.filter(function(element, index) {
    return array.indexOf(element) == index;
  });
  
  return cb(results);
}

let testArray = [1,2,'2','2',3,3,4,120,5,'cat',6,120,6,'cat',6,4,7,9];

removeDuplicates(testArray, function(result) {
  console.log(result);
});