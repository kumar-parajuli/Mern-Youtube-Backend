// require('dotenv').config()
import dotenv from "dotenv"
import connectDB from "./db/index.js";
// const connectDB=require("./db/index.js")

dotenv.config()





connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`0 Server is connected at potr:${process.env.PORT}`);
  })
})
.catch((err)=>{
  console.log("MONGODB connection failed !!!",err);
})










//1st approach
/*
(async() => {
    try {
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)  

      app.on("error",(error) =>{
        console.log("ERRR:",error);
        throw error
      })
      app.listen(procee.enc.PORT, ()=>{
        console.log(`App is Listining on port ${process.env.PORT}`);
      })
    } catch (error) {
        console.error("Error:", error)
        throw err
        
    }
}) ()
*/