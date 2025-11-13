import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRouter from './route/bookRoute.js'
import cors from 'cors'
import userRouter from './route/userRoute.js'
dotenv.config()
const port=process.env.PORT
const URI=process.env.MONGODBURI

const app=express();
app.use(cors())
app.use(express.json())
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
app.use('/user',userRouter)

connectDB()

app.listen(port,()=>{
    console.log(`app is succesfully running on port ${port}`)
})