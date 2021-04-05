const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Education = Schema({
    description : {
        type : String,
        required : true,
    },
    name : {
        type : String,
        required : true,
    },
    type : {
        type : String,
        required : true,
    },
    field : {
        type : String,
        required : true,
    },
    logo : {
        type : String,
        required : true,
    },
    startDate : {
        type : String,
        required : true,
    },
    endDate : {
        type : String,
        required : true,
    },
    UUID : {
        type : String,
        required : true,
    }
});

module.exports = mongoose.model("Education",Education);