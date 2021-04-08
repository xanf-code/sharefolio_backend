const express = require("express");
const ShareFolio = require("../models/portfolio_model");

const router = express.Router();

router.post("/add" , async(req,res) => {
    try{
        const sharefolio = ShareFolio({
            UUID : req.body.UUID,
            Name : req.body.Name,
            Type: req.body.Type,
            Bio : req.body.Bio,
            Location : req.body.Location,
        });
        await sharefolio.save().then(() => {
            res.status(200).json({
                Status : "OK",
            });
        });
    }
    catch(error){
        console.log(error);
    }
});

router.get("/:UUID", async (req,res) => {
    try{
        const result = await ShareFolio.find({UUID : req.params.UUID}, "-__v");
        res.status(200).json({
            isFilled : result.length > 0 ? true : false,
            Name: result[0].Name,
            Type: result[0].Type,
            Bio: result[0].Bio,
            Location: result[0].Location,
            _id: result[0]._id,
            UUID: result[0].UUID,
        });
    }
    catch(error){
        console.log(error);
    }
})

router.patch('/update/:UUID', async (req,res) => {
    try{
    const options = { returnNewDocument: true };
    const updates = req.body;
    await ShareFolio.findOneAndUpdate({"UUID" : req.params.UUID} , {$set : updates }, options).then(() => {
        res.status(200).json({
            Status : "OK",
        });
    });
    }
    catch(error){
        console.log(error);
    }
});

module.exports = router;

