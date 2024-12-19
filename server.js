import express from 'express'
import userRouter from './routes/userRoutes.js'
const app = express()
app.use(express.json())


app.use('/api/v1',userRouter)
app.listen(8080, () => console.log('server is running'))