const cba = function(param) {
  console.log(param)
}

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Notebook'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr[0])
}

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length)
}

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1])
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y)
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y)
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if (list.includes(item)){
    return cb(true)
  }
  else {
    return cb(false)
  }
}


firstItem(items, cba)
getLength(items, cba)
last(items, cba)
sumNums(5, 7, cba)
multiplyNums(5, 7, cba)
contains('Pencil', items, cba)

/* STRETCH PROBLEM */

let unique = function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

}
