// Potential Solution:
// Higher order function using "cb" as the call back
function firstItem(arr, cb) {
  return cb(arr[0]);
}
