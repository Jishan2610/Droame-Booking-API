const express = require('express')
const router = express.Router()

const {createBooking,
    deleteBooking,
    getAllBookings,
    updateBooking,
    getBooking}=require('../controllers/bookings')

    //chaining same routes with different request type
    router.route('/').post(createBooking).get(getAllBookings);

    router.route('/:id').get(getBooking).delete(deleteBooking).patch(updateBooking)

    module.exports=router