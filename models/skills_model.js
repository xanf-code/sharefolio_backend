const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Skills = Schema({
    UUID : {
        type: String,
        required : true
    },
    skills : [String],
});

module.exports = mongoose.model("Skills",Skills);