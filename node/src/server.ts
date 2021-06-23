import express, { NextFunction, Request, Response } from "express";
import "reflect-metadata";
import "express-async-errors";

import { router } from "./routes"

import "./database"

//@types/express
const app=express();

app.use(express.json());


app.use(router);
app.use((err:Error, req: Request, resp: Response, next:NextFunction)=> {
    if(err instanceof Error){
        return resp.status(400).json({
            error: err.message,
        })
    }

    return resp.status(500).json({
        status: "error",
        message: "internal Server Error"
    })

})

//começa a executar a aplicação na porta 3000
app.listen(3000, ()=> {
    console.log("\n*****===server escutando porta 3000===*****\n");
})