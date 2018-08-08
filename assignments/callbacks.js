const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  return cb(arr);
}

function first(items) {
  console.log(items[0]);
}

firstItem(items, first);

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr);
}

function second(items) {
  console.log(items.length);
}

getLength(items, second);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}

function third(items) {
  console.log(items[items.length - 1]);
}

last(items, third);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

sumNums(4, 5, function(fourth) {
  console.log(fourth);
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

multiplyNums(5, 6, function(fifth) {
  console.log(fifth);
});

/* STRETCH PROBLEMS */

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return cb(true);
    }
  }
  return cb(false);
}

contains("Comb", items, function(backpack) {
  console.log(backpack);
});

contains("Notebook", items, function(backpack) {
  console.log(backpack);
});

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const seen = {};
  for (let i = 0; i < array.length; i++) {
    seen[array[i]] = true;
  }
  cb(Object.keys(seen));
}

removeDuplicates(items, function(myArray) {
  console.log(myArray);
});
