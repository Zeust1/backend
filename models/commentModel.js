import collections from "../collections/collections.js";
import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content: String,
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'usersdata'}
},{timestamps: true, required: true})

const commentModel = mongoose.model(collections.comment, commentSchema)

export default commentModel