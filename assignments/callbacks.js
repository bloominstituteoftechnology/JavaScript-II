const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Gum'];

function firstItem(arr, cb) {
  cb(arr[0])
}

firstItem(items, function(firstItem) {
    console.log(firstItem)
});

function getLength(arr, cb) {
  cb(arr.length)
}

getLength(items, function(length) {
    console.log(length);
});

function last(arr, cb) {
  cb(arr[arr.length - 1])
}

last(items, function(lastItem) {
    console.log(lastItem);
});

function sumNums(x, y, cb) {
    cb(x + y)
}

sumNums(1, 2, function(sum) {
    console.log(sum);
});

function multiplyNums(x, y, cb) {
  cb(x * y)
}

multiplyNums(2, 2, function(prod) {
    console.log(prod);
});

function contains(item, list, cb) {
  cb(!!list.find(l => l === item))
}

contains("Pencil", items, function(exists) {
    console.log(exists);
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
    cb(Array.from(new Set(array))
)
}

removeDuplicates(items, function(duplicateFree) {
    console.log(duplicateFree);
});
