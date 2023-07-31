const Joi = require("joi");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {
  createNewUser,
  getUserByEmail,
} = require("../../models/user/user.model");
const {
  authValidation,
  loginValidation,
} = require("../../services/validation");

async function httpCreateUser(req, res) {
  const newUser = req.body;

  // Validate user data
  const { error } = authValidation(newUser);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const user = await getUserByEmail(newUser.email);

  // Check if the user is already in database
  if (user) {
    return res
      .status(400)
      .json({ error: "User with this email already exists" });
  }

  await createNewUser(newUser);

  return res.status(201).json({
    success: true,
    redirectUrl: "sign-in",
  });
}

async function httpLogin(req, res) {
  const loginUser = req.body;

  const { error } = loginValidation(loginUser);
  if (error) {
    res.status(400).json({ error: error.details[0].message });
  }

  // Get user by email
  const user = await getUserByEmail(loginUser.email);

  // Checking if the Email exists
  if (!user) {
    return res.status(400).json({ error: "Email or password is wrong" });
  }

  // Password is correct
  const isCorrectPassword = await bcrypt.compare(
    loginUser.password,
    user.password
  );

  if (!isCorrectPassword) {
    return res.status(400).json({ error: "Email or password is wrong" });
  }

  const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET, {
    expiresIn: "24h",
  });

  res.cookie("healthTrackAuthToken", token, {
    maxAge: 86400 * 1000,
    httpOnly: true,
  });

  return res.status(200).json({
    user: user,
    token: token,
    redirectUrl: "/",
  });
}

module.exports = {
  httpCreateUser,
  httpLogin,
};
