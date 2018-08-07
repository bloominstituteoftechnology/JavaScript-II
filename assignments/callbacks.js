const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  console.log(cb(arr));
}

function first(arr){
  return arr[0];
}

firstItem(items, first);

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  console.log(cb(arr));
}

function arrayLength(arr){
  return arr.length;
}

getLength(items, arrayLength);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  console.log(cb(arr));
}

function lastItem(arr){
  return arr[arr.length-1];
}

last(items, lastItem);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  console.log(cb(x,y));
}

function add(x,y){
  return x+y;
}

sumNums(4,5,add);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  console.log(cb(x,y));
}

function multiplication(x,y){
  return x*y;
}

multiplyNums(4,5,multiplication);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb(item, list);
}

function present (item, list){
  if(list.includes(item)){
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

contains('Pencil', items, present);


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  return noDuplicates(array);
}

function noDuplicates(array){
  let duplicateFree = array.filter((item, index, items) => {
  return index == items.indexOf(item);
})
console.log(duplicateFree)
};

removeDuplicates(items);