const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

const cb =(arr) =>{
  return arr[0];
}

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr)
}

console.log(firstItem(items,cb));

////////////////////////////////////////////////////////////////////////////////
const length = (arr) =>{
  return arr.length;
}

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}

console.log(getLength(items,length))

/////////////////////////////////////////////////////////////////////////////////
const lastItem =(arr)=>{
  return arr[arr.length -1]
}

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}

console.log(last(items,lastItem));

/////////////////////////////////////////////////////////////////////////////

const add = (x, y) =>{
  return x + y;
}
function sumNums(x, y,cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x,y);
}
console.log(sumNums(3,4,add));
//////////////////////////////////////////////////////////////////////////////
const multiply =(x,y)=>{
  return x * y
}
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x,y);
}
console.log(multiplyNums(4,5, multiply));

////////////////////////////////////////////////////////////////
const check =(list, item)=>{
  return (list.includes(item) ? true : false ;
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list, item);
}
console.log(contains("yo-yo",items, check));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
