import mongoose from "mongoose"

let userSchema = mongoose.Schema({
    name:{
        type:String,
        // required:true,
        // minLength: [3, "Name must have at least 3 characters."]

    },
    email:{
        type:String,
        // unique:true,
        // required:true,
    },
    password:{
        type:String,
        // required:true,
        // minLength: [6, 'password must have at least 6 characters.']
        
    },
    age:{
        type:Number,
        // required:true,
        // min:[18,"invalid age, very small"],
        // max:[90,"invalid age, very large"]
    },

    verified:{
        type:Boolean,
        default:false
    },
    isActive:{
        type:Boolean,
        default:true
    },


},{ timestamps : true })

export let userModel = mongoose.model("user",userSchema)