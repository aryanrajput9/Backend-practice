
const mongoose=require("mongoose");

const connectDb=async ()=>{
    try {
      await mongoose.connect("mongodb://0.0.0.0/new")
console.log("mongose is connected")
    } catch (error) {
        console.log("error in mongosedb",error)
    }
}

module.exports=connectDb