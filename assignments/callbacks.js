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

//ES5
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
} 

getLength(items, function(arrLength) {
  console.log(arrLength);
});

// ES6 way
const getLength2 = (arr, cb) => {
  cb(arr.length);
};

getLength2(items, length => {
  console.log(`This the the length of the array: ${length}.`);
});


//ES5
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length -1]);
}

last(items, function(lastItem) {
  console.log(lastItem);
});

//ES6
const last2 = (arr, cb) => {
  cb(arr[arr.length - 1]);
}

last2(items, lastItem => {
  console.log(`This is the last item of the array: ${lastItem}.`);
});

//ES5
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}

sumNums(666, 420, function(x,y) {
  console.log(x + y);
});

//ES6
const sumNums2 = (x, y, cb) => {
  cb(x + y);
}

sumNums2(420, 666, sumOfTwo => {
  console.log(`This is the sum of the chosen two numbers: ${sumOfTwo}.`);
});


//ES5
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x, y);
}

multiplyNums(666, 420, function(x, y) {
  console.log(x * y);
});

//ES6
const multiplyNums2 = (x, y, cb) => {
  cb(x * y);
}

multiplyNums2(420, 666, multipleOfTwo => {
  console.log(`This is the multiple of the chosen two numbers: ${multipleOfTwo}.`);
});


//first way to do it
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if (list.includes(item)) {
    return cb(`Yes, this list contains your item - ${item}.`);
  } else {
    return cb(`No, this list does not contain your item - ${item}.`);
  }
}

contains('yo-yo', items, function(check) {
  console.log(check);
})

//second way to do it
const contains2 = (arr, str, cb) => {
  const inArray = () => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === str) {
        return `This list contains ${str}.`;
      }
    } return `This list does not contain ${str}.`;
  };
  cb(inArray());
};
contains2(items, 'yo-yo', check => {
  console.log(check);
});

/* STRETCH PROBLEM */

const arrayWithDupes = [6, 666, 13, 420, 99, 'cat', 'tiger', 'cheetah', 'leopard', 666, 420, 13, 'tiger', 'snow leopard', 'jaguar', 'panther', 'lucifer', 'satan']

function removeDuplicates(array, callback) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return callback(array);
}

console.log(removeDuplicates(arrayWithDupes, function(array) {
  let noDupesArray = [];
  array.forEach(item => {
    if (!noDupesArray.includes(item)) {
      noDupesArray.push(item);
    }
  });
  return noDupesArray;
}));
