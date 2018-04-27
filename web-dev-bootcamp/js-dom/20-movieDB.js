var movies = [
  {
    title: 'Fight Club',
    rating: 10,
    hasWatched: true
  },
  {
    title: 'Brugge: see and die',
    rating: 7,
    hasWatched: false
  },
  {
    title: 'Private James Ryan',
    rating: 8,
    hasWatched: true
  },
];

movies.forEach( (elem) => {
  var result = 'You have ';
  if(elem.hasWatched){
    result += 'watched';
  } else {
    result += 'not seen';
  }
  result += "\"" + elem.title + '\" - ';
  result += elem.rating + ' of 10.';
  console.log(result);
});
