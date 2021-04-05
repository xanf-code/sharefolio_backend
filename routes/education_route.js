const express = require("express");
const Education = require("../models/education_model");

const router = express.Router();

router.post("/add" , async(req,res) => {
    try{
        const education = Education({
            UUID : req.body.UUID,
            description : req.body.description,
            endDate : req.body.endDate,
            startDate : req.body.startDate,
            field: req.body.field,
            logo : req.body.logo,
            name : req.body.name,
            type : req.body.type,
        });
        await education.save().then(() => {
            res.status(200).json(education);
        });
    }
    catch(error){
        console.log(error);
    }
});

router.get("/:UUID", async (req,res) => {
    try{
        const result = await Education.find({UUID : req.params.UUID});
        res.status(200).json({
            Type : "Education",
            status : "OK",
            totalResults : result.length.toString(),
            UUID : req.params.UUID,
            education : result,
        });
    }
    catch(error){
        console.log(error);
    }
})

router.patch('/update/:id', async (req,res) => {
    try{
    const options = { returnNewDocument: true };
    const id = req.params.id;
    const updates = req.body;
    await Education.findByIdAndUpdate(id , updates , options).then(() => {
        res.status(200).json("Updated");
    });
    }
    catch(error){
        console.log(error);
    }
});

module.exports = router;