// Create a callback function and invoke the function to test your work. 
//You have been provided an example of a problem and a solution to see how 
//this works with our items array.  Study both the problem and the solution 
//to figure out the rest of the problems.

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
  return cb(arr.length);
}

function giveLength(length){
  console.log('Array length: ' + length);
}

getLength(items, giveLength);


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1])
}

function getLast(lastItem){
  console.log('Last item of the array: ' + lastItem);
}

last(items, getLast);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}

sumNums(2, 3, function(num1, num2){
  //Number() used here to avoid string concatenation when using +
  console.log('Sum of two numbers: '+ Number(num1 + num2));
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}

multiplyNums(2, 3, function (num1, num2){
  console.log('Multiplication of two numbers: '+ num1 * num2);
})

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, list);
}

function containItem(unit, collection){
  let found = 0;
  for(let i = 0; i< collection.length; i++){
    if(unit === collection[i])
    { found++ }
  }

  if (found > 0)
  { console.log(true);}
  else 
  { console.log(false);}
}

contains("Gum", items, containItem);

/* STRETCH PROBLEM */

//  my example
const arrayContainsDuplicate = ['A', 'B', 'A', 'C', 'B'];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb(array);
}

function findDuplicate(arrayOfItems){
  //start at zero
  //if same position, skip and go to next array position
  // compare: if same, remove element with splice(position, 1)
  //if not, go to next position
  let arrayCopy = arrayOfItems;
  for(let i = 0; i < arrayOfItems.length; i ++){  //outer loop
    for(let j = 0; j < arrayOfItems.length; j++){ //inner loop
      if(i === j){  
        /*skip same position*/}
      else{
        if (arrayOfItems[i] === arrayOfItems[j]){
          arrayCopy.splice(arrayOfItems[i], 1);
        }
      }
    }//inner loop
  }//outer loop
  console.log(arrayCopy);
}

removeDuplicates(arrayContainsDuplicate, findDuplicate);
console.log('test change')



