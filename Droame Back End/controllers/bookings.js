const Booking=require('../models/booking')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')


const getAllBookings = async (req, res) => {
    //find the authorised user 
    //will pass the userId here
    //pass the user id via header of request
    const userId = req.headers.authorization
    const bookings = await Booking.find({ bookedBy: userId }).sort('createdAt')
    res.status(StatusCodes.OK).json({ bookings, count: bookings.length })
  }

  const getBooking = async (req, res) => {
    const {
      params: { id: bookingId },
    } = req

    const userId = req.headers.authorization
    // return res.status(200).json({userId:userId,bookingId:bookingId})
    const booking = await Booking.findOne({
      _id: bookingId,
      bookedBy: userId,
    })
    if (!booking) {
      throw new NotFoundError(`No job with id ${bookingId}`)
    }
    res.status(StatusCodes.OK).json({ booking })
  }

  const createBooking = async (req, res) => {
    const userId = req.headers.authorization
    req.body.bookedBy = userId;
    const booking = await Booking.create(req.body)
    res.status(StatusCodes.CREATED).json({ booking })
  }

  const updateBooking = async (req, res) => {
    const {
      body: { pin_code, drone_shot_id,duration },
      params: { id: bookingId },
    } = req
    const userId = req.headers.authorization
    if (pin_code === '' || drone_shot_id === ''|| duration==='') {
      throw new BadRequestError('must provide pincode and drone shot id')
    }
    const booking = await Booking.findByIdAndUpdate(
      { _id: bookingId, bookedBy: userId ,duration:duration},
      req.body,
      { new: true, runValidators: true }
    )
    if (!booking) {
      throw new NotFoundError(`No booking with id ${bookingId}`)
    }
    res.status(StatusCodes.OK).json({ booking })
  }

  const deleteBooking = async (req, res) => {
    const {
      params: { id: bookingId },
    } = req
    const userId = req.headers.authorization
  
    const booking = await Booking.findByIdAndRemove({
      _id: bookingId,
      bookedBy: userId,
    })
    if (!booking) {
      throw new NotFoundError(`No booking with id ${bookingId}`)
    }
    res.status(StatusCodes.OK).json({msg:"The booking was successfully deleted"})
  }
  
  module.exports = {
    createBooking,
    deleteBooking,
    getAllBookings,
    updateBooking,
    getBooking,
  }