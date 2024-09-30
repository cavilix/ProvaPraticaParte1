import "dotenv/config"
import express, {request, response} from "express"
import cors from "cors";
import path from "node:path"
import { fileURLToPath } from "node:url";

import conn from "./config/conn";

import router from "./routes/Event-palest.js"

import "./models/eventoModel"
import "./models/palestranteModel"
import "./models/participanteModel"

const PORT = process.env.PORT || 3333
const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(cors())//
app.use(express.urlencoded({extended: true}))
app.use(express.json())

console.log("filename:", __filename)
console.log("dirname:", __dirname)

app.use("/public", express.static(path.join(__dirname), "public"))

app.use("/eventos/palestrantes", router )

app.get("*", (request, response)=>{
    response.status(404).json({message: "rota nao encontrada"});
})

app.listen(PORT,() =>{
    console.log(`Servidor on port ${PORT}`)
})