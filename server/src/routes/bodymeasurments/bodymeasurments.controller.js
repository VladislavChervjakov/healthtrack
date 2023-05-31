const {
  getAllBodyMeasurments,
  getBodyMeasurment,
  createBodyMeasurment,
  existBodyMeasurmentWithId,
  deleteBodyMeasurment,
  updateBodyMeasurment,
} = require("../../models/bodymeasurments/bodymeasurments.model");
const { bodyMeasurmentsValidation } = require("../../services/validation");

async function httpGetAllBodyMeasurments(req, res) {
  const userId = +req.user.id;
  const bodyMeasurments = await getAllBodyMeasurments(userId);

  return res.status(200).json(bodyMeasurments);
}

async function httpGetBodyMeasurment(req, res) {
  const bodyMeasurmentId = +req.params.id;
  const userId = +req.user.id;
  const bodyMeasurment = await getBodyMeasurment(bodyMeasurmentId, userId);

  if (!bodyMeasurment) {
    res.status(404).json({ error: "Body measurment not found" });
  }

  return res.status(200).json(bodyMeasurment);
}

async function httpCreateBodyMeasurment(req, res) {
  const bodyMeasurment = req.body;
  const userId = +req.user.id;

  // Convert to date
  bodyMeasurment.date = new Date(bodyMeasurment.date);

  // Validate bodymeasurments
  const { error } = bodyMeasurmentsValidation(bodyMeasurment);

  if (error) {
    return res.status(400).json(error.details[0].message);
  }

  await createBodyMeasurment(bodyMeasurment, userId);

  return res.status(201).json(bodyMeasurment);
}

async function httpUpdateBodyMeasurment(req, res) {
  const bodyMeasurmentId = +req.params.id;
  const bodyMeasurment = req.body;
  const userId = req.user.id;

  if (!existBodyMeasurmentWithId(bodyMeasurmentId)) {
    return res.status(404).json({ error: "Body measurment not found" });
  }

  // Validate bodymeasurments
  const { error } = bodyMeasurmentsValidation(bodyMeasurment);

  if (error) {
    return res.status(400).json(error.details[0].message);
  }

  const updated = await updateBodyMeasurment(
    bodyMeasurmentId,
    bodyMeasurment,
    userId
  );

  if (!updated) {
    return res.status(400).json({ error: "Body measurment not updated" });
  }

  return res.status(200).json({ ok: true });
}

async function httpDeleteBodyMeasurment(req, res) {
  const bodyMeasurmentId = +req.params.id;
  const userId = +req.user.id;

  if (!existBodyMeasurmentWithId(bodyMeasurmentId)) {
    return res.status(404).json({ error: "Body measurment does not exists" });
  }

  await deleteBodyMeasurment(bodyMeasurmentId, userId);

  return res.status(204);
}

module.exports = {
  httpGetAllBodyMeasurments,
  httpGetBodyMeasurment,
  httpCreateBodyMeasurment,
  httpUpdateBodyMeasurment,
  httpDeleteBodyMeasurment,
};
