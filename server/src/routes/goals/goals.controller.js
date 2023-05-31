const {
  getAllGoals,
  getGoal,
  createGoal,
  existGoalWithId,
  deleteGoal,
  updateGoal,
} = require("../../models/goals/goals.model");
const { goalsValidation } = require("../../services/validation");

async function httpGetAllGoals(req, res) {
  const userId = +req.user.id;

  const goals = await getAllGoals(userId);
  return res.status(200).json(goals);
}

async function httpGetGoal(req, res) {
  const goalId = +req.params.id;
  const userId = +req.user.id;
  const goal = await getGoal(goalId, userId);

  if (!goal) {
    return res.status(404).json({ error: "Record not found" });
  }

  return res.status(200).json(goal);
}

async function httpCreateGoal(req, res) {
  const goal = req.body;
  const userId = +req.user.id;

  // Convert to date
  goal.dateFrom = new Date(goal.dateFrom);
  goal.dateTo = new Date(goal.dateTo);

  // Validate goals
  const { error } = goalsValidation(goal);

  if (error) {
    return res.status(400).json(error.details[0].message);
  }

  await createGoal(goal, userId);

  return res.status(201).json(goal);
}

async function httpDeleteGoal(req, res) {
  const goalId = +req.params.id;
  const userId = +req.user.id;
  const existsGoal = await existGoalWithId(goalId);

  if (!existsGoal) {
    return res.status(404).json({ error: "Goal not found" });
  }

  await deleteGoal(goalId, userId);

  return res.status(204).json({});
}

async function httpUpdateGoal(req, res) {
  const goalId = +req.params.id;
  const userId = +req.user.id;
  const goalData = req.body;
  const existsGoal = await existGoalWithId(goalId);

  if (!existsGoal) {
    return res.status(404).json({ error: "Goal not found" });
  }

  // Validate goals
  const { error } = goalsValidation(goalData);

  if (error) {
    return res.status(400).json(error.details[0].message);
  }

  const updated = await updateGoal(goalId, goalData, userId);

  if (!updated) {
    return res.status(400).json({ error: "Goal not updated" });
  }

  return res.status(200).json({ ok: true });
}

module.exports = {
  httpGetAllGoals,
  httpGetGoal,
  httpCreateGoal,
  httpDeleteGoal,
  httpUpdateGoal,
};
