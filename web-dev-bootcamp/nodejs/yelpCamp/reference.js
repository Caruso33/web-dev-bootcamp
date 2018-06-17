var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog_demo');

var postSchema = new mongoose.Schema({
  title: String,
  content: String
});

var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Posts'
  }]
});

var User = mongoose.model('User', userSchema);
var Post = mongoose.model('Post', postSchema);

// User.create({
//   email: 'bob@gmail.com',
//   name: 'Bob Belcher'
// });

// Post.create({
//   title: 'How to cook the best burger Pt2 ',
//   content: 'blah blah'
// }, (err, post) => {
//   User.findOne({email: 'bob@gmail.com'}, (err, foundUser) => {
//     if (err) {
//         console.log(err);
//       } else {
//         foundUser.posts.push(post);
//         foundUser.save((err, data) => {
//           if (err) {
//               console.log(err, data);
//             } else {
//               console.log(data);
//             }
//         });
//       }
//   });
// });

//retrieve data
User.findOne({email: 'bob@gmail.com'}).populate('posts').exec((err, user) => {
  if(err){
    console.log(err);
  } else {
    console.log(user);
  }
});
