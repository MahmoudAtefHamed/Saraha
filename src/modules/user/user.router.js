
import express from "express"
import { signIn, signUp } from "./user.controller.js"
import { validation } from "../../middleWare/midWareValidate.js"
import { schemaSignIn, schemaSignUp } from "./user.validation.js"

let userRouter = express.Router()

userRouter.post("/signUp",validation(schemaSignUp),signUp)

userRouter.post("/signIn",validation(schemaSignIn),signIn)




export default userRouter