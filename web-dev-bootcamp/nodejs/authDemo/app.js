const express                = require('express'),
      app                    = express(),
      passport               = require('passport'),
      LocalStrategy          = require('passport-local'),
      passportLocalMongoose  = require('passport-local-mongoose'),
      mongoose               = require('mongoose'),
      bodyParser             = require('body-parser'),
      User                   = require('./models/user');
mongoose.connect('mongodb://localhost/auth_demo_app');

app.set('view engine', 'ejs');
app.use(passport.initialize());
app.use(passport.session());
app.use(require('express-session')({
  secret: 'Rusty is the best and cutest dog in the world',
  resave: false,
  saveUninitialized: false
}));
app.use(bodyParser.urlencoded({extended: true}))

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//======================
//ROUTES
//======================

app.get('/', (req, res) => {
  res.render('home');
});
app.get('/secret',isLoggedIn, function(req, res){
  res.render('secret');
});
app.get('/register', (req, res) => {
  res.render('register');
});
app.post('/register', (req, res) => {
  req.body.username;
  req.body.password;
  User.register(new User({username: req.body.username}),
    req.body.password, (err, user) => {
      if (err) {
        console.log(err);
        return res.render('register');
      }
      passport.authenticate('local')(req, res, ( ) => {
        res.redirect('secret');
      })
    })
});


app.get('/login', (req, res) => {
  res.render('login');
});
//middleware as 2nd argument
app.post('/login', passport.authenticate('local', {
    successRedirect: '/secret',
    failureRedirect: '/login'
  }), (err) => {
    if (err) {
      console.log(err);
    }
});

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/login');
}


app.listen(3000, () => {
  console.log("Server started....");

})
