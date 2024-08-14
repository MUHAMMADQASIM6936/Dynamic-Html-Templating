const express=require("express");
const app=express();
const path =require('path');
app.set('view engine','ejs');


// app.set('views',path.join(__dirname,'/views'));
// app.get('/',(req,res)=>{
//     res.render('home.ejs');
// })

// app.get('/rand',(req,res)=>{
//     const num=Math.floor(Math.random()*10)+1;
//     res.render('random',{rand:num})
// })

// app.get('/r/:subreddit',(req,res)=>{
//     const {subreddit}=req.params;
//     res.render('subreddit',{subreddit});
// })

// app.use(express.static(path.join(__dirname,'public')));

// app.get('/cats',(req,res)=>{
//     const cats=['blue','montey','mickey','tom'];
//     res.render('cats',{cats});
// })

app.use(express.urlencoded({extended:true}));
app.post('/tacos',(req,res)=>{
    console.log(req.body);;
    res.send('post /tacos response');
})
app.listen(3000,()=>{
    console.log("listening at port number 3000");
})