import collections from "../collections/collections.js";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, match: [/^\S+@\S+\.\S+$/, 'Invalid email'], unique: true},
    phoneNumber: {type: String, required: true},
    userName: {type: String, required: true, unique: true},
    hashPassword: {type: String, required: true}
},{timestamps: true, required: true})

const userModel = mongoose.model(collections.usersData, userSchema)

export default userModel