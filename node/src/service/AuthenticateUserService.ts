import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"

import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest{
    email:string;
    password:string;
}

class AuthenticateUserService {

    async execute({email,password}:IAuthenticateRequest){
        const usersRepositories = getCustomRepository(UsersRepositories);
        //console.log(email)
        const user = await usersRepositories.findOne({
            email,
        });
        
        if (!user){
            throw new Error ("Email/Password incorrect")
        }

        const passwordMatch = await compare(password,user.password)
        if (!passwordMatch) throw new Error("Email/Password incorrect");

        const token = sign({
            email:user.email
        },"5bf614a66224a82f381a0797ba55a6bb",{
            subject: user.id,
            expiresIn: "1d",
        })

        return token;
    }   
}


export {AuthenticateUserService}