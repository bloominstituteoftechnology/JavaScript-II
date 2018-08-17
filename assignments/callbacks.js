const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
	cb = arr[0];
	console.log(cb);
	return cb;
}

firstItem(items,null);

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
	cb = arr.length;
	console.log(cb);
	return cb;

}

getLength(items,null);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
	arrLength = arr.length;
	cb = arr[arrLength-1];
	console.log(cb);
	return cb;
}

last(items,null);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
	cb = x + y;
	console.log(cb);
	return cb;

}

sumNums(2,4,null);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
	cb = x * y;
	console.log(cb);
	return cb;

}

multiplyNums(2,10,null);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
	cb = false;

	for(let i=0;i<list.length;i++){
		if(item == list[i]){
			cb = true;
		}
	}

	console.log(cb);
	return cb;
}

// True callback
contains("Gum",items,null);
// False callback
contains("Pack of Smokes",items,null);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
