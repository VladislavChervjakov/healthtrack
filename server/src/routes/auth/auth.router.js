const express = require("express");
const { httpCreateUser, httpLogin } = require("./auth.controller");

const authRouter = express.Router();

authRouter.post("/signup", httpCreateUser);
authRouter.post("/login", httpLogin);

module.exports = {
  authRouter,
};
