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



  // getLength passes the length of the array into the callback.
  function getLength(a, b) {
    return b(a)
  }
  
  function length(a) {
    return a.length
  }
  
  calculate(items,length);



  // last passes the last item of the array into the callback.
function last(a, b) {
  return b(a)
}

function getLast(a) {
  return a[a.length-1]
}

last(items,getLast);



  // sumNums adds two numbers (x, y) and passes the result to the callback.

  function sumNums(a, b, c) {
    return c(a, b)
  }
  
  function sum(a,b) {
    return a + b
  }
  
  sumNums(1,2,sum);
  

  // multiplyNums multiplies two numbers and passes the result to the callback.
  function multiplyNums(a, b, c) {
    return c(a, b)
  }
  
  function prd(a,b) {
    return a * b
  }
  
  sumNums(1,2,prd);
  


  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  function contains(a, b, c) {
    return c(a, b)
  }
  
  function check(a,b) {
    let bool = 0
    for (i=0; i<b.length; i++)
    if (b[i] === a) {
      return true;
    } else {
      return false
    }
  }
  
  contains("book",items,check);
  

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
