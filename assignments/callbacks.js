// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }
  

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/
function inventory(arr){
  console.log(arr[0]);
}

inventory(items)
// hof
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, function (myLength){
  console.log(myLength);
})

getLength(items, banana);

getLength(items, arrLength);

function arrLength(a){
  console.log(a)
}

function banana(b){
  console.log("this is a banana callback" + b);
}



function last(arr, cb) {
  // last passes the last item of the array into the callback.
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y)
}
function add(num1, num2){
  console.log(num1 + num2);
}

sumNums(3, 9, add);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x,y)
}
function multiply(num1,num2){
  console.log(num1 * num2);
}
multiplyNums(5, 4, multiply)

// function contains(thing, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  // return cb(thing, list);}


// function findItem(thingOne, folder){
//   return folder.filter(function(la){
//     if (la.toLowerCase().indexOf(thingOne.toLowerCase()) !== -1) { return 'True'}else{
//       return 'false'
//     } ;
//   }) 
// }
// // contains('notebook', items, findItem);
// console.log(findItem(items, 'notebook'));
// console.log(findItem(items, 'pear'));

// /* STRETCH PROBLEM */

// // function removeDuplicates(array, cb) {
// //   // removeDuplicates removes all duplicate values from the given array.
// //   // Pass the duplicate free array to the callback function.
// //   // Do not mutate the original array.
// // }
