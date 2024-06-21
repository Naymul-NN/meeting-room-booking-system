

import { Room } from "../Room/room.model";
import { Slot } from "../Slot/slot.model";
// import { Slot } from "../Slot/slot.model";
import { Booking } from "./bookign.model";
import { Tbooking } from "./booking.interface";

// Function to create a new booking
export const createBooking = async (payload: Tbooking) => {
    // Retrieve the room details to get the price per slot
    const room = await Room.findById(payload.room);
    if (!room) {
        throw new Error('Room not found');
    }

    const pricePerSlot = room.pricePerSlot;
    const totalAmount = pricePerSlot * payload.slots.length;

    // Create the booking payload with the total amount
    const bookingPayload = {
        ...payload,
        totalAmount,
        isConfirmed: 'unconfirmed',
        isDeleted: false
    };

    // Create the booking
    const booking = await Booking.create(bookingPayload);

    // Update the slots to mark them as booked
    await Slot.updateMany(
        { _id: { $in: payload.slots } },
        { isBooked: true }
    );

    // Populate the booking details
    const populatedBooking = await Booking.findById(booking._id)
        .populate('room')
        .populate('slots')
        .populate('user');

    return populatedBooking;
};