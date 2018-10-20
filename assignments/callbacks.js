// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];



  //Given this problem: 
  
  // function firstItem(arr, cb) {
  //   // firstItem passes the first item of the given array to the callback function.
  // }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });


  // const arr = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
//testing the getLength cb
getLength(items, function(len){
  console.log(len)
});
// end of test
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}
// testing the cb named last
last(items, function(lst){
  console.log(lst);
});
// end of test
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}
// testing the sumNums cb
sumNums(2 ,4 , function(sum){
  console.log(sum);
})
// end of test

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}
// testing the MultiplyNums cb
multiplyNums(2 , 4 , function(mpl){
  console.log(mpl);
});
//  end of test

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (let i = 0; i < list.length; i++){
    if(item === list[i]){
      return cb(true);
    }
  }
}
// testing contains cb
contains('yo-yo',items,function(con){
  console.log(con);
})
//end of test

/* STRETCH PROBLEM */
const array = ['a','f','g','d','a','d','f','h','h','s','a'];

function removeDuplicates(array, cb) {

  let remDupes = [];
  remDupes = Array.from(new Set(array));

console.log (array)
return (remDupes);

  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
console.log(removeDuplicates(array));