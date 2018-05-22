const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function callback(a){
	console.log(a);
}

function firstItem(arr, cb) {
  cb(arr[0]);
}


firstItem(items, callback);

function getLength(arr, cb) {
  cb(arr.length);
}

getLength(items, callback);

function last(arr, cb) {
  cb(arr[arr.length-1]);
}

last(items, callback)

function sumNums(x, y, cb) {
  cb(x+y);
}
sumNums(1, 2, callback);

function multiplyNums(x, y, cb) {
  cb(x*y);
}
multiplyNums(3, 4, callback);

function contains(item, list, cb) {
  for(i=0;i<list.length;i++){
	  for(j=0;j<item.length;j++){
		 if(list[i]===item[j]){
			list[i]=true;
		 }
		 
	  }
  }
  for(i=0;i<list.length;i++){
	  if(list[i]!=true)
		  list[i]=false;
  }
  cb(list);
}
contains(items, ['Notebook', 'Backpack'], callback)

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
	var arr=array;
	for(i=0;i<array.length;i++){
		var str=array[i]
		for(j=0;j<array.length;j++){
			if(str===array[j] && i!=j){
			arr.splice(j, 1);
		}
		}
	}
	cb(arr);
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
removeDuplicates([1,1,1,2,3,4,4,4], callback);