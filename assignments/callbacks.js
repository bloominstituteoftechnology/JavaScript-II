const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  cb(arr[0]);
}

function getLength(arr, cb) {
  cb(arr.length);
}

function last(arr, cb) {
  cb(arr[arr.length-1]);
}

function sumNums(x, y, cb) {
  cb(x+y);
}

function multiplyNums(x, y, cb) {
  cb(x*y);
}

function contains(item, list, cb) {
  if (list.includes(item)) {
    cb(true);
  } else {
    cb(false);
  }
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  let newArray = [];
  array.forEach(function(item) {
    if (!(newArray.includes(item))) {
      newArray.push(item);
    }
  });
  cb(newArray);
}
