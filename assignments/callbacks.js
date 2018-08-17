const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

const firstItem = (arr, cb) => {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[0]);
};

firstItem(items, firstItem => {
  console.log(`The first item is ${firstItem}.`);
});

const getLength = (arr, cb) => {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
};
getLength(items, length => {
  console.log(`The length of the array is ${length}.`);
});

const last = (arr, cb) => {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length - 1]);
};
last(items, lastItem => {
  console.log(`The last item in the array is ${lastItem}.`);
});

const sumNums = (x, y, cb) => cb(x+y);
  // sumNums adds two numbers (x, y) and passes the result to the callback.
sumNums(4,5,console.log);

const multiplyNums = (x, y, cb) => cb(x*y);

// multiplyNums multiplies two numbers and passes the result to the callback.

multiplyNums(6,5,console.log);

const contains = (arr, str, cb) => { 
   // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  const isInArray = () => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === str) {
        return true;
      }
    } return false;
  };
  cb(isInArray());
};
contains(items, 'Notebook', result => {
  console.log(result ? 'Notebook is in the array' : 'Notebook is not in the array');
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const dupe = [];
  for (let x = 0; x < items.length; x++) {
    dupe[items[x]] = true;
  }
  cb(Object.keys(dupe));
}
