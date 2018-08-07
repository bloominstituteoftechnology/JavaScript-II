const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr[0]);
}
firstItem(items,function(first) {
  console.log(first)
});


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
getLength(items,function(lengthy) {
  console.log(lengthy)
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}
last (items, function(lasty) {
  console.log(lasty)
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x+y);
}
sumNums(4,2, function(sumynumy) {
  console.log(sumynumy)
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y);
}
multiplyNums(4,1, function(multynumy) {
  console.log(multynumy)
});

/* STRETCH PROBLEM */

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return checker(item,list)
}
function checker(item, list) {
  if(list.includes(item)){
    return true;
  } else {
    return false;
  }
}
console.log(checker('Pencil',items))



function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb(array);
}

removeDuplicates(items, function(func){
  newList = [];
  items.forEach(function(element) {
    newList.push(items.element);
  })
  console.log(newList);
});

