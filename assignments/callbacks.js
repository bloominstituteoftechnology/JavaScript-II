const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

const firstItem = (arr, cb) => {
  return cb(arr[0]);
};
// firstItem passes the first item of the given array to the callback function.
firstItem(items, firstItem => {
  console.log(`The first item is: ${firstItem}`)
})
let getLength = (arr, cb) => {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
getLength(items, getLength => {
  console.log(`The length of the array is: ${getLength}`)
})
const last = (arr, cb) => {
  // last passes the last item of the array into the callback.
 return cb(arr[3]);

}
 last(items, last => {
   console.log(`The last item is: ${last}`)
 })
 let sumNums = (x, y, cb) => {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y)
}
sumNums(2, 3, sumNums => {
  console.log(`The total of the numbers are: ${sumNums}`)
})
 multiplyNums = (x, y, cb)=> {
  // multiplyNums multiplies two numbers and passes the result to the callback.
 return cb(x * y)
}
multiplyNums(3, 4, multiplyNums => {
  console.log(`The total of the numbers are: ${multiplyNums}`)
})

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item));
}
contains("yo-yo", items, console.log);
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
