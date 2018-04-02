var arr = [1,2,3];

var x = arr.filter((value, index, array) => {
  return value % 2 === 0;
});
console.log( x);

function filter (array, callback) {
  var newArray = [ ];
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArray.push(callback(array[i], i, array));
    }
  }
  return newArray;
}
