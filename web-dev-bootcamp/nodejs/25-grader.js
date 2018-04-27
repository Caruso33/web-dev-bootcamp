var average = (arr) => {
  console.log(Math.round(
      arr.reduce((a, n) => {
        return a+n;
      })/arr.length
  ));
};
average([90, 98, 89, 100, 100, 86, 94]);
average([40, 65, 77, 82, 80, 54, 73, 63, 95, 49]);
