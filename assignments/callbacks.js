const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  const fItem = items[0];
  return fItem;
}
const fItem1 = firstItem()
console.log(fItem1);



function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  const gLength = items.length
  return gLength;
}
const gLength1 = getLength()
console.log(gLength1);



function last(arr, cb) {
  // last passes the last item of the array into the callback.
  const last = items[3]
  return last; 
}
const last1 = last()
console.log(last1);



function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const sum = x + y
  return sum;
}
sumNums(3,4);



function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const product = x*y
  return product;
}
multiplyNums(3,4);



function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  const contains = items.includes();
  if(true){
    return true;
  }else{
    return false;
  }
}
const contains1 = contains()
console.log(contains1);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
