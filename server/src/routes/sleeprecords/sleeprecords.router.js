const express = require("express");
const { verifyToken } = require("../auth/middlewares");

const {
  httpGetAllSleepRecords,
  httpGetSleepRecord,
  httpCreateSleepRecord,
  httpDeleteSleepRecord,
  httpUpdateSleepRecord,
} = require("./sleeprecords.controller");

const sleepRecordsRouter = express.Router();

sleepRecordsRouter.get("/", verifyToken, httpGetAllSleepRecords);
sleepRecordsRouter.post("/", verifyToken, httpCreateSleepRecord);
sleepRecordsRouter.put("/:id", verifyToken, httpUpdateSleepRecord);
sleepRecordsRouter.delete("/:id", verifyToken, httpDeleteSleepRecord);
sleepRecordsRouter.get("/:id", verifyToken, httpGetSleepRecord);

module.exports = sleepRecordsRouter;
