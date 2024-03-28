import mongoose, { Schema } from "mongoose";

const entrySchema = new Schema(
  {
    name: { type: String, required: true, uniqe: true },
    email: { type: String, required: true, uniqe: true },
    password: { type: String, required: true },
    emailVerified: { type: Boolean, required: true, default: false },
    verificationCode: {type: Number}
  },
  { timestamps: true }
);

export const User = mongoose.model("User", entrySchema, "users");