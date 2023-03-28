const mongoose =require('mongoose')

const UserSchema =new mongoose.Schema({
    //not creating id as it will be automatically created by mongoose which is bson type objectId
    //added the validators also
    name: {
        type: String,
        required: [true, 'Please provide name'],
        maxlength: 50,
        minlength: 3,
      },
      email: {
        type: String,
        required: [true, 'Please provide email'],
        match: [
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          'Please provide a valid email',
        ],
        unique: true,
      },
      number:{
        //it's better to go with string to store numbers 
        type: String,
        //match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
      }
})

module.exports = mongoose.model('User', UserSchema)