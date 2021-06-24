import { Request, Response } from "express";
import { ReplSet } from "typeorm";
import { AuthenticateUserService } from "../service/AuthenticateUserService";




class AuthenticateUserController{

    async handle(req:Request,resp:Response){
        const {email,password} = req.body;
        //console.log(req)
        const authenticateUserService = new AuthenticateUserService();
        //console.log(authenticateUserService)
        const token = await authenticateUserService.execute({email,
            password,
        })
        return resp.json(token);

    }

}

export{AuthenticateUserController};