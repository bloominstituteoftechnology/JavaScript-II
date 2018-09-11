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
  cb(arr.length);
};

getLength(items, function (lenny) {
  console.log(lenny);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length-1]);
};

last(items, function (showLast) {
  console.log(showLast);
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x + y);
}
sumNums(2, 3, function (adder) {
  console.log(adder);
})


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x * y);
}

multiplyNums(2, 3, function (product) {
  console.log(product);
})

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb(list.includes(item) ? true: false);
}
contains('Notebook', items, function (hit) {
  console.log(hit);
})

/* STRETCH PROBLEM */

const itemsDoubled = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Pencil', 'Notebook', 'yo-yo', 'Gum'];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
            // let newArr = [];
            // for (let i = 0; i < array.length; i++) {
            //   if (newArr.indexOf(array[i]) === -1) {
            //     newArr.push(array[i])
            //   }
            // }
            // cb(newArr);
  let uniqueItems = Array.from(new Set(array));
  cb(uniqueItems)

}
removeDuplicates(itemsDoubled, function(nonDupe) {
  console.log(nonDupe)
})
