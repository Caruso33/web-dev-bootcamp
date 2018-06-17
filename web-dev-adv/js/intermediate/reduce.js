var arr = [1,2,3,4,5];

var x = arr.reduce((accumulator, nextValue) => {
  return accumulator + nextValue;
}, arr[1]);
console.log( x);

// function reduce (array, callback) {
//   var newArray = [ ];
//   for (var i = 0; i < array.length; i++) {
//     if (callback(array[i])) {
//       newArray.push(callback(array[i], i, array));
//     }
//   }
//   return newArray;
// }
