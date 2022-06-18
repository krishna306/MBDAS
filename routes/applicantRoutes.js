const router = require("express").Router();

const Applicant = require("../model/Applicant");
router.post("/",async (req,res) =>{
    try {
        const govtOfficial = await GovtOfficial.create(req.body);
        res.status(201).send(govtOfficial);
    }
    catch(error){
        console.log(error);
        res.status(400).json(error.message);
    }
})
module.exports =  router;