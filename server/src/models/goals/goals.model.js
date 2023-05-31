const {
  findRecord,
  getLatestId,
  existsRecordWithId,
} = require("../../services/query");
const goalsDatabase = require("./goals.mongo");

const DEFAULT_GOAL_ID = 0;

async function getAllGoals(userId) {
  return goalsDatabase
    .find({ userId: userId }, { _id: 0, __v: 0 })
    .sort({ id: 1 });
}

async function getGoal(goalId, userId) {
  return await findRecord(goalsDatabase, { id: goalId, userId: userId });
}

async function existGoalWithId(goalId) {
  return await existsRecordWithId(goalsDatabase, goalId);
}

async function createGoal(goal, userId) {
  const newGoalId = (await getLatestId(goalsDatabase, DEFAULT_GOAL_ID)) + 1;

  const newGoal = Object.assign(goal, { id: newGoalId, userId: userId });

  await goalsDatabase.create(newGoal);
}

async function updateGoal(goalId, newGoalData, userId) {
  const updated = await goalsDatabase.updateOne(
    { id: goalId, userId },
    newGoalData
  );

  return updated.modifiedCount === 1;
}

async function deleteGoal(goalId, userId) {
  await goalsDatabase.findOneAndDelete({ id: goalId, userId: userId });
}

module.exports = {
  getAllGoals,
  getGoal,
  existGoalWithId,
  createGoal,
  updateGoal,
  deleteGoal,
};
