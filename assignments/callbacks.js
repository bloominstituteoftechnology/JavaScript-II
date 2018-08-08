const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.

  return cb(arr);

}

function firstItemRetriever(items){
  return items[0];
}

firstItem(items, firstItemRetriever);



function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.

  return cb(arr);
}

function getArrlength(items) {
  return items.length;
}

getLength(items, getArrlength);

var x = 10;
var y = 3;

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.

    return cb(x,y);
}

sumNums(x,y, (x,y) => { return x + y;})



function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
