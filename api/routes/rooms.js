import express from "express";

const route = express.Router();

route.get("/",(req,res)=>{
  res.send("Hello, this is rooms endpoint")  
})
route.get("/register",(req,res)=>{
    res.send("Hello, this is rooms register endpoint")  
  })

export default route;