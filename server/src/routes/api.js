const express = require("express");
const { authRouter } = require("./auth/auth.router");
const bodyMeasurmentsRouter = require("./bodymeasurments/bodymeasurments.router");
const goalsRouter = require("./goals/goals.router");

const sleepRecordsRouter = require("./sleeprecords/sleeprecords.router");

const api = new express.Router();

api.use("/sleeprecords", sleepRecordsRouter);
api.use("/bodymeasurements", bodyMeasurmentsRouter);
api.use("/goals", goalsRouter);
api.use("/auth", authRouter);

module.exports = api;
