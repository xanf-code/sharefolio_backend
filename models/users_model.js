const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = Schema({
    username : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    UUID : {
        type : String,
        required : true,
        unique : true,
    }
});

module.exports = mongoose.model("User",User);