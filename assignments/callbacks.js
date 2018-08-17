const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  cb(arr[0]);
 
 } ; 
 firstItem(items, firstItem=>{
     console.log(firstItem);
 })
  // firstItem passes the first item of the given array to the callback function.


  function getLength(arr, cb) {
    cb(arr.length);
};
getLength(items,length=>{
    console.log(length);
});
  // getLength passes the length of the array into the callback.


  function last(arr, cb) {
    cb(arr[arr.length-1]);
  }
last(items, lastItem=>{
    console.log(lastItem);
});
    // last passes the last item of the array into the callback.

function sumNums(x, y, cb) {
  cb(x+y);
};
sumNums(10,10, sum =>{
    console.log(sum);
})
  // sumNums adds two numbers (x, y) and passes the result to the callback.


function multiplyNums(x, y, cb) {
   cb(x*y);
};
multiplyNums(10,10, product=>{
    console.log(product);
})
  // multiplyNums multiplies two numbers and passes the result to the callback.


  function contains(item, list, cb) {
    function isIn(){
      for (let i =0;i<items.length;i++){
          if(items[i]===list){
              return true;
          }
       } return false;
      };
      cb(isIn());
  };
  
  contains(items,'what',result=>{
      console.log(result ? true : false);
  });

