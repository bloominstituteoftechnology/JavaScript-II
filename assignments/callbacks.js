// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a
// problem and a solution to see how this works with our items array. Study both the problem and the solution to figure out the
// rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum']

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

function getLength (arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr)
}

// inlined callback:
const length = getLength(items, () => items.length)
console.log('Inline getLength: ', length)

// pre declaring callback:
function getLenCB (ar) {
  return ar.length
}

const newLength = getLength(items, getLenCB)
console.log('predeclared newLength: ', newLength)

/////////////////////////////////////////////////////////////////////////////////////

function last (arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr)
}

// inlined callback:
const inlineLast = last(items, () => items[items.length - 1])
console.log('inlineLast: ', inlineLast)

// pre declaring callback:
function getLast (ar) {
  return ar[ar.length - 1]
}

const preDeclaredLast = last(items, getLast)
console.log('preDeclaredLast: ', preDeclaredLast)

///////////////////////////////////////////////////////////////////////////////////

function sumNums (x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y)
}

const a = 10
const b = 20

// inlined callback:
const inlineSum = sumNums(a, b, () => a + b)
console.log('inlineSum: ', inlineSum)

// pre declaring callback:
function getSum (arg1, arg2) {
  return arg1 + arg2
}

const preDeclaredSum = sumNums(a, b, getSum)
console.log('preDeclaredSum: ', preDeclaredSum)

///////////////////////////////////////////////////////////////////////////////////////

function multiplyNums (x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y)
}
const factorOne = 10
const factorTwo = 5

// inlined callback:
const inlinedProduct = multiplyNums(
  factorOne,
  factorTwo,
  () => factorOne * factorTwo
)
console.log('inlinedProduct: ', inlinedProduct)

// pre declaring callback:
function getProduct (arg1, arg2) {
  return arg1 * arg2
}

const preDeclaredProduct = multiplyNums(factorOne, factorTwo, getProduct)
console.log('preDeclaredProduct: ', preDeclaredProduct)

//////////////////////////////////////////////////////////////////////////////////////

function contains (item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, list);
}

// inlined callback:
const inlineTrue = contains('yo-yo', items, (i, l) => {
  let found = false;
  l.forEach((thing) => {
    if (thing === i) {
      found = true;
    }
  })
  return found;
})
console.log("inlineTrue: ", inlineTrue);

// pre declared callback:
function findItem (i, l) {
  let found = false;
  l.forEach((thing) => {
    if (thing === i) {
      found = true;
    }
  })
  return found;
}

const preDeclaredTrue = contains('Gum', items, findItem);
console.log("preDeclaredTrue: ", preDeclaredTrue);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* STRETCH PROBLEM */

const dupeyArr = ['hello', 'world', 'hello', 'world', 'this', 'is', 'a', 'derpty', 'derp', 'hello', 'derpina', 'shopping'];

function removeDuplicates (array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const noDuplicates = {};
  array.forEach((item) => {
    if (noDuplicates[item] === undefined) {
      noDuplicates[item] = true;
    }
  })
  const arr = Object.keys(noDuplicates);
  return cb(arr);
}


// inlined callback:
const noDupes = removeDuplicates(dupeyArr, (arr) => {
  return arr;
});
console.log(noDupes);

// pre declared callback:
function callback(ar) {
  return ar;
}

const preNoDupes = removeDuplicates(dupeyArr, callback);
console.log(preNoDupes);