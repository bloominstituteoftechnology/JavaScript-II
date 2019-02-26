// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Pens'];

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
/*************************************************** */
//Get length callback
function getLength(arr, cb) {
  cb(arr.length)
}

getLength(items, (arrLength) => {
  console.log (arrLength);
});

/*************************************************** */
//Last item callback

function last(arr, cb) {
  let arrLast = arr.length-1;
  cb(arr[arrLast]);
}

last(items, (lastItem) => {
  console.log(lastItem);
});


//************************************************* */
//Add numbers callback

function sumNums(x, y, cb) {
  cb( x + y); 
}

sumNums(2,3, (sum) => {
  console.log(sum);
});

sumNums(10,5, (sum) => {
  console.log(sum);
});

/************************************************** */
//Multiply numbers callback

function multiplyNums(x, y, cb) {
  cb(x * y);
}

multiplyNums(10,10, (mSum) => {
  console.log(mSum);
});

/**************************************************** */
//Check if item is in list callback


function contains(item, list, cb) {
  if (list.includes(item)){
    cb (true)
  }else{
  cb (false)
};
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
};

  contains('Pencil', items, (confirm) => {
  console.log(confirm);
});







/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}