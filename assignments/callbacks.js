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


function getLength(arr, cb) {
    return cb(arr.length)
}

function findLength()

getLength(items, function(length) {
    return length
})

function last(arr, cb) {
    return cb(arr[arr.length - 1])
}

last(items, function(getLast) {
    return getLast
})

function sumNums(x, y, cb) {
    return cb(x + y)
        // sumNums adds two numbers (x, y) and passes the result to the callback.
}

sumNums(1, 1, function(getSum) {
    return getSum
})

function multiplyNums(x, y, cb) {
    return cb(x * y)
        // multiplyNums multiplies two numbers and passes the result to the callback.
}

multiplyNums(3, 3, function(getSum) {
    return getSum
})


function contains(item, list, cb) {
    if (list.find(b => b === item)) {
        return cb(true)
    } else {
        return cb(false)
    }
}


contains(2, items, function(a) {
    return a
})




// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.
function contains(item, list, cb) {
    return cb(item, list)
}

contains('Gum', items, function(trueOrFalse) {
    for (let i = 0; i < items.length; i++) {
        if (arguments[0] === items[i]) {
            return true
        }

    }
    return false
})

function contains(item, list, cb) {
    for (let i = 0; i < items.length; i++) {
        if (arguments[0] === items[i]) {
            return true
        }

    }
    return false
}


/* STRETCH PROBLEM */
function removeDuplicates(arr, cb) {
    return arr = cb([...new Set(arr)])
}

removeDuplicates(items, function(a) {
    return a
})


function removeDuplicates(array, cb) {
    return cb([...new Set(array)])
}

removeDuplicates(items, function(nonDuplicate) {
    return nonDuplicate
})



function removeDuplicates(arr, cb) {
    return cb(arr)
}

function remover(arr) {
    return arr = [...new Set(arr)]
}


removeDuplicates(a, function() {
    let b = [...new Set(a)]
    return b
})