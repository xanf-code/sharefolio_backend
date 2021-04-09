const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MapSchema = new Schema({
    facebook : {
        type : String,
        default : " ",
    },
    twitter :  {
        type : String,
        default : " ",
    },
    instagram :  {
        type : String,
        default : " ",
    },
    linkedin :  {
        type : String,
        default : " ",
    },
    sharefolio :  {
        type : String,
        default : " ",
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