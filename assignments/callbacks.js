// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

//  const pie=items.includes('Pencil');

//  console.log(pie);

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
  
};

const myCb = function (item) {
  console.log(item);
}

getLength(items, myCb);



function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
};

const myArrayLength = function (item) {
    console.log(item);
}


last(items, myArrayLength);


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb (x+y);
};

const mySum = function(item) {
  console.log(item);
}

sumNums(2, 4, mySum);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
   return cb (x*y);
}

const myMult = function(item) {
  console.log(item);
}

multiplyNums(5, 8, myMult);






function Contain(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
        return cb (list.includes(item));
     }


     const myChecker = function(thing) { 
    return (thing);
    }    

 let results= Contain('Pencil', items, myChecker);

 console.log(results);




/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
