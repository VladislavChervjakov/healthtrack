const express = require("express");
const { verifyToken } = require("../auth/middlewares");
const {
  httpGetAllBodyMeasurments,
  httpGetBodyMeasurment,
  httpCreateBodyMeasurment,
  httpUpdateBodyMeasurment,
  httpDeleteBodyMeasurment,
} = require("./bodymeasurments.controller");

const bodyMeasurmentsRouter = express.Router();

bodyMeasurmentsRouter.get("/", verifyToken, httpGetAllBodyMeasurments);
bodyMeasurmentsRouter.get("/:id", verifyToken, httpGetBodyMeasurment);
bodyMeasurmentsRouter.post("/", verifyToken, httpCreateBodyMeasurment);
bodyMeasurmentsRouter.put("/:id", verifyToken, httpUpdateBodyMeasurment);
bodyMeasurmentsRouter.delete("/:id", verifyToken, httpDeleteBodyMeasurment);

module.exports = bodyMeasurmentsRouter;
