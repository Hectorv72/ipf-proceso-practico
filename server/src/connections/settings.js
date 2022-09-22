import dotenv from 'dotenv'
dotenv.config();

export const node_env = process.env.NODE_ENV

export const settings = {
  development: {
    mongodb_uri: 'mongodb://localhost:27017'
  },
  production: {
    mongodburi: process.env.MONGODB_URI
  }
}