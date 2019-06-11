// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

//*const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

    // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/
const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

//console.log(items)

let arr = items

function firsty(arr) {
let first =arr[0];
return first
}

function firstItem (arr,cb){
let first1 = cb(arr);
return first1
}

console.log("The first item is a " + firstItem(items,firsty) +"Right? Am I right?")




//function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.


  function lengthy(arr) {
    let theLength = arr.length;
    return theLength
    }
    
    function getlength(arr,cb){
    let length1 = cb(arr);
    return length1
    }
    
    console.log("There are about: "+getlength(items,lengthy) + " items. More or less.")
  





//function last(arr, cb) {
  // last passes the last item of the array into the callback.




  function lasty(arr) {
    let last1 = arr[arr.length - 1];
  return last1
  }
  
  function lastItem (arr,cb){
  let last2 = cb(arr);
  return last2
  }
  
  console.log("The last item? " + lastItem(items,lasty)+".") 




// function sumNums(x, y, cb) {
//   // sumNums adds two numbers (x, y) and passes the result to the callback.
// sumNums()
// }




let adds = (x,y) =>  x + y;
  

function sumNums(x, y, cb) {
  let sum = cb(x,y);
return sum
}

console.log("Add them and you get " + sumNums(2,3,adds)+".") 


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

let sums = (x,y) =>  x * y;
  

function multiplyNums(x, y, cb) {
  let product = cb(x,y);
return product
}

console.log("Multiply them and you get " + sumNums(2,3,adds)+"...  What?") 





function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

const oklahomaHeros = ["Will Rogers", "The Flaming Lips", "Garth Brooks", "Dr. Phil", "Chuck Norris"]   

const array = oklahomaHeros

checkName="Kevin Durant"

function heroOrGoat(array, checkName) {
let hOg = arr.includes(checkName);
return hOg
}

function checkHero(arr,checkName) {
  let heroStatus = heroOrGoat(arr, checkName)
  return heroStatus
}

console.log("Well, looks like to say that " + checkName +" is a hero would be " + checkHero(oklahomaHeros, "Kevin Durant") )




/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
