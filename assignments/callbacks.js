const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[0])
  return cb;
}




function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.getLength)
  return cb;
}




function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.getLength - 1])
  return cb; 
}




function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x + y)
  return cb;
}



function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x * y)
  return cb;
}



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
