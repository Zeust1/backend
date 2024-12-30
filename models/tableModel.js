import collections from "../collections/collections.js";
import mongoose from "mongoose";

const tableSchema = new mongoose.Schema({
    tableName: {type: String, required: true, unique: true},
    listId: [{type: mongoose.Schema.Types.ObjectId, ref: 'list'}]
},{timestamps: true, required: true})

const tableModel = mongoose.model(collections.table, tableSchema)

export default tableModel