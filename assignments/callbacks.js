const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Notebook'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  console.log(cb());
}
firstItem(items, () => items[0]);

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  console.log(cb());
}
getLength(items, () => items.length);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  console.log(cb());
}
last(items, () => items[items.length - 1]);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  console.log(cb(x,y));
}
sumNums(2,4,(x,y) => x + y);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  console.log(cb(x,y));
}
multiplyNums(2,4, (x,y) => x * y);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  console.log(cb(item, list));
}
contains('Gum', items, (item, list) => list.includes(item))

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  console.log(cb(array));
}

removeDuplicates(items, (items) => {
  let unique = [];
  for(let i = 0; i < items.length; i++){
    if( !(unique.includes(items[i])) ){
      unique.push(items[i]);
    }
  }
  return unique;
});
