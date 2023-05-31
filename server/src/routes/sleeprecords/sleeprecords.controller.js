const {
  getAllSleepRecords,
  getSleepRecord,
  createSleepRecord,
  deleteSleepRecord,
  existSleepRecordWithId,
  updateSleepRecord,
} = require("../../models/sleeprecords/sleeprecords.model");
const { sleeprecordsValidation } = require("../../services/validation");

async function httpGetAllSleepRecords(req, res) {
  const userId = +req.user.id;
  const records = await getAllSleepRecords(userId);
  return res.status(200).json(records);
}

async function httpGetSleepRecord(req, res) {
  const sleepRecordId = +req.params.id;
  const userId = +req.user.id;
  const sleepRecord = await getSleepRecord(sleepRecordId, userId);

  if (!sleepRecord) {
    return res.status(404).json({
      error: "Record not found!",
    });
  }

  return res.status(200).json(sleepRecord);
}

async function httpCreateSleepRecord(req, res) {
  const sleepRecord = req.body;
  const userId = +req.user.id;

  const { error } = sleeprecordsValidation(sleepRecord);

  // Convert to date
  sleepRecord.goToBedDateTime = new Date(sleepRecord.goToBedDateTime);
  sleepRecord.getUpDateTime = new Date(sleepRecord.getUpDateTime);

  // Validate sleep record data
  if (error) {
    return res.status(400).json(error.details[0].message);
  }

  await createSleepRecord(sleepRecord, userId);

  return res.status(201).json({ sleepRecord });
}

async function httpDeleteSleepRecord(req, res) {
  const sleepRecordId = +req.params.id;
  const userId = +req.user.id;

  if (!existSleepRecordWithId(sleepRecordId)) {
    return res.json(404).json({ error: "Sleep record not found" });
  }

  await deleteSleepRecord(sleepRecordId, userId);

  return res.status(204);
}

async function httpUpdateSleepRecord(req, res) {
  const sleepRecordId = +req.params.id;
  const newSleepRecordData = req.body;
  const userId = +req.user.id;

  const existsSleepRecord = await existSleepRecordWithId(sleepRecordId);

  if (!existsSleepRecord) {
    return res.status(404).json({ error: "Sleep record not found" });
  }

  // Validate sleep record data
  const { error } = sleeprecordsValidation(newSleepRecordData);

  if (error) {
    return res.status(400).json(error.details[0].message);
  }

  const updated = await updateSleepRecord(
    sleepRecordId,
    newSleepRecordData,
    userId
  );

  if (!updated) {
    return res.status(400).json({ error: "Sleep record not updated" });
  }

  return res.status(200).json({ ok: true });
}

module.exports = {
  httpGetAllSleepRecords,
  httpGetSleepRecord,
  httpCreateSleepRecord,
  httpDeleteSleepRecord,
  httpUpdateSleepRecord,
};
