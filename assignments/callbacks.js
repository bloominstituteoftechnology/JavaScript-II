const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

const firstItem = function (arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr[0]);
}
// const addIsh = function(currentItem){
//   return currentItem+'-ish';
// }
// console.log(firstItem(items,addIsh));

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
// const lastIndexNum = function (arrLength){
//   return arrLength-1;
// }
// console.log(getLength(items,lastIndexNum));

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}
const displayFunc = function (str){
  console.log(str);
}
// last(items,displayFunc);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x+y);
}
// sumNums(4,5,displayFunc);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x*y);
}
// multiplyNums(5,6,displayFunc);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

  function checkContains(currentItem){
    // console.log(currentItem);
    return currentItem === item;
  }
  if (list.filter(checkContains).length > 0){
    return cb(true);
  } else {
    return cb(false);
  }
}
// contains('Gum',items,displayFunc);


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let uniqueArray = [];
  for (let i=0;i<array.length;i++){
    let isDuplicate = false;
    for (let j=0;j<uniqueArray.length;j++){
      if (array[i] === uniqueArray[j]){
        isDuplicate = true;
      }
    }
    if (isDuplicate = false){
      uniqueArray.push(array[i]);
    }
  }
  const duplicateFreeArray = array.filter(function(currentItem, currentIndex, curerntArray){
                                            if (uniqueArray.forEach(function(currentItem)={
                                              
                                            }))
                                           
  });
  cb(duplicateFreeArray);
}
removeDuplicates(items,displayFunc);