
import express from "express";
import { Entry } from "./entry.model.js";
import { checkAuth } from "../middleware/checkAuth.js";

export const entryRouter = express.Router();

entryRouter.use(express.json())

entryRouter.get("/", checkAuth, async (req, res) => {
  const username = req.user.username;
  const entries = await Entry.find({ author: username });
  res.json(entries);
});

entryRouter.post("/", checkAuth, async (req, res) => {
  try {
    const entry = await Entry.create({ content: req.body.content });
    res.json(entry);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
    return;
  }
});
