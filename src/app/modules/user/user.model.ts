
// import { Schema, model } from "mongoose";
// import { TUser } from "./user.interface";

import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";

// const userSchema = new Schema<TUser>({
//     name : {
//         type : String,
//         required: true,
//     },
//     email: {
//         type : String,
//         required: true,
//     },
//     password: {
//         type : String,
//         required: true,
//     },
//     role: {
//         type : String,
//         required:true,
//         enum:[ "admin","user" ]
//     },
//     address:{
//         type: String,
//         required: true,
//     },
// },
// {
//     timestamps:true
// });

// export const User = model<TUser>('user', userSchema);
const userSchema = new Schema<TUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
                type : String,
                required: true,
            },
            role: {
                type: String,
                required: true,
                enum: ["admin", "user"]
            },
            address: {
                type: String,
                required: true
            },

}, {
    timestamps: true
});

export const User = model<TUser>('User', userSchema);