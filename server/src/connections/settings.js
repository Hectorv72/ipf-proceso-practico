import dotenv from 'dotenv'
dotenv.config();

export const node_env = process.env.NODE_ENV
console.log(process.env.MONGODB_URI)
export const settings = {
  development: {
    mongodb_uri: 'mongodb://localhost:27017'
  },
  production: {
    mongodb_uri: process.env.MONGODB_URI
  }
}