import mongoose, { Schema } from "mongoose";

const GeniallyCounterSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    counter: {
        type: Number,
        required: true,
    }
})

export default mongoose.model("GeniallyCounter", GeniallyCounterSchema);