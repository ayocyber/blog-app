import mongoose from "mongoose";

// Define the User schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 50
    },
    password: {
        type: String,
        minlength: 6
    },
    img: {
        type: String
    },
    IsAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

// Define the Post schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: String
    },
    userId: {
        type: String,
        required: false,
        unique: true
    },
    slug:{
        type: String,
        required:true,
        unique : true
    },
}, { timestamps: true });

// Check if the models are already defined, if not define them
export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);
