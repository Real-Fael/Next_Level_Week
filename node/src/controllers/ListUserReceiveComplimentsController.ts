import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../service/ListUserReceiveComplimentsService";



class ListUserReceiveComplimentsController{

    async handle(req:Request, resp: Response){
        const {user_id}= req;
        const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService();
        const compliment= await listUserReceiveComplimentsService.execute(user_id);

        return resp.json(compliment);
    }

}

export {ListUserReceiveComplimentsController}