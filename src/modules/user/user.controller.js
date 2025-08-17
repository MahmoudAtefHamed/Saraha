
import jwt from "jsonwebtoken"
import { userModel } from "../../../data base/models/user.schema.js"
import bcrypt from "bcrypt"
import {sendMessageToUserEmail} from "../../Emails/email.nodemailer.js"

const signUp = async(req,res)=>{

      let  {name,email,password,age} = req.body

      let hash = bcrypt.hashSync(password,8)

      let data = await userModel.findOne({email})

      if(data){
          res.json({message: "user already exist"})
      }
      else{
        sendMessageToUserEmail({email})
          userModel.insertMany({name,email,password:hash,age})
          res.json({message:"success"})
      }

   }
   
     


const signIn = async(req,res)=>{

      let {email,password} = req.body

      let user = await userModel.findOne({email})
      if(user){
        if(bcrypt.compareSync(password,user.password)){

          let token = jwt.sign({name:user.name, id:user.id},"Sandy")

          res.json({message:"success login with token",token})
        }
        else{
          res.json({message: "invalid password"})
        }
          
      }
      else{
          res.json({message: "email not found"})
      }

    }



export{
    signUp,
    signIn
}