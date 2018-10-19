// Create a callback function and invoke the function to test your work. 
//You have been provided an example of a problem and a solution to see how this works with
// our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];


const items2 = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Gum', 'yarn', 'yo-yo' ];
// console.log(items2)
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
console.log(`********* callback.js challenges *********`)
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
   return cb(arr.length)
}

getLength(items, function(theLength){
  console.log("getLength function: ", theLength)
})

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr.length - 1)
}

last(items, function(lastItem){
  console.log(`lastItem function: ${lastItem}`);
  console.dir(lastItem);
})


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

sumNums(3, 4, function(sum){
  console.log('the sum is: ', sum)
})

function multiplyNums(x, y, cb) {
  return cb(x * y)
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

multiplyNums(3, 4, function(mult){
  console.log("the multiplied value is: ", mult)
})

// alternative way if multiplyNums has return cb(x,y)
// function multiplying(x, y) {
//   console.log(x * y);
//   return x * y;
// }

// multiplyNums(2, 4, multiplying)

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
   return cb(item, list)
  // return cb(item, list)
  // console.log(cb(item, list))
}

// researched "includes" method from MDN
function inventory(item, list){
  return list.includes(item)
}


  contains("Gum", items, inventory)
  console.log(contains("Gum", items, inventory))
    console.log(contains("Pen", items, inventory))

// contains("Gum", items, function(inventory){
//     console.log(inventory.includes)
// })

// contains(items, "pencil", {
//  console.log("did this work? ", checkItem, itemListed)
// })

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb(array)
}

function removeThem(array){
  return array.filter(function(item, index){
    return array.indexOf(item) >= index;
  });
}

   removeDuplicates(items, removeThem)
   console.log(removeDuplicates(items, removeThem));

// created duplicate items array to check if it worked
    removeDuplicates(items2, removeThem)
    console.log("Removed duplicates from array of items2:", removeDuplicates(items2, removeThem))