// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];



  //Given this problem: 
  
  // function firstItem(arr, cb) {
  //   // firstItem passes the first item of the given array to the callback function.
  // }

  // Potential Solution:

  /*===================================== First Item =================================== */

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log("First Item: " + first)
  });


/*================================== Get Length ====================================== */

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, () => {
  console.log("Length of the Array: " + items.length);
})

/*===================================== Last Item =================================== */

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[3]);
}

last(items, function(last) {
  console.log("Last Item: " + last)
});


/*======================================================================== */


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.

  return cb(x,y);
}


sumNums(2,3, () => {
  console.log("Addition: " + (2+3));
});
/*======================================================================== */

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x,y);
}

multiplyNums(20,30, () => {
  console.log("Addition: " + (20*30));
});

/*======================================================================== */

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
    return cb(item, list);

}

let list = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
let item = 'yo-yo';

contains(item, list, () => {  
  let result = 0;
  for(let i=0; i< list.length; i++){
    if(list[i] === item){
      result =+1;
    }    
  }
  if(result > 0){
    console.log(true);
  }
  else
    console.log(false);  
});

/*======================================================================== */

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

  return cb(array);
}

const array = [0,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6]
removeDuplicates(array, () =>{
  const unique = Array.from(new Set(array));
  console.log(unique);
});
