import express from "express";

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Hello Enes")
})

export default router