
import { User } from "../models/user.js";

// definition of custom middleware which checks if the user is authenticated
export const checkBasicAuth = async (req, res, next) => {
	console.log("checking auth...");
	// check if authorization is present otherwise
	if (!req.headers.authorization) {
		res.status(401).send("please authenticate");
		return;
	}
	const [authType, authBase64] = req.headers.authorization.split(" ");
	// check if correct athentication strategy is used
	if (authType !== "Basic") {
		res.status(401).send("please use basic Auth");
		return;
	}
	// convert from base64 to string
	const authString = atob(authBase64);
	const [username, password] = authString.split(":");

	// get user from db
	const user = await User.findOne({ name: username }).lean();
	// check if user exists
	if (user === null) {
		res.status(401).send("User does not exist");
	}
	// console.log(user); // null bei falschem User

	// check if password is correct
	if (password !== user.password) {
		res.status(401).send("wrong password");
		return;
	}
	next();
};