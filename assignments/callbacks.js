// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"
  


  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


function getLength(arr, cb) {
  cb(arr.length);
}
getLength(items, (itemLength) => {
  console.log(itemLength);
});

function last(arr, cb) {
  return cb (arr[arr.length-3]);
}
last(items, function (lastItem){
  console.log(lastItem);
});

function sumNums(x, y, cb) {
  return cb (x,y);
}
console.log(sumNums(2,4, (x,y)=> x + y));


function numbers(x, y, cb) {
  return cb(x , y);
}
function multiply(x,y){
 return x * y
} 
console.log(numbers(3, 6, multiply ));


function contains(item, list, cb) {
  if(list.includes(item)){
    return cb(true);
  } else {
    return cb(false);
  }
}	
contains('Notebook', items, function(result){
  console.log(result);
});













/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
