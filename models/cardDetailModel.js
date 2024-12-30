import collections from "../collections/collections.js";
import mongoose from "mongoose";

const cardDetailSchema = new mongoose.Schema({
    task: {type: [{
        taskName: String,
        isDone: {type: Boolean, default: false}
    }]},
    description: String,
    deadLine: {type: {
        createAt: Date,
        endDate: Date
    }},
    member: {type: [String]},
    commentId: {type: mongoose.Schema.Types.ObjectId, ref: 'comment'}

},{timestamps: true, required: true})

const cardDetailModel = mongoose.model(collections.cardDetail, cardDetailSchema)

export default cardDetailModel