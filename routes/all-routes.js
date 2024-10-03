
import { Router } from "express";
import { getAllBookings, getOneBooking, postBookings, updateBookings,deleteBookings } from "../controllers/booking-controllers.js";


export const bookingRouter = Router()

bookingRouter.get('/bookings', getAllBookings)

bookingRouter.get('/booking_1', getOneBooking)

bookingRouter.post('/bookings', postBookings)

bookingRouter.patch('/booking/:id', updateBookings)

bookingRouter.delete('/booking/:id', deleteBookings)
