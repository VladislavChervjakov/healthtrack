const express = require("express");
const { httpCreateUser, httpLogin, httpGetUser } = require("./auth.controller");
const { verifyToken } = require("./middlewares");

const authRouter = express.Router();

authRouter.get("/user", verifyToken, httpGetUser);
authRouter.post("/signup", httpCreateUser);
authRouter.post("/login", httpLogin);

module.exports = {
  authRouter,
};
