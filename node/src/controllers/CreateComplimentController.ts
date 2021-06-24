import { Request, Response } from "express";
import { CreateComplimentService } from "../service/CreateComplimentService";




class CreateComplimentController{

    async handle(req:Request, resp:Response){
        const {tag_id, user_sender, user_receiver, message} =req.body;

        const createComplimentService= new CreateComplimentService();

        const compliment = await createComplimentService.execute({tag_id, user_sender, user_receiver, message})

        return resp.json(compliment)
    }

}

export { CreateComplimentController}