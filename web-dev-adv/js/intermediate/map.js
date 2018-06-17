var arr = [1,2,3];

arr.map((value, index, array) => {
  return value * 2;
})

function map (array, callback) {
  var newArray = [ ];
  for (var i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
  }
  return newArray;
}
