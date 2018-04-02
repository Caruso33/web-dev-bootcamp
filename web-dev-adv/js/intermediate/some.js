var arr = [1,2,3];

var x = arr.some((value, index, array) => {
  return value < 2;
});
console.log( x);

function some (array, callback) {

  for (var i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return true;
    }
  }
  return false;
}
