import express from "express";
import * as dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 3000

app.use(express.json());

app.listen(port, ()=>{
    console.log(`Servidor disponível em http://localhost:${port}`)
});

app.get('/teste', (req,res)=>{
    res.send("Olá, API iniciada com sucesso!");
})

app.get('/', (req,res)=>{
    res.send("Olá, Servidor ligado , use a rota reste");
})

