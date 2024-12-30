import collections from "../collections/collections.js";
import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
    listName: {type: String, required: true, unique: true},
    cardId: [{type: mongoose.Schema.Types.ObjectId, ref: 'card'}]
},{timestamps: true, required: true})

const listModel = mongoose.model(collections.list, listSchema)

export default listModel