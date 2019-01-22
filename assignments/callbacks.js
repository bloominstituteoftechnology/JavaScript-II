// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];


function firstItem(arr, cb) {
    return cb(arr[0]);
}
firstItem(items, first => {
    console.log(first)
});





function getLength(arr, cb) {
    return cb(arr.length);
}

getLength(items, l => {
    console.log(l)
});




function last(arr, cb) {
    return cb(arr[arr.length - 1]);
}

last(items, arrLast => {
    console.log(arrLast)
});



function sumNums(x, y, cb) {
    return cb(x + y);
}

sumNums(4, 2, add => {
    console.log(add)
});




function multiplyNums(x, y, cb) {
    return cb(x * y);
}

multiplyNums(4, 2, mult => {
    console.log(mult);
});




function contains(item, list, cb) {
    return (list.includes(item) ? cb(true) : cb(false))
}

contains('Gum', items, myPurseHas => {
    console.log(myPurseHas)
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
    let newArr = array.filter(function (element, index, self) {
        return index == self.indexOf(element);
    });
    return cb(newArr);
}