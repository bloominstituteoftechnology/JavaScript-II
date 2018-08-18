const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];


function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr[0]);
}

////////////////////////////////////////////////////////////////////////////////

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

/////////////////////////////////////////////////////////////////////////////////
const lastItem =(arr)=>{
  return arr[arr.length -1]
}

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr.pop);
}



/////////////////////////////////////////////////////////////////////////////

function sumNums(x, y,cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x,y);
}

//////////////////////////////////////////////////////////////////////////////

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x,y);
}


////////////////////////////////////////////////////////////////
const check =(list, item)=>{
  return list.includes(item) ? true : false ;
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let value = list.includes(item) ? true : false ;
  return cb(value);
}
/* STRETCH PROBLEM */


function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  
  let results =[];
  for(i = 0; i < array.length ; i++){
    if (!results.includes(array[i])){
      results.push(array[i]);
    }
    
  }
  return cb(results);
}
