const { query } = require("express");
const express = require("express");
const Cards = require("../models/cards_model");

const router = express.Router();

router.post("/add" , async(req,res) => {
    try{
        const cards = Cards({
            UUID : req.body.UUID,
            name : req.body.name,
            title : req.body.title,
            company : req.body.company,
            email : req.body.email,
            phoneNumber : req.body.phoneNumber,
            socials : {
                facebook : req.body.socials.facebook,
                twitter : req.body.socials.twitter,
                instagram : req.body.socials.instagram,
                linkedin : req.body.socials.linkedin,
                sharefolio : req.body.socials.sharefolio
            }
        });
        await cards.save().then(() => {
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
        const result = await Cards.find({UUID : req.params.UUID}, "-__v");
        res.status(200).json({
            Type : "Cards",
            status : "OK",
            totalResults : result.length.toString(),
            isFilled : result.length > 0 ? true : false,
            UUID : req.params.UUID,
            cards : result,
        });
    }
    catch(error){
        console.log(error);
    }
})

router.delete('/delete/:id', async (req,res) => {
    try{
    const id = req.params.id;
    await Cards.findByIdAndDelete(id).then(() => {
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