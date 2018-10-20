// Create a callback function and invoke the function to test your work. 
// You have been provided an example of a problem and a solution to see how 
// this works with our items array.  
// Study both the problem and the solution to figure out the rest of the problems.

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

function consoleLog(answer) {
    console.log(answer)
}

getLength(items, consoleLog);


function last(arr, cb) {
    // last passes the last item of the array into the callback.
    return cb(arr[arr.length - 1])
}

last(items, consoleLog);

function sumNums(x, y, cb) {
    // sumNums adds two numbers (x, y) and passes the result to the callback.
    cb(x + y);
}

sumNums(5, 10, function (sum) {
    return sum
});

function multiplyNums(x, y, cb) {
    // multiplyNums multiplies two numbers and passes the result to the callback.
    cb(x * y);
}

multiplyNums(5, 4, consoleLog);


// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.
function contains(item, list, cb) {
    list.forEach(function (object) {
        if (object === item) {
            cb(true)
        }
    })
}

contains('Music', items, function (trueItem) {
    console.log(trueItem);
});


/* STRETCH PROBLEM */

let array = [1, 2, 1, 3, 5, 6, 3, 5, 7, 3, 5];
noDuplicate = [];

function removeDuplicates(arr, cb) {
    // removeDuplicates removes all duplicate values from the given array.
    // Pass the duplicate free array to the callback function.
    // Do not mutate the original array.
    
    uniqueValues = arr.filter(function(item, position) {
        return arr.indexOf(item) == position;
    });
    
    cb(uniqueValues);
}

removeDuplicates(array, function(unique) {
    console.log(unique);
});
