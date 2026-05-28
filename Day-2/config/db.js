const mongoose=require("mongoose");

const connectDb= async()=>{
    try {
        await mongoose.connect("mongodb://0.0.0.0/day2")
        console.log("mongose is running")
    } catch (error) {
        console.log("error from mongose",error)
    }
}

module.exports=connectDb