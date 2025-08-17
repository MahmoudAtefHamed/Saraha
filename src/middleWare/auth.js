import jwt from "jsonwebtoken";

export const auth = (req,res,next)=>{

    let token = req.header("token")
    jwt.verify(token, "Key", (error, decoded) => {

        if (error) {
            res.json({ message: "error", error });
        }
        else {
            req.userId = decoded.id
            next();
        }

    })

}
