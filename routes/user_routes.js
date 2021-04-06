const express = require("express");
const User = require("../models/users_model");

const router = express.Router();


router.route("/register").post((req,res) => {
    const user = new User({
        username : req.body.username,
        email : req.body.email,
        UUID : req.body.UUID,
    });

    user.save().then(() => {
        console.log("User Added");
        req.status(200).json("ok");
    }).catch((err) => {
        res.status(403).json({msg : err});
    });
});

module.exports = router;