const router = require("express").Router();

const {authAdmin,authUser} = require("../middleware/auth");
const Deceased = require("../model/Deceased");
router.post("/",authUser,async (req,res) =>{
    try {
        const deceased = await Deceased.create(req.body);
        res.status(201).json(deceased);
    }
    catch(error){
        console.log(error)
        res.status(400).json(error);
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