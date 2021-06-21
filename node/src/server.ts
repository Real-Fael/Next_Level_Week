import express from "express";

//@types/express
const app=express();

app.get("/test", (req,resp)=>{
    return resp.send("ola");
})

app.post("/test", (req,resp)=>{
    return resp.send("ola post");
})

//começa a executar a aplicação na porta 3000
app.listen(3000, ()=> {
    console.log("server escutando porta 3000");
})