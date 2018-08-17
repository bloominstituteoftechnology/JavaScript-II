const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[0]);

}

firstItem(items, console.log);

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.

  cb(arr.length);
}

getLength(items,console.log);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length-1]);

}

last(items,console.log);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.

  cb(x+y);
}

sumNums(1,2,console.log);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x*y);

}

multiplyNums(1,1, console.log);



function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  
for(i=0;i<list.length;i++){
  if(list[i]===item){
    cb(true);
  };



}

cb(false);


}

contains("golfball", items, console.log);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
