const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];


function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[0]);
};
// 

firstItem(items, firstItemCBDef => {
  console.log(`This is the first item: ${firstItemCBDef}`);
}) 

// This is the first item: 'Pencil'

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
};
getLength(items, getLength => {
  console.log(`The length of the array is ${getLength}`);
});




function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length-1]);
};

last(items, last => {
  console.log(`This is the last value: ${last}`);
});



function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const result = x + y;
  cb(result);
  
}

sumNums(2, 4, sumNums => {
  // const result = x + y;
  console.log(`adding two nums ${sumNums}`, )
})

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const result = x * y;
  cb(result);

}
multiplyNums(5, 7, multiplyNums => {
  console.log(`multiplying two numbers, result: ${multiplyNums}`);
})

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if(list.length <= 0) return false;
  for (let i = 0; i < list.length; i++) {
    if (item === list[i]) {
      return cb(true);
    }

  }
  return cb(false);
}

contains(item = 'Pen', items, contains => {
  if (contains) {
    console.log(`List does contain ${item}`);
    return;
  }else {
    console.log(`List does not contain ${item}`);

  }
})

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}


//Outside example
// function doHomework(subject, callback) {
//   alert(`Starting my ${subject} homework.`);
//   callback();
// }

// doHomework('math', function() {
//   alert(`Finished my homework'`);
// })