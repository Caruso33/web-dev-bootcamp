const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hi there, welcome to my assignment!');
})
app.get('/speak/:animal', (req, res) => {
  var animal = req.params.animal.toLowerCase();
  var sounds = {
    'pig':"Oink",
    'cow': "Moo",
    'dog': "Woof Woof!",
    cat: 'I hate you human',
    goldfish: '...'
  }
  sound = sounds[animal];
  res.send(`The ${animal} says \'${sound}\'`);
})

app.get('/repeat/:message/:times', (req, res) => {
  var message = req.params.message;
  var times = req.params.times;
  res.send(`${message} `.repeat(Number(times)));

})
app.get('*', (req, res) => {
  res.send('Sorry, page not found....What are you doing with your life?')
})
app.listen(3000, () => {
  console.log('Server running 3000');
});
