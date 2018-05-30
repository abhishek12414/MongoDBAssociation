const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/blog_demo_2');

const Post = require('./models/post');
const User = require('./models/user');

Post.create({
    title: "Post 4",
    content: 'This is content 4'
}, (err, post)=> {
    if(err)
        console.log(err);
    else {
        User.findOne({email: 'bob@gmail.com'}, (err, foundUser)=>{
            if(err)
                console.log(err)
            else
                foundUser.posts.push(post);
                foundUser.save((err, data)=>{
                    if(err)
                        console.log(err);
                    else
                        console.log(data);
                });
        });
    }
});

// User.create({
//     email: 'bob@gmail.com',
//     name: 'Bob Belcher'
// });


//Find user
//find all posts for that user

// User.find({email: 'bob@gmail.com'}).populate('posts').exec((err, user)=>{
//     if(err)
//         console.log(err);
//     else {
//         console.log(user);
//     }
// });