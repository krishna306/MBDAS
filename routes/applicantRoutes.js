const router = require("express").Router();

const { application } = require("express");
const { authUser } = require("../middleware/auth");
const Applicant = require("../model/Applicant");
router.post("/",async (req,res) =>{
    let applicant ={} ;
    try {
         applicant = await Applicant.create(req.body);
        res.status(201).send(applicant);
    }
    catch(error){
        applicant = await Applicant.findOne({email:req.body.email});
        res.status(400).json(applicant);
    }
})

module.exports =  router;