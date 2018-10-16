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
a = 2;
b = 3;

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
getLength(items,console.log)

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}
last(items,console.log);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}
sumNums(a,b,console.log);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}
multiplyNums(a,b,console.log)

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let present = null;
  if(list.indexOf(item) > -1){
    present = true;
  } else {
    present = false;
  }
  return cb(present)
}
contains("Gum",items,console.log)
contains("candy",items,console.log)

/* STRETCH PROBLEM */
// removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

arrayWithDup = [1,1,2,3,4,5,3,5,6,1]

// Need to work on a filter method with a query

// function comparerFilter(list){
//   tmpArray = [];
//   newArray = list.filter(function(element){
//     if(tmpArray.indexOf(element) > -1){
//       return false;
//     } else {
//       tmpArray.push()
//       return true;
//     }
//   })

function comparerFor(list){
  tmpArray = [];
  for(i=0;i<list.length;i++){
    if(tmpArray.indexOf(list[i]) > -1){
      continue;
    } else {
      tmpArray.push(list[i]);
    }
  }
  return tmpArray;
}

// The callback function is a function that is used to identify and remove the duplicates.
function removeDuplicates(array, cb) {
  nonDupArray = cb(array);
  return nonDupArray;
}
console.log(removeDuplicates(arrayWithDup, comparerFor));