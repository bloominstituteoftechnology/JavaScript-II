// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length - 1]);
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let result = x + y;
  cb(result);
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let result = x * y;
  cb(result);
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let inGroup = false;
  for (let i in list){
    if (list[i] == item){
      inGroup = true;
        }
  }
  cb(inGroup);
}

//////////////////////////////////////////////////
// Test bench                                   //
//////////////////////////////////////////////////
 function myCallBack(param){
   console.log(param);
 }

// function testLength(){
//   getLength(items, myCallBack);
// }

// function testLast(){
//   last(items, myCallBack);
// }

// function testSum(){
//   sumNums(3, 4, myCallBack);
// }

// function testMultiply(){
//   multiplyNums(3, 4, myCallBack);
// }

// function testContains(){
//   contains("Notebook", items, myCallBack);
// }

// testLength();
// testLast();
// testSum();
// testMultiply();
// testContains();

//////////////////////////////////////////////////

/* STRETCH PROBLEM */
let dupeArray = [1, 3, 2, 5, 3, 2, 5, 1, 7]

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let noDuplicates = [];
  for (let i in array){
    if (noDuplicates.includes(array[i]) == false){
      noDuplicates.push(array[i]);
    }
  }
  cb(noDuplicates);
}

removeDuplicates(dupeArray, myCallBack);

