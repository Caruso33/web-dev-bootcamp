
var printReverse = (array) => {
  for(var i = array.length; i > 0; i--){
    console.log(i);
  }
};

printReverse([1,2,3,4,5,6]);
printReverse(['a','b','c']);



var isUniform = (arr) => {
  for(var i=1;i<arr.length;i++){
    if(arr[i] !== arr[0]) {
      return false;
    };
  };
  return true;
};

//Doesnt work
// var isUniform = (arr) => {
//   arr.forEach((item) => {
//     if(item !== arr[0]) {
//       return false;
//     };
//   });
//     return true;
// };

isUniform([1,1,1,1]);
isUniform([2,1,1,1]);
isUniform(['a','b','p']);
isUniform(['b','b','b']);



var sumArray = (arr) => {
  var sum = 0;
  arr.forEach((item) => {
    sum += item;
  });
  return sum;
};

sumArray([1,2,3]);
sumArray([10,3,10,4]);
sumArray([-5,100]);


var max = (arr) => {
  var max = arr[0];
  arr.forEach((item) => {
    if(item > max) max = item;
  });
  return max;
};

max([1,2,3]);
max([10,3,10,4]);
max([-5,100]);
