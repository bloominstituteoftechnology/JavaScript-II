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
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

const printLength = length => `This array has ${length} items.`;

console.log(getLength(items, printLength));


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}

const printLast = lastItem => `The last item in the array is ${lastItem}.`

console.log(last(items, printLast));



function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const sum = x + y;
  return cb(sum);
}

const printSum = sum => `The sum of x and y is ${sum}.`
console.log(sumNums(5,7, printSum));



function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const prod = x * y;
  return cb(prod);
}

const printProd = prod => `The product of x and y is ${prod}.`
console.log(multiplyNums(4,2,printProd));


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  const check = list.indexOf(item) !== -1 ? true : false;
  return cb(check);
}

const containsChecker = check => check ? 'The item exists in the list' : 'The item does not exist in the list'
console.log(contains('Gum',items, containsChecker))


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const noDupes = [];
  array.forEach(element => {
    if (!noDupes.includes(element)) {
      noDupes.push(element);
    }
  })

  return cb(noDupes);
}
const original = [1,1,1,1,2,2,2,3,4,5,6,7,7,8,9,9,9,9,9,9,10];
const countUniqueValues = values => values.join();

console.log(removeDuplicates(original , countUniqueValues));
console.log(original);
