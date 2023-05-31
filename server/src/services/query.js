/** Get latest ID of record */
async function getLatestId(model, defaultId) {
  const latestId = await model.findOne().sort("-id");

  if (!latestId) {
    return defaultId;
  }

  return latestId.id;
}

/** Check if record exists */
async function existsRecordWithId(model, recordId) {
  return await findRecord(model, { id: recordId });
}

/** Get one record */
async function findRecord(model, filter) {
  return await model.findOne(filter);
}

module.exports = {
  getLatestId,
  findRecord,
  existsRecordWithId,
};
