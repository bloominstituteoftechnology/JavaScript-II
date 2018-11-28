// Look up what an IIFE is in JavaScript and experiment with them

// First attempt at an IIFE
(function() {
  console.log("Hello World!");
})();

// Second attempt at an IIFE
const outsideFunction = (function() {
  console.log("IIFEs are sweet!");
})(function() {
  outsideFunction();
});
