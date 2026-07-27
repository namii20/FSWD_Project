const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username : {
        type : String,
        unique : true,
        required :true,
    },
    password:{
        type : String,
        required:true,
    },email:{
        type:String,
        required:true,
        unique:true,
    },role:{
        enum:['user','admin'],
        default:'user',
        type:String,
    }
})

const Usermodel = new mongoose.model("user",userSchema);
module.exports = Usermodel;


