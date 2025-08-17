import Joi from "joi"


let schemaSignUp =  Joi.object({
    name:Joi.string().min(3).max(10).required(),
    email:Joi.string().email({ tlds:{ allow: ['net','com','pro'] } }).required(),
    password:Joi.string().pattern(/^[A-Z][a-z0-9]{6,30}$/).required(),
    rePassword:Joi.ref('password'),
    age:Joi.number().integer().min(18).max(60).required().messages({
      'number.base':'Age must be a number',
      'number.min':'Age must be at least 18',
      'number.max':'Age must be at most 60',
      'number.integer':'Age must be an integer',
      'any.required':'Age is required',
    })
  })


  let schemaSignIn =  Joi.object({

    email:Joi.string().email({ tlds:{ allow: ['net','com','pro'] } }).required(),
    password:Joi.string().pattern(/^[A-Z][a-z0-9]{6,30}$/).required(),
    
  })

  export{
    schemaSignUp,
    schemaSignIn
  }