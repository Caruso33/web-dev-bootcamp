var arr = [1,2,3];

var x = arr.every((value, index, array) => {
  return value % 2 === 0;
});
console.log( x);

function every (array, callback) {

  for (var i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      return false;
    }
  }
  return true;
}
