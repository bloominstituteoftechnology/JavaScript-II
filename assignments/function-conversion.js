// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {};
    let myFunction =() => {
        //Do something
    }

// let anotherFunction = function (param) {
//   return param;
// };

let anotherFunction = (param => {
    return param;
})

// let add = function (param1, param2) {
//   return param1 + param2;
// };
let add = (a,b) => {
    return a + b;
    // console.log( a + b);
}
add(1,2);

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
let subtract = (a,b) => {
    return a - b;
    // console.log(a - b);
}

subtract(1,2);

exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
const triple = exampleArray.map((num) => {
    // return num * 3;
    console.log(num * 3)
})

console.log(triple);