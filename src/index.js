import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connDB from "../config/connectDB.js"
import routerUsers from "./routes/user-routes.js"

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
app.use(routerUsers)

const port = process.env.DB_PORT

connDB()

app.listen(port || 3000 , ()=>{
    console.log("SERVIDOR rodando")
})