// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const math = (a, b) => {
  let multi = a * b
  console.log(multi)

  const square = (a, b) => {
    let aSquare = Math.sqrt(multi)
    console.log(aSquare)

    const floor = (a, b) => {
      let aFloor = Math.floor(aSquare)
      console.log(aFloor)
    }
    return floor()
  }
  return square()
}
math(100, 3)

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0
  return () => {
    count++
    return count
  }
}
const newCounter = counter()
console.log(newCounter()) // 1
console.log(newCounter()) // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let factory = 0
  return {
    increment: () => ++factory,
    decrement: () => --factory,
    value: () => factory
  }
}

let newFac = counterFactory()
console.log(newFac.decrement())
console.log(newFac.decrement())
console.log(newFac.increment())
