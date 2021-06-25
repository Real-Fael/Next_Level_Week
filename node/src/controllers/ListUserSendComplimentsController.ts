import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../service/ListUserSendComplimentsService";



class ListUserSendComplimentsController{

    async handle(req:Request, resp: Response){
        const {user_id}= req;
        const listUserSendComplimentsService = new ListUserSendComplimentsService();
        const compliments= await listUserSendComplimentsService.execute(user_id);

        return resp.json(compliments);
    }

}

export {ListUserSendComplimentsController}