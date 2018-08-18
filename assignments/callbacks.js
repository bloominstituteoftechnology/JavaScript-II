const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function getFirstElement(array){      // function for firstItem
  return array[0];
}

function firstItem(arr, cb) {
  return cb(arr);
}
firstItem(items, getFirstElement);



function getArrayLength(array){        // function for getLength
  return array.length;
}

function getLength(arr, cb) {
  return cb(arr);
}
getLength(items, getArrayLength);


function getLastItem(array) {            // function for last
  return array[array.length - 1];
}

function last(arr, cb) {
  return cb(arr);
}
last(items, getLastItem);


function getSum(num1, num2) {            // function for sumNums
  return num1 + num2;
}

function sumNums(x, y, cb) {
  return cb(x, y);
}
sumNums(3, 5, getSum);


function getProduct(num1, num2) {        // function for multiplyNums
  return num1 * num2;
}

function multiplyNums(x, y, cb) {
  return getProduct(x, y);
}
multiplyNums(4, 5, getProduct);


function doesInclude(item, array) {
  return array.includes(item);
}


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
    return cb(item, list);

}

contains('spoon', items, doesInclude);

/* STRETCH PROBLEM */                                // added space with ' pear' on purpose
let arrWithDups = [1, 2, 1, 'kiwi', 'apple', 2, 3, 5, ' pear' , 'apple', 4, 5, 3, 4, 'pear', 4, 4, {name: 'Steve'},
  {name: 'Allison'}, 4, {name: 'Allison'} ];    // does not work with objects in array so well

function removeDups(array) {
  let makeSet = array.sort().reduce((accum, current) => {
    const accLength = accum.length;
    if( (accLength === 0 || accum[accLength - 1])  !== current) {    // added parenthesis to focus logic
      accum.push(current);
    }
    return accum;
  }, [] );
  return makeSet;
}


function removeDuplicates(array, cb) {      // EXAMPLE on MDN
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb(array);

}

removeDuplicates(arrWithDups, removeDups);