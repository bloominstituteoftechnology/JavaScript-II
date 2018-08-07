const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.

  function first(arr) {
  console.log(arr[0]);
}

firstItem(items, function(first) {
  console.log(first);
});
////////////////////////////////////////////////


function getLength(arr,cb) {
  return cb(arr);
}

function length(arr) {
  return arr.length;

}

console.log(getLength(items,length));
/////////////////////////////////////////////////

  
function last(arr, cb) {
  return cb(arr);
}

function lastItem(arr) {
  return arr[3];
}

console.log(last(items, lastItem));
////////////////////////////////////////////////////////


function sumNums(x, y, cb) {
  return cb (x,y);
  }
  
  function sumTime(x,y) {
      return x + y;
  }
  
  console.log(sumNums(2,3,sumTime));

/////////////////////////////////////////////////////////////////

  function multiplyNums(x, y, cb) {
    return cb(x,y);
}

function timezThem (x,y) {
    return x * y;
}

console.log(multiplyNums(4, 6, timezThem));
/////////////////////////////////////////////////////


function contains(item, list, cb) {

  return cb(item,list);
}

function here(item,list) {

  if (list.indexOf(item) !== -1) {
      return true;
  }

  else {
      return false;
  }
}

console.log(contains('Pencil', items, here));
/////////////////////////////////////////////////////////


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
