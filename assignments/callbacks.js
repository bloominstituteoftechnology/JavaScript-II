const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum']

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[0])
};

firstItem(items, length => {
  console.log(`The first item in this array is ${length}.`)
})

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length)
}

getLength(items, lengthArray => {
  console.log(`The length of the array is ${lengthArray}.`)
})

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length - 1])
};
last(items, lastArrayItem => {
  console.log(`Last item in the array is ${lastArrayItem}.`)
})

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x + y)
};
sumNums(2, 3, add => {
  console.log(`Sum is ${add}.`)
})

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x * y);
};
multiplyNums(5, 15, multiply => {
  console.log(`The multiplication of the numbers is ${multiply}`)
})
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  const inArray = () => {
    for (let i = 0; i < item.length; i++) {
      if (item[i] === list) {
        return true
      }
    } return false
  }
  cb(inArray())
};
contains(items, 'Gum', results => {
  console.log(results ? 'Gum is in the array' : 'Gum is not in the array.')
})

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
