import { createTransport } from "nodemailer";
import { htmlCode } from "./htmlCode.js";



export const sendMessageToUserEmail = async(obj)=>{

    const transporter = createTransport({
        service: "gmail",
      
        auth: {
          user: "matf7999@gmail.com",
          pass: "tygz iqmn pbvx mxws", //Fake password
        },
      });
      
      const info = await transporter.sendMail({
          from: '"Saraha confirm 👻" <matf7999@gmail.com>', // sender address
          to: obj.email, // list of receivers
          subject: "Hello ✔", // Subject line
          html: htmlCode(`http://localhost:3000/verify/${obj.email}`), // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>

}