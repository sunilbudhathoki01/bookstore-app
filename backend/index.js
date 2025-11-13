import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRouter from './route/bookRoute.js'
dotenv.config()
const port=process.env.PORT
const URI=process.env.MONGODBURI

const app=express();
// connection to mongodb
async function connectDB() {
    try {
    mongoose.connect(URI)
    console.log("mongodb connection successfull")
} catch (error) {
    console.log("Error",error)
}  
}

// Routes
app.use('/book',bookRouter)

connectDB()

app.listen(port,()=>{
    console.log(`app is succesfully running on port ${port}`)
})