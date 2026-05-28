const app=require("./src/app");
const connectDb=require("../Day-2/config/db")

connectDb()
app.listen(3000,()=>{
    console.log("server running port 3000")
})