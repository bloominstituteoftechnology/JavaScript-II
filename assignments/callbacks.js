const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
const lists = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItemcb(arr) {
  return (arr[0])
};

function cb2(arr) {
  return (arr.length)
};

function cb3 (arr) {
  return (arr[arr.length-1])
};

function cb4 (x, y) {
  return x + y;
}

function cb5 (x,y) {
  return x * y;
}


//-----------------------------------------------------------------------------
function firstItem(arr, cb) {  
  // firstItem passes the first item of the given array to the callback function.    
  return cb(arr); 
}
console.log(firstItem(items, firstItemcb));



function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr)
}
console.log(getLength(items, cb2));


function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}

console.log(last(items, cb3));


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x,y);
}

console.log(sumNums(2,3, cb4))

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x,y);  
}

console.log(multiplyNums(2,3,cb5));


function checks (item, list){  
  let temp =0;
  // list.forEach(element => {
  //   if (element == item) {
  //     temp += 1;
  //     return true; 
  //     console.log(element);      
  //   }
  // });
  // if( temp = 0){
  //   return false;
  //   console.log(item);
  // }
// list.forEach(element => {
//   if (item == element) {
//     return true;
//   }
// });

for (let i = 0; i < list.length; i++) {
  if (item == list[i]) {
    temp++
    console.log(temp);    
    return true;
  }   
  if (temp ==0){
    return false;
  }
}

list.forEach(element => {
  if(item == element){
    return true;
  }
});



  // if (item == list[0]) {
  //   console.log(item);    
  //   return true;
  // } 

 
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  console.log(cb(item, list));
  
  if(cb(item, list) == true){
    return `${item} is here`
  }else if(cb(item, list) == false){
    return `${item} is not here`
  } 

}

console.log(contains("Pencil", items, checks ));


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
