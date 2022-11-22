import { combineReducers } from "redux"
import app from "./app"
import auth from "./auth"
import post from "./post"
import career from "./career"

export default combineReducers({ auth, post, career, app })