const express = require('express')
const router = express.Router()

const {createUser,getAllUser}=require('../controllers/user')

router.post('/register',createUser)
router.get('/',getAllUser)

module.exports=router