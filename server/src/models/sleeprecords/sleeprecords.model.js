const {
  getLatestId,
  findRecord,
  existsRecordWithId,
} = require("../../services/query");
const sleepRecordsDatabase = require("./sleeprecords.mongo");

const DEFAULT_SLEEPRECORD_ID = 0;

async function getAllSleepRecords(userId) {
  return await sleepRecordsDatabase
    .find({ userId: userId }, { _id: 0, __v: 0 })
    .sort({ id: 1 });
}

async function getSleepRecord(sleepRecordId, userId) {
  return await findRecord(sleepRecordsDatabase, {
    id: sleepRecordId,
    userId: userId,
  });
}

async function existSleepRecordWithId(sleepRecordId) {
  return await existsRecordWithId(sleepRecordsDatabase, sleepRecordId);
}

async function createSleepRecord(sleepRecord, userId) {
  const newSleepRecordId =
    (await getLatestId(sleepRecordsDatabase, DEFAULT_SLEEPRECORD_ID)) + 1;

  const newSleepRecord = Object.assign(sleepRecord, {
    id: newSleepRecordId,
    userId: userId,
  });

  await sleepRecordsDatabase.create(newSleepRecord);
}

async function deleteSleepRecord(sleepRecordId, userId) {
  await sleepRecordsDatabase.findOneAndDelete({
    id: sleepRecordId,
    userId: userId,
  });
}

async function updateSleepRecord(sleepRecordId, newSleepRecordData, userId) {
  const updated = await sleepRecordsDatabase.updateOne(
    { id: sleepRecordId, userId: userId },
    newSleepRecordData
  );

  return updated.modifiedCount === 1;
}

module.exports = {
  getAllSleepRecords,
  getSleepRecord,
  createSleepRecord,
  deleteSleepRecord,
  updateSleepRecord,
  existSleepRecordWithId,
};
