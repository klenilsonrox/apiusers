import User from "../models/user.js"

export const home = (req,res)=>{
    res.status(200).json({
        status:"Ok"
    })
}

export const getAllUsers = async (req,res)=>{
    try{
        const users = await User.find()
        res.status(200).json(users)
    } catch(error){
        console.error("houve um erro")
        res.status(500).json({
            message:error.mesage
        })
    }
}


export const createUser = async (req,res)=>{
    const {name,age}= req.body
    try{
        
        if(!name){
            res.status(400).json({
                message:"o nome é necessário"
            })
            return
        }

        if(!age){
            res.status(400).json({
                message:"o idade é necessária"
            })
            return
        }

        const usuario = {name,age}
        await User.create(usuario)

        res.status(201).json(usuario)
    
    } catch(error){
        console.error("houve um erro")
        res.status(500).json({
            message:error.mesage
        })
    }
}


export const updateUser = async (req,res)=>{
    const {name,age}= req.body
    try{
        const user = await User.findById(req.params.id)
        if(!user){
            res.status(404).json({
                message:"usuario nao encontrado"
            })
        }
        await User.findByIdAndUpdate(req.params.id, {name,age} , {new:true})
        res.status(200).json(req.body)
    } catch(error){
        console.error("houve um erro")
        res.status(500).json({
            message:error.mesage
        })
    }
}


export const deleteUser = async (req,res)=>{
    const {name,age}= req.body
    try{
        const user = await User.findById(req.params.id)
        if(!user){
            res.status(404).json({
                message:"usuario nao encontrado"
            })
            return
        }
        await User.findOneAndDelete(user)
        res.status(200).json({message:"usuario deletado"})
    } catch(error){
        console.error("houve um erro")
        res.status(500).json({
            message:error.mesage
        })
    }
}