const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.

     cb(arr[0]);

  }

    firstItem(items, function(item){
        console.log(item);
 
      });


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
    cb(arr.length);

}
  
    getLength(items, function(item){

      console.log(item);
       
    });


function last(arr, cb) {
  // last passes the last item of the array into the callback.
    cb([arr.length - 1]);

}

    last(items, function(item){
        console.log(item);
    });


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
      cb(x +y);
}

  sumNums(10, 10, function(item){
        console.log(item);
  });

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
    cb(x * y);

}
    multiplyNums(10, 10, function(item){
        console.log(item);
    });


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
      if (item in list === true){
        cb(true);
      } else {
        cb(false);
      }

}

  contains('Notebook', items, function(item){
      console.log(item);
  });

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
