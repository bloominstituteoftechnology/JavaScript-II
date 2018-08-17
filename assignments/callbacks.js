const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
return cb(arr);
}
function getFirstItem(items){
  return items[0];
}
firstItem(items, getFirstItem);

function getLength(arr, cb) {
    // getLength passes the length of the array into the callback.
  return cb(arr);
}
function arrLength(items){
  return items.length;
}

arrLength(items, arrLength);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
};

function getLastItem(items){
  return  items[items.length-1];
}
getLastItem(items, getLastItem);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
   return  cb(x+y);
}
function add(num1, num2){
  console.log(num1 + num2);
}
sumNums(5,3,add);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y);
}
function multiply(num1, num2){
  console.log(num1 * num2);
}
multiplyNums(5,3 multiply);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, list);
}

function getContains(item, list){

  if(list.includes(item)){

    console.log(true);
  }else{
    console.log(false);
  }
}

contains("Notebook", items, getContains);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
