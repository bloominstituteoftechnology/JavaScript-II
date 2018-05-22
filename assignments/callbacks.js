const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr);
}

function minion(param){
  return param[0];
}

firstItem(items, minion); //result is 'Pencil'

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}

function minion2(param){
  return param.length;
}

getLength(items, minion2); //result is 4

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}

function minion3(param){
  return param[param.length - 1];
}

last(items, minion3); //result is 'Gum'

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}

function minion4(param1, param2){
  return (param1 + param2);
}

sumNums(1, 3, minion4); //result is 4

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}

function minion5(param1, param2){
  return (param1 * param2);
}

multiplyNums(5, 5, minion5); //result is 25

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, list);
}

function minion6(param1, param2){
  for(let i = 0; i < param2.length; i++){
    if (param1 === param2[i]){
      return true;
    }
  }
  return false;
}

contains('Gum', items, minion6); //return true

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
