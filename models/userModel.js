import collections from "../collections/collections.js";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String
})

const userModel = mongoose.model(collections.userData, userSchema)

export default userModel