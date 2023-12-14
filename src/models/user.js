import mongoose, { model } from "mongoose"

const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:String
    }
})

const User = model("User", userSchema)

export default User