import mongoose from "mongoose";

const GeniallySchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: false,
        default: "",
    },
    createdAt: {
        type: Date,
        required: true,
    },
    modifiedAt: {
        type: Date,
        required: false,
    },
    deletedAt: {
        type: Date,
        required: false,
    },
});

export default mongoose.model("Genially", GeniallySchema);