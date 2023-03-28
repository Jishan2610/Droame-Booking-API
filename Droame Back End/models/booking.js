const mongoose = require('mongoose')

const BookingSchema=new mongoose.Schema({
    //booking id will be automatically created by mongodb as _id
    pin_code:{
        type:String,
        required:[true,"Please Provide Location postal Code"]
    },
    drone_shot_id:{
        type:Number,
        required:[true,'Provide the drone_shot_id'],
        //basically providing values for particular drone_shots
        enum:[1100,1200,1300,1400,1101,1201,1301,1401],
        default:1100,
    },
    //this is to associate each booking with a particular user 
    bookedBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true,'Please provide user']
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    status:{
        type:String,
        enum:['Booked','Cancelled','On Use','Ended'],
        default:'Booked',
    },
    duration:{
        type:String,
        default:"1hr"
    }
})

module.exports=mongoose.model('Booking',BookingSchema);