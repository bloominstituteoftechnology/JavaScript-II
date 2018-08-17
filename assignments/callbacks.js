const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];


  // firstItem passes the first item of the given array to the callback function.
function getFirstElement(arr){
	return arr[0];
}

function firstItem(arr,cb){
	return cb(arr);
}

console.log(firstItem(items,getFirstElement));
//////////////////////////////////////////////

function getArrLen(arr){
	return arr.length;
}

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
	return cb(arr);
}
console.log(getLength(items,getArrLen));
//////////////////////////////////////////////

function getLast(arr){
	return arr[arr.length - 1];
}

function last(arr, cb) {
  // last passes the last item of the array into the callback.
	return cb(arr);
}

console.log(last(items,getLast));
//////////////////////////////////////////////

function getSum(num1,num2){
	return num1 + num2;
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
	return cb(x,y);
}

console.log(sumNums(5,9,getSum));
//////////////////////////////////////////////

function getProd(num1,num2){
	return num1 * num2;
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
	return cb(x,y);
}

console.log(multiplyNums(2,10,getProd));
//////////////////////////////////////////////

function doesInclude(item,arr){
	for(let i=0;i<arr.length;i++){
		if(item == arr[i]){
			return true;
		}
	}
	return false;
}


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
	return cb(item,list);
}

// False callback
console.log(contains("Lel",items,doesInclude));
// True callback
console.log(contains("Gum",items,doesInclude));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
