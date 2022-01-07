import express, { request, response } from "express";


const app = express();

app.get("/test", (request, response) =>{
    //request => entrando
    //response => saindo
    return response.send("Hello")
})

app.post("/test-post",(request, response) =>{
    return response.send("Hello metodo post")
} )

// http://localhost:3000
app.listen(3000, () => console.log("Server is running yaa"));