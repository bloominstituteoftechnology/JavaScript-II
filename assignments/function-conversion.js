
// let myFunction = function () {};

// let anotherFunction = function (param) {
//   return param;
// };

let anotherFunction = (param) => {
    return param; 
}

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

let add = (parma1, param2) => {
    return parma1 + param2;
}


// let subtract = function (param1, param2) {
//   return param1 + param2;
// };

let subtract = (param1, param2) =>{
    return param1 - param2;
}

subtract(1,2); 

exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
const triple = exampleArray.map((num) =>{
    return num*3; //?
})
console.log(triple);