const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[0]);
}
firstItem(item, function(Item){
  console.log(`The first item is ${Item}`);
})

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}
getLength(items, function(length){
  console.log(`The length of the array is ${length}.`)
})

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length -1 ]);
}
last(items, function(item){
  console.log(`The last item of the array is ${item}`)
})

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
cb(x,y);
}
sumNums(2,4,function(x,y){
  console.log(`The result is`, x + y);
})

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x,y)
}
multiplyNums(2,4,function(x , y){
  console.log(`The result is ` x * y);
})

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb(item,list);
}
contains('orange',items, function(item, list){
  for(i = 0; i < list.length; i++){
    if(list[i] === item){
      return true;
    }
    return false;
  }

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
