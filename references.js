const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/blog_demo_2')

// POST - title, content
const postSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Post = mongoose.model('Post', postSchema);

// USER - email, name
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
});

const User = mongoose.model('User', userSchema);

// Post.create({
//     title: "Post 3",
//     content: 'This is content 3'
// }, (err, post)=> {
//     if(err)
//         console.log(err);
//     else {
//         User.findOne({email: 'bob@gmail.com'}, (err, foundUser)=>{
//             if(err)
//                 console.log(err)
//             else
//                 foundUser.posts.push(post);
//                 foundUser.save((err, data)=>{
//                     if(err)
//                         console.log(err);
//                     else
//                         console.log(data);
//                 });
//         });
//     }
// });

// User.create({
//     email: 'bob@gmail.com',
//     name: 'Bob Belcher'
// });


//Find user
//find all posts for that user

User.find({email: 'bob@gmail.com'}).populate('posts').exec((err, user)=>{
    if(err)
        console.log(err);
    else {
        console.log(user);
    }
});