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

function returnLength(x) {
    return x;
}

console.log(getLength(items, returnLength));





function last(arr, cb) {
    // last passes the last item of the array into the callback.
    return cb(arr[arr.length - 1]);
}

function lastItem(x) {
    return x;
}

console.log(last(items, lastItem));





function sumNums(x, y, cb) {
    // sumNums adds two numbers (x, y) and passes the result to the callback.
    return cb(x + y);
}

function multiplyNums(x, y, cb) {
    // multiplyNums multiplies two numbers and passes the result to the callback.
    return cb(x * y);
}

function returnNum(x) {
    return x;
}

console.log(sumNums(4, 5, returnNum));
console.log(multiplyNums(4, 5, returnNum));





function contains(item, list, cb) {
    // contains checks if an item is present inside of the given array/list.
    // Pass true to the callback if it is, otherwise pass false.

    // list.forEach(function(value) {
    //     if (value === item) {
    //         return cb(true);
    //     } else {
    //         return cb(false);
    //     }
    // })

    let tempVal = 0;

    list.forEach(function(value) {
        if (value === item) {
            tempVal++;
        }
    })

    if (tempVal > 0) {
        return cb(true);
    } else {
        return cb(false);
    }
}

function log(bool) {
    console.log(bool);
}

let item = "Notebook";

contains(item, items, log);

/* STRETCH PROBLEM */

//function removeDuplicates(array, cb) {
// removeDuplicates removes all duplicate values from the given array.
// Pass the duplicate free array to the callback function.
// Do not mutate the original array.
//}