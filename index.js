import express from 'express';
import { bookingRouter } from './routes/all-routes.js';
import mongoose from 'mongoose';
import 'dotenv/config'
import cors from 'cors'


const bookingApp = express();
const PORT = 3000


bookingApp.use(cors)
bookingApp.use (express.json())
bookingApp.use (bookingRouter)
 

// Define route
bookingApp.get('/booking', (req, res, next) => {
    console.log(req.headers);
    res.json('You booked a seat');
});

await mongoose.connect(process.env.MONGO_URI)
bookingApp.listen(PORT, () => 
    console.log(`Booking is listening on port ${PORT}`)
);