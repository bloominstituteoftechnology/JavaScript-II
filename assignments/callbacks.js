// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum', ''];

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


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  let outPut = cb(arr);
  return outPut;
}
function callback( arr ){
  console.log(arr.length);
  return arr.length;
}

getLength(items, callback);



function last(arr, cb) {
  // last passes the last item of the array into the callback.
  let output = cb(arr[arr.length -1]);
  return output;
}

function callback0(arr) {
  console.log();
  return console.log()
}

last( items , callback0);

// function callback( arr ){
//   console.log(arr.length);
//   return arr.length;
// }
// function callback1(){
//   console.log(
//   return output;
// }

last(items,callback0);


function sumNums(x, y) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let outPut = (x + y);
  return outPut;
}

function publishSum(x, y, sumNums) {
  let pub = console.log(sumNums(x , y));
  return pub;
}

publishSum(10,20, sumNums);


function multiplyNums(x, y) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let output = ( x * y );
  return output;
}

function publishMul(multiplyNums){
  return console.log(multiplyNums);
}

publishMul(multiplyNums(4,3));




function contains(item, list) {
  let tOrF = [];
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (let i = 0 ; i < list.length; i++){
    if (list[i] === item) {
      console.log(true);
      return tOrF.push(true);
    }
    }
  }
  // return (Callback => {return console.log(tOrF)});
}
contains(items[0],items);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
