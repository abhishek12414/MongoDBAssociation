const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/blog_demo')

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
    posts: [postSchema]
});

const User = mongoose.model('User', userSchema);

// const newUser = new User({
//     email: 'charlie@brown.edu',
//     name: 'Charlie Brown'
// });

// newUser.posts.push({
//     title: 'How is this title',
//     content: 'Just kidding. '
// })

// newUser.save((err, user)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// const newPost = new Post({
//     title: 'Reflections on Apples',
//     content: 'They are delicious'
// });

// newPost.save((err, post)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

//finding data

User.findOne({name:'Charlie Brown'}, (err, user) =>{
    if(err)
        console.log(err)
    else {
        user.posts.push({
            title: '3 Things',
            content: 'This is the new thing.'
        });
        user.save((err, user)=>{
            if(err)
                console.log(err);
            else   
                console.log(user);
        });
    }
});