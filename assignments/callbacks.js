const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  return cb(arr[0]);  
}

function getLength(arr, cb) {
  return cb(arr.length);
}

function last(arr, cb) {
  return cb(arr[arr.length-1]);
}

function sumNums(x, y, cb) {
  return cb(x + y);
}

function multiplyNums(x, y, cb) {
  return cb(x * y);
}

function contains(item, list, cb) {
  let check = false;
  list.forEach(element => {if (element === item) { 
    check = true;}
  });
  return cb(check);
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  let newarr = [];
  array.forEach(item => {newarr.push(item);})
  newarr.sort();
  
  
  for(i=0; i< newarr.length;) {
    if (newarr[i] === newarr[i+1]) {
      newarr.splice(i, 1);
    } else {
      i++;
    }
  }
  
  return cb(newarr);
  }
  


const callback = (item) => {
  console.log(item);
}

const duplist = ['dog', 'cat', 'dog', 'dog', 'cat', 'horse'];

removeDuplicates(duplist, callback);