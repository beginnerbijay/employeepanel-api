const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fname:{
        type:String,
        required:true,
        minLength:3
    },
    lname:{
        type:String,
        required:true,
        minLength:3
    },
    sex:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        min:10
    },
    email:{
        type:String,
        required:true,
        minLength:3
    },
    job:{
        type:String,
        required:true,
        minLength:3
    },
    add:{
        type:String,
        required:true,
        minLength:3
    },
    image:{
        type:String
    }
});
 
const Client = new mongoose.model("Client",userSchema);
module.exports = Client;