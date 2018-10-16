// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

 

  //Given this problem: 
  
  //function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  //}

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });




function getLength(arr, cb) {
   return cb(arr.length);
}
getLength(items, function(length){
  console.log(length)
});
function last(arr, cb) {
  return cb(arr[arr.length - 1]);
}
last(items, function(last){
console.log(last)
});
function sumNums(x, y, cb) {
  return cb(x + y);
}
sumNums(55, 99, function(sum){
  console.log(sum)
});

function multiplyNums(x, y, cb) {
 return cb(x * y);
}
multiplyNums(8, 10, function(mult){
  console.log(mult)
});



//call back hurt my brain too much.......


/*function contains(item, list, cb) {
  let newArr = [];
  function cb(item, list){
    for (let i = 0; i < list.length; i++){
      if (list[i] === item){
        newArr.push(list[i]);
      }
    }
  }
  if (newArr == item){
    return true;
  }
  else {
    return false;
  }
}
contains("Gum", items, function(bul){
  console.log(bul)
}); */

/*
function cB(item, list) {
  let newArr = [];
  for (let i = 0; i < list.length; i++){
    if (list[i] === item){
       newArr.push(list[i]);
    }
  }
  
  if (newArr[0] == item){
    return true;
  }
  else {
    return false;
  }
}
console.log(cB('Gum', items)); */
function contains(item, list, cb){
return cb(list.indexOf(item) !== -1)
}

contains("Gum", items, function(bul){
  console.log(bul)
});
contains("Yum", items, function(bul){
  console.log(bul)
});
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
