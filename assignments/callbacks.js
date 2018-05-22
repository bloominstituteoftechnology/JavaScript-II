const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
function callback (item) {
  console.log(item);
}


function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[0]);
}

let firstItemArrow = (arr,cb) => cb(arr[0]);

firstItem(items, callback);

firstItemArrow(items, callback);



function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}

let getLengthArrow = (arr,cb) => cb(arr.length)

getLength(items,callback);

getLengthArrow(items, callback);




function last(arr, cb) {
  // last passes the last item of the array into the callback.
  let last = arr.pop();
  cb(last);
  arr.push(last);
}

let lastArrow = (arr,cb) => {
    let last = arr.pop();
    cb(last);
    arr.push(last);
}

last(items,callback);

lastArrow(items, callback);





function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x+y);
}

let sumNumsArrow = (x,y,cb) => cb(x+y)


sumNums(10,5,callback);

sumNumsArrow(15,15,callback);





function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x*y);
}

let multiplyNumsArrow = (x,y,cb) => cb(x*y)

multiplyNums(2,4,callback);

multiplyNumsArrow(2,5,callback);



function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if(list.includes(item))
  { cb(true); }
  else {
  { cb(false);  }
  }
}

let containsArrow = (item, list, cb) => cb(list.includes(item))

contains('yo-yo', items, callback);

containsArrow('Pencil', items, callback)

/* STRETCH PROBLEM */


function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  cb(Array.from(new Set(array)));
}

let removeDuplicatesArrow = (array, cb) => cb(Array.from(new Set(array)))

let duplicates = [1,1,2,2,3,3,4,4,5,5];

removeDuplicates(duplicates, callback);

duplicates = [1,1,2,2,3,3,4,4,5,5];

removeDuplicatesArrow(duplicates, callback);
