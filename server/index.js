import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { connectMongoDB } from './connections/mongodb.connection.js'

const app = express()
const port = process.env.PORT || 4000

// middlewares
app.use(morgan("dev"));
app.use(express.json({ extended: false }))
app.use(express.urlencoded({ extended: false }));
app.use(cors())

// runner
connectMongoDB()
app.listen(port, () =>
  console.log(`Servidor iniciado en el puerto: ${port}`)
)