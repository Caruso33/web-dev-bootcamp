var arr = [1,2,3];

arr.forEach((val, ind, array) => {
  console.log(val, ind, array);
})

function forEach (array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}
