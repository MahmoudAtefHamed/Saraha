import express from 'express'
import { dbConnection } from './data base/dbConnection.js'
import userRouter from './src/modules/user/user.router.js'
import messageRouter from './src/modules/message/message.router.js'
import { userModel } from './data base/models/user.schema.js'
const app = express()
const port = 3000

dbConnection()

app.use(express.json())
app.use(userRouter)
app.use(messageRouter)

app.get("/verify/:email",async(req,res)=>{

    let {email} = req.params

    await userModel.findOneAndUpdate({email},{verified:true})

    res.json({message: "verified successfully",email})
})


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))