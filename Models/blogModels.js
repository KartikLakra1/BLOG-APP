import mongoose from "mongoose";


const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    image: {
        type: String,
        required: [true, "Image is required"]
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, { timestamps: true })

export default mongoose.model("Blog", blogSchema); 