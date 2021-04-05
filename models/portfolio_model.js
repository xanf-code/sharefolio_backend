const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ShareFolio = Schema({
    UUID : {
        type : String,
        required : true,
    },
    Name : {
        type : String,
        required : true,
        default : " ",
    },
    Type : {
        type : String,
        required : true,
        default : " ",
    },
    Bio : {
        type : String,
        required : true,
        default : " ",
    },
    Location : {
        type : String,
        default : " ",
    },
});

module.exports = mongoose.model("ShareFolio",ShareFolio);