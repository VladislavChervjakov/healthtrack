const {
  findRecord,
  getLatestId,
  existsRecordWithId,
} = require("../../services/query");
const bodyMeasurmentsDatabase = require("./bodymeasurments.mongo");

const DEFAULT_BODYMEASURMENT_ID = 0;

async function getAllBodyMeasurments(userId) {
  return await bodyMeasurmentsDatabase
    .find({ userId: userId }, { _id: 0, __v: 0 })
    .sort({ id: 1 });
}

async function getBodyMeasurment(bodyMeasurmentId, userId) {
  return await findRecord(bodyMeasurmentsDatabase, {
    id: bodyMeasurmentId,
    userId: userId,
  });
}

async function existBodyMeasurmentWithId(bodyMeasurmentId) {
  return await existsRecordWithId(bodyMeasurmentsDatabase, bodyMeasurmentId);
}

async function createBodyMeasurment(bodyMeasurment, userId) {
  const newBodyMeasurmentId =
    (await getLatestId(bodyMeasurmentsDatabase, DEFAULT_BODYMEASURMENT_ID)) + 1;

  const newBodyMeasurment = Object.assign(bodyMeasurment, {
    id: newBodyMeasurmentId,
    userId: userId,
  });

  await bodyMeasurmentsDatabase.create(newBodyMeasurment);
}

async function updateBodyMeasurment(
  bodyMeasurmentId,
  newBodyMeasurmentData,
  userId
) {
  const updated = await bodyMeasurmentsDatabase.updateOne(
    { id: bodyMeasurmentId, userId: userId },
    newBodyMeasurmentData
  );

  return updated.modifiedCount === 1;
}

async function deleteBodyMeasurment(bodyMeasurmentId, userId) {
  await bodyMeasurmentsDatabase.findOneAndDelete({
    id: bodyMeasurmentId,
    userId: userId,
  });
}

async function getBodyMeasurment(bodyMeasurmentId, userId) {
  return await findRecord(bodyMeasurmentsDatabase, {
    id: bodyMeasurmentId,
    userId: userId,
  });
}

module.exports = {
  getAllBodyMeasurments,
  getBodyMeasurment,
  createBodyMeasurment,
  updateBodyMeasurment,
  deleteBodyMeasurment,
  existBodyMeasurmentWithId,
};
