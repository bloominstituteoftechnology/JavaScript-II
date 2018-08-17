const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[0]);
}
firstItem(items, firstItem => {console.log(`The first item is ${firstItem}.`)})


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}
getLength(items, getLength => {console.log(`The length of the array is ${getLength}.`)})

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length-1])
}
last(items, last => {console.log(`The last item in the array is ${last}.`)})

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x + y);
}
sumNums(3, 8, sumNums => {console.log(`The sum is ${sumNums}.`)});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x * y)
}
multiplyNums(5, 3, multiplyNums => {console.log(`The multiplied result is ${multiplyNums}.`)})

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  const inArr = () => {
    for (let i=0; i < list.length; i++) {
      if (list[i] === item){
        return true;
      } 
    }return false;
  }
  cb(inArr());
}

contains('Gums',items, contains => {console.log(`This is ${contains}`)})

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
