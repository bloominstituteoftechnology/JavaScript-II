const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
 return cb(arr) ;
}
function getFirstItem (arr) {
   return arr[0];
}
console.log(firstItem(items, getFirstItem)) 

///////////////////////////////////////////////////////


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr) ;
}
function lengthArr (arr) {
  return arr.length;
}
console.log(firstItem(items, lengthArr)) 

/////////////////////////////////

function last(arr, cb) {
  // last passes the last item of the array into the callback.

return cb(arr) ;
}
function getLastItem (arr) {
   return arr[arr.length - 1];
}
console.log(firstItem(items,  getLastItem )) 

///////////////////////////////////////

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}
function getSum (a, b) {
  return a + b ;
}
console.log(sumNums(150, 200, getSum)) 

///////////////////////////////////////////////

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}
function getMultiply (a, b) {
  return a * b ;
}
console.log(multiplyNums(150, 200, getMultiply)) 

//////////////////////////////////////////////

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item,list);
}
function getItemfromList(item, arr) {
  return arr.indexOf(item) !== -1 ? true : false ;
}
console.log(contains( 'hello', [1, 45, 5, 10, 'hello'], getItemfromList));


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

  return cb(array) ;

}

function noDuplicate (arr){
  let newArr = [];
  arr.forEach(function(item) {
       if(newArr.indexOf(item) < 0) {
            newArr.push(item) 
       }
       
  });
  return newArr;
}
console.log(removeDuplicates(  [1, 45, 5, 10, 'hello', 14, 5, 1, 5, 10 ], noDuplicate))
