const express = require("express");
const { verifyToken } = require("../auth/middlewares");
const {
  httpGetAllGoals,
  httpCreateGoal,
  httpUpdateGoal,
  httpDeleteGoal,
  httpGetGoal,
} = require("./goals.controller");

const goalsRouter = express.Router();

goalsRouter.get("/", verifyToken, httpGetAllGoals);
goalsRouter.post("/", verifyToken, httpCreateGoal);
goalsRouter.put("/:id", verifyToken, httpUpdateGoal);
goalsRouter.delete("/:id", verifyToken, httpDeleteGoal);
goalsRouter.get("/:id", verifyToken, httpGetGoal);

module.exports = goalsRouter;
