
const app=require("../Day-one/app")
const connectDb=require("../Day-one/config/database")

connectDb()

app.listen(3000,()=>{
    console.log("server running hai")
})