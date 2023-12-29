const express=require('express');
const AppErr = require('./utils/AppErr');
// const appErr = require('./utils/AppErr');

const app=express();


//GET 
app.get('/',(req,res,next)=>{
    let networkIsLive=false;
    if(!networkIsLive){
        const err= new AppErr('Network Error',500);
        return next(err);
    }
    res.json({
        message:"Welcome to Error Handling",
    });
});

// GET/ profile
app.get('/profile',(req,res,next)=>{
    let isLogin=false;
    if(!isLogin){
        const err= new AppErr('You are not logged in',401);
        return next(err);    // this is error constructor function
    }
    res.json({
        message:"Welcome to Profile page",
    });
});


// 404 error handling
// app.all is for universal end point
// if any of the route does'nt exit then this message displays
app.all("*",(req,res,next)=>{
    console.log(req.originalUrl);     // this is the url the user is requesting for
    res.status(404).json({
msg:`${req.originalUrl} not Found`,
    })
}) 





// Global error handling middleware to display beautiful error message
// err contains the error that we passed into the next
app.use((err,req,res,next)=>{
    // console.log(err.message)
   // status code // 404
   // status: 'failed' or 'success'
   // actual message 


   res.status(err.statusCode).json({
    // status:'Failed',
    message:err.message,
    stack:err.stack,
   })


})






// start the server

const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is started on port ${port}`);
});