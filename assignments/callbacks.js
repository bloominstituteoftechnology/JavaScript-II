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
  
  return cb(arr.length)

  // getLength passes the length of the array into the callback.
}

function last(arr, cb) {
    // items[0] ; how to get the first item
     return cb(arr[arr.length -1])

  // last passes the last item of the array into the callback.
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
//   let a = 3
// function addTwo(x) {
//   let ret = x + 2
//   return ret
//  }
//  let b = addTwo(a)
//  console.log(b);

  return cb(arr[x + y]);
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(arr[x * y]);
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  const  contains = list.length;
  for(i = 0;i < list; i++)
  {
      if(list[i]===item){return true;}
  }
  return false;
}

/* STRETCH PROBLEM */
 // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

function removeDuplicates(array, cb) {
  const newArr = Array.from(array);
  console.log(newArr.filter(duplicates));
}
function duplicates(item, index, arr) {
  return arr.indexOf(item) === index;
 }
 const dupArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 4, 1, 3, 3, 3, 3, 1];
 removeDuplicates(dupArray, duplicates)

 
console.log(dupArray);
