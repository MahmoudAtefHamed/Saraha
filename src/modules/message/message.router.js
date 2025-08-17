import express from "express"
import { getAllMessages, getMessages, sendMessage } from "./message.controller.js"
import { auth } from "../../middleWare/auth.js"

let messageRouter = express.Router()

messageRouter.post("/message",auth,sendMessage)

//get user messages

messageRouter.get("/userMessages",auth,getMessages)

//get all messages

messageRouter.get("/getAllMessages",auth,getAllMessages)




export default messageRouter