import { messageModel } from "../../../data base/models/message.schema.js"

const sendMessage = (req,res)=>{

    let{message,recievedId} = req.body

            messageModel.insertMany({sendId : req.userId ,message ,recievedId})
            res.json({message:"success"})
    }

const getMessages = async(req,res)=>{

        let data = await messageModel.find({recievedId : req.userId}).select("message -_id")//req.userId : I add it in auth.jس

        if(!data[0]){
            res.json({message:"There is no messages to you today ): "})
        }
        else{
            res.json({message:"success",data})
        }
    }

   



const getAllMessages = async(req,res)=>{


    if(req.userId == '68a09d974b595fa67ba98410'){
        let data = await messageModel.find()
    
        if(!data[0]){
            res.json({message : "There is no messages "})
        }
        else{
            res.json({message: "success",data})
        }
    }
    else{
        res.json({message: "you don't have authentication"})
    }

    

}

export{
    sendMessage,
    getMessages,
    getAllMessages
}