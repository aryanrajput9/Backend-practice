const mongoose=require("mongoose")
const express=require("express")
const app=express()
app.use(express.json())
const user=[]




app.post("/user",async(req,res)=>{

  const db = mongoose.connection.db;

    const result = await db.collection("users").insertOne(req.body);


    return res.send(result)

})

app.get("/getUser",(req,res)=>{

    user

    return res.status(200).json({
        message:"aa gya aa gya",
        user

    })

})

app.put("/edite/:id",(req,res)=>{

    const {id}=req.params;

    user[id]=req.body
    
    return res.status(201).json({
        message:"edit hai",
        user
    })
})

app.patch("/oneEdit/:id",(req,res)=>{

const {id}=req.params;

user[id]={
    ...user[id],
    ...req.body
}

return res.status(200).json({
    message:"one edit ho gya ",
    user
})


})

app.delete("/deleted/:id",(req,res)=>{

    const {id}=req.params

    user.splice(id,1n)

    return res.status(200).json({
        message:"deleted",
        user
    })
})

module.exports=app