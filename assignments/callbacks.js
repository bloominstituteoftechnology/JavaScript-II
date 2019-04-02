// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];



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




function getLength(arr, got) {
  // getLength passes the length of the array into the callback.
  console.log(got(arr));
}

const arrLength = function(items) {
  return items.length;
}

getLength(items,arrLength);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length - 1]);
}

last(items, function(lastItem) {
  console.log(lastItem);
});


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x + y);
}

sumNums(5, 26, function(total) {
  console.log(total);
})

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x * y);
}

multiplyNums(19, 3, function(total) {
  console.log(total);
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (let i = 0; i < list.length; i++) {
    if(list[i] === item) {
      return cb(true);
    }
  }
  return cb(false);
}

contains('Dogs', items, function(color) {
  console.log(color);
});

contains('yo-yo', items, function(color) {
  console.log(color);
});





/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const value = {};
  for(let i = 0; i < array.length; i++) {
    value[array[i]] = true;
  }
  cb(Object.keys(value));
}

removeDuplicates(items, function(noRepeats) {
  console.log(noRepeats);
});


const test = (function () {
  var name = "King"; 
  return name; 
})(); 
test;