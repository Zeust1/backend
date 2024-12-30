import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import userRouter from './routes/userRoutes.js'
import tableRouter from './routes/tableRoutes.js'
import listRouter from './routes/listRoutes.js'
import cardRouter from './routes/cardRoutes.js'
import cardDetailRouter from './routes/cardDetailRoutes.js'

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    exposedHeaders: ["Authorization"]
}))

const { PORT, DATABASE_URL } = process.env

mongoose.connect(DATABASE_URL)



app.use('/api/v1/post',userRouter)
app.use('/api/v1/post',tableRouter)
app.use('/api/v1/post',listRouter)
app.use('/api/v1/post',cardRouter)
app.use('/api/v1/post',cardDetailRouter)


app.listen(PORT, () => console.log(`server is running on port ${PORT}`))