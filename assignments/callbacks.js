const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
    cb(arr[0])
    
  }
  
  
  const nameFirstItem = (firstitem) => {
   console.log ( `The first item is ${firstitem}`);
    
  }
  
  firstItem(items, nameFirstItem);
  

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  let length = array.length; 
  cb(length);

  getLength(items, =>(console.log (input));
}

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  let lastitem = array[i].length-1;
  cb (item);
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let add = x+y;
  cb(add);
}

function multiplyNums(x, y, cb) {
  let multiply = x*y;
  cb(multiply);
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (var i=0; i<list.length; i+=1){
    if (list[i] == item){
      return true;
    }
    return false;
  }
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}

const CBfunc = (a,b,cb)=> {

}