import { Request, response, Response } from "express";
import { ListUsersService } from "../service/ListUsersService";



class ListUserController{
    async handle(req:Request, resp:Response){
        const listUsersService = new ListUsersService();
        const users = await listUsersService.execute();
        
        return resp.json(users);
    }
}

export { ListUserController}
