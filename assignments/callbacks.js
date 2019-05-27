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


// function getLength(arr, cb) {
//   // getLength passes the length of the array into the callback.

//   var arrLength = items.length;
//   console.log(arrLength);

// }

// getLength()

function last(arr, cb) {
  // last passes the last item of the array into the callback.

  var arrLast = items.slice(-1);
  console.log(arrLast);

}

last()

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.

  return cb(x,y)

}

function add(x, y){
  return x + y;
}


let sum = sumNums(2, 3, add);
console.log(sum)





function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.

  return cb(x,y)

}


function multiply(x, y){
  return x * y;
}

let product = multiplyNums(2, 3, multiply);
console.log(product)



function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

//   let search = list.includes(item);
//   return cb(search);

// }

// contains("Pencil", items, callback);{
//   if (item = "Pencil"){
//     return true
//   }else{
//     return false
//   }
}



/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
