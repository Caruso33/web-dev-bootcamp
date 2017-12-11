var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog_demo');

var postSchema = new mongoose.Schema({
  title: String,
  content: String
});

var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema]
});

var User = mongoose.model('User', userSchema);

var Post = mongoose.model('Post', postSchema);

// var newUser = new User({
//   email: 'charlie@brown.edu',
//   name: 'Charlie Brown',
// });
//
// newUser.posts.push({
//   title: 'How to brew polyjuice potion',
//   content: 'just kidding, go to potions class to learn it!'
// })
//
// newUser.save((err, user) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });
//
// var newPost = new Post({
//   title: 'reflections on apples',
//   content: 'they are delicious'
// });

// newPost.save((err, post) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(post);
//     }
// });

User.findOne({name: 'Charlie Brown'}, (err, user) => {
  if (err) {
    console.log(err);
  } else {
    console.log(user);

  }
});
