var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/yelp_camp');

//schema
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
})

var Campground = mongoose.model('Campground', campgroundSchema);

// Campground.create(
//     {
//       name: 'Granite Hill',
//       image: 'http://fondulacpark.com/wp-content/uploads/2013/12/campground-pic-1.jpg',
//       description: 'This is a huge granite hill, no bathrooms. No water, beautiful granite!'
//     }, (err, campground) => {
//         if (err) console.log(err);
//         else{
//             console.log('newly created campground')
//             console.log(campground)
//         }
//     }
// )

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

app.get('/campgrounds/:id', (req, res) => {
  Campground.findById(req.params.id, (err, foundCampground) => {

    if(err) console.log('Error finding ID in Database');
    else{
      res.render('show', {campground: foundCampground})
    }
  });
})
app.listen(3000, () => {
  console.log('YelpCamp Server has started');
})
