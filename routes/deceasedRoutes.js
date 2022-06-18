const router = require("express").Router();

const {authAdmin} = require("../middleware/auth");
const Deceased = require("../model/Deceased");
router.post("/",async (req,res) =>{
    try {
        const deceased = await Deceased.create(req.body);
        res.status(201).send(deceased);
    }
    catch(error){
        console.log(error);
        res.status(400).json(error.message);
    }
})
router.get("/alldeceased",authAdmin,async(req,res) =>{
    try{
        const deceased = await Deceased.find();
        res.status(201).send(deceased);
    }
    catch(e){
        res.status(201).send(e.message);
    }
})
module.exports =  router;