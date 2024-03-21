import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import { Post } from "./models/Posts.js";
import { checkBasicAuth } from "./middleware/checkBasicAuth.js";

await mongoose.connect(process.env.MONGODB_URI);
const app = express();
app.use(express.json());


app.get("/daylies", checkBasicAuth, async (req, res) => {
	const posts = await Post.find().lean();
	res.json(posts);
});

app.post("/daylies", checkBasicAuth, async (req, res) => {
	const post = await Post.create({ body: "tag 5" });
	res.status(201).json(post);
	res.send("post erstellt");
});

app.listen(3000, () => {
	console.log("listening on port 3000");
});
