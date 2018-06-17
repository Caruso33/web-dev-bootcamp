var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose'),
    methodOverride = require('method-override'),
    expressSanitizer = require("express-sanitizer");

//App config
mongoose.connect('mongodb://localhost/restful_blog');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(expressSanitizer());

//Mongoose Model config
var blogSchema = new mongoose.Schema({
title: String,
image: String,
body: String,
created: {type: Date, default: Date.now}
});

var Blog = mongoose.model('Blog', blogSchema);

// Blog.create({
//     title: 'Test Blog',
//     image: 'https://source.unsplash.com/random',
//     body: 'Ipsum Dolore hallo'
// });

// RESTful routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
})

app.get('/blogs', (req, res) => {
    Blog.find({}, (err, blogs) => {
        if(err) console.log('Error retrieving all blogs');
        else{
            res.render('index', {blogs});
        }
    })
})


app.get('/blogs/new', (req, res) => {
    res.render('new')
})
app.post('/blogs', (req, res) => {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, (err, newBlog) => {
         if(err) console.log('Error saving in database');
         else{
             res.redirect('/blogs');
         }
    })
})

app.get('/blogs/:id', (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if(err) console.log('Blog entry not found in database');
        else{
            res.render('show', {blog: foundBlog})
        }
    })
})

app.get('/blogs/:id/edit', (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
         if(err) console.log('Blog entry not found in database');
        else{
            res.render('edit', {blog: foundBlog});
        }
    })
})
app.put('/blogs/:id', (req, res) => {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, updatedBlog) => {
        if(err) console.log('Updating to database failed');
        else{
            res.redirect('/blogs/' + req.params.id);
        }
    })
})
app.delete('/blogs/:id', (req, res) => {
    Blog.findByIdAndRemove(req.params.id, (err, foundBlog) => {
         if(err) console.log('Deleting from database failed');
         else{
            res.redirect('/blogs/');
        }
    })
})
app.listen(3000, () => {
    console.log('Server is running')
})
