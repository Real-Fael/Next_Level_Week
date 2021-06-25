import { Request, Response, NextFunction} from "express"

import { verify} from "jsonwebtoken"

interface IPayload{
    sub:string;
}

export function ensureAuthenticated (req:Request, resp: Response, next: NextFunction) {

    //receber o token 
   const authToken= req.headers.authorization;
   
    if (!authToken){
        return resp.status(401).end();
    }
    
    const token = authToken.split(" ")[1];

    
    try{
        const {sub} = verify(token,"5bf614a66224a82f381a0797ba55a6bb") as IPayload;
        //console.log(decode)
        req.user_id = sub;
    
        return next();
    }catch(err){
       return resp.status(401).end();
    }   
   
   
   
   //valida

}

