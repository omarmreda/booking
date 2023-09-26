import express from "express";

const router = express.Router();

// CREATE
router.post("/", async (req,res)=>{

    const newHotel = new hotel(req.body)
    try{
    const savedHotel = await newHotel.save()
    res.status(200).json(savedHotel)

    }catch(err){
        res.status(500).json(err)
    }
})
// UPDATE
// DELETE
// GET
router.get("/",( req , res ) =>{
    try{

    }catch(err){
        console.log(err)
    }
})
// GET ALL


export default router;