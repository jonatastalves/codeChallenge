import express from "express";
import * as dotenv from "dotenv";
import Tintas from "./controller/calculoTintas.js";

dotenv.config()

const app = express();
const port = process.env.PORT || 3000

app.use(express.json());

app.listen(port, ()=>{
    console.log(`Servidor disponível em http://localhost:${port}`)
});

Tintas.router(app);