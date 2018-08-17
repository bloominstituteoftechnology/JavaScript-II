const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function itemZero(item) {
    console.log(item);
}

function firstItem(arr, cb) {
    let item = arr[0];
    return cb(item);
}

firstItem(items, itemZero);

function sayLength(length) {
    console.log(length);
}

function getLength(arr, cb) {
    // getLength passes the length of the array into the callback.
    let length = arr.length;
    return cb(length);
}
getLength(items, sayLength);

function sayLast(item) {
    console.log(item);
}

function last(arr, cb) {
    // last passes the last item of the array into the callback.
    let lastItem = arr[arr.length - 1]
    return cb(lastItem);
}
last(items, sayLast)

function logSum(sum) {
    console.log(sum);
}

function sumNums(x, y, cb) {
    // sumNums adds two numbers (x, y) and passes the result to the callback.
    let sum = x + y;
    return cb(sum);
}
sumNums(3, 4, logSum);


function multiplyNums(x, y, cb) {
    // multiplyNums multiplies two numbers and passes the result to the callback.
    let product = x * y;
    return cb(product);
}

function multiply(num) {
    console.log(num);
}
multiplyNums(6, 3, multiply);

function contains(item, list, cb) {
    // contains checks if an item is present inside of the given array/list.
    // Pass true to the callback if it is, otherwise pass false.
    if (list.includes(item)) {
        return cb(true);
    }
    return cb(false);
}

function trueOrFalse(bool) {
    console.log(bool);
}
contains("Pencil", items, trueOrFalse);
contains("apple", items, trueOrFalse);
/* STRETCH PROBLEM */
let dupes = ["first", "last", "first", "second", "array", "last", "first", "function"]

function removeDuplicates(array, cb) {
    // removeDuplicates removes all duplicate values from the given array.
    // Pass the duplicate free array to the callback function.
    // Do not mutate the original array.
    const noDupes = array.filter(function(item, index, arr) {
        return index === arr.indexOf(item);
    })
    return cb(noDupes);
}

function logArray(arr) {
    console.log(arr);
}

removeDuplicates(dupes, logArray);