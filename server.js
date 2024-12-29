import express from 'express'
import userRouter from './routes/userRoutes.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    exposedHeaders: ["Authorization"]
}))

const { PORT, DATABASE_URL } = process.env

mongoose.connect(DATABASE_URL)



app.use('/api/v1',userRouter)
app.listen(PORT, () => console.log(`server is running on port ${PORT}`))