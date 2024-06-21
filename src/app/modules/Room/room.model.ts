import { Schema, model } from "mongoose";
import { Troom } from "./room.interface";

const roomSchema = new Schema<Troom>({
    name: {
        type: String,
        required: true,
    },
    roomNo: {
        type: Number,
        required: true,
        unique: true,
    },
    floorNo:{
        type: Number,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    pricePerSlot: {
        type: Number,
        required: true,
    },
    amenities: {
        type: [String],
        required: true,
      },
      isDeleted: {
        type: Boolean,
        default: false,
      },
},
{
    timestamps:true
}
);


export const Room = model('Room', roomSchema);