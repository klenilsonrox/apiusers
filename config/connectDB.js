import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const user = process.env.DB_USER 
const pass = process.env.DB_PASS
const port = process.env.DB_PORT
const DB_Url = `mongodb+srv://${user}:${pass}@users.kx17hue.mongodb.net/`

const connDB =async ()=>{
    try{
        await mongoose.connect(DB_Url)
        console.log("conectado ao mongoDB")
    } catch(error){
        console.error("houve um erro", error)
    }
    
}

export default connDB