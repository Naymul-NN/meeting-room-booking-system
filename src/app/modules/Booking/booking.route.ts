import express from "express"
import { bookingController } from "./booking.controller";
// import { createBookingController } from "./booking.controller";

const router = express.Router();

router.post('/', bookingController.createBookingController);
router.get('/', bookingController.getALLBookings);
router.put('/:id', bookingController.updateBooking);
router.delete('/:id', bookingController.deleteBooking);




export const BookingRoutes = router