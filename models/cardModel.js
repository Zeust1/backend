import collections from "../collections/collections.js";
import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
    cardName: {type: String, required: true, unique: true},
    cardDetailId: [{type: mongoose.Schema.Types.ObjectId, ref: 'carddetail'}]
},{timestamps: true, required: true})

const cardModel = mongoose.model(collections.card, cardSchema)

export default cardModel