var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Campground = require('./models/campground'),
    Comment = require('./models/comment'),
    // User = require('./models/user'),
    seedDB = require("./seeds");

seedDB();
mongoose.connect('mongodb://localhost/yelp_camp');
app.use(express.static('public'));



app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('landing')
})

app.get('/campgrounds', (req, res) => {
  Campground.find({}, (err, allCampgrounds) => {
      if(err) console.log('Error retrieving db entries')
      else{
          res.render('index', {campgrounds:allCampgrounds})
      }
  })
})

app.post('/campgrounds', (req, res) => {
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  Campground.create({
    name, image, description: desc
  }, (err, newlyCreated) => {
    if(err) console.log('Error posting to DB')
     else{
        res.redirect('/campgrounds')
     }
  })

})

app.get('/campgrounds/new', (req, res) => {
  res.render('new.ejs')
})

app.get('/campgrounds/:id', (req, res) => {//populate comments of campgrounds - which got only referenced
  Campground.findById(req.params.id).populate('comments').exec(function(err, foundCampground) {

    if(err) console.log('Error finding ID in Database');
    else{
      res.render('show', {campground: foundCampground})
    }
  })
})
app.listen(process.env.PORT, process.env.IP, () => {
  console.log('YelpCamp Server has started');
})
