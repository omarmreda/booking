import express from "express";

const route = express.Router();

route.get("/",(req,res)=>{
  res.send("Hello, this is users endpoint")  
})
route.get("/register",(req,res)=>{
    res.send("Hello, this is user register endpoint")  
  })

export default route;