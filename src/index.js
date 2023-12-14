import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connDB from "../config/connectDB.js"
import routerUsers from "./routes/user-routes.js"

dotenv.config()

const port = process.env.DB_PORT

const app = express()
app.use(express.json())
app.use(cors())


app.use(routerUsers)

connDB()

app.listen(port || 3000 , ()=>{
    console.log("SERVIDOR rodando")
})