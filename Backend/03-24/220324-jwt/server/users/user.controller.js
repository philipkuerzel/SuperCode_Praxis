import express from "express";
import { User } from "./user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { mail } from "../utils/mail.js";
import crypto from "crypto";

export const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
	const users = await User.find();
	res.json(users);
});

userRouter.post("/register", async (req, res) => {
	const { name, email, password } = req.body;
	if (!name || !password || !email) {
		res.sendStatus(400);
		return;
	}
	// erst erzeugen wir einen salt für diesen User
	const salt = await bcrypt.genSalt();
	const hash = await bcrypt.hash(password, salt);

	const verificationCode = crypto.randomInt(100000, 999999);

	const user = await User.create({
		name,
		email,
		verificationCode,
		password: hash,
	});

	// TODO: Email mit registrierungsbestätigung versenden!
	const emailResult = await mail.sendMail({
		from: ' "philip" <pk@test.de>',
		to: email,
		subject: "Registration",
		text: `Hey ${name}, thank you for your registration! your verification code is: ${verificationCode}`,
	});
	console.log(emailResult);
	res.json(user);
});

userRouter.post("/login", async (req, res) => {
	const { name, password } = req.body;
	if (!name || !password) {
		res.sendStatus(403);
		return;
	}
	//! check login data
	// get user from db
	const user = await User.findOne({ name }).lean();
	if (user === null) {
		res.status(401).send("Wrong credentials");
		return;
	}

	// check password against saved hash
	const passwordMatches = await bcrypt.compare(password, user.password);

	// check if basic auth password is identical to password in DB
	if (!passwordMatches) {
		res.status(401).send("Wrong credentials");
		return;
	}
	const token = jwt.sign({ name }, process.env.JWT_SECRET);

	res.json({ status: "ok", token: token });
});

userRouter.post("/verify_email", async (req, res) => {
  const {email, verificationCode} = req.body;
  console.log(email, verificationCode);

  // user aus db suchen anhand der email
  const user = await User.findOne({email: email})
  if (user.emailVerified) {
    res.status(400).json({status: "error", message: "Email already verified"})
  }
  // übermittelten Code mit dem aus der db überprüfen
  const correctCode = user.verificationCode === verificationCode;
  if (correctCode){
    user.emailVerified = true;
    await user.save();
    res.json({status: "ok", message: "Email verified"});
  } else {
    res.status(400).json({status: "error", message: "Wrong verification code"});
  }
})
