const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MapSchema = new Schema({
    facebook : {
        type : String,
    },
    twitter :  {
        type : String,
    },
    instagram :  {
        type : String,
    },
    linkedin :  {
        type : String,
    },
    sharefolio :  {
        type : String,
    }
});

const Cards = Schema({
    UUID : {
        type : String,
        
    },
    time : {
        type : Date,
        default : Date.now
    },
    name : {
        type : String,
        
    },
    title : {
        type : String,
        
    },
    company : {
        type : String,
       
    },
    email : {
        type : String,
        
    },
    phoneNumber : {
        type : String,
    },
    socials : {
         type : MapSchema,
         _id : false,
    }
});



module.exports = mongoose.model("Cards",Cards);