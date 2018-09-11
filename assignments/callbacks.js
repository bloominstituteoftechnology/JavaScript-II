// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/
function firstItem(arr, cb) {
    return cb(arr[0]);
}


firstItem(items, function(first) {
    console.log(first)
});





function getLength(arr, cb) {
    return cb(arr.length);
}

getLength(items, function(len) {
    console.log(len)
});




function last(arr, cb) {
    return cb(arr[arr.length - 1]);
}
//tests function 
last(items, function(arrLast) {
    console.log(arrLast)
});



function sumNums(x, y, cb) {
    return cb(x + y);
}
//Test for sumNums
sumNums(4, 2, function(add) {
    console.log(add)
});




function multiplyNums(x, y, cb) {
    return cb(x * y);
}
//test for multiplyNums
multiplyNums(4, 2, function(mult) {
    console.log(mult);
});




function contains(item, list, cb) {
    if (list.includes(item)) {
        return cb(true);
    } else {
        return cb(false);
    }
}
//test for contains
contains('Gum', items, function(purseHas) {
    console.log(purseHas)
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
    let newArr = array.filter(function(element, index, self) {
        return index == self.indexOf(element);
    });
    return cb(newArr);
}