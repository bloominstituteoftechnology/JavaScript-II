const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
return cb(arr[0]);
}

firstItem(items, function(first) {
  console.log(first);
})

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, function(lgth) {
  console.log(lgth);
})

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

last(items, function(last) {
  console.log(last); // Gum
})

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

sumNums(3, 4, function(add) {
  console.log(add); // 7
}) 

sumNums(5, 6, function(add) {
  console.log(add); // 11
})

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

multiplyNums(5, 10, function(prod) {
  console.log(prod); // 50
})

multiplyNums(3, 2, function(prod) {
  console.log(prod); // 6
})











function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
return cb(item, list);
}


function present(item, list) {
  for(let i = 0; i < list.length; i++) {
  if (list[i] === item) {
    return true;
  }
 }

 return false;

}

console.log(contains('Pencil', items, present));
console.log(contains('Gum', items, present));
console.log(contains('Rando', items, present));




// /* STRETCH PROBLEM */

// function removeDuplicates(array, cb) {
//   // removeDuplicates removes all duplicate values from the given array.
//   // Pass the duplicate free array to the callback function.
//   // Do not mutate the original array.
// }