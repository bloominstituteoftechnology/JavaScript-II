// *Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //* GIVEN THIS PROBLEM:

  *function firstItem(arr, cb) {
    //* firstItem passes the first item of the given array to the callback function.
  }

  //*SOLUTION:

  *function firstItem(arr, cb) {
   * return cb(arr[0]);
  *}

  //* NOTES ON THE SOLUTION:

  //* firstItem is a higher order function.
  //* It expects a callback (referred to as `cb`) as its second argument.
  //* To test our solution, we can use the given `items` array and a variety of callbacks.
  //* Note how callbacks can be declared separately, or inlined.

  //* TEST 1 (inlined callback):

  *const test1 = firstItem(items, item => `I love my ${item}!`);
  *console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/
function array (arr,cb){
  return cb(arr)
};

function getLength(arr) {
  return items.length;

  
  // getLength passes the length of the array into the callback.
  
};
console.log(array(items, getLength));


function last(arr) {
  // last passes the last item of the array into the callback.
return items.slice(-1)[0]
};

console.log(array(items, last))



function nums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb (x,y)
};

function sumNums(x,y){
return x + y
};
console.log(nums(4,3,sumNums));

function multiplyNums(x, y) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
return x * y ;
}

console.log (nums (3,4, multiplyNums));

function contains(item, list, callback) {
  return callback (item,list)
  // *contains checks if an item is present inside of the given array/list.
  // *Pass true to the callback if it is, otherwise pass false.
}

function cb(item, list){
  if (list.includes (item)){
    return true
  }
    else{
      return false
    }
  }

    console.log(contains ('Pencil', items, cb));

/* STRETCH PROBLEM */

function removeDuplicates(array) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  
}

