
const express=require("express");
const mongoose=require("mongoose")
const app=express();
app.use(express.json());


let users=[]

app.post("/users",async(req,res)=>{

  
let db=mongoose.connection.db
    let result= await db.collection("users").insertOne(req.body)

    return res.send(result)
})

app.get("/getUsers",async(req,res)=>{
   
    const db=mongoose.connection.db;

    const peaple=await db.collection("users").find().toArray()

    return res.send(peaple)
})

const {ObjectId}=require("mongodb")

app.delete("/hatade/:id",async(req,res)=>{

    const {id}=req.params;

const db=mongoose.connection.db;
const userss=await db.collection("users").findOneAndDelete({
  _id:new ObjectId(id)
})
  
    return res.send(userss)
})




module.exports=app