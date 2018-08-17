const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  return cb(arr[0]);
}

function getLength(arr, cb) {
  return cb(arr.length);
}

function last(arr, cb) {
  return cb(arr[arr.length - 1]);
}

function sumNums(x, y, cb) {
  return cb(x, y);
}

function multiplyNums(x, y, cb) {
  return cb(x, y);
}

function contains(item, list, cb) {
  items.includes(item)
}

/* STRETCH PROBLEM */

function removeDuplicates(items, cb) {
  let newItems = items.filter((elem, index, self) => {return index == self.indexOf(elem);
  });
  return newItems;
}
