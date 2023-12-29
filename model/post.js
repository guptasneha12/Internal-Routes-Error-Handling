const mongoose=require("mongoose");

// post schema
const postSchema=new mongoose.Schema({
    title:{
        type:String,
        reuired:true,
    },
    content:{
        type:String,
        reuired:true,
    },
});


const Post=mongoose.model("Post",postSchema);

module.exports=Post;