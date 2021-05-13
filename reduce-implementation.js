module.exports = function reduce(arr, fn, initial) {
  // poem ~ credit nodeschool
  return (function iterator(index, value){
    if(index > arr.length - 1) return value;
    return iterator(index + 1, fn(value, arr[index], index, arr ));
  })(0, initial);
}
