import mongoose from 'mongoose'
import { settings, node_env } from './settings.js'

const { mongodb_uri } = settings[node_env]

export const connectMongoDB = () => {
   mongoose.connect(mongodb_uri, { useNewUrlParser: true,/*  useCreateIndex: true */ })
      .then(() => console.log('Base de datos conectada'))
      .catch((err) => {
         console.error(err.message)
         process.exit(1)
      })
}