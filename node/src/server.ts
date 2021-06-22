import express from "express";
import "reflect-metadata";

import { router } from "./service/routes"

//@types/express
const app=express();

app.use(express.json());

import "./database"

app.use(router);

//começa a executar a aplicação na porta 3000
app.listen(3000, ()=> {
    console.log("\n*****===server escutando porta 3000===*****\n");
})