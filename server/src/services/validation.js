const Joi = require("joi");

function authValidation(data) {
  const authSchema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    photo: Joi.string(),
    password: Joi.string().min(9).required(),
  });

  return authSchema.validate(data);
}

function loginValidation(data) {
  const loginSchema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(9).required(),
  });

  return loginSchema.validate(data);
}

function sleeprecordsValidation(data) {
  const sleeprecordsSchema = Joi.object({
    name: Joi.string().min(6).required(),
    goToBedDateTime: Joi.date().required(),
    getUpDateTime: Joi.date().required(),
    comment: Joi.string().min(10),
  });

  return sleeprecordsSchema.validate(data);
}

function goalsValidation(data) {
  const goalsSchema = Joi.object({
    name: Joi.string().min(6).required(),
    description: Joi.string().min(6).required(),
    dateFrom: Joi.date().required(),
    dateTo: Joi.date().required(),
    success: Joi.boolean().required(),
  });

  return goalsSchema.validate(data);
}

function bodyMeasurmentsValidation(data) {
  const bodymeasurmentsSchema = Joi.object({
    date: Joi.date().required(),
    weight: Joi.number().required(),
    height: Joi.number().required(),
    temperature: Joi.number().required(),
  });

  return bodymeasurmentsSchema.validate(data);
}

module.exports = {
  authValidation,
  loginValidation,
  sleeprecordsValidation,
  goalsValidation,
  bodyMeasurmentsValidation,
};
