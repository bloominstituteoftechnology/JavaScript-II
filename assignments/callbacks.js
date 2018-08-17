const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[0]);
}

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length - 1]);
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x + y);
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x * y);
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  cb(list.includes(item));

}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

  // I learned this technique from one of the earlier CCs!
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (array.indexOf(item) === i) {
        newArray.push(item);
    }
  }

  cb(newArray);
}


/* test our work */

// Let's have our callback just log stuff to the console
function myCb(param) {
    console.log(param);
}


// return the first item of an array
console.log("\nfirstItem:");
firstItem(items, myCb);

// return the length of an array
console.log("\ngetLength:");
getLength(items, myCb);

// return the last item of an array
console.log("\nlast:");
last(items, myCb);

// return the sum of two numbers
console.log("\nsumNums: 1 + 2 =");
sumNums(1, 2, myCb);

// return the product of two numbers
console.log("\nmultiplyNums: 3 * 4 =");
multiplyNums(3, 4, myCb);

// return whether an array contains an item
console.log("\ncontains: Pencil, Pen");
contains('Pencil', items, myCb);
contains('Pen', items, myCb);


// return an array with duplicates removed

// create a new list with a duplicate item
const newItems = Array.from(items);
newItems.push('Pencil');
// now test it
console.log("\nremoveDuplicates:");
console.log('Before:');
console.log(newItems);
console.log('After:');
removeDuplicates(newItems, myCb);

