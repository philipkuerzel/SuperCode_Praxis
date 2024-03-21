import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  body: {type: String, required: true},
  createdAt: {type: Date, default: Date.now},
  user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
})

export const Post = mongoose.model("Post", postSchema);