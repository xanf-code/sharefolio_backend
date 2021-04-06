const express = require("express");
const Skills = require("../models/skills_model");

const router = express.Router();

router.post("/add" , async(req,res) => {
    try{
        const skills = Skills({
            UUID : req.body.UUID,
            skills : req.body.skills,
        });
        await skills.save().then(() => {
            res.status(200).json(skills);
        });
    }
    catch(error){
        console.log(error);
    }
});

router.get("/:UUID", async (req,res) => {
    try{
        const result = await Skills.find({UUID : req.params.UUID}, "-__v");
        res.status(200).json({
            Type : "Skills",
            status : "OK",
            totalResults : result.length.toString(),
            UUID : req.params.UUID,
            skills : result[0]["skills"],
        });
    }
    catch(error){
        res.status(500).json({
            status : "OK",
            data: "Data not available"
        });
    }
})

router.patch('/update/:UUID', async (req,res) => {
    try{
    const options = { returnNewDocument: true };
    const updates = req.body;
    await Skills.findOneAndUpdate({"UUID" : req.params.UUID} , {$set : updates }, options, "-__v").then(() => {
        res.status(200).json("Updated");
    });
    }
    catch(error){
        console.log(error);
    }
});

module.exports = router;