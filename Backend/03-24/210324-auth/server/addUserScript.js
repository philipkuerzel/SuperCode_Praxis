import {User} from "./models/User.js";
import mongoose from "mongoose";
import "dotenv/config";

await mongoose.connect(process.env.MONGODB_URI)

await User.create({name: "max", password: "invl390fjp1j"})