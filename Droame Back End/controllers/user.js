const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')

const createUser=async(req,res)=>{
    const obj=req.body
   
    //rather than manually checking here for name,email and number errors let mongoose handle them as mongoDb will run it's validators provided by us
    const user=await User.create({
        ...req.body
    })
    res.status(StatusCodes.CREATED).json({user:user})
}
const getAllUser=async(req,res)=>{
    const users = await User.find({  }).sort('createdAt')
    res.status(StatusCodes.OK).json({ users, count: users.length })
}
module.exports={createUser,getAllUser}