const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return (arr[0]);
}
console.log(firstItem(items));
//-------------------------------------------------------------
function getLength(arr, cb) {
  return (arr.length);
  // getLength passes the length of the array into the callback.
}
console.log(getLength(items))
//-------------------------------------------------------------
function last(arr, cb) {
  return(arr[arr.length-1]);
  // last passes the last item of the array into the callback.
}
console.log(last(items))
//-------------------------------------------------------------


function sumNums(x, y, cb) {
  return(x+y);
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}
console.log(sumNums(2,4));
//-------------------------------------------------------------
function multiplyNums(x, y, cb) {
  return (x*y);
  // multiplyNums multiplies two numbers and passes the result to the callback.
}
console.log(multiplyNums(2,4));
//-------------------------------------------------------------
const arr = [1,2,3,4];
function contains(item, list, cb) {
for (let i = 0; i < list.length; i ++){
 if (list[item] === list[i]){
   return true;
 }
 
} 
return false;
}
console.log(contains(1,arr))


  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
